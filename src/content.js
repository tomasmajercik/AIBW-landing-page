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

export const nav = {
  links: [
    { label: "Ako to funguje", href: "#ako-to-funguje" },
    { label: "Vyskúšaj demo", href: "#vyskusaj" },
    { label: "Otázky", href: "#otazky" },
  ],
  cta: "Stiahnuť appku",
};

export const hero = {
  eyebrow: "Všetky komunity na jednom mieste",
  title: "Nájdi svojich ľudí.",
  titleAccent: "Alebo si ich pozbieraj.",
  subtitle:
    "Povedz, čo ťa baví. Ukážeme ti, kde to už robia iní. A keď nikde, pomôžeme ti to založiť.",
  cta: "Ako to funguje",
  note: "Zadarmo · Naživo aj online · Celé Slovensko",
  feedLabel: "Práve pribudli",
};

export const problem = {
  title: "Komunity existujú.",
  titleAccent: "Len sa o nich tak ľahko nedozvieš.",
  ctaText: "Ťažko sa hľadajú. U nás ich máš pokope.",
  ctaButton: "Stiahnuť appku",
};

// ---------- ŠTYRIA ĽUDIA, JEDNA KOMUNITA ----------
// Všetkých spája florbal a mesto. Jeden komunitu zakladá, traja ju hľadajú.
export const match = {
  title: "Štyria ľudia, jedna komunita.",
  subtitle:
    "Všetci sú z Trnavy a všetkých baví florbal. Jeden komunitu zakladá, traja ju hľadajú. Bez appky by o sebe nevedeli.",
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
          text: "Zvoľ mesto, v ktorom si. Pri online komunitách to nie je potrebné.",
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
        { title: "Vypíš, o čo ide", text: "Čo robíte a ako často. Nemusí to byť dokonalé." },
        {
          title: "Prihráme ti ľudí",
          text: "Tých, čo hľadali presne to isté — záujem, zámer, mesto.",
        },
        {
          title: "Poradíme, ako na to",
          text: "Nájsť ľudí je začiatok. Udržať ich je robota. A v tej ti pomáhame. Kedy začať, ako často, čo robiť, keď to zaspí.",
        },
        {
          title: "Nezostaneš v tom sama",
          text: "Stretká vypisuje ktokoľvek z komunity.",
        },
      ],
    },
  ],
};

// ---------- INTERAKTÍVNE HĽADANIE ----------
// Naklikávacie filtre v telefóne — záujem + zámer + miesto.

export const explorer = {
  title: "Tvoje prvé kroky v našej appke",
  subtitle: "Tri otázky a máš zoznam. Skús si to, funguje to naozaj.",
  screenTitle: "Nájdi komunitu",
  labels: {
    interest: "Zaujíma ma",
    intent: "a chcem",
    place: "kde",
    anyIntent: "je mi to jedno",
    anyPlace: "kdekoľvek",
  },
  emptyTitle: "Takáto komunita ešte nie je.",
  emptyText:
    "Tu sa z hľadajúceho stáva zakladateľ. Prihráme ti ľudí, čo hľadali to isté.",
  emptyCta: "Založiť takúto komunitu",
  resultsOne: "komunita zodpovedá",
  resultsFew: "komunity zodpovedajú",
  resultsMany: "komunít zodpovedá",
  note: "Ukážkové údaje. Prvé skutočné komunity pridávame teraz.",
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

export const communities = [
  {
    emoji: "⚽",
    name: "Futbal v Petržalke",
    interest: "futbal",
    intent: "hrať",
    place: "Bratislava",
    when: "štvrtok 19:00",
    members: 18,
  },
  {
    emoji: "⚽",
    name: "Zápasy v krčme U Michala",
    interest: "futbal",
    intent: "pozerať",
    place: "Bratislava",
    when: "keď hrá liga",
    members: 26,
  },
  {
    emoji: "⚽",
    name: "Malý futbal na Terase",
    interest: "futbal",
    intent: "hrať",
    place: "Košice",
    when: "utorok 18:30",
    members: 14,
  },
  {
    emoji: "🏃",
    name: "Ranný beh pri Dunaji",
    interest: "beh",
    intent: "bežať",
    place: "Bratislava",
    when: "utorok a piatok, 6:30",
    members: 34,
  },
  {
    emoji: "🏃",
    name: "Príprava na polmaratón",
    interest: "beh",
    intent: "trénovať na pretek",
    place: "Žilina",
    when: "nedeľa doobeda",
    members: 11,
  },
  {
    emoji: "📚",
    name: "Čítame nefikciu",
    interest: "knihy",
    intent: "čítať a debatovať",
    place: "online",
    when: "posledná nedeľa v mesiaci",
    members: 56,
  },
  {
    emoji: "📚",
    name: "Knižný klub na Hlavnej",
    interest: "knihy",
    intent: "čítať a debatovať",
    place: "Košice",
    when: "raz mesačne",
    members: 19,
  },
  {
    emoji: "✍️",
    name: "Píšeme po večeroch",
    interest: "knihy",
    intent: "písať",
    place: "online",
    when: "streda 20:00",
    members: 23,
  },
  {
    emoji: "🎲",
    name: "Deskovky u Kamila",
    interest: "deskovky",
    intent: "hrať",
    place: "Košice",
    when: "raz za dva týždne",
    members: 9,
  },
  {
    emoji: "🎲",
    name: "Doskový štvrtok",
    interest: "deskovky",
    intent: "hrať",
    place: "Bratislava",
    when: "štvrtok 18:00",
    members: 31,
  },
  {
    emoji: "🧗",
    name: "Lezenie pre začiatočníkov",
    interest: "lezenie",
    intent: "učiť sa",
    place: "Žilina",
    when: "streda 18:00",
    members: 12,
  },
  {
    emoji: "📷",
    name: "Fotíme mesto v noci",
    interest: "fotenie",
    intent: "fotiť",
    place: "Bratislava",
    when: "keď je dobré počasie",
    members: 21,
  },
  {
    emoji: "🎮",
    name: "Nočné sedenia",
    interest: "gaming",
    intent: "hrať",
    place: "online",
    when: "piatok od 21:00",
    members: 41,
  },
  {
    emoji: "🍳",
    name: "Varíme si navzájom",
    interest: "varenie",
    intent: "variť",
    place: "Bratislava",
    when: "raz mesačne v sobotu",
    members: 16,
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
  cta: "Stiahnuť appku",
  text: "Alebo čaká, kým ju založíš. Obe cesty vedú cez to isté tlačidlo.",
};

export const footer = {
  tagline: "Miesto, kde sa ľudia a komunity konečne nájdu.",
  note: "Pracovná verzia. Staviame to práve teraz.",
};
