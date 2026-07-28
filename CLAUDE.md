# prisadnisi — kontext projektu

Webová aplikácia (PWA), ktorá spája ľudí okolo malých stolov — skupinka (od 3 ľudí) sa stretne pri nápoji a konkrétnej téme. Veľkosť stola volí hostiteľ (minimum 3, mäkký strop okolo 8), nie je pevne daná formátom.

Názov **prisadnisi** je odvodený od slovesa, na ktorom stojí celý produkt: *sadni si, prisadni si, sadnite si* — fyzicky prisadnúť k stolu aj mentálne si sadnúť s ľuďmi. Značka a slovník UI musia hovoriť jedným hlasom.

**Úplná špecifikácia je v `docs/product-spec.md`. Prečítaj ju pred prácou na produktových funkciách.**

## Rýchly kontext

- Jednotka produktu je **stôl**, nie podujatie: *Káva + knihy, utorok 18:00, 6 miest*
- Dve osi: **formát** (káva / čaj / pivo / víno / iné) × **čo sa deje** (téma rozhovoru alebo spoločná činnosť — zápas, poker, ochutnávka, beh po káve)
- v1: jedno mesto (Bratislava), len nápoje, 6 obrazoviek

## Zásady, ktoré platia pri každom rozhodnutí

1. **Jazyk hovorí o stole, nie o evente.** „prisadnúť si", nie „zúčastniť sa". „hostiteľ", nie „organizátor". Je to zároveň názov produktu — nikdy to nenahrádzaj generickým „join" alebo „attend".
2. **Žiadne platby v v1.** Ak návrh vyžaduje Stripe, zálohy alebo refundy, je zle položený.
3. **Žiadne súkromné správy (DM), nikdy.** Komunikácia existuje len ako skupinové vlákno naviazané na stôl, otvorené 24 h pred a zatvorené 12 h po stretnutí. Toto je hlavná poistka proti tomu, aby sa z produktu stala zoznamka.
4. **Zobrazuj, nerozhoduj.** Aplikácia ukáže atribúty (pohlavie, vek) a rozhodnutie necháva na ľuďoch. Nikdy nerozhoduje automaticky podľa pohlavia či veku. **Dochádzka ani história sa na profiloch verejne nezobrazujú** — žiadne verejné skóre ani rebríček ľudí (sledujeme len interne).
5. **Konkrétnosť karty je posvätná.** Nič, čo by na karte nechalo otvorené kde alebo kedy.
6. **Nápoj je kotva, aktivita je nadstavba.** Test: bez nápoja stôl nedáva zmysel, bez aktivity áno. Žiadny samostatný tab „aktivity", žiadny stôl mimo schváleného podniku, žiadny stôl bez nápoja.
7. **Prebytok dopytu → viac stolov, nie väčší stôl.**
8. **Zakladanie stola musí trvať do 60 sekúnd** a nesmie sa zaseknúť na žiadnej voliteľnej funkcii (napr. generovanie názvu).

## Technické

- Web / PWA, nie natívna aplikácia
- Notifikácie e-mailom alebo SMS, nie push
- Päť tabuliek: `users`, `interests`, `tables`, `attendance`, `venues`
- Ak dátový model rastie nad päť tabuliek, pravdepodobne pribúda niečo mimo rozsahu v1

## Metriky

Severka je **return rate** — % ľudí, ktorí prídu na druhý stôl do 30 dní.
