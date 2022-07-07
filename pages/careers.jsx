/* eslint-disable react/no-unescaped-entities */
import OtherPagesHeader from "../components/OtherPagesHeader";
import classes from "../styles/pages/Careers.module.css";
import Form from "../components/careerscomponent/Form";
import Head from "next/head";
import Button from "../components/Button";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Careers() {
  return (
    <section>
      <Head>
        <title>Panthart | Work With Us</title>
        <meta
          name="description"
          content="As a community of Creatives and Innovative minds, We will be working with people from different fields at a moment in time, based on the target we have to meet on our roadmap."
        />
      </Head>
      <OtherPagesHeader imageURL="/images/careers/Careers.svg" />
      <div>
        <p className={classes.headText}>
          As a community of Creatives and Innovative minds, there is a natural
          call for collaboration and partnership to be able to carry out our
          project efficiently. We will be working with people from different
          fields, based on the target we have to meet on our roadmap.
        </p>
      </div>
      <div className={classes.headButton}>
        <Button link="/roadmap">
          <span style={{ fontSize: "1.2rem" }}>See Our Roadmap</span>
          <span style={{ position: "relative", top: "6px", left: "5px" }}>
            <HiArrowNarrowRight size={25} />
          </span>
        </Button>
      </div>

      <div className={classes.divRow}>
        <div className={classes.divColumn}>
          <p className={classes.divText}>
            Panthart will support with necessary tools needed to carry out
            tasks, based on the nature of the work to be done. We advocate Value
            and Quality in our business.
          </p>
        </div>
        <div className={classes.divColumn}>
          <p className={classes.divText}>
            Do you have a project you want us colloborate on? Even though it's a
            business, and you need help integrating your business with
            blockchain, NFT, then you are just a form away. Fill The form below
            , and we will be happy to work and colloborate with you.
          </p>
        </div>
      </div>

      <div className={classes.divRow}>
        <div className={classes.divColumn}>
          <p className={classes.divText}>
            There is exception to work with a non-holder and that will be if
            there is no compactible comrade for the job needed to be done at
            that particular point in time, then we outsource it.
          </p>
        </div>
        <div className={classes.divColumn}>
          <p className={classes.divText}>
            Only holders of comrades, can work with us. This means that you will
            need to have at least a comrade. This way, we are creating income
            streams for our comrades as we pay them for job done, and this also
            serves as a utility.
          </p>
        </div>
      </div>

      <div className={classes.divRow}>
        <div className={classes.divColumn}>
          <h2>Fill This Form.</h2>
          <p className={classes.divText}>
            If you want to contact us outside this form and get immediate
            response, kindly use any of our social media handles to reach us, or
            send a direct email to &nbsp;
            <a
              style={{
                textDecoration: "underline",
                color: "#2e3192",
                fontWeight: "600",
              }}
              href="mailto:PanthartOfficial@gmail.com"
            >
              PanthartOfficial@gmail.com
            </a>
          </p>
        </div>
        <div className={classes.divColumn}>
          <Form />
        </div>
      </div>
    </section>
  );
}
