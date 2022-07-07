import Button from "../Button";
import classes from "../componentsstyles/Projects.module.css";
import ProjectProperties from "./ProjectProperties";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <section className={classes.section}>
      <div className={classes.mainDiv}>
        <div className={classes.titleDiv}>
          <h2>Are You Planning A Project?</h2>
          <p style={{ fontSize: "1.2rem" }}>
            Make Us Your Partner, and let us build for you. We can help out in
            vital areas:
          </p>
        </div>

        <div className={classes.buttonDiv}>
          <Button link="/careers">
            <span style={{ fontSize: "1.2rem" }}>Drop A Message</span>
            <span style={{ position: "relative", top: "6px", left: "5px" }}>
              <HiArrowNarrowRight size={25} />
            </span>
          </Button>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <ProjectProperties
            imageURL="/images/BrandingAndDev.svg"
            title="Branding & Development"
            text="The best projects have a good sense of design and branding. From your Logo to  your
            minting Web Application, we will give you the best. Smart Contracts included."
          />
        </div>

        <div className={classes.column}>
          <ProjectProperties
            imageURL="/images/Community.svg"
            title="Community & Awarness"
            text="Creating a community platform, where your members could interact
            and unite in the web 3 space. Moving your project forward, creating brand awareness and publicity."
          />
        </div>

        <div className={classes.column}>
          <ProjectProperties
            imageURL="/images/Assistance.svg"
            title="Assist & Maintenance"
            text="As long as you remain our partner or you in anyway work with us, we remain available
            whenever you need us. we are loyal to our community and well wishers."
          />
        </div>
      </div>
    </section>
  );
}
