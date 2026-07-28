# Prisadni si — landing page

Landing page pre **Prisadni si** — platformu, kde si ľudia vypíšu stretnutie pri
káve, čaji, pive alebo víne a ostatní sa k nim pridajú.

Pravidlo, na ktorom celá vec stojí: **vždy traja a viac ľudí.** Nie je to
zoznamka a formát to ustráži sám.

---

## Ako to spustiť

```bash
npm install
npm run dev
```

Stránka pobeží na `http://localhost:5173`. Adresa funguje len na tvojom
počítači — `localhost` znamená „tento počítač".

Ďalšie príkazy:

| Príkaz | Čo robí |
|---|---|
| `npm run dev` | spustí stránku na localhoste |
| `npm run build` | pripraví hotovú verziu do priečinka `dist/` |
| `npm run preview` | ukáže, ako vyzerá zbuildovaná verzia |

---

## Kde čo meniť

### Texty

**Všetky texty stránky sú v jedinom súbore: `src/content.js`.**
Do ostatných súborov nemusíš chodiť. Meň len text medzi úvodzovkami a nechaj
čiarky tam, kde sú.

| Časť súboru | Čo ovláda |
|---|---|
| `wordmark` | logo — rozdelenie na „pri" (čierne) a „sadni si" (vínové) |
| `hero` | úvodný nadpis, podnadpis a veta nad formulárom |
| `preview` | text pri telefóne + celý obsah obrazovky v ňom |
| `drinks` | štyri nápoje a príklady stretnutí |
| `how` | štyri kroky „ako to funguje" |
| `faq` | rozbaľovacie otázky a odpovede |
| `finalCta` | záverečná výzva |
| `form` | texty formulára a hlášky |

Keď pridáš alebo ubereš položku v zozname (napr. jednu otázku), stránka sa
prispôsobí sama — čísla krokov aj nápojov sa prečíslujú automaticky.

### Vzhľad

`src/styles.css`, hneď na začiatku v sekcii 1. Sú tam všetky farby na jednom
mieste aj s popiskami. Keď prepíšeš farbu tam, zmení sa všade naraz.

Paleta je rovnaká ako v appke: krémové pozadie, biele zaoblené kartičky
a štyri farby podľa nápoja — káva hnedá, čaj zelená, pivo jantárová,
víno burgundy.

---

## Ako je to poskladané

- **React** + **Vite** (JavaScript, nie TypeScript)
- Obyčajné CSS v jednom súbore, žiadny Tailwind
- Jeden komponent = jeden súbor v `src/components/`

| Komponent | Sekcia na stránke |
|---|---|
| `Nav.jsx` | horná lišta |
| `Hero.jsx` | úvod s nadpisom a formulárom |
| `Preview.jsx` | telefón s ukážkou appky |
| `Drinks.jsx` | štyri nápoje |
| `HowItWorks.jsx` | štyri kroky |
| `Faq.jsx` | rozbaľovacie otázky |
| `FinalCta.jsx` | záverečná výzva |
| `Footer.jsx` | pätička |
| `WaitlistForm.jsx` | formulár na zapísanie e-mailu |

Telefón v sekcii `Preview` **nie je obrázok** — je poskladaný z CSS, takže je
ostrý na akejkoľvek obrazovke a jeho obsah sa mení v `content.js`.

---

## Formulár na zapísanie

Beží v ukážkovom režime — e-maily sa nikam neukladajú, len sa vypíšu do
konzoly prehliadača. Aby sa ukladali naozaj, treba doplniť prístupy k Firebase
(`.env` podľa `.env.example`) a projekt v `.firebaserc`.
