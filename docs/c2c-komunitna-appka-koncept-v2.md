# C2C komunitná appka — koncept

## Základná téza

Najväčšia dlhodobá a najobrannejšia hodnota nie je technológia ani featury, ale **sieť** — ekosystém aktívnych komunít a sociálnych väzieb medzi ľuďmi. Sieť pritom nevzniká len z komunít, ktoré sa pravidelne stretávajú — vzniká aj z jednotlivých spojení medzi ľuďmi, ktoré prežijú aj jednorazový event a pokračujú ďalej, hoci sa daná skupina či akcia už nikdy nezopakuje. AI je akcelerátor a nástroj, nie samotné jadro hodnoty. Cieľ je stavať nástroje, vďaka ktorým sieť — v oboch týchto formách — rastie a prekvitá.

## Problém, ktorý riešime

Človek chce spoznať ľudí, ktorí zdieľajú jeho konkrétny záujem alebo štýl trávenia času — či už preto, že je nový v meste a ešte nikoho nepozná, alebo preto, že je v meste dlho usadený, ale nemá s kým zdieľať práve tento konkrétny koníček. Je to jedna a tá istá potreba s dvoma rôznymi spúšťačmi, nie dva oddelené trhy. Existujúce nástroje na trhu riešia len časť tohto problému a každý má štrukturálnu dieru:

- **Verejné objavovacie platformy** (VaultGrid, Meetup, Eventbrite, Luma) pomôžu nájsť event, ale nepomôžu udržať vzťah, ktorý z neho vznikne. Event je jednorazový objekt bez pamäte — tá istá partia sa o mesiac skladá odznova.
- **Súkromné koordinačné nástroje** (Partiful, WhatsApp Events, Apple Invites) skvele riešia "kto ide, koľko nás bude" pre ľudí, ktorí sa už poznajú — ale nič neponúkajú človeku, ktorý ešte nemá koho pozvať.
- V lokálnych riešeniach (napr. VaultGrid) často chýba integrovaná platobná vrstva — peniaze na spoločné akcie sa dohadujú mimo appky (v texte popisu eventu, v správach), čo je jedna z najbolestivejších častí organizovania.

Žiadny z existujúcich hráčov neprepája **objavovanie ľudí okolo spoločného záujmu** s **udržaním vzťahu, ktorý z toho vznikne** — a to je diera, do ktorej mierime.

### Komu slúžime

- **Ľudia noví v meste** (presťahovanie, po škole, po rozchode) — potrebujú prvý kontakt so scénou.
- **Etablovaní ľudia s konkrétnym záujmom** (šport, jazyky, spoločenské hry, remeslo, kultúra), ktorí síce v meste žijú dlho, no nemajú okruh ľudí okolo práve tejto aktivity.

Druhý segment má dlhší horizont používania než prvý — potreba "som nový v meste" sa časom sama vyrieši a používateľ appku prirodzene opustí, zatiaľ čo potreba "chcem viac ľudí okolo môjho koníčka" sa nevyčerpáva. Objavovanie by preto malo byť usporiadané primárne **podľa záujmu/aktivity**, nie podľa životnej situácie používateľa.

## Prehľad konkurencie

| Hráč | Čo rieši | Kde je limit |
|---|---|---|
| VaultGrid (Bratislava) | eventy + sociálna sieť, mix cudzích ľudí a partií | peniaze mimo appky, event bez pamäte, zmiešané pozicionovanie (zoznamka vs. organizovanie partie) |
| Meetup | opakujúce sa záujmové skupiny | platené pre organizátorov, zastaraný produkt, na Slovensku tenký obsah |
| Eventbrite | predaj lístkov na komerčné akcie | nerieši objavovanie partie, je to pokladňa |
| Luma | krásna stránka eventu pre ľudí, čo už majú publikum | nerieši objavovanie, bezcenné bez vlastných followerov |
| Partiful | súkromné RSVP medzi kamarátmi, veľmi úspešné (Google App of the Year 2024) | US/Gen-Z kultúrne kódované, nelokalizované, presúva sa smerom k plateným veľkým eventom (ticketing) |
| Apple Invites | súkromné RSVP naviazané na Apple ekosystém | hostenie viazané na iCloud+ predplatné, iOS-only — na Slovensku má Android väčšinu trhu |
| WhatsApp Events | súkromné RSVP v rámci existujúcich skupín, zadarmo, obrovská základňa | Meta nemá dôvod stavať verejné objavovanie cudzích komunít cez WhatsApp — kanibalizovalo by to vlastné produkty a odporovalo privacy pozicioningu appky |

**Kľúčový test odlíšenia:** nehľadať to, čo konkurent nevie skopírovať, ale to, čo by skopírovať **nechcel**, lebo by tým poškodil vlastný biznis model alebo identitu. Presne to je dôvod, prečo Partiful, Apple ani WhatsApp nikdy nepostavia most zo súkromnej koordinácie do verejnej lokálnej siete.

## Produktová téza — dve vrstvy, jedna cesta používateľa

**1. Súkromná vrstva (vstupná brána).** Jednoduchý nástroj: vytvor event, pošli link, ľudia potvrdia účasť, vidno kto a koľko ide. Bez nutnosti registrácie pre hosťa. Nulová prekážka vstupu, funguje od prvého používateľa, rastie virálne cez zdieľané linky (človek bez appky vidí produkt, keď dostane pozvánku — nulové náklady na akvizíciu).

