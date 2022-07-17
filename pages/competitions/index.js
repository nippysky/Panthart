/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Head from "next/head";

export default function Competitions() {
  return (
    <section className="compSection">
      <Head>
        <title>Panthart | Competitions</title>
      </Head>
      <div className="compDiv">
        <h2>Play And Win Prizes.</h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.85",
          }}
        >
          We are offering these competitons for the public to particpate and win
          exciting prizes. Kindly make sure you tap into the details of any of
          the below competitons and read through the details before you
          participate. You can particiate in any and all available competitions,
          so as far as you have what it takes, and you are up for the challenge.
        </p>
      </div>
      <div className="compRow">
        <div className="compColumn">
          <h3 className="compText">
            <Link href="/competitions/fpl">Comrades FPL 2022/2023</Link>
          </h3>
        </div>
        <div className="compColumn">
          <h3 className="compText">
            <Link href="/competitions/programmer">
              Programmers Challenge 2022
            </Link>
          </h3>
        </div>
        <div className="compColumn">
          <h3 className="compText">
            <Link href="/competitions/designer">Designer's Challenge 2022</Link>
          </h3>
        </div>
      </div>
    </section>
  );
}
