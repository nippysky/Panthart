import OtherPagesHeader from "../components/OtherPagesHeader";
import classes from "../styles/pages/AboutUs.module.css";
import { aferDetails } from "../data/contents";
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

export default function AferBlock() {
  return (
    <section>
      <Head>
        <title>Panthart | Afer Blockchain</title>
        <meta
          name="description"
          content="The Afer Blockchain will be semi-regulated and semi-decentralized. A blockchain with smarter contracts that will benefit both the people and the government."
        />
      </Head>
      <OtherPagesHeader imageURL="/images/afer/Afer-Blockchain.svg" />
      <div>
        <p className={classes.headText}>
          We are still very much early in the blockchain space and there is
          enough room for improvement in the technology. It cannot be the end
          with the little we have done in the space already. We can and should
          still research on more ways to make the blockchain experience
          seamless.<br></br> Building a blockchain of our own is our future
          goal, and end to new beginning. We have started with research on how
          to make blockchain more enjoyable and usable.
        </p>
      </div>
      {aferDetails.map(createSection)}
    </section>
  );
}
