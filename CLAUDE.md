# Landing page

Landing page pre platformu, ktorá spája ľudí okolo lokálnych akcií a aktivít.
Prvý trh: Bratislava. Cieľom stránky je získať prvých organizátorov akcií.

## Stack

- React (JavaScript, nie TypeScript)
- Vite ako build nástroj
- Tailwind CSS na štýlovanie
- Hosting: Firebase Hosting

## Príkazy

- `npm run dev` — spustí lokálny vývoj (zvyčajne na http://localhost:5173)
- `npm run build` — build do priečinka `dist/`
- `npm run preview` — lokálne skontroluje výsledok buildu
- `firebase deploy --only hosting` — nasadenie na Firebase

Pred každým nasadením spusti `npm run build` a over, že prejde bez chyby.

## Konvencie

- Komponenty v `src/components/`, jeden súbor = jeden komponent
- Funkčné komponenty, žiadne class components
- Názvy komponentov s veľkým začiatočným písmenom: `HeroSection.jsx`
- Odsadenie 2 medzery
- Tailwind utility triedy priamo v JSX, nie samostatné CSS súbory
- Žiadne nové knižnice bez toho, aby si sa najprv spýtal

## Obsah a tón

- Všetky texty na stránke sú v slovenčine
- Píš ľudsky a konkrétne, nie korporátne — žiadne "revolučná platforma" ani "Welcome to our platform"
- Cieľová skupina: organizátori akcií v Bratislave a ľudia, ktorí chcú nájsť čo sa deje v okolí
- Vytváranie akcií je zdarma — to je hlavný argument, spomínaj ho

## Ako so mnou pracovať

- Som začiatočníčka. Vysvetli, čo robíš a prečo, nepredpokladaj znalosť pojmov.
- Pri väčších zmenách mi najprv povedz plán, až potom píš kód.
- Keď treba niečo spustiť v termináli, napíš presný príkaz.
