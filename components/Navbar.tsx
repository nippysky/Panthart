import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";

import panthartLogoRoyal from "../public/HeadFoot/Panthart-Logo-Royal.svg";
import panthartLogoGold from "../public/HeadFoot/Panthart-Logo-Golden.svg";
import moon from "../public/HeadFoot/Moon.svg";
import sun from "../public/HeadFoot/Sun.svg";
import apps from "../public/HeadFoot/Apps.svg";
import appsGold from "../public/HeadFoot/AppsGold.svg";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;

  return (
    <section>
      <header className="sticky top-0 z-10 bg-white dark:bg-black px-5 lg:px-20">
        <div className="flex flex-1 w-full">
          {/* Logo */}
          <div className="w-1/2 lg:w-1/3 items-center">
            <Link href="/">
              <span className="cursor-pointer">
                <Image
                  src={theme === "dark" ? panthartLogoGold : panthartLogoRoyal}
                  alt={theme === "dark" ? "Panthart Golden" : "Panthart Royal"}
                  width={185}
                  height={50}
                  priority
                />
              </span>
            </Link>
          </div>

          {/* Section Links */}
          <div className="hidden lg:flex lg:gap-10 lg:w-1/3 lg:text-royal dark:lg:text-gold lg:font-semibold lg:items-center lg:justify-center">
            <div>
              <span className="md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link href="/#doings">Doings</Link>
              </span>
            </div>

            <div>
              <span className="md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link href="/#team">Team</Link>
              </span>
            </div>

            <div>
              <span className="md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link href="/#contact">Reach Us</Link>
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
              <button>
                <span className="hidden lg:inline relative bottom-1 right-3">
                  Apps
                </span>
                <span className="md:relative top-0.5">
                  <Image
                    src={theme === "dark" ? appsGold : apps}
                    alt="Panthart Apps"
                    width={22}
                    height={22}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
