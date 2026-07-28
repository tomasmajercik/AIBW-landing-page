import Waitlist from "./Waitlist.jsx";

export default function Closing() {
  return (
    <section className="section wrap" id="zoznam">
      <div className="closing">
        <span className="mono">Bratislava · prvé stoly čoskoro</span>
        <h2>Prisadneš si?</h2>
        <p>
          Otvárame s kávou a pivom, pár podnikmi a pár desiatkami stolov. Nechaj
          e-mail a budeš pri tom medzi prvými.
        </p>
        <Waitlist note="Jeden e-mail, keď otvoríme. Nič viac." />
      </div>
    </section>
  );
}
