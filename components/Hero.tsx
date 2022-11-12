import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="w-full h-screen bg-white dark:bg-black flex items-center justify-center z-1 px-5 md:px-20">
      <section className="">
        {/* Slogan */}
        <h1 className="text-[2.3rem] md:text-[3.3rem] font-extrabold bg-gradient-to-r from-royalGrad1 via-royalGrad2 to-royalGrad3 text-gradient dark:from-goldenGrad1 dark:via-goldenGrad2 dark:to-goldenGrad3 text-center">
          The African Web 3 Company
        </h1>

        {/* Tagline */}
        <p className="text-[1.5rem] md:text-[2rem] leading-12 text-center my-8 font-[400]">
          Exploring blockchain technology.
        </p>

        {/* Button */}
        <div className="text-center">
          <Link href="/">
            <span className="cursor-pointer bg-royal py-3.5 px-[3rem] dark:bg-gold text-white dark:text-black font-medium rounded-lg relative top-5 text-center hover:bg-royalGrad2 dark:hover:bg-goldenGrad3">
              Company Diary
            </span>
          </Link>
        </div>

        {/* Social Links */}
        <div className="text-center flex mt-20 justify-center gap-10 text-royal dark:text-gold">
          <span className="cursor-pointer hover:text-royalGrad2 dark:hover:text-goldenGrad3">
            <Link href="/">
              <FaDiscord size={30} />
            </Link>
          </span>
          <span className="cursor-pointer hover:text-royalGrad2 dark:hover:text-goldenGrad3">
            <Link href="/">
              <FaTwitter size={30} />
            </Link>
          </span>
        </div>
      </section>
    </section>
  );
}

export default Hero;
