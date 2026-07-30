// ============================================================
//  VŠETKY TEXTY A ÚDAJE STRÁNKY SÚ TU
//  Keď chceš niečo prepísať, meň to v tomto súbore.
//  Nemusíš chodiť do komponentov.
// ============================================================

// Pracovný názov. Keď vymyslíš iný, stačí ho prepísať tu.
export const brand = {
  name: "Zapadni",
  tagline: "Zapadni medzi svojich",
};

// Kam vedú všetky tlačidlá „Pokračovať na web". Keď bude vlastná
// doména, stačí prepísať túto jednu adresu.
export const webUrl = "https://zapadni-a9dff.web.app/";

export const nav = {
  links: [
    { label: "Ako to funguje", href: "#ako-to-funguje" },
    { label: "Vyskúšaj demo", href: "#vyskusaj" },
    { label: "Otázky", href: "#otazky" },
  ],
  cta: "Pokračovať na web",
};

export const hero = {
  title: "Nájdi svojich ľudí.",
  titleAccent: "Alebo si ich pozbieraj.",
  subtitle:
    "Povedz, čo ťa baví. Ukážeme ti, kde to už robia iní. A keď nikde, pomôžeme ti to založiť.",
  cta: "Ako to funguje",
  note: "Zadarmo · Naživo aj online · Celé Slovensko",
  feedLabel: "Sedí to k tvojim záujmom",
  feedCount: "8 komunít",
  join: "Pridám sa",
  tabs: ["Domov", "Členstvá", "Vytvorené", "Profil"],
};

export const problem = {
  title: "Komunity existujú.",
  titleAccent: "Len sa o nich tak ľahko nedozvieš.",
  ctaText: "Ťažko sa hľadajú. U nás ich máš pokope.",
  ctaButton: "Pokračovať na web",
};

// ---------- ŠTYRIA ĽUDIA, JEDNA KOMUNITA ----------
// Všetkých spája florbal a mesto. Jeden komunitu zakladá, traja ju hľadajú.
export const match = {
  title: "Jeden založí, ostatní sa pridajú.",
  subtitle:
    "Štyria ľudia z Trnavy, ktorých baví florbal. Jeden komunitu zakladá, ďalší sa pridávajú — a pridať sa môže ktokoľvek ďalší. Bez Zapadni by o sebe nevedeli.",
  pieces: [
    { role: "Zakladá komunitu", who: "Peter", meta: "florbal · Trnava" },
    { role: "Hľadá komunitu", who: "Lucia", meta: "florbal · Trnava" },
    { role: "Hľadá komunitu", who: "Jakub", meta: "florbal · Trnava" },
    { role: "Hľadá komunitu", who: "Zuzana", meta: "florbal · Trnava" },
  ],
};

export const howItWorks = {
  title: "Ako to funguje",
  subtitle: "Prepni si stranu podľa toho, kde stojíš.",
  sides: [
    {
      badge: "Hľadám komunitu",
      steps: [
        {
          title: "Čo ťa baví",
          text: "Vyber aspoň 3 záujmy, ktoré máš.",
        },
        {
          title: "Kde",
          text: "Zvoľ mesto, v ktorom si.",
        },
        {
          title: "Pridaj sa",
          text: "Ukážeme ti, aké komunity existujú. Ak by ti žiadna nesadla, ozveme sa, keď pribudne nová, ktorá by sa ti mohla páčiť.",
        },
      ],
    },
    {
      badge: "Chcem založiť komunitu",
      steps: [
        {
          title: "Popíš, o čo ide",
          text: "Nemusí to byť dlhé. Ale čím lepšie to popíšeš, tým lepšie ľudia pochopia, akú komunitu zakladáš.",
        },
        {
          title: "Prihráme ti ľudí",
          text: "Ozveme sa každému, komu by tvoja komunita mohla sadnúť. Dnes aj o mesiac.",
        },
        {
          title: "Poradíme ti, ako na to",
          text: "Nájsť ľudí je začiatok. Udržať ich je robota. A v tej ti pomáhame. Napr. čo robiť, keď to v tvojej komunite zaspí.",
        },
        {
          title: "Nezostaneš v tom sám/a",
          text: "Stretká vypisuje ktokoľvek z komunity.",
        },
      ],
    },
  ],
};

// ---------- INTERAKTÍVNE HĽADANIE ----------
// Naklikávacie filtre v telefóne — záujem + zámer + miesto.

