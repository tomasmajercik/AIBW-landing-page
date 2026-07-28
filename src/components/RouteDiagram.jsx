import { diagram } from "../content.js";

// Podpisový prvok stránky: linka ako v mape MHD.
// Trasa vedie zľava doprava a v bode "Spoznáš ľudí" sa rozdvojí -
// presne tam, kde ostatné appky končia.
export default function RouteDiagram() {
  return (
    <figure className="route">
      <p className="eyebrow route__eyebrow">{diagram.eyebrow}</p>

      {/* ── Široké obrazovky ── */}
      <svg
        className="route__svg"
        viewBox="0 0 920 320"
        aria-hidden="true"
      >
        <g
          fill="none"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className="route__line"
            pathLength="1"
            d="M64 160 H470"
            stroke="var(--teal)"
          />
          <path
            className="route__line route__line--branch"
            pathLength="1"
            d="M470 160 H524 L594 90 H846"
            stroke="var(--raspberry)"
          />
          <path
            className="route__line route__line--branch"
            pathLength="1"
            d="M470 160 H524 L594 230 H846"
            stroke="var(--amber)"
          />
        </g>

        <Stop x={64} y={160} color="var(--teal)" />
        <Stop x={267} y={160} color="var(--teal)" />
        <Stop x={470} y={160} color="var(--ink)" big />
        <Stop x={846} y={90} color="var(--raspberry)" />
        <Stop x={846} y={230} color="var(--amber)" />

        <Label x={64} y={200} anchor="start">
          {diagram.stops[0].label}
        </Label>
        <Label x={267} y={200} anchor="middle">
          {diagram.stops[1].label}
        </Label>
        <Label x={470} y={200} anchor="middle" strong>
          {diagram.stops[2].label}
        </Label>
        <Label x={846} y={64} anchor="end">
          {diagram.branches[0].label}
        </Label>
        <Label x={846} y={270} anchor="end">
          {diagram.branches[1].label}
        </Label>
      </svg>

      {/* ── Mobil: tá istá trasa, len zvislo ── */}
      <ol className="route__stack">
        {diagram.stops.map((stop, i) => (
          <li
            key={stop.label}
            className={`route__step route__step--${stop.color}${
              i === diagram.stops.length - 1 ? " route__step--junction" : ""
            }`}
          >
            {stop.label}
          </li>
        ))}
        {diagram.branches.map((branch) => (
          <li
            key={branch.label}
            className={`route__step route__step--branch route__step--${branch.color}`}
          >
            {branch.label}
          </li>
        ))}
      </ol>

      <figcaption className="route__caption">{diagram.caption}</figcaption>
    </figure>
  );
}

function Stop({ x, y, color, big = false }) {
  return (
    <g className="route__stop">
      <circle cx={x} cy={y} r={big ? 17 : 13} fill={color} />
      <circle cx={x} cy={y} r={big ? 8 : 5.5} fill="var(--paper)" />
    </g>
  );
}

function Label({ x, y, anchor, strong = false, children }) {
  return (
    <text
      className={`route__label${strong ? " route__label--strong" : ""}`}
      x={x}
      y={y}
      textAnchor={anchor}
    >
      {children}
    </text>
  );
}
