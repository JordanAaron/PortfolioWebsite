import { ContentType } from "@/types";
import { HomeContent } from "@/content";

export const getContent = (key: keyof ContentType) => {
  switch (key) {
    case "home":
      return HomeContent;
    // case "projects":
    //   return ProjectsContent;
    // case "about":
    //   return AboutContent;
    // case "blog":
    //   return BlogContent;
    // case "feed":
    //   return FeedContent;
    default:
      throw new Error(`Invalid content type: ${key}`);
  }
};
