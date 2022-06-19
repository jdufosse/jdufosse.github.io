import * as model from '../types/types';

export class PrismicHelper {
  static GetGeneral(prismicValue: any): model.General {
    const result: model.General = {
      firstName: PrismicHelper.getText(prismicValue.data?.firstname),
      lastName: PrismicHelper.getText(prismicValue.data?.lastname),
      avatarUrl: PrismicHelper.getText(prismicValue.data?.avatar?.url),
      title: PrismicHelper.getText(prismicValue.data?.title),
    };

    console.log('GetGeneral', { prismicValue, result });
    return result;
  }

  static GetThematics(prismicValue: any): model.Thematic[] {
    console.log('GetThematics', { prismicValue });

    const result: model.Thematic[] = prismicValue?.data?.body?.map(
      (thematicData: any) => {
        const title = PrismicHelper.getText(thematicData.primary.title);
        const anchor = thematicData.primary.anchor;
        const thematic: model.Thematic = {
          title,
          anchor,
          formations: [],
          experiences: [],
          skills: [],
          hobbies: [],
        };

        switch (thematicData.slice_type) {
          case 'cursus':
            thematicData.items.map((item: any) => {
              const formation = this.createFormation(item);
              if (formation) {
                thematic.formations.push(formation);
              }
            });
            break;

          case 'experiences':
            thematicData.items.map((item: any) => {
              const experience: model.Experience = this.createExperience(item);
              if (experience) {
                thematic.experiences.push(experience);
              }
            });
            break;

          case 'skills':
            thematicData.items.map((item: any) => {
              const skill: model.Skill = this.createSkill(item.skill);
              if (skill) {
                thematic.skills.push(skill);
              }
            });
            break;

          case 'hobbies':
            thematicData.items.map((item: any) => {
              const hobby: model.Hobby = this.createHobby(item);
              if (hobby) {
                thematic.hobbies.push(hobby);
              }
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

  private static createFormation(formationData: any): model.Formation {
    const description = PrismicHelper.getText(formationData.description);
    const title = PrismicHelper.getText(formationData.title);
    const from = formationData.start_date;
    const to = formationData.end_date;

    return { title, from, description, to };
  }

  private static createExperience(experienceData: any): model.Experience {
    const description = PrismicHelper.getText(experienceData.description);
    const title = PrismicHelper.getText(experienceData.title);
    const from = experienceData.start_date;
    const to = experienceData.end_date;

    return {
      title,
      description,
      from,
      to,
      missions: [],
      isLoaded: false,
      type: 'experience',
    };
  }

  private static createSkill(skillData: any): model.Skill {
    return {
      uid: skillData.uid,
      title: PrismicHelper.getText(skillData.title) ?? '',
      score: skillData.score,
      isLoaded: false,
      type: 'skills',
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
