import { drinks } from "../content.js";

// Nápoje vedľa seba, oddelené len tenkou linkou.
// Poradové číslo (01, 02...) sa dopĺňa automaticky.
export default function Drinks() {
  return (
    <section className="section" id="napoje">
      <div className="shell">
        <p className="eyebrow">{drinks.eyebrow}</p>
        <h2 className="section__title">{drinks.title}</h2>
        <p className="section__lede">{drinks.lede}</p>

        <ul className="drinks">
          {drinks.items.map((item, index) => (
            <li className={`drink drink--${item.key}`} key={item.key}>
              <span className="drink__num">
                {item.icon ?? String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="drink__name">{item.name}</h3>
              {item.example && <p className="drink__example">{item.example}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
