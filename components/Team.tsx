/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import NIPPY from "../public/Team/NIPPY.png";
import teamMembers from "../content";
import TeamCard from "./TeamCard";
import { BsPlayCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

function Team() {
  const [playModal, setPlayModal] = useState(false);

  if (playModal === true) {
    // Disable Scroll
    typeof document !== "undefined" &&
      (document.body.style.overflow = "hidden");
  } else {
    // Enable Scroll
    typeof document !== "undefined" && (document.body.style.overflow = "auto");
  }

  return (
    <motion.section
      id="team"
      className="bg-white dark:bg-black w-full px-7 my-10 py-[2rem] md:my-20 md:min-h-screen md:px-20 md:py-[7rem]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Heading */}
      <div>
        <h3 className="font-bold text-royal dark:text-gold text-[1.75rem] md:text-3xl leading-[1.5]">
          Founding Team
        </h3>
        <p className="text-black dark:text-white text-[1.1rem] md:text-[1.2rem] pt-8">
          We are creatives who have come together to find amazing ways to build
          a community in the web 3 space and provide favourable utilties for
          community members.
        </p>
      </div>

      {/* Founder Card */}
      <section className="flex flex-col gap-24 lg:flex-row md:flex-1 lg:gap-48 w-full mt-[7rem]">
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <Image
            src={NIPPY}
            alt="NIPPY The Creative"
            width={385}
            height={385}
            quality={100}
            priority
          />

          <div className="my-2">
            <h5 className="text-[1rem] text-royal dark:text-gold font-semibold">
              Programmer / UI/UX Designer
            </h5>
            <p className="mt-1 text-[1.2rem] text-black dark:text-white">
              Chukwudubem Osegbe
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="w-[50%] md:w-[50%] bg-mainBG dark:bg-darkBG p-2 rounded-lg">
            <h5 className="text-[1rem] text-royal dark:text-gold font-semibold">
              Founder's Words
            </h5>
          </div>

          <div className="mt-10">
            <p className="text-[1.1rem] md:text-[1.2rem] text-black dark:text-white mb-7">
              The Web 3 expereince is priceless and very enjoyable if we have
              minimal and moderated security threats.
            </p>
            <p className="text-[1.1rem] md:text-[1.2rem] text-black dark:text-white">
              As an African Creator, Panthart is the way I want to drive
              Blockchain technology into Africa for massive adoption, starting
              with the NFComrades NFT collection.
            </p>
          </div>

          <button className="my-14 px-3" onClick={() => setPlayModal(true)}>
            <span className="relative right-4 text-royalGrad2 dark:text-goldenGrad2">
              <BsPlayCircleFill size={40} />
            </span>
            <span className="relative bottom-9 left-10 font-semibold bg-gradient-to-r from-royalGrad1 via-royalGrad3 to-royalGrad3 dark:from-goldenGrad1 dark:via-goldenGrad3 dark:to-goldenGrad3 text-gradient text-[1.2rem]">
              Play Founder's Video
            </span>
          </button>
        </div>
      </section>

      {/* Team Members */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 w-full my-5 mt-7 lg:mt-[10rem]">
        {teamMembers.map((teamMember: any): any => {
          return (
            <TeamCard
              key={teamMember.id}
              image={teamMember.image}
              title={teamMember.title}
              name={teamMember.name}
            />
          );
        })}
      </section>

      {/* PLAY MODAL */}
      {playModal && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          onClick={() => setPlayModal(false)}
          className="fixed bg-black bg-opacity-80 inset-0 z-50 h-screen overflow-hidden flex justify-center items-center px-5 lg:px-40"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_FQMOCwp-rw"
            title="Founder's Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.section>
      )}
      {/* END OF PLAY MODAL */}
    </motion.section>
  );
}

export default Team;
