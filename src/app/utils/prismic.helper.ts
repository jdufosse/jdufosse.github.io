import * as model from '../types/prismic';

export class PrismicHelper {
  static GetGeneral(
    prismicValue: any,
    languages: model.AvailableLanguage[]
  ): model.General {
    if (!prismicValue.data) {
      return undefined;
    }
    const result: model.General = {
      firstName: PrismicHelper.getText(prismicValue.data.firstname),
      lastName: PrismicHelper.getText(prismicValue.data.lastname),
      avatar: {
        alt: PrismicHelper.getText(prismicValue.data.avatar?.alt),
        url: PrismicHelper.getText(prismicValue.data.avatar?.url),
      },
      pageIcon: {
        alt: PrismicHelper.getText(prismicValue.data.page_icon?.alt),
        url: PrismicHelper.getText(prismicValue.data.page_icon?.url),
      },
      pageTitle: PrismicHelper.getText(prismicValue.data.page_title),
      title: PrismicHelper.getText(prismicValue.data.title),
      languages: [],
    };

    if (prismicValue.data.languages) {
      prismicValue.data.languages.forEach((language: any) => {
        console.log('GetGeneral - languages', {language})
        const languageModel = languages.find((l) => language.language.uid === l.uid);
        if (languageModel) {
          result.languages?.push(languageModel);
        }
      });
    }

    console.log('GetGeneral', { prismicValue, result });
    return result;
  }

  static GetLanguages(prismicValues: any): model.AvailableLanguage[] {
    const languages: model.AvailableLanguage[] = prismicValues.map(
      (prismicValue: any) => {
        return this.createLanguage(prismicValue) ?? undefined;
      }
    );

    console.log('GetLanguages', { prismicValues, languages });
    return languages;
  }

  static GetThematics(prismicValue: any): model.Thematic[] {
    const result: model.Thematic[] = prismicValue?.data?.body?.map(
      (thematicData: any) => {
        const title = PrismicHelper.getText(thematicData.primary.title);
        const anchor = thematicData.primary.anchor;
        const icon = thematicData.primary.icon;
        const thematic: model.Thematic = {
          title,
          anchor,
          icon,
          formations: [],
          experiences: [],
          skills: [],
          hobbies: [],
        };

        switch (thematicData.slice_type) {
          case 'cursus':
            thematic.formations = thematicData.items.map((item: any) => {
              const formation = this.createFormation(item);
              if (formation) {
                return formation;
              }
              return;
            });
            break;

          case 'experiences':
            thematic.experiences = thematicData.items.map((item: any) => {
              const experience: model.Experience = this.createExperience(
                item.experience
              );
              if (experience) {
                return experience;
              }
              return;
            });
            break;

          case 'skills':
            thematic.skills = thematicData.items.map((item: any) => {
              const skill: model.Skill = this.createSkill(item.skill);
              if (skill) {
                return skill;
              }
              return;
            });
            break;

          case 'hobbies':
            thematic.hobbies = thematicData.items.map((item: any) => {
              const hobby: model.Hobby = this.createHobby(item);
              if (hobby) {
                return hobby;
              }
              return;
            });
            break;

          default:
            break;
        }
        return thematic;
      }
    );

    console.log('GetThematics', { prismicValue, result });
    return result;
  }

  static GetExperiences(
    prismicValues: any,
    missions: model.Mission[]
  ): model.Experience[] {
    const experiences: model.Experience[] = prismicValues.map(
      (prismicValue: any) => {
        return this.createExperience(prismicValue) ?? undefined;
      }
    );

    prismicValues.forEach((prismicValue: any) => {
      const experience = experiences.find((m) => m?.uid == prismicValue.uid);
      if (experience && prismicValue.data.missions?.length > 0) {
        experience.missions = prismicValue.data.missions.map((m: any) => {
          return missions.find((m2) => m2?.uid == m.mission.uid);
        });
      }
    });

    console.log('GetExperiences', { prismicValues, experiences });

    return experiences;
  }

  static GetMissions(
    prismicValues: any,
    skills: model.Skill[]
  ): model.Mission[] {
    const missions: model.Mission[] = prismicValues.map((prismicValue: any) => {
      return PrismicHelper.createMission(prismicValue) ?? undefined;
    });

    prismicValues.forEach((prismicValue: any) => {
      const mission = missions.find((m) => m?.uid == prismicValue.uid);
      if (mission && prismicValue.data.skills?.length > 0) {
        mission.skills = prismicValue.data.skills.map((s: any) => {
          return skills.find((s2) => s2?.uid == s.skill.uid);
        });
      }
    });

    console.log('GetMissions', { prismicValues, missions });

    return missions;
  }

  static GetSkills(prismicValues: any): model.Skill[] {
    const skills: model.Skill[] = prismicValues.map((prismicValue: any) => {
      return this.createSkill(prismicValue) ?? undefined;
    });

    prismicValues.forEach((prismicValue: any) => {
      const skill = skills.find((s) => s?.uid == prismicValue.uid);
      if (skill && prismicValue.data.skills?.length > 0) {
        skill.skills = prismicValue.data.skills.map((s: any) => {
          return skills.find((s2) => s2?.uid == s.skill.uid);
        });
      }
    });

    console.log('GetSkills', { prismicValues, skills });
    return skills;
  }

  private static createLanguage(languageData: any): model.AvailableLanguage {
    const name = PrismicHelper.getText(languageData.data?.name);
    const alt = PrismicHelper.getText(languageData.data?.icon?.alt);
    const url = PrismicHelper.getText(languageData.data?.icon?.url);

    return {
      uid: languageData.uid,
      icon: {
        alt,
        url,
      },
      code: languageData.lang,
      name,
      isLoaded: !!name,
    };
  }

  private static createFormation(formationData: any): model.Formation {
    const description = PrismicHelper.getText(formationData.description);
    const title = PrismicHelper.getText(formationData.title);
    const from = formationData.start_year;
    const to = formationData.end_year;

    return { title, from, description, to };
  }

  private static createExperience(experienceData: any): model.Experience {
    const description = PrismicHelper.getText(experienceData.data?.description);
    const title = PrismicHelper.getText(experienceData.data?.title);
    const from = experienceData.data?.start_date;
    const to = experienceData.data?.end_date;
    const missions =
      experienceData.data?.missions?.map((item: any) => {
        if (item.mission) {
          return PrismicHelper.createMission(item.mission);
        }
        return;
      }) ?? [];

    return {
      uid: experienceData.uid,
      title,
      description,
      from,
      to,
      missions: [],
      isLoaded: !!title,
    };
  }

  private static createMission(experienceData: any): model.Mission {
    const description = PrismicHelper.getText(experienceData.data?.description);
    const title = PrismicHelper.getText(experienceData.data?.title);

    return {
      uid: experienceData.uid,
      title,
      description,
      'short-description': '',
      skills: [],
      isLoaded: !!title,
    };
  }

  private static createSkill(skillData: any): model.Skill {
    const title = PrismicHelper.getText(skillData.data?.title);
    const score = skillData.data?.score / 2;

    return {
      uid: skillData.uid,
      title: title,
      score,
      isLoaded: !!title,
    };
  }

  private static createHobby(formationData: any): model.Hobby {
    const image = formationData.image.url;
    const title = PrismicHelper.getText(formationData.title);

    return { title, image };
  }

  private static getText(source: any): string {
    if (typeof source === 'string') {
      return source;
    } else if (Array.isArray(source) && source.length > 0) {
      return source[0]?.text as string;
    }
    return '';
  }
}
