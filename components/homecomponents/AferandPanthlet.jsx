/* eslint-disable react/no-unescaped-entities */
import classes from "../componentsstyles/AferandPanthlet.module.css";
import Button from "../Button";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function AferandPanthlet() {
  return (
    <section>
      <div className={classes.row}>
        <div className={classes.column}>
          <h2>The Panthart Wallet.</h2>
          <p className={classes.text}>
            We are introducing an option for your next of kin. A wallet that
            will be triggered on auto to send all assets or fragments of assets
            between different address when found inactive after a period of time
            set by its owner. Posses a digital wallet with unique features, and
            experience. It's your identity.
          </p>
          <Button link="/roadmap">
            <span style={{ fontSize: "1.2rem" }}>See Our Roadmap</span>
            <span style={{ position: "relative", top: "6px", left: "5px" }}>
              <HiArrowNarrowRight size={25} />
            </span>
          </Button>
        </div>

        <div className={classes.column}>
          <h2>The Afer Blockchain.</h2>
          <p className={classes.text}>
            Let's research a blockchain ecosystem that is both human and
            environmentally friendly. A blockchain that will not stress us with
            plenty of gas fees. At this point, let's spend valued time on
            carrying out extensive research with blockchain enthusiasts.
          </p>
          <Button link="/aferblockchain">
            <span style={{ fontSize: "1.2rem" }}>Learn More</span>
            <span style={{ position: "relative", top: "6px", left: "5px" }}>
              <HiArrowNarrowRight size={25} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
