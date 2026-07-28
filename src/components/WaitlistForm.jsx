import { useState } from "react";
import { saveEmail } from "../lib/firebase.js";
import { form } from "../content.js";

export default function WaitlistForm({ id }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | busy | done | error
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setStatus("error");
      setMessage(form.errorEmail);
      return;
    }

    setStatus("busy");
    try {
      await saveEmail(value);
      setStatus("done");
      setMessage(form.success);
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(form.errorGeneric);
    }
  }

  return (
    <div className="waitlist">
      <form className="waitlist__form" onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor={`${id}-email`}>
          E-mailová adresa
        </label>
        <input
          id={`${id}-email`}
          className="waitlist__input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={form.placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
        />
        <button className="btn" type="submit" disabled={status === "busy"}>
          {status === "busy" ? form.buttonBusy : form.button}
        </button>
      </form>

      <p
        className={`waitlist__message waitlist__message--${status}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
}
