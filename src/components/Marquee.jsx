import { marquee } from "../content";

// Pás beží donekonečna. Zoznam je v kóde dvakrát,
// aby prechod z konca na začiatok nebolo vidieť.
export default function Marquee({ onPick }) {
  const items = [...marquee.items, ...marquee.items];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {items.map((item, i) => (
          <button
            type="button"
            className="marquee__item"
            key={`${item.label}-${i}`}
            onClick={() => onPick(item.interest)}
          >
            {item.label}
            <span className="marquee__dot" aria-hidden="true">
              •
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
