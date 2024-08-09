import { getContent } from "@/services/contentService";

import styles from "./HomeSection.module.scss";

export const HomeSection = () => {
  const { intro, description } = getContent("home");

  return (
    <div className={styles.container}>
      <p>{intro}</p>
      <p>{description}</p>
    </div>
  );
};
