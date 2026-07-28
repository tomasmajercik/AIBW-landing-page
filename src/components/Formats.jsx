const FORMATS = [
  {
    key: "kava",
    name: "Káva",
    seats: "od 3 ľudí",
    text: "Klasika s najnižšou bariérou. Krátko, jednoducho, nezáväzne.",
  },
  {
    key: "caj",
    name: "Čaj",
    seats: "od 3 ľudí",
    text: "Pokojnejšie tempo, bez alkoholu.",
  },
  {
    key: "pivo",
    name: "Pivo",
    seats: "od 3 ľudí",
    adult: true,
    text: "Uvoľnené a skupinové.",
  },
  {
    key: "vino",
    name: "Víno",
    seats: "od 3 ľudí",
    adult: true,
    text: "Pre témy, na ktoré je fajn viac času.",
  },
];

export default function Formats() {
  return (
    <section className="section wrap" id="formaty">
      <div className="section__head">
        <span className="mono">Formáty</span>
        <h2>Vyber si nápoj, ktorý ťa baví</h2>
        <p>
          Témy a ľudia sú to hlavné. Nápoj je len voľba, ktorá vás pri stole
          spojí — vyber si, čo máš rád, a komunita príde s ním.
        </p>
      </div>
      <div className="formats">
        {FORMATS.map((f) => (
          <article className={`format format--${f.key}`} key={f.key}>
            <div className="format__top">
              <span className="mono">{f.seats}</span>
              {f.adult && <span className="format__badge">18+</span>}
            </div>
            <h3>{f.name}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
