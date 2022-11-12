import Form from "./Form";

function ReachUs() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-black w-full px-7 my-10 py-[2rem] md:my-20 md:min-h-screen md:px-20 md:py-[7rem]"
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
      <div className="my-[6rem] md:my-[10rem]">
        <Form />
      </div>
    </section>
  );
}

export default ReachUs;
