import { how } from "../content.js";

// Kroky pod sebou, každý oddelený vlasovou linkou.
// Číslo vľavo, text vpravo.
export default function HowItWorks() {
  return (
    <section className="section section--rule" id="ako">
      <div className="shell">
        <p className="eyebrow">{how.eyebrow}</p>
        <h2 className="section__title">{how.title}</h2>
        <p className="section__lede">{how.lede}</p>

        <ol className="steps">
          {how.steps.map((step, index) => (
            <li className="step" key={step.title}>
              <span className="step__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
