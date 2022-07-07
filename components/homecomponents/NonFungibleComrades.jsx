import Image from "next/image";
import Button from "../Button";
import { HiArrowNarrowRight } from "react-icons/hi";
import classes from "../componentsstyles/NonFungibleComrades.module.css";

export default function NonFungibleComrades(props) {
  const { imageURL, title, description, link, linkText } = props;
  return (
    <section className={classes.section}>
      <div className={classes.divRow}>
        <div className={classes.divColumn}>
          <Image
            src={imageURL}
            alt={title}
            width={650}
            height={650}
            layout="responsive"
            priority
          />
        </div>
        <div className={classes.divColumn}>
          <h2>{title}</h2>
          <p className={classes.divText}>{description}</p>
          <Button link={link}>
            <span style={{ fontSize: "1.2rem" }}>{linkText}</span>
            <span style={{ position: "relative", top: "6px", left: "5px" }}>
              <HiArrowNarrowRight size={25} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
