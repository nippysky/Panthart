/* eslint-disable react/no-unescaped-entities */
import classes from "../components/componentsstyles/Form.module.css";
import { useRef, useState } from "react";

export default function Newsletter() {
  //Using useState to validate form
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  //using useRef to hold form data
  const emailLetterRef = useRef();

  //function for OnClick Method
  function handleClick() {
    if (!email || !email.includes("@") || email === "") {
      setEmailSubmitted(true);
    } else {
      setEmailSubmitted(false);
    }
  }

  function subscribeHandler(event) {
    event.preventDefault();

    const enteredEmailLetter = emailLetterRef.current.value;

    fetch(process.env.NEXT_PUBLIC_FIRE_HOSTNAME, {
      method: "POST",
      body: JSON.stringify({ emailLetter: enteredEmailLetter }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    // .then((data) => console.log(data));

    // Clear all input values in the form
    setEmail("");

    //Toggle The Form Div
    setEmailSuccess(true);
  }

  function reloadForm() {
    setEmailSuccess(false);
  }

  return (
    <div
      className={classes.newsDiv}
      style={{
        marginTop: "3rem",
        backgroundColor: "white",
        padding: "1rem 2rem",
        borderRadius: "7px",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.24)",
      }}
    >
      <form
        onSubmit={subscribeHandler}
        style={{ display: emailSuccess ? "none" : "block" }}
      >
        <div className={classes.formInputDiv}>
          <div>
            <h2>Let's Keep You Updated</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.85" }}>
              Subscribe To Our Newsletter. We will carry you along with what we
              are up to. Do not miss out on anything concerning Us.
            </p>
          </div>
          <input
            required
            className={classes.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
            ref={emailLetterRef}
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
            This email field is empty or invalid. Enter your email address.
          </p>
          <div className={classes.buttonDiv}>
            <button
              onClick={handleClick}
              style={{ width: "100%" }}
              className={classes.formButton}
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>

      <div
        style={{
          display: emailSuccess ? "block" : "none",
          color: "green",
          textAlign: "center",
        }}
      >
        <h3>You have successfully subscribed.</h3>
        <div style={{ marginTop: "1rem", padding: "1rem 0" }}>
          <span onClick={reloadForm}>
            <button className={classes.formButton}>Reload Form</button>
          </span>
        </div>
      </div>
    </div>
  );
}
