import OtherPagesHeader from "../components/OtherPagesHeader";
import classes from "../styles/pages/AboutUs.module.css";
import { lifestyleDetails } from "../data/contents";
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

export default function Lifestyle() {
  return (
    <section>
      <Head>
        <title>Panthart | Our Lifestyle</title>
        <meta
          name="description"
          content="Wakanda as the movie goes, might be fictional, but is a glimpse of how rich our way of life is. We want to merge our past life, the life of our ancestors with our present life, the one we are living now."
        />
      </Head>
      <OtherPagesHeader imageURL="/images/lifestyle/Lifestyle.svg" />
      <div>
        <p className={classes.headText}>
          Our music is food to the, Our fashion is unique, Our culture and
          tradition is rich, Our lifestyle is freedom, Our roots are deep
          rooted. Let the world have more view of our lifestyle.
        </p>
      </div>
      {lifestyleDetails.map(createSection)}
    </section>
  );
}
