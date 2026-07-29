// Značka: kruh z ľudí, ktorý má jedno voľné miesto —
// a jeden človek (farebný bod) doň práve zapadá.
// Presne to, o čom je celý projekt: komunita existuje a je v nej miesto pre teba.
export default function Logo({ size = 26 }) {
  return (
    <svg
      className="logo"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Communio"
    >
      {/* päť ľudí, ktorí už v komunite sú */}
      <circle cx="24.66" cy="21" r="2.4" className="logo__dot" />
      <circle cx="16" cy="26" r="2.4" className="logo__dot" />
      <circle cx="7.34" cy="21" r="2.4" className="logo__dot" />
      <circle cx="7.34" cy="11" r="2.4" className="logo__dot" />
      <circle cx="24.66" cy="11" r="2.4" className="logo__dot" />

      {/* voľné miesto navrchu */}
      <circle
        cx="16"
        cy="6"
        r="2.4"
        className="logo__slot"
        strokeDasharray="2 2.4"
      />

      {/* ten, kto sa práve pridáva */}
      <circle cx="16" cy="1.6" r="1.6" className="logo__joiner" />
    </svg>
  );
}
