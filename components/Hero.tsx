import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="w-full h-screen bg-white dark:bg-black flex items-center justify-center z-1 px-5 md:px-20 overflow-hidden">
      <section className="">
        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-[2.3rem] md:text-[3.3rem] font-extrabold bg-gradient-to-r from-royalGrad1 via-royalGrad2 to-royalGrad3 text-gradient dark:from-goldenGrad1 dark:via-goldenGrad2 dark:to-goldenGrad3 text-center"
        >
          The African Web 3 Company
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-[1.5rem] md:text-[2rem] leading-12 text-center my-8 font-[400]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          Exploring blockchain technology.
        </motion.p>

        {/* Button */}
        <motion.div
          className="text-center"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Link href="/">
            <span className="cursor-pointer bg-royal py-3.5 px-[3rem] dark:bg-gold text-white dark:text-black font-medium rounded-lg relative top-5 text-center hover:bg-royalGrad2 dark:hover:bg-goldenGrad3">
              Company Diary
            </span>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="text-center flex mt-20 justify-center gap-10 text-royal dark:text-gold"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <span className="cursor-pointer hover:text-royalGrad2 dark:hover:text-goldenGrad3">
            <Link href="https://discord.gg/uuvbs9DJ7H">
              <FaDiscord size={30} />
            </Link>
          </span>
          <span className="cursor-pointer hover:text-royalGrad2 dark:hover:text-goldenGrad3">
            <Link href="https://twitter.com/panth_art">
              <FaTwitter size={30} />
            </Link>
          </span>
        </motion.div>
      </section>
    </section>
  );
}

export default Hero;
