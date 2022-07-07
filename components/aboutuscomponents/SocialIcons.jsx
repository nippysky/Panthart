import classes from "../componentsstyles/FoundingTeam.module.css";
import Image from "next/image";

export default function socialIcons(props) {
  const { twitterURL, instaURL, linkedInURL } = props;

  return (
    <div className={classes.socialDiv}>
      <a href={linkedInURL} className={classes.socialIcons}>
        <Image
          src="/images/aboutus/LinkedIn.svg"
          alt="Switch To Dark Mode"
          height={20}
          width={75}
        />
      </a>
      <a href={twitterURL} className={classes.socialIcons}>
        <Image
          src="/images/aboutus/Twitter.svg"
          alt="Switch To Dark Mode"
          height={20}
          width={75}
        />
      </a>
      <a href={instaURL} className={classes.socialIcons}>
        <Image
          src="/images/aboutus/Instagram.svg"
          alt="Switch To Dark Mode"
          height={20}
          width={75}
        />
      </a>
    </div>
  );
}
