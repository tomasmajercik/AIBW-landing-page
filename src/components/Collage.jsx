import { collage } from "../content.js";

// Koláž fotiek pod úvodným nadpisom.
// Súbory ležia v public/fotky landing page/ - ak tam pridáš ďalšiu
// fotku, stačí ju zapísať do content.js (sekcia `collage`).
const PRIECINOK = "/fotky landing page";

export default function Collage() {
  return (
    <ul className="collage">
      {collage.items.map((item) => (
        <li className="collage__item" key={item.src}>
          <figure className="collage__frame">
            <img
              className="collage__photo"
              src={encodeURI(`${PRIECINOK}/${item.src}`)}
              alt={item.alt}
              width="600"
              height="800"
            />
            <figcaption className="collage__caption">{item.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
