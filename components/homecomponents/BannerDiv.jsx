import Button from "../Button";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import classes from "../componentsstyles/BannerDiv.module.css";

export default function BannerDiv(props) {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div className={classes.column1}>
          <pre className={classes.h2}>{props.title}</pre>
          <Button link={props.link}>
            <span
              style={{
                fontSize: "1.2rem",
                color: "white",
                textDecoration: "underline",
                textDecorationColor: "white",
              }}
            >
              {props.linkText}
            </span>
            <span
              style={{
                position: "relative",
                top: "6px",
                left: "5px",
                color: "white",
              }}
            >
              <HiArrowNarrowRight size={25} />
            </span>
          </Button>
        </div>
        <div className={classes.column2}>
          <Image
            src={props.imageURL}
            alt={props.title}
            width={200}
            height={150}
            priority
          />
        </div>
      </div>
    </section>
  );
}
