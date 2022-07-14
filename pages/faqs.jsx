/* eslint-disable react/no-unescaped-entities */
import classes from "../styles/pages/Faqs.module.css";
import OtherPagesHeader from "../components/OtherPagesHeader";
import Image from "next/image";
import { useState } from "react";
import { faqS } from "../data/contents";
import Head from "next/head";

export default function Faqs() {
  const [accordion, setActiveAccordion] = useState(0);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <section>
      <Head>
        <title>Panthart | FAQS</title>
        <meta name="description" content="Let us answer all your questions." />
      </Head>
      <OtherPagesHeader imageURL="/images/faqs/Faqs.svg" />
      <div>
        <p className={classes.headText}>
          Let's answer some of your questions. If you do not see your question
          or anyone related, feel free to ask your question using our social
          media handler. Just tag us, or alternatively, send us an email on{" "}
          <a href="mailto:PanthartOfficial@gmail.com">
            <span
              style={{
                fontWeight: "bold",
                color: "rgb(46, 49, 146)",
                textDecoration: "underline",
              }}
            >
              panthartofficial@gmail.com
            </span>
          </a>
        </p>
      </div>

      <div className={classes.accordionFaq}>
        {faqS.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div className={classes.accordionFaqHeading}>
              <h3 className={accordion === index ? classes.active : null}>
                {item.question}
              </h3>
              <div>
                {accordion === index ? (
                  <div className={classes.imgIcon}>
                    <Image
                      src="/images/Arrow-Up.svg"
                      alt="Collapse"
                      width={15}
                      height={15}
                    />
                  </div>
                ) : (
                  <div className={classes.imgIcon}>
                    <Image
                      src="/images/Arrow-Down.svg"
                      alt="Collapse"
                      width={15}
                      height={15}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <p
                className={
                  accordion === index ? classes.active : classes.inactive
                }
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
