import classes from "../components/componentsstyles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerRow}>
        <div className={classes.footerColumn}>
          <div className={classes.footLogo}>
            <Link href="/">
              <Image
                style={{ cursor: "pointer" }}
                src="/images/panthart-footer-logo-dark.svg"
                alt="Panthart Logo Light"
                height={30}
                width={150}
                priority
              />
            </Link>
          </div>
        </div>

        <div className={classes.footerColumn}>
          <div className={classes.footHeaderText}>
            <h2>Panthart</h2>
          </div>
          <div className={classes.footText}>
            <p className={classes.footLink}>
              <Link href="/">Home</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/aboutus">Who We Are</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/roadmap">Roadmap</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/careers">Careers</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/faqs">FAQs</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/angelinvestors">Angel Investors</Link>
            </p>
          </div>
        </div>

        <div className={classes.footerColumn}>
          <div className={classes.footHeaderText}>
            <h2>Doings</h2>
          </div>
          <div className={classes.footText}>
            <p className={classes.footLink}>
              <Link href="/files/Panthart-Project-Paper.pdf">
                Project Paper
              </Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/lifestyle">Our Own Lifestyle</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/marketplace">Our Own Marketplace</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/aferblockchain">Afer Blockchain</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/vawulent">VawulEnt</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="https://bscscan.com/token/0x76ffe3777f76fb501f63734d9a8850db3c760470">
                Vibrada Token
              </Link>
            </p>
          </div>
        </div>

        <div className={classes.footerColumn}>
          <div className={classes.footHeaderText}>
            <h2>Community</h2>
          </div>
          <div className={classes.footText}>
            <p className={classes.footLink}>
              <Link href="https://nfcomrades.com">Non-Fungible Comrades</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="https://twitter.com/panth_art">Twitter</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="/">Discord</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="https://linkedin.com/company/panthart">LinkedIn</Link>
            </p>
            <p className={classes.footLink}>
              <Link href="https://www.instagram.com/panthart_official">
                Instagram
              </Link>
            </p>
            <p className={classes.footLink}>
              <Link href="https://www.youtube.com/channel/UCF7-gSEIPIFrGEON4MMyatQ">
                Youtube
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className={classes.horRuleDiv}>
        <hr className={classes.horRule}></hr>
      </div>

      <div>
        <div className={classes.footerRow}>
          <div className={classes.footerColumn}></div>

          <div className={classes.footerColumn}>
            <div className={classes.footText}>
              <span className={classes.footLink} style={{ fontWeight: "bold" }}>
                <Link href="/privacypolicy">Privacy Policy</Link>
              </span>
            </div>
          </div>

          <div className={classes.footerColumn}>
            <div className={classes.footText}>
              <span className={classes.footLink} style={{ fontWeight: "bold" }}>
                <Link href="/termsandconditions">Terms & Condition</Link>
              </span>
            </div>
          </div>

          <div className={classes.footerColumn}>
            <div className={classes.footText}>
              <span className={classes.footSpan}>
                © Panthart {year} | All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
