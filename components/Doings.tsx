import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "./Button";
import DoCard from "./DoCard";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Import all Images For The Doings Section
import Comrade from "../public/Doings/Comrade.svg";
import Africa from "../public/Doings/Africa.svg";
import Research from "../public/Doings/Research.svg";
import Social from "../public/Doings/Social.svg";
import AfricaGold from "../public/Doings/AfricaGold.svg";
import ResearchGold from "../public/Doings/ResearchGold.svg";
import SocialGold from "../public/Doings/SocialGold.svg";

function Doings() {
  const { theme } = useTheme();
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;
  return (
    <section
      id="doings"
      className="bg-white dark:bg-black w-full px-7 my-10 py-[2rem] md:my-20 md:min-h-screen md:px-20 md:py-[7rem]"
    >
      <section className="flex flex-col gap-24 lg:flex-row w-full lg:gap-48">
        {/* Focus Div */}
        <div className="w-full lg:w-1/2">
          <h3 className="font-bold text-royal dark:text-gold text-[1.75rem] md:text-3xl leading-[1.5]">
            Keep Building On Blockchain Technology
          </h3>
          <p className="text-black dark:text-white text-[1.1rem] md:text-[1.2rem] pt-8">
            We are dedicated to building and investing in
            <br className="hidden lg:block" /> Web 3 projects, thereby driving
            the adoption
            <br className="hidden lg:block" /> of blockchain in Africa.
          </p>
          <p className="text-black dark:text-white text-[1.1rem] md:text-[1.2rem] py-8">
            As we explore blockchian technology, we
            <br className="hidden lg:block" /> provide utility for the
            NFComrades holders.
          </p>

          <Button link="https://nfcomrades.com">
            <span>Become A Comrade</span>
            <span className="relative left-3 text-royal dark:text-gold">
              <HiArrowNarrowRight size={25} />
            </span>
          </Button>
        </div>

        {/* Detailed Tile List */}
        <div className="w-full lg:w-1/2">
          <DoCard
            image={Comrade}
            heading={"Non-Fungible Comrades"}
            text={
              "NFComrades is our spinal cord. Every project carried out will be of benefits and utility to the NFComrade holders."
            }
          />
          <DoCard
            image={theme === "dark" ? AfricaGold : Africa}
            heading={"Proudly African"}
            text={
              "Help spread the Web 3 and blockchain awareness in Africa. We love Africa. We will gradually build Panthart into a prime African brand."
            }
          />
          <DoCard
            image={theme === "dark" ? ResearchGold : Research}
            heading={"Research"}
            text={
              "As We keep exploring the infancy of blockchain technology, there will be organized research to find more way to inculcate blockchain in our daily lives."
            }
          />
          <DoCard
            image={theme === "dark" ? SocialGold : Social}
            heading={"Socials And Conventions"}
            text={
              "Timely conventions and social events will be held accross various locations in Africa. This is to strenghten the African web 3 community."
            }
          />
        </div>
      </section>
    </section>
  );
}

export default Doings;
