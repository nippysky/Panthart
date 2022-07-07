import OtherPagesHeader from "../components/OtherPagesHeader";
import classes from "../styles/pages/AboutUs.module.css";
import { vawulEnt } from "../data/contents";
import BlockchainAfer from "../components/aferblockchain/BlockchainAfer";
import Head from "next/head";

function createSection(div) {
  return (
    <BlockchainAfer
      key={div.id}
      title={div.title}
      desOne={div.desOne}
      desTwo={div.desTwo}
    />
  );
}

export default function VawulEnt() {
  return (
    <section>
      <Head>
        <title>Panthart | VawulEnt</title>
        <meta
          name="description"
          content="VawulEnt, is our Media House. It will cover everything media for us. Content Creation, Blogging, Vlogging, and all round media."
        />
      </Head>
      <OtherPagesHeader imageURL="/images/vawulent/VawulEnt.svg" />
      <div>
        <p className={classes.headText}>
          The name VawulEnt, is gotten from the combination of Vawulence and
          Entertainment. A true comrade should know this in a glance. VawulEnt,
          is our Media House. It will cover everything media for us. Content
          Creation, Blogging, Vlogging, and all round media.
        </p>
      </div>
      {vawulEnt.map(createSection)}
    </section>
  );
}
