declare type Data = {
  general: General;
  thematics: Thematic[];
};

declare type General =
  | {
      firstName: string;
      lastName: string;
      title?: string;
      avatar?: Image;
      aboutMe?: string;
      pageIcon?: Image;
      pageTitle?: string;
      languages?: Language[];
    }
  | undefined;

declare type Thematic =
  | {
      uid: string;
      title: string;
      icon: string;
      formations?: Formation[];
      experiences?: Experience[];
      skills?: Skill[];
      hobbies?: Hobby[];
    }
  | undefined;

declare type Formation =
  | {
      title: string;
      description?: string;
      from: string;
      to?: string;
    }
  | undefined;

declare type Experience =
  | (ItemBase & {
      from: string;
      to?: string;
      description?: string;
      image?: string;
      missions?: Mission[];
    })
  | undefined;

declare type Mission =
  | (ItemBase & {
      'short-description'?: string;
      description?: string;
      skills?: Skill[];
    })
  | undefined;

declare type Skill =
  | (ItemBase & {
      score?: number;
      skills?: Skill[];
    })
  | undefined;

declare type Hobby =
  | {
      title: string;
      image: string;
    }
  | undefined;

declare type Language =
  | {
      uid: string;
      name: string;
      code: string;
      icon?: Image;
    }
  | undefined;

declare type Image =
  | {
      url: string;
      alt: string;
    }
  | undefined;

declare type ItemBase = {
  uid: string;
  title: string;
};

export {
  Data,
  Image,
  Language,
  General,
  Thematic,
  Formation,
  Experience,
  Mission,
  Skill,
  Hobby,
};
