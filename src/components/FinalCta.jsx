import { finalCta } from "../content.js";
import WaitlistForm from "./WaitlistForm.jsx";

export default function FinalCta() {
  return (
    <section className="section section--cta">
      <div className="shell cta">
        <h2 className="cta__title">{finalCta.title}</h2>
        <p className="cta__body">{finalCta.body}</p>
        <WaitlistForm id="final" />
      </div>
    </section>
  );
}
