# prisadnisi — produktová špecifikácia v1

Stav: pracovný návrh
Názov: **prisadnisi** (pracovný)
Rozsah: MVP, jedno mesto (Bratislava), len nápojové formáty

Názov je zámerne odvodený od slovesa, na ktorom stojí celý produkt: *sadni si, prisadni si, sadnite si*. Má dve roviny naraz — fyzickú (prisadnúť si k stolu medzi cudzích ľudí) aj mentálnu (či si spolu sadnú). Je to zároveň výzva, nie podstatné meno — hovorí, čo má človek urobiť, nie čo appka je.

---

## 1. Koncept

Aplikácia nespája ľudí okolo „podujatí", ale okolo **stolov** — malých skupín, ktoré sa stretnú pri konkrétnom nápoji a konkrétnej téme.

Produkt stojí na dvoch osiach:

- **Formát** (káva, čaj, pivo, víno) — určuje, koľko času, peňazí a sociálnej odvahy stretnutie stojí. Je to rebrík záväzku a zároveň zamaskovaný typ podniku a čas dňa.
- **Druhá os** (knihy, turistika, psy, poker, zápas, ochutnávka …) — určuje, čo sa pri stole deje. Môže to byť téma rozhovoru aj spoločná činnosť.

Priesečník je jednotka produktu: *Káva + knihy, utorok 18:00, 6 miest*.

### Nápoj je kotva, aktivita je nadstavba

Test, ktorý rozhoduje, či stôl do produktu patrí:

> **Bez nápoja stôl nedáva zmysel, bez aktivity áno.**

„Ideme na kávu a potom si zabehať" — nápoj je kotva, beh je nadstavba. Patrí. „Ideme si zahrať poker" a pri tom bude pivo — kotva je poker, pivo je náhoda. Nepatrí, to je Meetup.

Nápoj musí zostať kotvou, lebo nesie štyri veci naraz: **podnik** (verejné, overené miesto), **známy časový náklad**, **nulovú kompetenciu** (netreba výstroj, zručnosť ani kondíciu) a **biznis model**.

### Sľub verzus mechanizmus

Dve pravdy, ktoré si neprotirečia, ale nesmú sa zamieňať:

- **Sľub používateľovi:** nájdi si ľudí cez záujmy. Nápoj je lepidlo — odbúrava neistotu „kde a čo", aby stretnutie s cudzími ľuďmi nebolo náročné rozhodnutie.
- **Mechanizmus produktu:** nápoj je nosný prvok. Drží podnik, čas, cenu aj tržby.

Z toho vyplývajú dve pravidlá. Marketing a copy vedú **záujmami a ľuďmi**, nie pivom — nikdy „appka na pivo s cudzími ľuďmi". A produkt zároveň nikdy nesmie pripustiť, aby sa nápoj stal voliteľným, hoci v komunikácii stojí v druhom rade.

### Onboarding ladder

Nový používateľ nezačína vínom. Poradie káva → pivo → víno je zámerné: káva má najnižšiu bariéru (denné svetlo, nízka cena, dá sa odísť po hodine). Aplikácia má používateľa po tomto rebríku vedome viesť.

### Monetizácia (mimo rozsahu v1, ale určuje dizajn)

Platí **podnik** za obsadenie mŕtvych hodín. Hostiteľ neplatí nič, používateľ platí len vlastnú konzumáciu. Preto v1 **neobsahuje žiadnu platobnú infraštruktúru** — žiadne zálohy, refundy, Stripe.

---

## 2. Slovník produktu

Jazyk UI hovorí o stole, nie o podujatí. Je to lacné a robí polovicu odlíšenia od Meetupu. Názov produktu je z toho istého slovesa, takže slovník a značka hovoria jedným hlasom — čím dôslednejšie sa to drží, tým viac to funguje.

| Používaj | Nepoužívaj |
|---|---|
| stôl | event, podujatie |
| sadnúť si / prisadnúť si | zúčastniť sa, RSVP |
| hostiteľ | organizátor |
| miesta / voľné miesta | kapacita, vstupenky |

---

## 3. Formáty (nápojová os)

Formáty nie sú nápoje. Sú to zamaskované kombinácie **času dňa a typu podniku** — preto je ich zoznam krátky a nemá rásť.

| | bez alkoholu | s alkoholom |
|---|---|---|
| **deň** | káva — kaviareň | — |
| **večer** | čaj — čajovňa | pivo (krčma), víno (vináreň) |

