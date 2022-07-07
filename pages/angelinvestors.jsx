import OtherPagesHeader from "../components/OtherPagesHeader";
import classes from "../styles/pages/AboutUs.module.css";
import { tAndSum } from "../data/contents";
import TandSum from "../components/angelinvestorcomponents/TandSum";
import Head from "next/head";

function createSection(div) {
  return (
    <TandSum
      key={div.id}
      title={div.title}
      desOne={div.desOne}
      desTwo={div.desTwo}
      link={div.link}
      linkText={div.linkText}
    />
  );
}

export default function AngelInvestors() {
  return (
    <section>
      <Head>
        <title>Panthart | Angel Investors</title>
      </Head>
      <OtherPagesHeader imageURL="/images/angelinvestors/Angel-Investors.svg" />
      <div>
        <p className={classes.headText}>
          Our angel investors are part of the forerunners for Panthart. Their
          support is will aid in kicking out our activities, projects, and
          canceling out our roadmap checklist one after the day. We also show
          our appreciation to our angel investors. They are never to be
          forgotten as time unfolds. Below are what it entails to be part of our
          angel investor list.
        </p>
      </div>
      {tAndSum.map(createSection)}
    </section>
  );
}
