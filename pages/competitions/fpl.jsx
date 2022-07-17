/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import classes from "./Styles/Competitions.module.css";
import Head from "next/head";

export default function FPL() {
  return (
    <section className={classes.section}>
      <Head>
        <title>Panthart | Competitions - FPL</title>
      </Head>
      <div>
        <Image
          src="/images/competitions/Comrades-FPL.png"
          alt="Fantasy Premier League"
          height={620}
          width={930}
          priority
        />
      </div>
      <div className={classes.compDetails}>
        <h2>Details.</h2>
        <p className={classes.compText}>
          This competiton is open to the general public. This means that anyone
          can participate and compete for the various prizes in this competiton.
          A fantasy league has been created based on the English Premier
          Leaugue. Participants should set create an account with FPL-Fantasy
          Premier League, set your individual teams, and then join the private
          Comrade FPL league through the unique invite code provided.
        </p>
        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          Invitation Code:{" "}
          <span
            style={{
              color: "green",
              lineHeight: "2",
              textDecoration: "underline",
            }}
          >
            <Link href="https://fantasy.premierleague.com/leagues/auto-join/vh03pb">
              vh03pb
            </Link>
          </span>
        </p>
        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          Close Date For League New Entries:{" "}
          <span style={{ color: "green", lineHeight: "2" }}>
            {" "}
            1st, August, 2022.
          </span>
        </p>
        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          Prize Categories:{" "}
          <span style={{ color: "green", lineHeight: "2" }}>
            Manager Of the Month, Manager Of The Year (1st), First Runner-Up
            (2nd), Second Runner-Up (3rd), Third Runner-Up(4th)
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
            , so as to keep up with the this competition updates
          </li>
          <li>
            {" "}
            Before the prizes will be distributed, the Non-Fungible Comrades
            Collection must have been sold out before the end of the 2022/2023
            Premier League Season. However, this does not pause or stop the
            competition as the winners from the categories will be recorded and
            shared across our social media. Just keep competiting. If you want
            to buy into the Comrade collection, click the link{" "}
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
          met, winners and their prizes from the competition categories will be
          recorded and kept till the conditions are met. Once the conditions are
          met, we will distribut the various prizes.
        </p>
        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          Managers of The Month:
        </p>
        <ul style={{ fontWeight: "500" }}>
          <li> $100 (paid in any cryptocurrency of choice)</li>
          <li> 1000 VBRD- Vibrada Token (After it's launch)</li>
        </ul>

        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          3rd Runner Up - Manager Of The Year (4th):
        </p>
        <ul style={{ fontWeight: "500" }}>
          <li> $250 (paid in any cryptocurrency of choice)</li>
          <li> 1000 VBRD- Vibrada Token (After it's launch)</li>
          <li> Comrades Special Branded Package </li>
          <li> Fashion Package from Panthart</li>
        </ul>

        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          2nd Runner Up - Manager Of The Year (3rd):
        </p>
        <ul style={{ fontWeight: "500" }}>
          <li> $500 (paid in any cryptocurrency of choice)</li>
          <li> 1500 VBRD- Vibrada Token (After it's launch)</li>
          <li> Comrades Special Branded Package </li>
          <li> Fashion Package from Panthart</li>
        </ul>

        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          1st Runner Up - Manager Of The Year (2nd):
        </p>
        <ul style={{ fontWeight: "500" }}>
          <li> $1000 (paid in any cryptocurrency of choice)</li>
          <li> 2000 VBRD- Vibrada Token (After it's launch)</li>
          <li> Comrades Special Branded Package </li>
          <li> Fashion Package from Panthart</li>
        </ul>

        <p style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          Manager Of The Year (Winner):
        </p>
        <ul style={{ fontWeight: "500" }}>
          <li> $2000 (paid in any cryptocurrency of choice)</li>
          <li> 3000 VBRD- Vibrada Token (After it's launch)</li>
          <li> Brand New Play Station 5 Console </li>
          <li> Favourite Premier League Club Jersey</li>
          <li> Comrades Special Branded Package </li>
          <li> Fashion Package from Panthart</li>
        </ul>
      </div>

      <div className={classes.compDetails}>
        <h2>Details For Non-Holders Of Comrades.</h2>
        <p className={classes.compText}>
          Comrades get the full prizes as listed above. If you are not a
          Comrade, you get quater of the prizes from any category you win, and
          also you dont get the Ps5, and the Comrade Branded Package. For
          example: You win the Manager of the Year (Winner) category, and you
          are not a comrade, you get $500, 750VBRD, and favourite premier league
          Jersey. No ps5, and no comrade branded package. Conditions as stated
          above still applies before prizes are rewarded.
        </p>
      </div>
    </section>
  );
}
