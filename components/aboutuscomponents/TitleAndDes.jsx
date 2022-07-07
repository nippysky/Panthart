import classes from "../componentsstyles/TitleAndDes.module.css";
import Button from "../Button";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function TitleAndDes(props) {
  const { title, italic, desOne, desTwo, link, linkText } = props;
  return (
    <section>
      <div className={classes.row}>
        <div className={classes.columnHead}>
          <h2>{title}</h2>
          <em>{italic}</em>
        </div>
        <div className={classes.columnDes}>
          <p className={classes.desText}>{desOne}</p>
          <p className={classes.desText}>{desTwo}</p>
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
