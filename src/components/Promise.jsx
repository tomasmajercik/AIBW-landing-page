import { promise } from "../content.js";

export default function Promise() {
  return (
    <section className="section section--promise">
      <div className="shell promise">
        <p className="eyebrow eyebrow--light">{promise.eyebrow}</p>
        <h2 className="promise__title">{promise.title}</h2>
        <p className="promise__body">{promise.body}</p>
      </div>
    </section>
  );
}
