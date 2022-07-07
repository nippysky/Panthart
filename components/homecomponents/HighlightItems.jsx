/* eslint-disable react/no-unescaped-entities */
import classes from "../componentsstyles/HighlightItems.module.css";
import Image from "next/image";

export default function HighlightItems() {
  return (
    <section className={classes.section}>
      <div className={classes.divRow}>
        <div className={classes.divcolumn}>
          <div className={classes.divVM}>
            <Image
              src="/images/Africa.svg"
              alt="Made By Afer"
              height={30}
              width={30}
              priority
            />
            <h3>Made By Afer</h3>
            <p className={classes.vmText}>
              We take pride in what we do. 'Made By Afer' is 'Made In Africa'.
              Whatever we engage in is 'Made By Afer'.
            </p>
          </div>
        </div>

        <div className={classes.divcolumn}>
          <div className={classes.divVM}>
            <Image
              src="/images/Collaborations.svg"
              alt="Collaborations"
              height={30}
              width={30}
            />
            <h3>Collaborations</h3>
            <p className={classes.vmText}>
              We are open to collaborations, Ideas, and partnerships that will
              aid us in achieving our goals.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.divRow}>
        <div className={classes.divcolumn}>
          <div className={classes.divVM}>
            <Image
              src="/images/Agency.svg"
              alt="Agency Duties"
              height={30}
              width={30}
            />
            <h3>Agency Duties</h3>
            <p className={classes.vmText}>
              We will aid you in your journey into nft and blockchain. Whether
              its a new project or integration to your business.
            </p>
          </div>
        </div>

        <div className={classes.divcolumn}>
          <div className={classes.divVM}>
            <Image
              src="/images/Information.svg"
              alt="Knowledgebase"
              height={30}
              width={30}
            />
            <h3>Knowledgebase</h3>
            <p className={classes.vmText}>
              There is knowledge to be acquired for those who need it. We
              provide education on NFT. Get all your questions answered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
