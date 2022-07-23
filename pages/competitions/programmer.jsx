/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import classes from "./Styles/Competitions.module.css";
import Head from "next/head";

export default function Programmer() {
  return (
    <section className={classes.section}>
      <Head>
        <title>Panthart | Competitions - Programmer</title>
      </Head>
      <div>
        <Image
          src="/images/competitions/Programmer.jpg"
          alt="Programmer"
          height={620}
          width={930}
          priority
        />
      </div>

      <div className={classes.compDetails}>
        <h2>Details.</h2>
        <p className={classes.compText}>
          This competiton is open to the general public. This means that anyone
          can participate and compete for the prize in this competion. The task
          is to clone or download the Panthart Website repo using the link
          provided below. Make changes to the apperance of the website if you
          want to, and most importantly, add a dark/light mode theme and toggle
          icon to the website (sitewide, persitent even on reload), so that
          users can be able to switch to their preffered choice. There is only
          one winner in this competition.
        </p>
        <p
          style={{
            fontWeight: "bolder",
            fontSize: "1rem",
          }}
        >
          Link To Github Repo:{" "}
          <span
            style={{
              color: "green",
              lineHeight: "2",
              textDecoration: "underline",
            }}
          >
            <Link href="https://github.com/nippysky/Panthart">
              Panthart Github Repo
            </Link>
          </span>
        </p>
        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          Close Date To Submit Work:{" "}
          <span style={{ color: "green", lineHeight: "2" }}>
            {" "}
            1st, December, 2022.
          </span>
        </p>
        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          Link to Submit Repo:{" "}
          <span
            style={{
              color: "green",
              lineHeight: "2",
              textDecoration: "underline",
            }}
          >
            <Link href="https://forms.gle/nUpNuNbpCXotzDDz7"> Submit Here</Link>
          </span>
        </p>
      </div>

      <div className={classes.compDetails}>
        <h2>Conditions To Recieve Prizes.</h2>
        <ul className={classes.compText}>
          <li>
            Follow us on{" "}
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                color: "#2e3192",
              }}
            >
              <Link href="https://twitter.com/panth_art">Twitter</Link>
            </span>
            ,{" "}
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                color: "#2e3192",
              }}
            >
              <Link href="https://discord.gg/uuvbs9DJ7H">Discord</Link>
            </span>
            , and{" "}
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                color: "#2e3192",
              }}
            >
              <Link href="https://www.youtube.com/c/Panthart">Youtube</Link>
            </span>
            .
          </li>
          <li>
            {" "}
            Before the prizes will be distributed, the Non-Fungible Comrades
            Collection must have been sold out. If you want to buy into the
            Comrade collection, click the link{" "}
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                color: "#2e3192",
              }}
            >
              <Link href="https://nfcomrades.com"> Become A Comrade</Link>
            </span>
          </li>
        </ul>
      </div>

      <div className={classes.compDetails}>
        <h2>Prizes.</h2>
        <p className={classes.compText}>
          Prizes will be given only if the conditions for this competition are
          met. Kindly read the conditions. Prizes will be distributed
          immediately as conditions are met. Nevertheless, If conditions are not
          met, the winner and prize from the competition will be recorded and
          kept till the conditions are met. Once the conditions are met, we will
          reward the winner with the prize.
        </p>
        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>Winner:</p>
        <ul style={{ fontWeight: "500" }}>
          <li> $1000 (paid in any cryptocurrency of choice)</li>
          <li> 5000 VBRD- Vibrada Token (After it's launch)</li>
          <li> A Macbook</li>
          <li> Comrades Special Branded Package </li>
          <li> Fashion Package from Panthart</li>
        </ul>
      </div>

      <div className={classes.compDetails}>
        <h2>Details For Non-Holders Of Comrades.</h2>
        <p className={classes.compText}>
          Comrades get the full prizes as listed above. If you are not a
          Comrade, you get quater of the prizes from the listed prize list
          above. For example, you emerge the winner of this competiton, and you
          are not a comrade, you get $250, 1250VBRD, and Fashion Package from
          panthart. No Macbook and no Comrade package. Conditions as stated
          above still applies before prizes are rewarded.
        </p>
      </div>
    </section>
  );
}
