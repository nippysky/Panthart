/* eslint-disable react/no-unescaped-entities */
import classes from "../componentsstyles/FoundingTeam.module.css";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

export default function FoundingTeam() {
  const mobileView = useMediaQuery("(max-width:1000px)");
  return (
    <section>
      <div className={classes.rowTop}>
        <h2>Founding Team Members.</h2>
        <p className={classes.text}>
          The pictures for our founding team members will be update after the
          mint day of the Non-Fungible Comrades. It will be replaced their own
          individual comrades.
        </p>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.teamCard}>
            <div>
              <Image
                src="/images/aboutus/NIPPY.png"
                alt="Chukwudubem Osegbe"
                height={1500}
                width={1850}
                priority
              />
            </div>
            <div className={classes.cardDetails}>
              <h2>Chukwudubem Osegbe</h2>
              <p className={classes.text}>Fullstack Developer / UI Designer</p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <p className={classes.text}>
            Chukwudubem AKA 'NIPPY' is a Web Developer and User Interface
            Designer. He is the founder of Panthart, and Creative director of
            the Non-Fungible Comrades. Personal Website is{" "}
            <span
              style={{
                fontWeight: "600",
                textDecoration: "underline",
                color: "#2e3192",
              }}
            >
              <Link href="https://nippysky.com">NIPPYSKY</Link>
            </span>
          </p>
          <SocialIcons
            twitterURL="https://twitter.com/nippysky"
            instaURL="https://www.instagram.com/nippysky"
            linkedInURL="https://www.linkedin.com/in/nippysky"
          />
        </div>
      </div>

      <div
        className={classes.row}
        style={mobileView ? { flexDirection: "column-reverse" } : null}
      >
        <div className={classes.column}>
          <p className={classes.text}>
            Micheal AKA 'Mad Mike' is creative graphics designer, and 3D artiste
            with over three years of practicing experience. Mike is the Creator
            and artiste behind the Non-Fungible Comrades.
          </p>
          <SocialIcons
            twitterURL="https://twitter.com/Michealonyekwe1"
            instaURL="https://www.instagram.com/marcelmikael"
            linkedInURL="https://www.linkedin.com/in/micheal-onyekwere/"
          />
        </div>
        <div className={classes.column}>
          <div className={classes.teamCard}>
            <div>
              <Image
                src="/images/aboutus/Mad-Mike.png"
                alt="Chukwudubem Osegbe"
                height={1500}
                width={1850}
              />
            </div>
            <div className={classes.cardDetails}>
              <h2>Micheal Onyekwere</h2>
              <p className={classes.text}>Creative Designer / 3D Artiste</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.teamCard}>
            <div>
              <Image
                src="/images/aboutus/Bright-Cyph.png"
                alt="Bright Cyph Nwekete"
                height={1500}
                width={1850}
                priority
              />
            </div>
            <div className={classes.cardDetails}>
              <h2>Bright Nwekete</h2>
              <p className={classes.text}>Brand & UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <p className={classes.text}>
            Bright AKA 'Cyph' is a professional Graphic Designer, Brand
            Designer, User Interface and Experience designer with over five
            years of practicing experience. He co-created the Non-Fungible
            Comrades.
          </p>
          <SocialIcons
            twitterURL="https://twitter.com/heis_cyph"
            instaURL="https://instagram.com/iam.cyph"
            linkedInURL="https://www.linkedin.com/in/nweketebrightchidi"
          />
        </div>
      </div>

      <div
        className={classes.row}
        style={mobileView ? { flexDirection: "column-reverse" } : null}
      >
        <div className={classes.column}>
          <p className={classes.text}>
            Isaac AKA 'Mr. Isaac' is a blockchain and web developer. He created
            the smart contract for our Vibrada token.
          </p>
          <SocialIcons
            twitterURL="https://twitter.com/EVMlord"
            instaURL="https://github.com/EVMlord"
            linkedInURL="https://www.linkedin.com/in/evmlord"
          />
        </div>
        <div className={classes.column}>
          <div className={classes.teamCard}>
            <div>
              <Image
                src="/images/aboutus/Isaac.png"
                alt="Mr. Isaac"
                height={1500}
                width={1850}
                priority
              />
            </div>
            <div className={classes.cardDetails}>
              <h2>Isaac Ekhaguere</h2>
              <p className={classes.text}>Blockchain Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.teamCard}>
            <div>
              <Image
                src="/images/aboutus/Ada.png"
                alt="Adaugo"
                height={1500}
                width={1850}
                priority
              />
            </div>
            <div className={classes.cardDetails}>
              <h2>Adaugo</h2>
              <p className={classes.text}>Digital Artiste</p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <p className={classes.text}>
            Adaugo is a a creative digital artiste, who loves to design digital
            artworks with her phone and laptop. She aided in designing the NFT
            artworks for our Angel Investors.{" "}
            <span
              style={{
                fontWeight: "600",
                textDecoration: "underline",
                color: "#2e3192",
              }}
            >
              <Link href="https://rarible.com/panthart">Visit Page</Link>
            </span>
          </p>
          <SocialIcons
            twitterURL="/"
            instaURL="https://instagram.com/_dugoukah_"
            linkedInURL="/"
          />
        </div>
      </div>
    </section>
  );
}
