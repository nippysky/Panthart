import OtherPagesHeader from "../components/OtherPagesHeader";
import classes from "../styles/pages/AboutUs.module.css";
import { marketPlaceDetails } from "../data/contents";
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

export default function MarketPlace() {
  return (
    <section>
      <Head>
        <title>Panthart | Our MarketPlace</title>
        <meta
          name="description"
          content="Our very own unique marketplace for creators and curators."
        />
      </Head>
      <OtherPagesHeader imageURL="/images/marketplace/MarketPlace.svg" />
      <div>
        <p className={classes.headText}>
          Having our own marketplace, was the foundation and beginning of
          Panthart. A space where we showcase our artworks with a million
          stories to tell. Full of our rich culture and history, also mixed with
          our modern and contemporary lifestyle. Our uniqueness is branding and
          creativity is depicted into our marketplace, from the design to the
          experience. Every user becomes an artist in their own self. Whether
          you are creating or curating.
        </p>
      </div>
      {marketPlaceDetails.map(createSection)}
    </section>
  );
}
