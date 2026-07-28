import { gallery } from "../content.js";

// Trojica fotiek. Súbory ležia v public/fotky landing page/ -
// ak tam pridáš ďalšiu, stačí ju zapísať do content.js (sekcia `gallery`).
// Priečinok má v názve medzery, preto sa cesta obaľuje encodeURI.
const PRIECINOK = "/fotky landing page";

export default function Gallery() {
  return (
    <section className="section section--gallery">
      <div className="shell">
        <p className="eyebrow">{gallery.eyebrow}</p>

        <ul className="gallery">
          {gallery.items.map((item) => (
            <li className="gallery__item" key={item.src}>
              <figure className="gallery__figure">
                <img
                  className="gallery__photo"
                  src={encodeURI(`${PRIECINOK}/${item.src}`)}
                  alt={item.alt}
                  width="1080"
                  height="1440"
                  loading="lazy"
                />
                <figcaption className="gallery__caption">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
