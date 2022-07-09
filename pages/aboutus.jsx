/* eslint-disable react/no-unescaped-entities */
import OtherPagesHeader from "../components/OtherPagesHeader";
import classes from "../styles/pages/AboutUs.module.css";
import TitleAndDes from "../components/aboutuscomponents/TitleAndDes";
import { aboutTitleAndDes } from "../data/contents";
import FoundingTeam from "../components/aboutuscomponents/FoundingTeam";
import Head from "next/head";

function createSection(div) {
  return (
    <TitleAndDes
      key={div.id}
      title={div.title}
      italic={div.italic}
      desOne={div.desOne}
      desTwo={div.desTwo}
      link={div.link}
      linkText={div.linkText}
    />
  );
}

export default function AboutUs() {
  return (
    <section>
      <Head>
        <title>Panthart | Who We Are</title>
      </Head>
      <OtherPagesHeader imageURL="/images/aboutus/Who-We-Are.svg" />
      <div>
        <p className={classes.headText}>
          Panthart is Africa's first Non-Fungible Token Agency. A group of
          creative and innovative minds, bringing you into the world of
          blockchain technology. We Promote 'Made By Afer'.
        </p>
      </div>

      <div className={classes.vmRow}>
        <div className={classes.vmColumn}>
          <h3>Vision</h3>
          <p className={classes.vmText}>
            To be the biggest NFT agency in the world, and a conglomerate of
            'Made By Afer' projects.
          </p>
        </div>
        <div className={classes.vmColumn}>
          <h3>Mission</h3>
          <p className={classes.vmText}>
            We strive to offer original projects and services that are 'Made By
            Afer', on the global stage.
          </p>
        </div>
      </div>
      {aboutTitleAndDes.map(createSection)}
      <FoundingTeam />
    </section>
  );
}
