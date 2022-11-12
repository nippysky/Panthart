function Form() {
  return (
    <form>
      {/* Name And Email */}
      <div className="flex flex-col lg:flex-row gap-24 flex-1 w-full">
        {/* Name */}
        <div className="w-full lg:w-1/2">
          <label className="font-semibold relative bottom-5" htmlFor="name">
            Your Name
          </label>
          <input
            required
            className="w-full h-14 p-5 rounded-lg bg-mainBG dark:bg-darkBG border-none"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Email */}
        <div className="w-full lg:w-1/2">
          <label className="font-semibold relative bottom-5" htmlFor="email">
            Your Email
          </label>
          <input
            required
            className="w-full h-14 p-5 rounded-lg bg-mainBG dark:bg-darkBG border-none"
            type="email"
            id="email"
            name="name"
            placeholder="Enter Your Email Address"
          />
        </div>
      </div>

      {/* Reason */}
      <div className="w-full mt-20">
        <label className="font-semibold relative bottom-5" htmlFor="reason">
          Reason
        </label>
        <div>
          <select
            required
            id="reason"
            name="reason"
            className="w-full h-14 rounded-lg bg-mainBG dark:bg-darkBG border-none"
          >
            <option value="Question And Inquiries">
              Questions And Inquiries
            </option>
            <option value="Collabotration And Partnerships">
              Collaboration And Partnerships
            </option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="w-full mt-20">
        <label className="font-semibold relative bottom-5" htmlFor="message">
          Your Message
        </label>
        <div>
          <textarea
            required
            rows={10}
            placeholder="Tell us everything, and why you are reaching out to us."
            className="w-full p-5 rounded-lg bg-mainBG dark:bg-darkBG border-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full font-semibold bg-royal dark:bg-gold text-white dark:text-black p-4 text-center rounded-lg mt-10 hover:bg-royalGrad2 dark:hover:bg-goldenGrad3"
      >
        Send
      </button>
    </form>
  );
}

export default Form;
