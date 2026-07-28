import { how } from "../content.js";

export default function HowItWorks() {
  return (
    <section className="section section--how" id="ako">
      <div className="shell">
        <p className="eyebrow">{how.eyebrow}</p>
        <h2 className="section__title">{how.title}</h2>

        <div className="layers">
          {how.layers.map((layer) => (
            <article className={`layer layer--${layer.color}`} key={layer.tag}>
              <p className="layer__tag">{layer.tag}</p>
              <h3 className="layer__title">{layer.title}</h3>
              <p className="layer__body">{layer.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
