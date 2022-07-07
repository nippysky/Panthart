import Image from "next/image";
import Button from "./Button";
import { HiArrowNarrowRight } from "react-icons/hi";

import classes from "./componentsstyles/OthersPagesHeader.module.css";

export default function OtherPagesHeader(props) {
  const { imageURL } = props;
  return (
    <div className={classes.main}>
      <div>
        <Button link="/">
          <span style={{ fontSize: "1.2rem" }}>Go Back Home</span>
          <span style={{ position: "relative", top: "6px", left: "5px" }}>
            <HiArrowNarrowRight size={25} />
          </span>
        </Button>
      </div>
      <Image
        src={imageURL}
        alt="Who We Are At Panthart"
        width={1450}
        height={400}
        layout="responsive"
        priority
      />
    </div>
  );
}