export const explorer = {
  title: "Tvoje prvé kroky ku komunite",
  subtitle: "Týmto nám pomôžeš nájsť lepšie komunity pre teba.",
  screen: {
    brand: "zapadni.com",
    step: "Krok 2 z 2",
    title: "Čo ťa baví?",
    hint: "Vyber aspoň 3 témy — pomôže nám to nájsť komunity pre teba.",
    placeLabel: "Preferované mesto/obec",
    placePlaceholder: "Začni písať…",
    // všetky mestá na Slovensku (abecedne)
    places: [
      "Banská Bystrica",
      "Banská Štiavnica",
      "Bánovce nad Bebravou",
      "Bardejov",
      "Bojnice",
      "Bratislava",
      "Brezno",
      "Brezová pod Bradlom",
      "Bytča",
      "Čadca",
      "Čierna nad Tisou",
      "Detva",
      "Dobšiná",
      "Dolný Kubín",
      "Dubnica nad Váhom",
      "Dudince",
      "Dunajská Streda",
      "Fiľakovo",
      "Gabčíkovo",
      "Galanta",
      "Gbely",
      "Gelnica",
      "Giraltovce",
      "Handlová",
      "Hanušovce nad Topľou",
      "Hlohovec",
      "Hnúšťa",
      "Holíč",
      "Hriňová",
      "Humenné",
      "Hurbanovo",
      "Ilava",
      "Jelšava",
      "Kežmarok",
      "Kolárovo",
      "Komárno",
      "Košice",
      "Kráľovský Chlmec",
      "Krásno nad Kysucou",
      "Kremnica",
      "Krompachy",
      "Krupina",
      "Kysucké Nové Mesto",
      "Leopoldov",
      "Levice",
      "Levoča",
      "Lipany",
      "Liptovský Hrádok",
      "Liptovský Mikuláš",
      "Lučenec",
      "Malacky",
      "Martin",
      "Medzev",
      "Medzilaborce",
      "Michalovce",
      "Modra",
      "Modrý Kameň",
      "Moldava nad Bodvou",
      "Myjava",
      "Námestovo",
      "Nemšová",
      "Nesvady",
      "Nitra",
      "Nová Baňa",
      "Nová Dubnica",
      "Nováky",
      "Nové Mesto nad Váhom",
      "Nové Zámky",
      "Partizánske",
      "Pezinok",
      "Piešťany",
      "Podolínec",
      "Poltár",
      "Poprad",
      "Považská Bystrica",
      "Prešov",
      "Prievidza",
      "Púchov",
      "Rajec",
      "Rajecké Teplice",
      "Revúca",
      "Rimavská Sobota",
      "Rožňava",
      "Ružomberok",
      "Sabinov",
      "Sečovce",
      "Senec",
      "Senica",
      "Sereď",
      "Skalica",
      "Sládkovičovo",
      "Sliač",
      "Snina",
      "Sobrance",
      "Spišská Belá",
      "Spišská Nová Ves",
      "Spišské Podhradie",
      "Spišské Vlachy",
      "Stará Ľubovňa",
      "Stará Turá",
      "Strážske",
      "Stropkov",
      "Stupava",
      "Svätý Jur",
      "Svidník",
      "Svit",
      "Šahy",
      "Šaľa",
      "Šamorín",
      "Šaštín-Stráže",
      "Štúrovo",
      "Šurany",
      "Tisovec",
      "Tlmače",
      "Topoľčany",
      "Tornaľa",
      "Trebišov",
      "Trenčianske Teplice",
      "Trenčín",
      "Trnava",
      "Trstená",
      "Turčianske Teplice",
      "Turzovka",
      "Tvrdošín",
      "Veľké Kapušany",
      "Veľký Krtíš",
      "Veľký Meder",
      "Veľký Šariš",
      "Vranov nad Topľou",
      "Vráble",
      "Vrbové",
      "Vrútky",
      "Vysoké Tatry",
      "Zlaté Moravce",
      "Zvolen",
      "Žarnovica",
      "Želiezovce",
      "Žiar nad Hronom",
      "Žilina",
    ],
    counter: "Vybraté:",
    cta: "Pokračovať",
    minimum: 3,
    // vyskočí, keď je vybraté mesto aj aspoň 3 témy
    doneTitle: "Toto stačí.",
    doneText: "Podľa tohto ti nájdeme komunity v tvojom okolí.",
    doneCta: "Pokračovať na web",
    doneBack: "Späť k výberu",
    topics: [
      "Šport",
      "Beh a fitness",
      "Jedlo a varenie",
      "Cestovanie",
      "Hudba",
      "Film a seriály",
      "Knihy",
      "Umenie a tvorba",
      "Hry",
      "Príroda a outdoor",
      "Fotografia",
      "Tanec",
      "Wellness a mindfulness",
      "Technológie",
      "Podnikanie a kariéra",
      "Móda a štýl",
      "Zvieratá",
      "Dobrovoľníctvo",
    ],
  },
};

export const interests = [
  { key: "futbal", label: "futbal", emoji: "⚽", intents: ["hrať", "pozerať"] },
  { key: "beh", label: "beh", emoji: "🏃", intents: ["bežať", "trénovať na pretek"] },
  { key: "knihy", label: "knihy", emoji: "📚", intents: ["čítať a debatovať", "písať"] },
  { key: "deskovky", label: "deskovky", emoji: "🎲", intents: ["hrať"] },
  { key: "lezenie", label: "lezenie", emoji: "🧗", intents: ["učiť sa", "liezť"] },
  { key: "fotenie", label: "fotenie", emoji: "📷", intents: ["fotiť", "učiť sa"] },
  { key: "gaming", label: "gaming", emoji: "🎮", intents: ["hrať"] },
  { key: "varenie", label: "varenie", emoji: "🍳", intents: ["variť"] },
];

