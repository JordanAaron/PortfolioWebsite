import { useEffect, useState } from "react";
import { Navigation, Section } from "@/components";
import { View } from "@/types";

import styles from "./App.module.scss";

function App() {
  const [view, setView] = useState<View>("home");
  const [buttonClicked, setButtonClicked] = useState("");
  const [xMove, setXMove] = useState(0);
  const [yMove, setYMove] = useState(0);

  useEffect(() => {
    if (buttonClicked === "up") {
      setYMove(yMove + 100);
    } else if (buttonClicked === "down") {
      setYMove(yMove - 100);
    } else if (buttonClicked === "left") {
      setXMove(xMove + 100);
    } else if (buttonClicked === "right") {
      setXMove(xMove - 100);
    }
  }, [view]);

  return (
    <div className={styles.app}>
      <Navigation
        view={view}
        setView={setView}
        setButtonClicked={setButtonClicked}
      />
      <main className={styles.container}>
        <Section xPos={0} yPos={0} moveX={xMove} moveY={yMove}>
          Home
        </Section>
        <Section xPos={100} yPos={0} moveX={xMove} moveY={yMove}>
          Blog
        </Section>
        <Section xPos={0} yPos={100} moveX={xMove} moveY={yMove}>
          Projects
        </Section>
        <Section xPos={-100} yPos={0} moveX={xMove} moveY={yMove}>
          About
        </Section>
        <Section xPos={0} yPos={-100} moveX={xMove} moveY={yMove}>
          Feed
        </Section>
      </main>
    </div>
  );
}

export default App;

/**
 * Home, About, Projects, Social Feed, Blog
 * Github, LinkedIn, Email, Resume
 */
