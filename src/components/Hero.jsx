import { hero } from "../content.js";
import Collage from "./Collage.jsx";
import RouteDiagram from "./RouteDiagram.jsx";
import WaitlistForm from "./WaitlistForm.jsx";

// Fotka na pozadí nadpisu sa vyberá v content.js (hero.background).
// Sem sa dosadí ako premenná, ktorú si potom prevezme styles.css.
const PRIECINOK = "/fotky landing page";

export default function Hero() {
  const pozadie = hero.background
    ? { "--hero-foto": `url("${encodeURI(`${PRIECINOK}/${hero.background}`)}")` }
    : undefined;

  return (
    <section className="hero" id="top">
      {/* Horná časť s fotkou na pozadí — končí nad kolážou */}
      <div className="hero__banner" style={pozadie}>
        <div className="shell">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__lede">{hero.lede}</p>

          <div className="hero__form" id="zapisat">
            <WaitlistForm id="hero" />
            <p className="hero__note">{hero.formNote}</p>
          </div>
        </div>
      </div>

      <div className="shell">
        <Collage />

        <RouteDiagram />
      </div>
    </section>
  );
}
