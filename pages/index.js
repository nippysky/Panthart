/* eslint-disable react/no-unescaped-entities */
import classes from "../styles/pages/Home.module.css";
import HighlightItems from "../components/homecomponents/HighlightItems";
import NonFungibleComrades from "../components/homecomponents/NonFungibleComrades";
import BannerDiv from "../components/homecomponents/BannerDiv";
import AferandPanthlet from "../components/homecomponents/AferandPanthlet";
import bannerDiv from "../data/contents";
import Projects from "../components/homecomponents/Projects";
import Button from "../components/Button";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "@mui/material";
import Link from "next/link";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <section>
      <section className={classes.mainSection}>
        <div className={classes.mainDiv}>
          <h2 className={classes.h1Header}>
            Africa's First<br></br> Non-Fungible Token Agency
          </h2>
          <div>
            <p className={classes.pHeader}>
              Bringing Blockchain Technology To You. We Promote
              <span style={{ color: "#2e3192", fontWeight: "bold" }}>
                &nbsp; Made By Afer
              </span>
            </p>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <Button link="/files/Panthart-Project-Paper.pdf">
              <span>Project Paper</span>
              <span style={{ position: "relative", top: "6px", left: "5px" }}>
                <HiArrowNarrowRight size={25} />
              </span>
            </Button>
          </div>
        </div>
      </section>
      <div className={classes.divRow}>
        <div className={classes.divcolumn}>
          <h2>The Creativity Is Plenty.</h2>
          <p className={classes.divText}>
            Unique concepts and ideas with creative executions. We will work
            with like-mind individuals, and carry out our business differently
            and beyond satisfactory. There is plenty to explore in this space.
            We do things our own way.
          </p>
          <Newsletter />
        </div>
        <div className={classes.divcolumn}>
          <div className={classes.divVMMain}>
            <div className={classes.divVM}>
              <h3>Vision</h3>
              <p className={classes.vmText}>
                To be the biggest NFT agency in the world, and a conglomerate of
                'Made By Afer' projects.
              </p>
            </div>
            <div className={classes.divVM}>
              <h3>Mission</h3>
              <p className={classes.vmText}>
                We strive to offer original projects and services that are 'Made
                By Afer', on the global stage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divRow}>
        <div className={classes.divcolumn}>
          <h2>Who We Are.</h2>
          <p className={classes.divText}>
            Panthart is an agency of creative and innovative minds, bringing you
            into the world of nft and blockchain technology. We Promote 'Made By
            Afer'. We have our Web 3 Community where we are known as &nbsp;
            <span>
              <Link className={classes.colorText} href="http://nfcomrades.com">
                Comrades.
              </Link>
            </span>
          </p>

          <Button link="/aboutus">
            <span style={{ fontSize: "1.2rem" }}>Learn More</span>
            <span style={{ position: "relative", top: "6px", left: "5px" }}>
              <HiArrowNarrowRight size={25} />
            </span>
          </Button>
        </div>

        <div className={classes.divcolumn}>
          <h2>Creation and Exlporation.</h2>
          <p className={classes.divText}>
            The ripple effect of creation, as we explore various industries.
            Blockchain, Fashion, Health, Real Estates to mention a few. We
            create space in the job market too. We will take it{" "}
            <span className={classes.boldText}>one step at a time.</span>
          </p>
        </div>
      </div>
      <HighlightItems />
      <Projects />
      <BannerDiv
        title={bannerDiv[0].title}
        link={bannerDiv[0].link}
        linkText={bannerDiv[0].linkText}
        imageURL={bannerDiv[0].imageURL}
      />
      <NonFungibleComrades
        imageURL="/images/Non-Fungible-Comrades.png"
        title="Non- Fungible Comrades."
        description="NFComrades is the web3 community for Panthart. Comrades are our supporters
        and investors who serves as protagonists to our vision and mission. With their entrance
        into the community, we are able to start doing wonderful things. We are getting bigger than the Apes. Yes! We love Vawulence."
        link="http://nfcomrades.com"
        linkText="Become A Comrade"
      />
      <NonFungibleComrades
        imageURL="/images/Panthart-Lifestyle.png"
        title="Our Lifestyle Involvement."
        description="We love the Afro-Lifestyle and Culture. We take pride in 
our roots, our fashion, our music, our celebrities, and our 
influencers, and our pop-culture. We will show our involvement through our influencers,
artists, models, and other areas that can help represent
our lifestyle. We are up to something."
        link="/lifestyle"
        linkText="Learn More"
      />
      <BannerDiv
        title={bannerDiv[1].title}
        link={bannerDiv[1].link}
        linkText={bannerDiv[1].linkText}
        imageURL={bannerDiv[1].imageURL}
      />
      <AferandPanthlet />
    </section>
  );
}
