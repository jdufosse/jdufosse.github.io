declare type PrismicItem = {
  uid?: string;
  isLoaded?: boolean;
};

declare type PrismicImage = {
  url?: string;
  alt?: string;
};

declare type AvailableLanguage = PrismicItem & {
  name?: string;
  code?: string;
  icon?: PrismicImage;
};

declare type General =
  | {
      firstName: string;
      lastName: string;
      title?: string;
      avatar?: PrismicImage;
      aboutMe?: string;
      pageIcon?: PrismicImage;
      pageTitle?: string;
      languages?: AvailableLanguage[];
    }
  | undefined;

declare type Thematic =
  | {
      title: string;
      anchor: string;
      icon: string;
      formations: Formation[];
      experiences: Experience[];
      skills: Skill[];
      hobbies: Hobby[];
    }
  | undefined;

declare type Formation =
  | {
      title: string;
      from: string;
      to?: string;
      description: string;
    }
  | undefined;

declare type Experience =
  | (PrismicItem & {
      title: string;
      from: string;
      to?: string;
      description: string;
      image?: string;
      missions: Mission[];
    })
  | undefined;

declare type Mission =
  | (PrismicItem & {
      title: string;
      'short-description': string;
      description: string;
      skills: Skill[];
    })
  | undefined;

declare type Skill =
  | (PrismicItem & {
      title: string;
      score?: number;
      skills?: Skill[];
    })
  | undefined;

declare type Hobby =
  | {
      title: string;
      image?: string;
    }
  | undefined;

declare type PrismicData = {
  general: General;
  thematics: Thematic[];
};

export {
  PrismicData,
  PrismicImage,
  AvailableLanguage,
  General,
  Thematic,
  Formation,
  Experience,
  Mission,
  Skill,
  Hobby,
};
