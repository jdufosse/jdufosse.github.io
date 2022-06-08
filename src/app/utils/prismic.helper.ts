import * as model from '../types/types';

export class PrismicHelper {
  static GetGeneral(prismicValue: any): model.General {
    const result: model.General = {
      firstName: prismicValue.data?.firstname?.[0]?.text,
      lastName: prismicValue.data?.lastname?.[0]?.text,
      avatarUrl : prismicValue.data?.avatar?.url
      , title:prismicValue.data?.title?.[0]?.text
    };

    console.log('GetGeneral', { prismicValue, result });
    return result;
  }

  static GetThematics(prismicValue: any): model.Thematic[] {
    console.log('GetThematics', { prismicValue });
    const result: model.Thematic[] = [];
    return result;
  }
}
