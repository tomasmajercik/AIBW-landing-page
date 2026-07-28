const FORMAT_COLORS = {
  vino: "var(--vino)",
  "vino-soft": "var(--vino-soft)",
  pivo: "var(--pivo)",
  "pivo-soft": "var(--pivo-soft)",
  kava: "var(--kava)",
  caj: "var(--caj)",
  ine: "var(--ine)",
};

export function Avatar({ initials, tone = "ine", small = false }) {
  return (
    <span
      className={`avatar${small ? " avatar--sm" : ""}`}
      style={{ background: FORMAT_COLORS[tone] ?? tone }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export function EmptySeat({ small = false, light = false }) {
  return (
    <span
      className={`avatar avatar--empty${small ? " avatar--sm" : ""}${
        light ? " avatar--empty-light" : ""
      }`}
      aria-hidden="true"
    >
      +
    </span>
  );
}

export function Cluster({ children }) {
  return <span className="cluster">{children}</span>;
}
