const ITEMS = [
  {
    label: "Overený telefón",
    title: "Jeden človek, jeden účet",
    text: "Každý účet stojí na overenom čísle. Kto sa správa zle, nevráti sa pod novým menom.",
  },
  {
    label: "Verejné podniky",
    title: "Vždy na overenom mieste",
    text: "Stôl sa koná len v podniku z nášho zoznamu — nikdy na súkromnej adrese.",
  },
  {
    label: "Kto ide",
    title: "Vidíš, ku komu si sadáš",
    text: "Pred prisadnutím vidíš meno, fotku aj hostiteľa stola. Žiadne verejné rebríčky ani hodnotenia ľudí — rozhodneš sa sám.",
  },
  {
    label: "Žiadne DM",
    title: "Len skupinové vlákno",
    text: "Správy existujú len vo vlákne stola, ktoré sa otvorí deň vopred a po stretnutí zavrie. Súkromné správy neexistujú.",
  },
];

export default function Trust() {
  return (
    <section className="section wrap" id="dovera">
      <div className="section__head">
        <span className="mono">Dôvera</span>
        <h2>Cudzí ľudia, žiadne prekvapenia</h2>
        <p>
          Sadnúť si medzi neznámych ľudí chce odvahu. Všetko v produkte je
          postavené tak, aby jej stačilo čo najmenej.
        </p>
      </div>
      <div className="trust">
        {ITEMS.map((i) => (
          <article className="trust__item" key={i.label}>
            <span className="mono">{i.label}</span>
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