| Formát | Kapacita | Farba | Poznámka |
|---|---|---|---|
| Káva | 4–6 | hnedá | Vstupná brána. Denné svetlo, nízka bariéra. |
| Čaj | 4–6 | zelená | Večer bez alkoholu. Čajovne sú tiché, otvorené večer a ich biznis model je, že ľudia sedia hodiny. |
| Pivo | 4–8 | žltá | Hlučné, skupinové, znesie viac ľudí. |
| Víno | 4–6 | červená | Intímnejšie, večerné, 18+. |
| Iné | 4–6 | sivá | Všetko ostatné. Hostiteľ **musí dopísať krátky text**, čo to je — na karte sa zobrazí ako „iné · limonáda". |

Farebné odlíšenie formátov je súčasťou vizuálneho systému. Presné odtiene sa ešte zadefinujú — bude existovať farebná škála.

Pivo a víno sú **18+**. Káva a čaj bez obmedzenia. Pri „iné" rozhoduje hostiteľ.

Pri štarte sa seedujú len káva a pivo. Víno a čaj zostávajú v ponuke, ale nechajú sa objaviť hostiteľom.

### Kategória „iné"

Je v MVP. Povinný krátky popis pri nej má dva dôvody: karta zostane informatívna (prázdne „iné" nikomu nepovie, či ide o limonádu alebo absint), a **zbiera sa tým dáta o tom, čo má byť piaty formát**. Po pár desiatkach stolov bude z textov vidieť, či je to koktail, nealko alebo niečo, čo by nikoho nenapadlo.

Pravidlo o podniku platí aj pre „iné" — stôl sa musí konať v schválenom podniku, takže väzba formát → typ podniku sa neruší, len sa pri tejto jednej kategórii dočasne uvoľní.

Ak by bolo treba plnohodnotný piaty formát, v tomto poradí: **koktail** (večer, koktail bar — má katastrofálne mŕtve hodiny, dobre sa rokuje, ale vyššia cena = vyššia bariéra), potom **nealko**.

Skôr než pridávať nápoje, siahnuť po dvoch lacnejších pákach:

- **Časové sloty.** Ranná káva o 7:45, poobedná a večerná sú funkčne tri rôzne produkty s jedným nápojom — bez novej kategórie podnikov, novej farby a nového seedovania.
- **Druhá os** (viď nižšie). Rozmanitosť má žiť tam. Nápojová os je chrbtica a má zostať nudná a krátka.

---

## 4. Druhá os — záujmy a čo sa deje

### Čo sa pri stole môže diať

Stôl nemusí byť len o rozprávaní. Sedieť oproti cudzím ľuďom a nemať čo robiť okrem rozprávania je **ťažšie**, nie ľahšie — spoločná činnosť je najlepšie sociálne mazivo, aké existuje. Aktivita teda nie je zriedenie konceptu, ale ďalší nástroj proti trápnosti (popri hostiteľovi a troch otázkach).

| Typ | Príklad | Kde |
|---|---|---|
| rozhovor (predvolené) | „prečo dočítavame knihy, ktoré nás nebavia?" | v podniku |
| spoločné pozeranie | zápas, prenos | v podniku |
| hra | poker, deskovky, kartičky | v podniku |
| ochutnávka | káv, vín | v podniku |
| nápoj + aktivita | káva a potom beh | vedie von |

Prvé štyri sa dejú v podniku, a preto sú bezproblémové. Piaty typ je jediný, ktorý vedie von.

### Pravidlo pre nápoj + aktivitu

- **Nápoj je povinná časť, aktivita je voliteľná.** Stôl sa vždy začína v podniku. Kto chce, ide potom bežať; kto nechce, dopije a odíde bez pocitu, že vypadol.
- Rieši to naraz bezpečnosť (začína sa na verejnom mieste), rebrík záväzku (dá sa odísť po hodine) aj kompetenčnú úzkosť (behať nemusíš).
- Karta musí ukázať **celkový čas oboch častí**, nie len prvej. Toto je jediné miesto, kde sa to dá pokaziť.

### Tri veci, ktoré to zlomia

Kým tieto tri držia, je to jeden produkt. Keď ktorákoľvek padne, je to Meetup s nápojovou nálepkou.

1. Samostatný tab „aktivity" v aplikácii — rozdelí aj tak riedku likviditu na dva produkty.
2. Stôl, ktorý sa nezačína v schválenom podniku.
3. Stôl, kde je nápoj voliteľný.

### Vedľajší efekt na B2B

Spoločné pozeranie a hry **posilnia** rokovanie s podnikmi, nie oslabia. Krčma, ktorá púšťa zápas, už dnes chce skupiny. Deskovky zapĺňajú mŕtve utorky.

---

## Katalóg záujmov

### Tri vrstvy, nie jedna

Nika typu „zbieram známky z druhej svetovej vojny" nepotrebuje vlastnú kategóriu. Potrebuje **stôl**. Preto sú vrstvy tri:

| Vrstva | Kto ju určuje | Príklad |
|---|---|---|
| Klaster — štítok na karte | ty | Kultúra |
| Konkrétny záujem — katalóg | ty (24–30 položiek) | knihy |
| Téma stola — voľný text | hostiteľ | „zbieram známky z druhej svetovej vojny" |

Špecifickosť žije v názve a v hostiteľovej vete. Dosah žije v štítku. Nikový stôl ide von pod širokým štítkom, aby ho našli aj susední ľudia — je to ten istý princíp ako „granularita rastie s hustotou".

### Vyhľadávanie prehľadáva texty stolov

Toto je celé riešenie a je lacné: fulltext nad hostiteľovými vetami a názvami. Kto zadá „známky", nájde stôl, aj keď žiadna kategória „filatelia" neexistuje a nikdy existovať nebude.

Bez toho je katalóg strop. S tým je katalóg len navigácia.

**Neskôr, nie v MVP:** sledovanie kľúčového slova — používateľ si uloží „známky" a dostane správu, keď sa objaví zodpovedajúci stôl. Takto sa obsluhuje dlhý chvost bez toho, aby preň vznikali kategórie.

### Dve rôzne čísla

- **Katalóg** — čo sa dá vybrať v profile. Stojí nič. Buď štedrý: **24–30 položiek v 6 klastroch**.
- **Otvorené kategórie** — čo sa reálne objaví ako štítok na karte. Každá navyše znamená riedkosť. Buď skúpy: **6–8 na začiatku**.

Na štarte je štítok na karte **klaster**, nie konkrétny záujem („Káva + kultúra", nie „Káva + divadlo").

### Klastre

- **Pohyb a outdoor** — turistika, beh, bicykel, lezenie, jóga, plávanie
- **Kultúra** — knihy, film, divadlo, koncerty, výstavy
- **Myslenie a rast** — filozofia, spiritualita, psychológia, meditácia, osobný rozvoj
- **Tvorba** — hudba, fotografia, písanie, dizajn, varenie
- **Práca a technológie** — startupy, programovanie, financie, marketing, AI
- **Život a ľudia** — psy, cestovanie, jazyky, rodičovstvo, deskovky

### Pravidlá

- Výber na osobu: **2 až 5**. Katalóg veľký, výber úzky — inak sa rozpadne signál pre matching.
- Kategória sa stane otvárateľnou, keď ju v meste označí **~30 ľudí**.
  Odvodenie: pri ~15–20 % miere prihlásenia treba cca 30 ľudí na jeden naplnený stôl mesačne.
- Každá otvorená kombinácia (formát + záujem) sa musí objaviť **aspoň raz za dva týždne**. Ak dva mesiace nespĺňa, zbaliť späť do klastra.
- Granularita štítku rastie s hustotou. Pri ~200 ľuďoch „Káva + kultúra", pri ~1500 sa rozpadne na knihy / film / divadlo.
- Pri onboardingu voľné pole **„iné"** — nevytvára kategóriu, nikde sa nezobrazuje, slúži ako roadmap.

### Prázdny chvost = nábor hostiteľov

Keď používateľ zvolí kategóriu bez stolov, nezobraz prázdny feed. Povedz pravdu („lezenie má zatiaľ 12 ľudí") a hneď pod tým tlačidlo **„otvor prvý stôl"**. Chvost nie je neobslúžený dopyt, je to nenaverbovaná ponuka.

---

## 5. Veľkosť stola

- **Minimálna kapacita pri zakladaní: 3.** Pôvodne bola navrhnutá 4, pretože pri ~80 % dochádzke skončí skoro každý druhý trojstôl ako dvojica a trojica je zároveň najnestabilnejšia veľkosť skupiny (rozpadá sa na 2+1). Tá námietka ale mierila na svet **bez** mechanizmu z kapitoly 6 — keď dvojica vzniká len s obojstranným súhlasom naslepo, nikoho neprekvapí a trojka je obhájiteľná.
- Predvolená kapacita pri zakladaní nech je **6**. Trojka je povolená, nie odporúčaná.
- Sledovať, ako často trojstoly reálne spadnú na dvojicu — ak sa mechanizmus spúšťa tak často, že produkt pôsobí nespoľahlivo, minimum sa zdvihne.
- **Mäkký strop podľa formátu** (viď tabuľka vyššie). Nad 5 ľudí sa jeden rozhovor rozpadá na dva; nad 10 sa dynamika prepne na režim „podujatie", čo je presne to, voči čomu sa produkt vymedzuje. Kaviarne navyše fyzicky neposadia 15 ľudí bez rezervácie.
- **Prebytok dopytu → viac stolov, nie väčší stôl.** Deviaty človek ide na waitlist. Keď má waitlist 4 ľudí, aplikácia navrhne otvoriť paralelný stôl na rovnakú tému a ponúkne rolu hostiteľa tomu z waitlistu, kto má najviac absolvovaných stolov.

### Pravdepodobnosť kolapsu (pri 80 % dochádzke)

| Kapacita | P(prídu ≤ 2) |
|---|---|
| 3 | 49 % |
| 4 | 18 % |
| 6 | 2 % |
| 8 | < 1 % |

---

## 6. Keď zostanú dvaja

Stôl sa **neruší automaticky**. Problémom nikdy nebolo číslo dva, ale prekvapenie.

Mechanizmus:

1. 24 h pred stretnutím dostanú obaja otázku, či chcú ísť aj tak.
2. **Naslepo** — ani jeden nevidí odpoveď druhého. Inak vzniká sociálny tlak a odmietnutie sa stáva odmietnutím konkrétnej osoby.
3. Stôl sa koná len pri **obojstrannom áno**.
4. **Mlčanie sa počíta ako nie.** Opt-in, nie opt-out.
5. Pri jednom „nie" dostane druhý neutrálnu správu „stôl sa neuskutoční" — nikdy nie „X nechce ísť".
6. V otázke je vidieť: kto je druhý (meno, fotka, počet absolvovaných stolov), kde a kedy. Plus tlačidlo „radšej iný stôl", ktoré vracia do feedu.

**Otvorené:** či sa dvojica vôbec ponúkne používateľovi s nula absolvovanými stolmi. Prvý zážitok definuje vzťah k produktu a dvojica má vysokú varianciu. Rozhodnúť dátami, nie debatou.

---

## 7. Registrácia a profil

Princíp: **zobrazuj, nerozhoduj.** Aplikácia ukáže atribúty, rozhodnutie necháva na ľuďoch. Nikdy nerozhoduje automaticky podľa pohlavia či veku.

### Zbierať

| Pole | Povinné | Zobrazenie |
|---|---|---|
| Telefón (overený SMS) | áno | nie |
| Meno + prvé písmeno priezviska | áno | áno (Jana K.) |
| Fotka tváre — **jedna** | áno | áno |
| Pohlavie: žena / muž / iné | áno | áno |
| Dátum narodenia | áno | ako pásmo, dá sa skryť |
| Jedna veta o sebe | nie | áno |

Overený telefón je jediná vec, ktorá reálne robí dôveru — nie preto, že poznáš číslo, ale preto, že jeden človek = jeden účet a **ban funguje**.

Jedna fotka, nie galéria. Galéria je vizuálny jazyk zoznamky.

### Vedome nezbierať

Povolanie a vzdelanie → networkingová appka. Vzťahový status, výška, „hľadám" → zoznamka. Každé pole navyše posúva vnímanie a nedá sa to vrátiť.

### Hierarchia signálov dôvery

Poradie, v akom ľudia reálne vyhodnocujú bezpečnosť — investovať do prvých troch:

1. Overené telefónne číslo
2. História: „bola na 7 stoloch, dochádzka 100 %"
3. Verejný podnik
4. Hostiteľ s menom a históriou
5. Fotka a meno

---

## 8. Vek

Zbieraj presný dátum, zobrazuj **pásmo** (28–35), nech sa dá skryť.

Na stole sa nastavuje vekové pásmo zo zoznamu:

- otvorené (predvolené)
- 18–28
- 25–35
- 30–40
- 20–40
- 35–50
- 45+

Ide o **očakávanie, nie tvrdý filter** — každý ďalší tvrdý filter násobí problém s naplnením stola (formát × záujem × čas × vek = veľmi tenké bunky).

Na detaile stola zobrazuj aj **reálne zloženie** („väčšina účastníkov 28–36"). Generuje sa z dát, nikoho formálne nevylučuje, hostiteľ nemusí robiť trápne vyhlásenie.

---

## 9. Stoly obmedzené podľa pohlavia

- Je to **atribút stola**, nie sekcia aplikácie. Hostiteľ pri zakladaní zaklikne obmedzenie, objaví sa štítok na karte. Žiadny samostatný tab ani filter, kým to nebude tretina stolov.
- Prisadnúť si môže len ten, kto má dané pohlavie nastavené v profile **vopred**.
- Používatelia s nastavením „iné" chodia na otvorené stoly.
- **Mechanizmus symetrický, komunikácia nie.** Rovnaký nástroj pre všetkých, ale nekomunikovať ako dvojicu tlačidiel vedľa seba. Ženský stôl vznikne, lebo je dopyt; mužský rovnakou cestou, ak dopyt bude.
- Pravidlá potrebujú **jednu vetu o trans a nebinárnych ľuďoch**. Najobhájiteľnejšia línia je sebaidentifikácia — čokoľvek iné vyžaduje posudzovanie identity.

> **Právna poznámka:** obmedzenie prístupu podľa pohlavia sa dotýka antidiskriminačného zákona (SR). Vzťah na komerčnú platformu s partnerskými podnikmi treba overiť u právnika pred spustením. Toto nie je právne stanovisko.

---

## 10. Miesto

**Rozhoduje hostiteľ. Žiadne hlasovanie.**

Hlasovanie by rozbilo konkrétnosť karty („miesto sa ešte dohodne" = nikto sa neprihlási) a otvorilo koordinačnú plochu pred stretnutím, ktorá je z produktu vedome vynechaná.

Hostiteľ ale **vyberá z kurátorovaného zoznamu**, nie z voľného poľa. Jedným rozhodnutím sa rieši:

- **Kvalita** — nový hostiteľ netuší, ktorá kaviareň znesie 6 ľudí na 2 hodiny
- **Bezpečnosť** — výhradne verejné overené podniky, nikdy súkromná adresa; vynútené štrukturálne, nie pravidlom v podmienkach
- **Známosť** — tie isté miesta sa stanú mapou, druhýkrát je bariéra nižšia
- **B2B** — zoznam je obchodný pipeline s tvrdými číslami
- **Dáta** — ktoré podniky majú vyššiu dochádzku a vyšší „chcem sa vidieť znova"

Voľné pole existuje ako **návrh na schválenie**, nie ako priamy vstup.

### Kritériá na zaradenie podniku

1. **Dá sa tam rozprávať bez kričania** — najdôležitejšie a najčastejšie podcenené
2. Stôl pre 6–8, ideálne okrúhly (dlhý úzky stôl sa rozpadne na dva rozhovory)
3. Otvorené v potrebnom čase (bratislavské kaviarne často zatvárajú o 19:00)
4. Tolerujú 6 ľudí sediacich 2 hodiny nad malou útratou
5. Dostupné MHD

Pre stoly s aktivitou navyše: tolerujú hry pri stole, prípadne púšťajú prenosy. Eviduj to ako vlastnosť podniku, aby sa dali ponúkať len relevantné miesta.

### Filter

Používateľ filtruje feed podľa **štvrte**, nie podľa podniku. V Bratislave je rozdiel medzi Starým Mestom, Ružinovom a Petržalkou pre dochádzku zásadný.

### Ako sa nájdu

Šesť cudzích ľudí príde do plnej kaviarne a nevie, kto je kto. Rieši to **hostiteľ správou do vlákna stola** — príde o 10 minút skôr, obsadí stôl a napíše „som tu, sedíme vzadu pri okne, mám modrú bundu". Žiadny fyzický predmet, žiadna logistika.

Príchod 10 minút vopred patrí do **checklistu hostiteľa**, nie do produktu.

> Zvažovaná a zamietnutá bola kartička s logom na stole — nedá sa spoľahlivo vynútiť, aby ju hostitelia nosili. Ako **vec podniku** (stojanček, ktorý má partner u seba) sa k tomu dá vrátiť neskôr pri B2B — vtedy nezaťažuje hostiteľa a slúži aj ako marketing.

---

## 11. Názov stola

Hostiteľ napíše jednou vetou, o čom sa chce rozprávať. Aplikácia z toho vygeneruje návrhy názvu.

Hlavný prínos nie je pekný názov, ale **vyššia dokončenosť pri zakladaní** — „napíš popis podujatia" je pole, pred ktorým ľudia zamrznú; „o čom sa chceš rozprávať?" je otázka, na ktorú vie odpovedať každý.

### Pravidlá

- **Názov nenahrádza štítok, pridáva sa nad neho.** Karta má dve úrovne: veľký názov ako headline, pod ním drobný štítok „Káva + knihy". Štítok je štruktúra, názov je pozvánka. Bez toho sa stratí filtrovateľnosť a vyhľadávanie.
- Generuj **tri varianty v rôznych registroch**, inak bude celý feed jedna opakovaná otázka:
  - otázka — „Prečo dočítavame knihy, ktoré nás nebavia?"
  - tvrdenie — „Audiokniha sa neráta"
  - vecné — „Knihy, ktoré sme tento rok nedočítali"
- Vždy štvrtá možnosť: nechať čisté „Káva + knihy".
- Pole zostáva **editovateľné**. Vygenerované je návrh, nie výsledok.
- **Nikdy neaplikuj automaticky** — hostiteľ musí názov vidieť a potvrdiť. Je pod ním podpísaný.
- Pri zlyhaní alebo pomalej odpovedi ticho spadni na „Káva + knihy". Zakladanie stola sa na tomto nikdy nesmie zaseknúť.

### Mantinely generovania

- max ~50 znakov, aby sa zmestil do karty
- slovensky, tykanie, veta s malým začiatočným písmenom v strede
- žiadne dvojbodkové konštrukcie („Knihy: prečo ich čítame")
- žiadny clickbait ani superlatívy
- **nikdy nesmie znieť ako prednáška** — „Ako investovať do ETF" implikuje experta a poslucháčov; „Čo robíte so svojimi úsporami?" je rozhovor

### Ulož hostiteľov pôvodný text

Tá jedna veta je lepší signál o záujmoch než akákoľvek dopredu vymyslená kategória. Neskôr slúži na (a) párovanie ľudí podľa toho, čo naozaj chcú riešiť, (b) zhlukovanie do nových kategórií odvodených z reality.

Na detaile stola zobraz hostiteľovu vetu tak, ako ju napísal — aby bolo vidieť, že za tým je človek. Bráni to tomu, aby feed znel ako jeden autor.

---

## 12. Obrazovky (v1)

1. **Onboarding** — tri kroky: záujmy, formáty, časové okná. Bez bio, bez ničoho navyše.
2. **Feed** — „tento týždeň", zoznam voľných miest, nie zoznam podujatí.
3. **Detail stola** — kto ide, kde presne, hostiteľova veta, jedno tlačidlo.
4. **Vytvorenie stola** — formát, záujem, podnik, čas, kapacita, veta o téme. Do 60 sekúnd.
5. **Moje stoly** — nadchádzajúce + potvrdenie 24 h vopred.
6. **Po stretnutí** — kto tam bol, „chcem sa vidieť znova", tichý report.

Vlákno stola je dostupné z detailu stola aj z „moje stoly".

---

## 12b. Komunikačná vrstva

### Vlákno stola

Textové správy sú v MVP. Nie je to však chat v aplikácii, ale **vlákno naviazané na stôl**, ktoré má začiatok a koniec:

- **Otvorí sa 24 h pred stretnutím**, teda v tom istom momente ako potvrdzovanie účasti.
- **Zatvorí sa 12 h po stretnutí.** Potom zostáva týždeň čitateľné v „moje stoly" a zmizne.
- **Len skupinové.** Žiadne súkromné správy, nikdy. Riziko zoznamky nevzniká zo skupinovej komunikácie, ale zo súkromných správ — toto je hlavná poistka a je neprekročiteľná.
- Všetci účastníci vidia všetko. Adresovať jedného človeka sa dá, ale vidí to celá skupina, čo je samoregulačné.
- **Len text, žiadne fotky.** Obrázky znamenajú moderáciu a plochu na zneužitie (nevyžiadané fotky) za nulový prínos pre logistiku.
- Nahlásenie na úrovni správy aj celého vlákna.

### Rýchle stavy

Tri tlačidlá, ktoré zapíšu správu do vlákna jedným ťapnutím: *idem*, *meškám ~10 min*, *nestíham*.

Nenahrádzajú text — nepokryjú „zdržal sa mi vlak, budem o 25 minút" ani „sedím vzadu, mám modrú bundu". Sú tam preto, že pokryjú najčastejší prípad jedným ťapnutím a **naštartujú vlákno**, aby nebolo zastrašujúco prázdne.

### Notifikácie

Push netreba (a cez PWA na iOS aj tak nefunguje spoľahlivo). Doručovací kanál ale **je nosný**: potvrdenie 24 h vopred je celá obrana proti no-show a bez možnosti napísať ľuďom sa nekoná — waitlist sa nemá kedy uvoľniť a „meškám" sa hostiteľ nedozvie.

E-mail ako základ, SMS len na to najdôležitejšie (čísla sú už overené). Päť správ, viac nie:

1. Potvrdenie prihlásenia — **s kalendárovou pozvánkou (.ics)**
2. Pripomienka s potvrdením, 24 h vopred
3. Ráno v deň stretnutia: kde, o koľkej, odkaz na vlákno
4. Zrušenie stola alebo uvoľnené miesto pre človeka z waitlistu
5. Po stretnutí: „chcem sa vidieť znova"

Kalendárová pozvánka je najlacnejšia vec s najväčším dopadom v celom produkte — stretnutie v kalendári má výrazne vyššiu dochádzku než stretnutie v aplikácii.

Správy vo vlákne **nespúšťajú e-mail**. Výnimka: „meškám" a „nestíham" idú SMS-kou hostiteľovi.

---

## 13. Dátový model

Šesť tabuliek. Ak sa to rozrastá ďalej, pribúda niečo, čo do v1 nepatrí.

- `users` — telefón, meno, fotka, pohlavie, dátum narodenia, bio
- `interests` — katalóg + väzba na používateľa (2–5)
- `tables` — formát, **popis pri „iné"**, záujem/klaster, **typ aktivity**, **voliteľná druhá časť + celkový čas**, podnik, čas, kapacita, vekové pásmo, obmedzenie pohlavia, názov, pôvodný text hostiteľa, hostiteľ
- `attendance` — používateľ × stôl, stav (prihlásený / potvrdený / prišiel / neprišiel), waitlist, **účasť na druhej časti**
- `venues` — názov, adresa, štvrť, otváracie hodiny, kapacita stola, **znesie hry / púšťa prenosy**, stav schválenia
- `messages` — stôl, autor, text, typ (voľný text / rýchly stav), čas, nahlásené

---

## 14. Metriky

Štyri čísla, nič viac:

- **fill rate** — % obsadených miest
- **show rate** — % prihlásených, ktorí prišli (cieľ > 80 %)
- **return rate** — % ľudí, ktorí prídu na druhý stôl do 30 dní ← **severka**
- **host conversion** — % účastníkov, ktorí sami vytvoria stôl

Fill rate sa dá vyrobiť marketingom, show rate notifikáciami. Ak sa ľudia nevrátia druhýkrát, nie je to komunita, je to eventová appka.

Sledovať oddelene: koľko % dvojíc povie áno a aký majú return rate oproti plným stolom.

---

## 15. Mimo rozsahu v1

Každá z týchto vecí je dobrý nápad a každá by v prvom kvartáli uškodila:

- platby, zálohy, refundy
- **súkromné správy (DM) medzi ľuďmi** — vlákno stola je skupinové a časovo ohraničené, DM sa nepridáva nikdy bez samostatného rozhodnutia
- fotky vo vlákne
- push notifikácie (v1 e-mail a SMS)
- séria a opakovania
- kurátorované platené stoly
- hodnotenie ľudí (okrem dochádzky)
- mapa partnerských podnikov
- administračné rozhranie — schvaľovanie podnikov a banovanie sa pri prvých desiatkach ľudí robí priamo v databáze
- generovanie názvu (manuálne pole zatiaľ stačí)
- akékoľvek filtre okrem štvrte
- viac miest
- natívna aplikácia (v1 je web / PWA)
- jedlo — večera, brunch (vyhodené, príde neskôr)

---

## 16. Otvorené otázky

- Presné odtiene farebnej škály pre formáty
- Či sa dvojica ponúka používateľovi s nula absolvovanými stolmi
- Právne stanovisko k stolom obmedzeným podľa pohlavia
- Znenie vety o trans a nebinárnych ľuďoch v pravidlách
