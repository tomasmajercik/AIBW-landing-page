import { Avatar, Cluster, EmptySeat } from "./Avatars.jsx";

const TABLES = [
  {
    seatsLabel: "2 voľné miesta",
    desc: "Ján a Peťo chcú vysvetliť, ako naozaj funguje AI",
    meta: "Pivo · ST 20:00 · Amorté",
    avatars: [
      { initials: "JD", tone: "pivo" },
      { initials: "P", tone: "pivo-soft" },
    ],
    empty: 2,
  },
  {
    seatsLabel: "1 voľné miesto",
    desc: "Lucia, Martin a Tereza sa bavia o knihách vs. seriáloch",
    meta: "Víno · UT 19:30 · Pod hradom",
    avatars: [
      { initials: "LK", tone: "vino" },
      { initials: "MJ", tone: "vino-soft" },
      { initials: "T", tone: "ine" },
    ],
    empty: 1,
  },
  {
    seatsLabel: "Chýba jedna do troch",
    desc: "Zuzka a Vierka o zmene kariéry po tridsiatke",
    meta: "Káva · SO 10:00 · len ženy",
    avatars: [
      { initials: "ZB", tone: "kava" },
      { initials: "V", tone: "ine" },
    ],
    empty: 1,
  },
];

export default function Feed() {
  return (
    <section className="section wrap" id="stoly">
      <div className="section__head">
        <span className="mono">Tento týždeň</span>
        <h2>Zoznam voľných miest, nie zoznam akcií</h2>
        <p>
          Feed ti neukazuje, čo sa deje, ale kde ťa čakajú. Každá karta je
          konkrétna: kto tam sedí, o čom sa rozprávajú, kde a o koľkej.
        </p>
      </div>
      <div className="feed">
        {TABLES.map((t) => (
          <article className="tcard" key={t.desc}>
            <div className="tcard__body">
              <Cluster>
                {t.avatars.map((a) => (
                  <Avatar key={a.initials} initials={a.initials} tone={a.tone} />
                ))}
                {Array.from({ length: t.empty }, (_, i) => (
                  <EmptySeat key={i} />
                ))}
              </Cluster>
              <h3 className="tcard__title tcard__title--vino">{t.seatsLabel}</h3>
              <p className="tcard__desc">{t.desc}</p>
              <p className="mono tcard__meta">{t.meta}</p>
              <span className="pill pill--vino">Sadnem k nim</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
