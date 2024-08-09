type SectionContentType = {
  title?: string;
  description?: string;
};

export interface HomeContentType extends SectionContentType {
  intro: string;
}

export interface ProjectsContentType extends SectionContentType {
  projects: string[];
}

export interface AboutContentType extends SectionContentType {
  hobbies: string[];
}

export interface BlogContentType extends SectionContentType {
  posts: string[];
}

export interface FeedContentType extends SectionContentType {
  feed: string[];
}
