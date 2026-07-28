const STEPS = [
  {
    n: "01",
    title: "Vyber si stôl",
    text: "Téma, čas, podnik aj voľné miesta sú na karte. Nič, čo by nechalo otvorené kde alebo kedy.",
  },
  {
    n: "02",
    title: "Prisadni si",
    text: "Jedno ťapnutie a miesto je tvoje. Deň vopred potvrdíš, že ideš, a vlákno stola ti povie, kde presne sedia.",
  },
  {
    n: "03",
    title: "Sadnite si",
    text: "Hostiteľ príde skôr a obsadí stôl. Po stretnutí stačí jedno ťapnutie: „chcem sa vidieť znova“.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section wrap" id="ako">
      <div className="section__head">
        <span className="mono">Ako to funguje</span>
        <h2>Žiadne podujatia. Stoly.</h2>
        <p>
          Stôl je malá skupina, ktorá sa stretne pri konkrétnom nápoji a
          konkrétnej téme. Nikdy anonymný dav, vždy pár ľudí, medzi ktorých sa
          dá prisadnúť.
        </p>
      </div>
      <div className="steps">
        {STEPS.map((s) => (
          <article className="step" key={s.n}>
            <span className="mono">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
