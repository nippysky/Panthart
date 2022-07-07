/* eslint-disable react/no-unescaped-entities */
import classes from "../styles/pages/RoadMap.module.css";
import OtherPagesHeader from "../components/OtherPagesHeader";
import Image from "next/image";
import { useState } from "react";
import { roadMap } from "../data/contents";
import Head from "next/head";

export default function RoadMap() {
  const [accordion, setActiveAccordion] = useState(0);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <section>
      <Head>
        <title>Panthart | Roadmap</title>
        <meta
          name="description"
          content="Panthart ensures an amazing adventure. Follow us through our roadmap. Join us to cancel our accomplished targets."
        />
      </Head>
      <OtherPagesHeader imageURL="/images/roadmap/Roadmap.svg" />
      <div>
        <p className={classes.headText}>
          Follow us through our roadmap. Join us to cancel our accomplished
          targets. Basically, any target we meet and successfully accomplish, we
          cross it out with a line. Below are the roadmaps, step by step in
          executing order, with details below them.
        </p>
      </div>
      <div className={classes.RoadOneDiv}>
        <h2>Road One.</h2>
        <p>
          After the completion of Road one, we will update it with Road Two, and
          so on going forward, so as not to make the website long and boring.
          Rest assured that we have amazing things lined up for you. Let's
          begin.
        </p>
      </div>

      <div className={classes.accordionFaq}>
        {roadMap.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div className={classes.accordionFaqHeading}>
              <h3
                style={
                  item.isDone === true
                    ? { textDecoration: "line-through", color: "red" }
                    : null
                }
                className={accordion === index ? classes.active : null}
              >
                {item.plan}
              </h3>
              <div>
                {accordion === index ? (
                  <div className={classes.imgIcon}>
                    <Image
                      src="/images/Arrow-Up.svg"
                      alt="Collapse"
                      width={15}
                      height={15}
                    />
                  </div>
                ) : (
                  <div className={classes.imgIcon}>
                    <Image
                      src="/images/Arrow-Down.svg"
                      alt="Collapse"
                      width={15}
                      height={15}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <p
                className={
                  accordion === index ? classes.active : classes.inactive
                }
              >
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
