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

    const nextView = viewMap[view][button];
    if (nextView) {
      setView(nextView);
    }
    setButtonClicked(button);
  };

  switch (view) {
    case "feed":
      return (
        <button
          className={`${styles.down} ${styles.button}`}
          onClick={() => handleClick("down")}
        >
          <p>Home</p>
          <ChevronDown />
        </button>
      );

    case "blog":
      return (
        <button
          className={`${styles.left} ${styles.button}`}
          onClick={() => handleClick("left")}
        >
          <ChevronLeft />
          <p>Home</p>
        </button>
      );

    case "projects":
      return (
        <button
          className={`${styles.up} ${styles.button}`}
          onClick={() => handleClick("up")}
        >
          <p>Home</p>
          <ChevronUp />
        </button>
      );

    case "about":
      return (
        <button
          className={`${styles.right} ${styles.button}`}
          onClick={() => handleClick("right")}
        >
          <p>Home</p>
          <ChevronRight />
        </button>
      );
    default:
      return (
        <>
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
        </>
      );
  }
};