export const places = ["Bratislava", "Košice", "Žilina", "online"];

// Karty v prvom telefóne. Sú to naozajstné komunity z Zapadni —
// rovnaké názvy, texty aj počty ľudí. „tint" je číslo farby (0–5).
export const communities = [
  {
    name: "Psíčkari z Horského parku",
    topic: "Zvieratá",
    when: "Každý štvrtok 18:30",
    place: "Horský park",
    city: "Bratislava",
    vibe: "Pol hodiny chôdze, hodina rečí. Psy sa spoznajú prvé, my potom.",
    members: 29,
    faces: ["MK", "JT", "DP"],
    tint: 0,
  },
  {
    name: "Dunajskí bežci",
    topic: "Beh a fitness",
    when: "Utorok a piatok 6:30",
    place: "Most Apollo",
    city: "Bratislava",
    vibe: "Pomalé tempo. Nikto nezostáva vzadu a na nikoho sa nečaká naštvane.",
    members: 34,
    faces: ["LP", "OB", "VS"],
    tint: 1,
  },
  {
    name: "Debuggeri",
    topic: "Technológie",
    when: "Posledný štvrtok v mesiaci 18:00",
    place: "Binarium",
    city: "Bratislava",
    vibe: "Niekto ukáže, čo postavil. Zvyšok sa pýta. Potom sa ide na pivo.",
    members: 45,
    faces: ["JG", "MV", "AK"],
    tint: 2,
  },
  {
    name: "Klub nedočítaných kníh",
    topic: "Knihy",
    when: "Prvá streda v mesiaci 19:00",
    place: "Next Apache",
    city: "Bratislava",
    vibe: "Dočítať nie je podmienka. Prísť a povedať, prečo si to odložila, stačí.",
    members: 16,
    faces: ["AL", "SV", "RH"],
    tint: 3,
  },
  {
    name: "Doskovka",
    topic: "Hry",
    when: "Každý štvrtok 18:00",
    place: "Dobre&Dobre",
    city: "Bratislava",
    vibe: "Vysvetlíme ti pravidlá. Aj druhýkrát, keď zabudneš.",
    members: 31,
    faces: ["FK", "JD", "PT"],
    tint: 4,
  },
  {
    name: "Malokarpatskí chodci",
    topic: "Príroda a outdoor",
    when: "Každú nedeľu 8:00",
    place: "Železná studnička",
    city: "Bratislava",
    vibe: "Tri trasy podľa toho, ako sa ti ráno vstávalo. Všetky končia na tom istom mieste.",
    members: 37,
    faces: ["PH", "IK", "NB"],
    tint: 5,
  },
  {
    name: "Klub prvého svetla",
    topic: "Wellness a mindfulness",
    when: "Každú sobotu 7:30",
    place: "Sad Janka Kráľa",
    city: "Bratislava",
    vibe: "Prídeš rozospatá, odchádzaš s tým, že máš celý deň pred sebou.",
    members: 26,
    faces: ["VM", "KP", "ZB"],
    tint: 0,
  },
  {
    name: "Fotochodci",
    topic: "Fotografia",
    when: "Každú druhú sobotu 9:00",
    place: "mení sa",
    city: "Bratislava",
    vibe: "Telefón je plnohodnotný fotoaparát. Nikto ti nebude vysvetľovať clonu.",
    members: 21,
    faces: ["LV", "AH", "JP"],
    tint: 1,
  },
];

export const faq = {
  title: "Časté otázky",
  items: [
    {
      q: "Musím mať účet?",
      a: "Áno. Potrebujeme vedieť, kto sa do komunity pridáva.",
    },
    {
      q: "Čo keď v mojom meste nič nie je?",
      a: "Neboj sa, evidujeme ťa. Keď taká komunita vznikne, pošleme ti upozornenie. A ak nechceš čakať, založ ju — prihráme ti prvých ľudí a poradíme, ako začať.",
    },
    {
      q: "Sú tu aj online komunity?",
      a: "Áno.",
    },
    {
      q: "Je to zoznamka?",
      a: "Nie. Ide o komunity, nie o dvojice.",
    },
    {
      q: "Kto môže vypísať stretko?",
      a: "Ktorýkoľvek člen, nielen zakladateľ.",
    },
  ],
};

export const finalCta = {
  title: "Tvoja komunita už možno existuje. Zapadni k nej.",
  cta: "Pokračovať na web",
  text: "Alebo založ tú svoju. Obe cesty vedú cez to isté tlačidlo.",
};

export const footer = {
  tagline: "Miesto, kde sa ľudia a komunity konečne nájdu.",
  note: "Pracovná verzia. Staviame to práve teraz.",
};
