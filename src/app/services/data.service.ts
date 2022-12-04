import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as prismic from '@prismicio/client';
import * as model from '../types/prismic';
import { PrismicHelper } from '../utils/prismic.helper';
import { Languages } from '../utils/languages';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: { [id: string]: model.PrismicData } = {};
  private _dataCallbacks: ((data: {
    [id: string]: model.PrismicData;
  }) => void)[] = [];

  constructor(private httpClient: HttpClient) {
    console.log('DataService-ngOnInit');
    const endpoint = prismic.getEndpoint('jdufosse');
    const client = prismic.createClient(endpoint, {
      accessToken:
        'MC5ZcC0takJFQUFDQUF5Y2lX.77-977-977-977-9bwDvv73vv73vv73vv73vv70CP--_ve-_ve-_vSwMA--_vSHvv73vv71a77-977-977-977-9Ru-_vWVy',
    });

    this.init(client);
  }

  public getGeneral(language: Languages): model.General {
    const general = this._data[language]?.general;
    console.log('dataService - getGeneral', general);
    return general;
  }

  public getThematics(language: Languages): model.Thematic[] {
    return this._data[language]?.thematics;
  }

  public subscribeDataLoaded(
    callback: (data: { [id: string]: model.PrismicData }) => void
  ): void {
    if (callback) {
      this._dataCallbacks.push(callback);
    }
  }

  public unsubscribeDataLoaded(
    callback: (data: { [id: string]: model.PrismicData }) => void
  ): void {
    if (callback) {
      this._dataCallbacks = this._dataCallbacks.filter((c) => c !== callback);
    }
  }

  private async init(client: prismic.Client): Promise<void> {
    const loadDataPromises: Promise<void>[] = Object.values(Languages).map(
      async (value) => {
        await this.LoadDataByLanguage(client, value);
      }
    );

    await Promise.all(loadDataPromises);

    console.log('init - Promise all finished');
    this._dataCallbacks.forEach((callback) => {
      if (callback) {
        callback(this._data);
      }
    });
  }

  private async LoadDataByLanguage(
    client: prismic.Client,
    language: string
  ): Promise<void> {
    const common = await client.getByUID<any>('common', 'common', {
      lang: language,
    });
    let commonModel: model.General = undefined;
    if (common) {
      commonModel = PrismicHelper.GetGeneral(common);
    }

    const skills = await client.getAllByType<any>('skills', {
      lang: language,
    });
    const experiences = await client.getAllByType<any>('experience', {
      lang: language,
    });
    const missions = await client.getAllByType<any>('mission', {
      lang: language,
    });

    const skillModels = PrismicHelper.GetSkills(skills);
    const missionModels = PrismicHelper.GetMissions(missions, skillModels);
    const experienceModels = PrismicHelper.GetExperiences(
      experiences,
      missionModels
    );

    console.log('init', { skills, experiences, missions });

    const thematics = await client.getByUID<any>('thematics', 'thematics', {
      fetchLinks: `thematics.skills`,
      lang: language,
    });
    let thematicsModel: model.Thematic[] = [];
    if (thematics) {
      thematicsModel = PrismicHelper.GetThematics(thematics);

      if (thematicsModel) {
        console.log('init', { thematics: thematicsModel });

        await Promise.all(
          thematicsModel.map(async (thematicModel) => {
            console.log('init-thematics', { thematicModel });
            if (thematicModel) {
              if (thematicModel.experiences) {
                thematicModel.experiences = thematicModel.experiences.map(
                  (experience: model.Experience) => {
                    return experienceModels.find(
                      (em) => em?.uid == experience?.uid
                    );
                  }
                );
              }
              if (thematicModel.skills) {
                thematicModel.skills = thematicModel.skills.map(
                  (skill: model.Skill) => {
                    return skillModels.find((s) => s?.uid == skill?.uid);
                  }
                );
              }
            }
          })
        );
      }
    }

    if (commonModel && thematicsModel) {
      this._data[language] = {
        general: commonModel,
        thematics: thematicsModel,
      };
    }
  }
}
