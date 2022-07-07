import Link from "next/link";
import classes from "./componentsstyles/Button.module.css";

export default function Button(props) {
  const { link, children } = props;
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
}
