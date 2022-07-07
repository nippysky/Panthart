import Image from "next/image";
import classes from "../styles/pages/404.module.css";
import Head from "next/head";
import Button from "../components/Button";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Error() {
  return (
    <div className={classes.mainDiv}>
      <Head>
        <title>Panthart | Page Not Found</title>
      </Head>
      <h1>Comrade, Are You Lost?</h1>
      <p className={classes.text}>
        This page was not found. Kindly navaigate away from here ASAP
      </p>
      <div>
        <Button link="/">
          <span style={{ fontSize: "1.2rem" }}>Go Back To Home</span>
          <span style={{ position: "relative", top: "6px", left: "5px" }}>
            <HiArrowNarrowRight size={25} />
          </span>
        </Button>
      </div>
      <div className={classes.img}>
        <Image
          src="/images/Panthart-404.jpg"
          alt="Panthart Page Not Found"
          width={1500}
          height={1000}
        />
      </div>
    </div>
  );
}
