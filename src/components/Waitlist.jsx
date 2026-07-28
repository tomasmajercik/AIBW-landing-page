import { useState } from "react";
import { db, isFirebaseConfigured } from "../lib/firebase";

export default function Waitlist({ note }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error

  async function submit(e) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    try {
      if (isFirebaseConfigured) {
        const { addDoc, collection, serverTimestamp } = await import(
          "firebase/firestore"
        );
        await addDoc(collection(db, "waitlist"), {
          email: email.trim(),
          createdAt: serverTimestamp(),
        });
      } else {
        // Firebase ešte nie je nastavený (.env) — e-mail sa nikam neuloží.
        console.info("[waitlist] Firebase nenastavený, e-mail:", email.trim());
      }
      setState("done");
    } catch (err) {
      console.error("[waitlist]", err);
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="waitform__done" role="status">
        <strong>Máš miesto na zozname.</strong>
        Ozveme sa, keď sa v Bratislave otvoria prvé stoly.
      </div>
    );
  }

  return (
    <form className="waitform-block" onSubmit={submit}>
      <div className="waitform">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tvoj@email.sk"
          aria-label="E-mailová adresa"
        />
        <button className="pill pill--ink" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Moment…" : "Daj mi vedieť"}
        </button>
      </div>
      <p className="waitform__note">
        {state === "error"
          ? "Niečo sa pokazilo, skús to o chvíľu znova."
          : note ?? "Žiadny spam. Jeden e-mail, keď otvoríme."}
      </p>
    </form>
  );
}
