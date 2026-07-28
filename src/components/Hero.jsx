import { Avatar, Cluster, EmptySeat } from "./Avatars.jsx";

function PhoneDemo() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__top">
        <span className="phone__brand">prisadni si</span>
        <span className="phone__you">TY</span>
      </div>

      <div className="phone__proof">
        <Cluster>
          <Avatar initials="LK" tone="vino" small />
          <Avatar initials="JD" tone="pivo" small />
          <Avatar initials="ZB" tone="kava" small />
        </Cluster>
        <span>
          <strong>11 ľudí</strong> ide dnes večer von. Traja z nich majú voľné
          miesto.
        </span>
      </div>

      <div className="tcard tcard--color tcard--vino">
        <div className="tcard__metarow">
          <span className="mono">Víno · 19:30</span>
          <span className="badge">1 miesto</span>
        </div>
        <Cluster>
          <Avatar initials="LK" tone="#712035" />
          <Avatar initials="MJ" tone="vino-soft" />
          <Avatar initials="T" tone="#a34b62" />
          <EmptySeat light />
        </Cluster>
        <h3 className="tcard__title">Lucia, Martin a Tereza</h3>
        <p className="tcard__quote">
          „Prečo ešte čítame romány, keď máme seriály?“
        </p>
        <span className="pill pill--cream">Prisadnem si</span>
      </div>

      <div className="duo">
        <Cluster>
          <Avatar initials="ZB" tone="kava" small />
          <Avatar initials="V" tone="ine" small />
        </Cluster>
        <div className="duo__body">
          <div className="duo__names">Zuzka a Vierka</div>
          <span className="mono">SO 10:00 · káva · len ženy</span>
        </div>
        <span className="pill pill--ink">Idem</span>
      </div>

      <div className="phone__tabs">
        <div className="phone__tablist">
          <span>Stoly</span>
          <span>Moje</span>
          <span>Ja</span>
        </div>
        <span className="pill pill--ink">+ Založiť stôl</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero wrap" id="hore">
      <div>
        <p className="mono hero__eyebrow">Bratislava · čoskoro</p>
        <h1>
          Nájdi ľudí cez to,
          <br />
          čo ťa <em>baví.</em>
        </h1>
        <p className="hero__sub">
          Malé stoly, <strong>jedna téma</strong> a podnik, ktorý poznáme. Vyber
          si, o čom sa chceš rozprávať, a prisadni si k ľuďom, ktorých to baví
          tiež.
        </p>
      </div>
      <PhoneDemo />
    </header>
  );
}
