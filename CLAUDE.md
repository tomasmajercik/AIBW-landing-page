# Prisadni si — landing page

Landing page pre platformu **Prisadni si**: ľudia si vypíšu stretnutie pri
káve, čaji, pive alebo víne a ostatní sa k nim pridajú.

Pravidlá produktu, ktoré musia byť z textov cítiť:

- **Vždy traja a viac ľudí.** Nie je to zoznamka, formát to ustráži sám.
- **Organizátor určuje vždy nápoj a čas.** Podnik a téma môžu ostať otvorené —
  na tých sa dohodnú až tí, čo sa pridali.
- **Nič sa nepredpisuje.** Chceš na pivo pozerať futbal? Vytvoríš stôl.
  Chceš si len tak posedieť pri čaji? To isté.
- Celé Slovensko, prvé stretnutia budú najhustejšie v Bratislave.

## Stack

- React (JavaScript, nie TypeScript)
- Vite ako build nástroj
- Obyčajné CSS v `src/styles.css`, žiadny Tailwind
- Hosting: Firebase Hosting

## Príkazy

- `npm run dev` - spustí lokálny vývoj (zvyčajne na http://localhost:5173)
- `npm run build` - build do priečinka `dist/`
- `npm run preview` - lokálne skontroluje výsledok buildu

Pred každým nasadením spusti `npm run build` a over, že prejde bez chyby.

## Konvencie

- Komponenty v `src/components/`, jeden súbor = jeden komponent
- Funkčné komponenty, žiadne class components
- Názvy komponentov s veľkým začiatočným písmenom: `HowItWorks.jsx`
- Odsadenie 2 medzery
- **Všetky texty patria do `src/content.js`**, nie do komponentov
- Farby sa menia len v sekcii 1 v `src/styles.css`
- Žiadne nové knižnice bez toho, aby si sa najprv spýtal

## Vzhľad

Rovnaký jazyk ako mobilná appka: krémové pozadie, biele zaoblené kartičky,
guľaté tlačidlá, popisky v monospace fonte veľkými písmenami.

Štyri farby podľa nápoja - káva `#6B4126`, čaj `#3D6B47`, pivo `#B57A16`,
víno `#7B2233`. Vínová je zároveň hlavná farba značky.

Logo je dvojfarebné: „pri" čiernou, „sadni si" vínovou.

## Obsah a tón

- Všetky texty na stránke sú v slovenčine
- Píš ľudsky a konkrétne, nie korporátne - žiadne „revolučná platforma"
- Cieľová skupina: ľudia, ktorí by radi niekam zašli, len nemajú s kým
- Vytvoriť aj pridať sa je zdarma

## Ako so mnou pracovať

- Som začiatočníčka. Vysvetli, čo robíš a prečo, nepredpokladaj znalosť pojmov.
- Pri väčších zmenách mi najprv povedz plán, až potom píš kód.
- Keď treba niečo spustiť v termináli, napíš presný príkaz.
