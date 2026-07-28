import { hero } from "../content.js";
import WaitlistForm from "./WaitlistForm.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__text">
        <p className="eyebrow">{hero.eyebrow}</p>

        <h1 className="hero__title">
          {hero.title}
          <br />
          <em>{hero.titleAccent}</em>
        </h1>

        <p className="hero__lede">{hero.lede}</p>

        <div className="hero__form" id="zapisat">
          <p className="hero__lead">{hero.formLead}</p>
          <WaitlistForm id="hero" />
          <p className="hero__note">{hero.formNote}</p>
        </div>
      </div>
    </section>
  );
}
