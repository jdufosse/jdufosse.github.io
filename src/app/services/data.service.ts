import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as prismic from '@prismicio/client';
import * as model from '../types/prismic';
import { PrismicHelper } from '../utils/prismic.helper';
import { Languages } from '../utils/languages';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: { [id: string]: model.PrismicData } = {};
  private _dataCallbacks: ((data: model.PrismicData) => void)[] = [];
  private _language: Languages = Languages.FRENCH;

  constructor(private httpClient: HttpClient) {
    console.log('DataService-ngOnInit');
    const endpoint = prismic.getEndpoint(environment.prismic.endPoint);
    const client = prismic.createClient(endpoint, {
      accessToken: environment.prismic.accesToken,
    });

    this.init(client);
  }

  public getLanguage(): Languages {
    return this._language;
  }

  public setLanguage(language: Languages): void {
    if (this._language !== language) {
      this._language = language;
      this.raiseDataLoaded();
    }
  }

  public getGeneral(): model.General {
    return this._data[this._language]?.general;
  }

  public getThematics(): model.Thematic[] {
    return this._data[this._language]?.thematics;
  }

  public subscribeDataLoaded(
    callback: (data: model.PrismicData) => void
  ): void {
    if (callback) {
      this._dataCallbacks.push(callback);
    }
  }

  public unsubscribeDataLoaded(
    callback: (data: model.PrismicData) => void
  ): void {
    if (callback) {
      this._dataCallbacks = this._dataCallbacks.filter((c) => c !== callback);
    }
  }

  private raiseDataLoaded(): void {
    this._dataCallbacks.forEach((callback) => {
      if (callback) {
        callback(this._data[this._language]);
      }
    });
  }

  private async init(client: prismic.Client): Promise<void> {
    const loadDataPromises: Promise<void>[] = Object.values(Languages).map(
      async (value) => {
        await this.LoadDataByLanguage(client, value);
      }
    );

    await Promise.all(loadDataPromises);

    console.log('init - Promise all finished');
    this.raiseDataLoaded();
  }

  private async LoadDataByLanguage(
    client: prismic.Client,
    language: string
  ): Promise<void> {
    // Do request to prismic
    const languages = await client.getAllByType<any>('availablelanguage', {
      lang: language,
    });
    const common = await client.getByUID<any>('common', 'common', {
      lang: language,
    });
    const skills = await client.getAllByType<any>('skills', {
      lang: language,
    });
    const experiences = await client.getAllByType<any>('experience', {
      lang: language,
    });
    const missions = await client.getAllByType<any>('mission', {
      lang: language,
    });

    const languageModels = PrismicHelper.GetLanguages(languages);
    const commonModel = PrismicHelper.GetGeneral(common, languageModels);
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
