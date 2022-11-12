/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Link } from "react-scroll";
import panthartLogoRoyal from "../public/HeadFoot/Panthart-Logo-Royal.svg";
import panthartLogoGold from "../public/HeadFoot/Panthart-Logo-Golden.svg";
import moon from "../public/HeadFoot/Moon.svg";
import sun from "../public/HeadFoot/Sun.svg";
import apps from "../public/HeadFoot/Apps.svg";
import appsGold from "../public/HeadFoot/AppsGold.svg";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [productsMenu, setProductsMenu] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;

  if (productsMenu === true) {
    // Disable Scroll
    typeof document !== "undefined" &&
      (document.body.style.overflow = "hidden");
  } else {
    // Enable Scroll
    typeof document !== "undefined" && (document.body.style.overflow = "auto");
  }

  return (
    <section>
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="bg-white dark:bg-black px-5 lg:px-20"
      >
        <div className="flex flex-1 w-full">
          {/* Logo */}
          <div className="w-1/2 lg:w-1/3 items-center">
            <a href="/" className="cursor-pointer">
              <Image
                src={theme === "dark" ? panthartLogoGold : panthartLogoRoyal}
                alt={theme === "dark" ? "Panthart Golden" : "Panthart Royal"}
                width={185}
                height={50}
                priority
              />
            </a>
          </div>

          {/* Section Links */}
          <div className="hidden lg:flex lg:gap-10 lg:w-1/3 lg:text-royal dark:lg:text-gold lg:font-semibold lg:items-center lg:justify-center">
            <div>
              <span className="cursor-pointer md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link
                  to="doings"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                >
                  Doings
                </Link>
              </span>
            </div>

            <div>
              <span className="cursor-pointer md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={400}
                >
                  Team
                </Link>
              </span>
            </div>

            <div>
              <span className="cursor-pointer md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Reach Us
                </Link>
              </span>
            </div>
          </div>

          {/* Apps and Theme Mode */}
          <div className="w-1/2 lg:w-1/3 flex gap-[2.3rem] items-center justify-end text-royal dark:text-gold font-semibold">
            <div>
              <button
                onClick={() => {
                  if (theme === "light") {
                    setTheme("dark");
                  } else {
                    setTheme("light");
                  }
                }}
              >
                <span className="hidden lg:inline relative bottom-1 right-3">
                  {theme === "dark" ? "Royalty" : "Golden"}
                </span>
                <span className="md:relative md:top-0.5">
                  <Image
                    src={theme === "dark" ? sun : moon}
                    alt={theme === "dark" ? "Panthart Sun" : "Panthart Moon"}
                    width={22}
                    height={22}
                  />
                </span>
              </button>
            </div>

            <div>
              <button onClick={() => setProductsMenu(true)}>
                <span className="hidden lg:inline relative bottom-1 right-3">
                  Products
                </span>
                <span className="md:relative top-0.5">
                  <Image
                    src={theme === "dark" ? appsGold : apps}
                    alt="Panthart Products"
                    width={22}
                    height={22}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* PRODUCTS MENU MODAL */}
      {productsMenu && (
        <motion.section
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="fixed bg-white dark:bg-black inset-0 z-50 h-screen overflow-hidden flex px-5 lg:px-20"
        >
          <div className="w-full h-[50px] flex justify-between items-center text-royal dark:text-gold font-semibold">
            {/* TITlE */}
            <div>
              <span className="bg-gradient-to-r from-royalGrad1 via-royalGrad3 to-royalGrad3 dark:from-goldenGrad1 dark:via-goldenGrad3 dark:to-goldenGrad3 text-gradient text-[1.5rem] lg:text-[2rem] font-extrabold">
                Our Products
              </span>
            </div>
            {/* END OF TITLE */}

            {/* CLOSE BUTTON */}
            <div
              className="flex w-[100px] h-[45px] cursor-pointer pt-1"
              onClick={() => setProductsMenu(false)}
            >
              <span className="relative top-2 right-1">Close</span>
              <span>
                <IoClose
                  size={40}
                  color={theme === "dark" ? "#FFBC00" : "#4169E1"}
                />
              </span>
            </div>
            {/* END OF CLOSE BUTTON */}
          </div>
        </motion.section>
      )}
      {/* END OF PRODUCTS MENU MODAL */}
    </section>
  );
}

export default Navbar;
