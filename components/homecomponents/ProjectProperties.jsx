import classes from "../componentsstyles/Projects.module.css";
import Image from "next/image";

export default function ProjectProperties(props) {
  const { imageURL, title, text } = props;
  return (
    <div className={classes.mainImage}>
      <div className={classes.image}>
        <Image src={imageURL} alt={title} height={200} width={300} />
      </div>
      <h3>{title}</h3>
      <p className={classes.text}>{text}</p>
    </div>
  );
}
