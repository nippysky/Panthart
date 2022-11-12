import Form from "./Form";
import { motion } from "framer-motion";

function ReachUs() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-black w-full px-7 my-10 py-[2rem] md:my-20 md:min-h-screen md:px-20 md:py-[7rem] overflow-hidden"
    >
      {/* Heading */}
      <div>
        <h3 className="font-bold text-royal dark:text-gold text-[1.75rem] md:text-3xl leading-[1.5]">
          Send Us A Message
        </h3>
        <p className="text-black dark:text-white text-[1.1rem] md:text-[1.2rem] pt-8">
          If you are a Comrade, you can reach us faster on our discord server
          channel for Comrades. Verify that you are a holder using the Collab
          Channel and you will be granted first hand access to us.
        </p>
      </div>

      {/* Form */}
      <motion.div
        className="my-[6rem] md:my-[10rem]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <Form />
      </motion.div>
    </section>
  );
}

export default ReachUs;
