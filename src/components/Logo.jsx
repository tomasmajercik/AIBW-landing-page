// Značka: jeden puzzle dielik — výstupok hore a vpravo,
// priehlbina dole a vľavo. Ten istý tvar, aký je v sekcii o dvoch stranách.
export default function Logo({ size = 26 }) {
  return (
    <svg
      className="logo"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Zapadni"
    >
      <path
        className="logo__piece"
        d="M5 3 h9 a3.2 3.2 0 1 1 4 0 h9 a2 2 0 0 1 2 2 v9 a3.2 3.2 0 1 0 0 4 v9 a2 2 0 0 1 -2 2 h-9 a3.2 3.2 0 1 0 -4 0 h-9 a2 2 0 0 1 -2 -2 v-9 a3.2 3.2 0 1 1 0 -4 v-9 a2 2 0 0 1 2 -2 z"
      />
    </svg>
  );
}
