import {
  AboutContentType,
  BlogContentType,
  FeedContentType,
  HomeContentType,
  ProjectsContentType,
} from "./content";

export type View = "home" | "projects" | "about" | "blog" | "feed";

export type ContentType = {
  home: HomeContentType;
  projects: ProjectsContentType;
  about: AboutContentType;
  blog: BlogContentType;
  feed: FeedContentType;
};
