import { finalCta } from "../content.js";
import WaitlistForm from "./WaitlistForm.jsx";

export default function FinalCta() {
  return (
    <section className="section section--cta">
      <div className="shell cta">
        <p className="eyebrow">{finalCta.eyebrow}</p>
        <h2 className="cta__title">
          {finalCta.title}
          <br />
          <em>{finalCta.titleAccent}</em>
        </h2>
        <p className="cta__body">{finalCta.body}</p>
        <WaitlistForm id="final" />
      </div>
    </section>
  );
}
