declare type General =
  | {
      firstName: string;
      lastName: string;
      title?: string;
      avatarUrl?: string;
    }
  | undefined;

declare type Thematic =
  | {
      title: string;
      anchor: string;
      formations: Formation[];
      experiences: Experience[];
      skills: Skill[];
      hobbies: Hobby[];
    }
  | undefined;

declare type PrismicItem = {
  uid?: string;
  isLoaded?: boolean;
  type: string;
};

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

export { General, Thematic, Formation, Experience, Mission, Skill, Hobby };