**2. Verejná vrstva (objavovanie).** Nie každý event má alebo má chcieť pokračovanie — veľa akcií je a má ostať jednorazových, a to je v poriadku. Appka preto netlačí automaticky "urobme z toho klub". Namiesto toho sleduje dve nezávislé signály a reaguje na oba:
   - keď sa tá istá **skupina** stretáva opakovane (3. alebo 4. raz), ponúkne organizátorovi možnosť otvoriť ju pre ďalších ľudí v meste;
   - po **jednorazovom** evente ponúkne účastníkom možnosť ostať v kontakte s konkrétnymi ľuďmi, ktorých tam stretli — aj keď sa celá skupina či event nikdy nezopakuje. Spojenie tak môže pokračovať len medzi dvomi-tromi ľuďmi, nie nutne ako návrat k pôvodnej skupine.

**3. Komunity s členstvom.** Opakujúca sa skupina je jedna z ciest, akou sieť naberá hodnotu — nie jediná. Rovnako hodnotné je, keď si človek z jednorazového eventu odnesie čo i len jedno spojenie, ktoré ďalej žije mimo pôvodnej udalosti.

**Cesta jedného používateľa naprieč vrstvami:** človek — nový v meste, alebo dlho usadený, no bez okruhu ľudí okolo konkrétneho záujmu — nájde verejný event podľa témy, ktorá ho zaujíma → spozná ľudí. Odtiaľ vedú dve rovnocenné cesty: buď sa s časťou z nich stretáva opakovane a appka im ponúkne založiť si vlastnú komunitu, alebo si z jednorazovej akcie odnesie jedno-dve spojenia, ktoré appka udrží živé aj bez toho, aby sa pôvodný event či skupina zopakovali.

### Prečo v tomto poradí

- Súkromná vrstva nepotrebuje kritickú masu — funguje aj pri malom počte používateľov v celej krajine.
- Verejná vrstva je bez hustoty bezcenná (prázdny katalóg = nikto sa nevráti).
- Spustenie súkromnou vrstvou ako prvou rieši cold-start problém: v momente spustenia verejného objavovania appka už má reálne, fungujúce partie, ktoré sa samy rozhodli otvoriť — nezačína sa od prázdneho formulára.

## Biznis model (vrstvený)

1. **Vytvorenie eventu a súkromná koordinácia — navždy zadarmo**, bez výnimky. Toto je sľub produktu a hlavný rastový kanál.
2. **Provízia z platených eventov** (rádovo 5–10 %) — platí sa iba vtedy, keď si organizátor sám pýta peniaze od účastníkov. Bez poplatku vopred, bez rizika pre organizátora.
3. **Predplatné pre opakovaných poloprofesionálnych organizátorov** (vedúci bežeckých skupín, jazykové výmeny, deskovkové kluby, joga, workshopy) — nástroje na dochádzku, čakačky, pripomienky, automatický výber peňazí. Realisticky rádovo desiatky až nižšie stovky platiacich v Bratislave.
4. **Dobrovoľné tipy** — nie appke, ale konkrétnemu organizátorovi za konkrétnu akciu. Nízky priamy príjem, ale dobrý signál hodnoty produktu.
5. **Spolupráca s biznismi** (zapĺňanie voľných kapacít — poloprázdna reštaurácia, kurty, bary v slabý deň) formou výkonnostného modelu, nie reklamy. Toto dáva zmysel až po dosiahnutí hustoty používateľov, nie na začiatku.

## Geografická stratégia

- Likvidita sa buduje po mestách, nie po krajine — každé mesto je samostatná zásobáreň, ktorú treba naseedovať zvlášť.
- **Bratislava ako prvý trh** (~450–500 tis. obyvateľov).
- Ostatné slovenské mestá (Košice ~230 tis., zvyšok 80–90 tis.) majú nízku hustotu pre "impulzívne" bezplatné eventy, ale môžu fungovať pre platenú vrstvu a workshopy — na platený kurz človek dobehne aj z väčšej vzdialenosti, na pivo o siedmej nie.
- Zvážiť **Viedeň** (60 km, ~2 mil. obyvateľov) ako alternatívny druhý trh namiesto menších slovenských miest, najmä pre expat a profesijné segmenty.

## Go-to-market

- Primárny cieľ akvizície nie sú koncoví používatelia, ale **organizátori** — malá skupina ľudí, ktorí už dnes organizujú partie a aktivity, so sebou privedie hotové siete ľudí.
- Rast cez virálnu distribúciu súkromných RSVP odkazov — ľudia bez appky vidia produkt cez pozvánku, bez nutnosti inštalácie či registrácie.

## Kľúčová metrika úspechu

Nie počet stiahnutí, ale to, či zo stretnutí vzniká trvajúca hodnota — meraná dvoma doplnkovými spôsobmi:
- **podiel skupín/partií s opakovanou účasťou** (3+ stretnutia) tam, kde sa skupina rozhodne pokračovať ako celok;
- **podiel ľudí z (aj jednorazových) eventov, ktorí si odnesú aspoň jedno spojenie pokračujúce ďalej** — bez ohľadu na to, či sa pôvodná skupina alebo event ešte niekedy zopakuje.

Druhá metrika je širšia a dôležitejšia, lebo funguje aj pre eventy, ktoré majú a majú ostať jednorazové.

## Otvorené otázky

- Presná definícia úvodnej vertikály / úzkeho segmentu, na ktorom sa dosiahne prvá hustota.
- Výber a implementácia platobnej infraštruktúry (vratky, spory, DPH).
- Presný mechanizmus a moment, kedy appka ponúkne organizátorovi "zverejniť partiu".
