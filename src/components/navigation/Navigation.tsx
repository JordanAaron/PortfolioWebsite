import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

import { View } from "@/types";

import styles from "./Navigation.module.scss";

interface NavigationProps {
  view: View;
  setView: (view: View) => void;
  setButtonClicked: (button: string) => void;
}

// TODO: Add tooltips

export const Navigation = ({
  view,
  setView,
  setButtonClicked,
}: NavigationProps): JSX.Element => {
  const handleClick = (button: string) => {
    const viewMap: Record<View, Record<string, View>> = {
      home: {
        up: "feed",
        down: "projects",
        left: "about",
        right: "blog",
      },
      about: {
        right: "home",
      },
      projects: {
        up: "home",
      },
      feed: {
        down: "home",
      },
      blog: {
        left: "home",
      },
    };

    setButtonClicked(button);

    const nextView = viewMap[view][button];
    if (nextView) {
      setView(nextView);
    }
  };

  switch (view) {
    case "feed":
      return (
        <nav className={styles.container}>
          <button
            className={`${styles.down} ${styles.button}`}
            onClick={() => handleClick("down")}
          >
            <p>Home</p>
            <ChevronDown />
          </button>
        </nav>
      );

    case "blog":
      return (
        <nav className={styles.container}>
          <button
            className={`${styles.left} ${styles.button}`}
            onClick={() => handleClick("left")}
          >
            <ChevronLeft />
            <p>Home</p>
          </button>
        </nav>
      );
    case "projects":
      return (
        <nav className={styles.container}>
          <button
            className={`${styles.up} ${styles.button}`}
            onClick={() => handleClick("up")}
          >
            <ChevronUp />
            <p>Home</p>
          </button>
        </nav>
      );
    case "about":
      return (
        <nav className={styles.container}>
          <button
            className={`${styles.right} ${styles.button}`}
            onClick={() => handleClick("right")}
          >
            <p>Home</p>
            <ChevronRight />
          </button>
        </nav>
      );
    default:
      return (
        <nav className={styles.container}>
          <button
            className={`${styles.up} ${styles.button}`}
            onClick={() => handleClick("up")}
          >
            <ChevronUp />
            <p>Social Feed</p>
          </button>
          <button
            className={`${styles.down} ${styles.button}`}
            onClick={() => handleClick("down")}
          >
            <p>Projects</p>
            <ChevronDown />
          </button>
          <button
            className={`${styles.left} ${styles.button}`}
            onClick={() => handleClick("left")}
          >
            <ChevronLeft />
            <p>About</p>
          </button>
          <button
            className={`${styles.right} ${styles.button}`}
            onClick={() => handleClick("right")}
          >
            <p>Blog</p>
            <ChevronRight />
          </button>
        </nav>
      );
  }
};
