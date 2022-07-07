/* eslint-disable react/no-unescaped-entities */
import classes from "../componentsstyles/Form.module.css";
import { useRef, useState } from "react";
import Button from "../Button";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Form() {
  //Use the useState to get input data for form validation.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [location, setLocation] = useState("");
  const [comrade, setComrade] = useState("");

  //Another useState to toggle validation messages.
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [locationSubmitted, setLocationSubmitted] = useState(false);
  const [comradeSubmitted, setComradeSubmitted] = useState(false);

  //OnSubmit Toggle the Form div and success message div.
  const [success, setSuccess] = useState(false);

  //Use the useRef to get input data for API.
  const nameRef = useRef();
  const emailRef = useRef();
  const purposeRef = useRef();
  const portfolioRef = useRef();
  const messageRef = useRef();
  const locationRef = useRef();
  const comradeRef = useRef();

  //Function to handle Onclick Event
  function clickHandler() {
    if (!name || name === "") {
      setNameSubmitted(true);
    } else {
      setNameSubmitted(false);
    }

    if (!email || !email.includes("@") || email === "") {
      setEmailSubmitted(true);
    } else {
      setEmailSubmitted(false);
    }

    if (!message || message === "") {
      setMessageSubmitted(true);
    } else {
      setMessageSubmitted(false);
    }

    if (!location || location === "") {
      setLocationSubmitted(true);
    } else {
      setLocationSubmitted(false);
    }

    if (!comrade || comrade === "") {
      setComradeSubmitted(true);
    } else {
      setComradeSubmitted(false);
    }
  }

  //Function to handle onSubmit Event
  function submitHandler(event) {
    //Prevent the page from reloading. Still remain at the form page
    event.preventDefault();

    //Get all the entered values using useRef
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPurpose = purposeRef.current.value;
    const enteredPortfolio = portfolioRef.current.value;
    const enteredMessage = messageRef.current.value;
    const enteredLocation = locationRef.current.value;
    const enteredComrade = comradeRef.current.value;

    //Store all the entered values
    const reqBody = {
      name: enteredName,
      email: enteredEmail,
      purpose: enteredPurpose,
      portfolio: enteredPortfolio,
      message: enteredMessage,
      location: enteredLocation,
      comrade: enteredComrade,
    };

    //Send Form Data to API Route
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    // 👇️ clear all input values in the form
    setName("");
    setEmail("");
    setMessage("");
    setPortfolio("");
    setLocation("");
    setComrade("");

    //Toggle The Form Div
    setSuccess(true);
  }

  function reloadForm() {
    setSuccess(false);
  }

  return (
    <div className={classes.divForm}>
      <form
        onSubmit={submitHandler}
        style={{ display: success ? "none" : "block" }}
      >
        <div className={classes.formInputDiv}>
          <div className={classes.label}>
            <label htmlFor="name">
              What Do We Call You?:
              <span
                style={{
                  color: "blue",
                  fontSize: "0.65rem",
                  float: "right",
                }}
              >
                *Required
              </span>
            </label>
          </div>
          <input
            required
            className={classes.input}
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            ref={nameRef}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <p
            style={{
              display: nameSubmitted ? "block" : "none",
              color: "red",
              fontSize: "0.8rem",
            }}
          >
            Comrade, The Name Field is empty. What's Your Name.
          </p>
        </div>

        <div className={classes.formInputDiv}>
          <div className={classes.label}>
            <label htmlFor="email">
              Your Email Address:
              <span
                style={{
                  color: "blue",
                  fontSize: "0.65rem",
                  float: "right",
                }}
              >
                *Required
              </span>
            </label>
          </div>
          <input
            required
            className={classes.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
            ref={emailRef}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <p
            style={{
              display: emailSubmitted ? "block" : "none",
              color: "red",
              fontSize: "0.8rem",
            }}
          >
            Comrade, The Email field is either empty or invalid.
          </p>
        </div>

        <div className={classes.formInputDiv}>
          <div className={classes.label}>
            <label htmlFor="purpose">
              Purpose Of Contact:
              <span
                style={{
                  color: "blue",
                  fontSize: "0.65rem",
                  float: "right",
                }}
              >
                *Required
              </span>
            </label>
          </div>
          <select
            style={{
              background: "#EFF0F5",
              fontSize: "0.85rem",
              padding: "0 1rem",
              fontFamily: "'Source Sans Pro', sans-serif",
            }}
            id="purpose"
            name="purpose"
            className={classes.input}
            required
            ref={purposeRef}
          >
            <option value="General Inquiries">General Inquiries</option>
            <option value="Work / Collaboration">Work / Collaboration</option>
            <option value="Endorsement / Partnership">
              Endorsement / Partnership
            </option>
            <option value="Quotes / Pricing">Quotes / Project Plan</option>
          </select>
        </div>

        <div className={classes.formInputDiv}>
          <div className={classes.label}>
            <label htmlFor="message">
              Drop Message:
              <span
                style={{
                  color: "blue",
                  fontSize: "0.65rem",
                  float: "right",
                }}
              >
                *Required
              </span>
            </label>
          </div>
          <textarea
            className={classes.textarea}
            type="text"
            rows="5"
            cols="50"
            id="message"
            name="message"
            placeholder="Give us the full gist. Tell us Wassup!"
            required
            ref={messageRef}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <p
            style={{
              display: messageSubmitted ? "block" : "none",
              color: "red",
              fontSize: "0.8rem",
            }}
          >
            Comrade, Talk to us, don't leave us empty.
          </p>
        </div>

        <div className={classes.formInputDiv}>
          <div className={classes.label}>
            <label htmlFor="portfolio">Link To Portfolio (Optional):</label>
          </div>
          <input
            className={classes.input}
            type="text"
            id="portfolio"
            name="portfolio"
            placeholder="Enter a link to your portoflio"
            ref={portfolioRef}
            value={portfolio}
            onChange={(event) => setPortfolio(event.target.value)}
          />
        </div>

        <div className={classes.formRow}>
          <div className={classes.formColumn}>
            <div className={classes.label}>
              <label htmlFor="location">
                Your Location:
                <span
                  style={{
                    color: "blue",
                    fontSize: "0.65rem",
                    float: "right",
                  }}
                >
                  *Required
                </span>
              </label>
            </div>
            <input
              required
              className={classes.input}
              type="text"
              id="location"
              name="location"
              placeholder="Where Are You Based?"
              ref={locationRef}
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <p
              style={{
                display: locationSubmitted ? "block" : "none",
                color: "red",
                fontSize: "0.8rem",
              }}
            >
              What is your location, Comrade?
            </p>
          </div>
          <div className={classes.formColumn}>
            <div className={classes.label}>
              <label htmlFor="comrade">
                Hodl A Comrade?:
                <span
                  style={{
                    color: "blue",
                    fontSize: "0.65rem",
                    float: "right",
                  }}
                >
                  *Required
                </span>
              </label>
            </div>
            <input
              required
              className={classes.input}
              type="text"
              id="comrade"
              name="comrade"
              placeholder="Enter Yes or No"
              ref={comradeRef}
              value={comrade}
              onChange={(event) => setComrade(event.target.value)}
            />
            <p
              style={{
                display: comradeSubmitted ? "block" : "none",
                color: "red",
                fontSize: "0.8rem",
              }}
            >
              Tell us the truth. Yes or No?
            </p>
          </div>
        </div>

        <div className={classes.buttonDiv}>
          <button
            onClick={clickHandler}
            className={classes.formButton}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <div
        style={{
          display: success ? "block" : "none",
          color: "green",
          textAlign: "center",
        }}
      >
        <h3>Form Submitted Successfully.</h3>
        <p style={{ color: "black" }}>
          Thanks Dear Comrade. Expect to hear from us.
        </p>

        <div style={{ marginTop: "1rem", padding: "1rem 0" }}>
          <span onClick={reloadForm}>
            <button className={classes.formButton}>Fill Form Again</button>
          </span>
          <div style={{ marginTop: "1.5rem" }}>
            <Button link="/">
              <span style={{ fontSize: "1rem" }}>Go Back Home</span>
              <span style={{ position: "relative", top: "6px", left: "5px" }}>
                <HiArrowNarrowRight size={20} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
