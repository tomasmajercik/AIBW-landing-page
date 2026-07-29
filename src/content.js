// ============================================================
//  VŠETKY TEXTY A ÚDAJE STRÁNKY SÚ TU
//  Keď chceš niečo prepísať, meň to v tomto súbore.
//  Nemusíš chodiť do komponentov.
// ============================================================

// Pracovný názov. Keď vymyslíš iný, stačí ho prepísať tu.
export const brand = {
  name: "Communio",
  tagline: "Nájdi svojich ľudí",
};

export const nav = {
  links: [
    { label: "Ako to funguje", href: "#ako-to-funguje" },
    { label: "Vyskúšaj", href: "#vyskusaj" },
    { label: "Pre zakladateľov", href: "#pre-zakladatelov" },
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
  ctaPrimary: "Nájdi komunitu",
  ctaSecondary: "Chcem založiť komunitu",
  note: "Zadarmo · Naživo aj online · Celé Slovensko",
  feedLabel: "Práve pribudli",
  stats: [
    { value: "3 kliky", label: "k tvojej komunite" },
    { value: "0 €", label: "založenie aj hľadanie" },
    { value: "1 pravidlo", label: "stretká vypisuje ktokoľvek" },
  ],
};

export const problem = {
  title: "Komunity existujú.",
  titleAccent: "Len sa o nich nedozvieš.",
  items: [
    {
      lead: "Sú roztrúsené.",
      text: "Facebook, Instagram, WhatsApp, papier na nástenke. Dozvieš sa o nich, len keď ti to niekto povie.",
    },
    {
      lead: "Záujem nestačí.",
      text: "„Futbal“ sú tri rôzne partie. Hrať, pozerať v krčme, voziť dieťa na tréning.",
    },
    {
      lead: "Zakladateľ je sám.",
      text: "Napíše do troch skupín, pridá sa päť kamarátov a o mesiac je ticho.",
    },
  ],
};

// ---------- DVE STRANY, KTORÉ SI CHÝBAJÚ ----------
export const match = {
  title: "Dvom ľuďom chýba ten istý kúsok",
  subtitle:
    "Jeden má komunitu bez ľudí. Druhý má chuť, ale nevie kam. Bez nás sa nikdy nestretnú.",
  left: {
    label: "Zakladá komunitu",
    who: "Peter · Trnava",
    text: "Chce hrať florbal každý štvrtok. Zatiaľ sú dvaja. Potrebuje osem.",
  },
  right: {
    label: "Hľadá komunitu",
    who: "Lucia · Trnava",
    text: "Presťahovala sa pred mesiacom. Florbal hrala roky. Nevie s kým tu.",
  },
  hint: "Chyť pravý dielik a potiahni ho k ľavému",
  joined: "Sedí to",
  replay: "Rozpojiť",
  note: "Toto je celá naša robota. Nájsť ten druhý kúsok.",
};

export const howItWorks = {
  title: "Ako to funguje",
  subtitle: "Prepni si stranu podľa toho, kde stojíš.",
  sides: [
    {
      badge: "Hľadám partiu",
      steps: [
        { title: "Čo ťa baví", text: "Futbal, knihy, lezenie. Pokojne viac naraz." },
        {
          title: "Čo s tým chceš robiť",
          text: "Hrať, pozerať, učiť sa. Toto je ten dôležitý kúsok.",
        },
        { title: "Kde", text: "Nepovinné. Pri online partiách to neriešime." },
        {
          title: "Prisadni sa",
          text: "Ukážeme ti, čo existuje. A ozveme sa, keď pribudne nové.",
        },
      ],
    },
    {
      badge: "Zakladám komunitu",
      steps: [
        { title: "Vypíš, o čo ide", text: "Čo robíte a ako často. Nemusí to byť dokonalé." },
        {
          title: "Prihráme ti ľudí",
          text: "Tých, čo hľadali presne to isté — záujem, zámer, mesto.",
        },
        {
          title: "Poradíme, ako na to",
          text: "Kedy začať, ako často, čo robiť, keď to zaspí.",
        },
        {
          title: "Nezostaneš v tom sama",
          text: "Stretká vypisuje ktokoľvek z partie, nielen ty.",
        },
      ],
    },
  ],
};

// ---------- INTERAKTÍVNE HĽADANIE ----------
// Naklikávacie filtre v telefóne — záujem + zámer + miesto.

export const explorer = {
  title: "Prvá obrazovka, ktorú uvidíš",
  subtitle: "Tri otázky a máš zoznam. Skús si to, funguje to naozaj.",
  points: [
    "Vyberáš si sama. Nerozhoduje za teba algoritmus.",
    "Zámer je dôležitejší než záujem.",
    "Miesto je nepovinné. Pri online komunitách odpadá.",
  ],
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

// ---------- BANNERY ----------

// Nekonečne bežiaci pás pod hero sekciou.
// Každá položka sa dá kliknúť a nastaví filter v ukážke appky.
export const marquee = {
  hint: "klikni a ukážeme ti to",
  items: [
    { label: "futbal v Petržalke", interest: "futbal" },
    { label: "ranný beh pri Dunaji", interest: "beh" },
    { label: "deskovky u Kamila", interest: "deskovky" },
    { label: "čítame nefikciu", interest: "knihy" },
    { label: "lezenie pre začiatočníkov", interest: "lezenie" },
    { label: "fotíme mesto v noci", interest: "fotenie" },
    { label: "nočné sedenia online", interest: "gaming" },
    { label: "varíme si navzájom", interest: "varenie" },
    { label: "zápasy v krčme", interest: "futbal" },
    { label: "píšeme po večeroch", interest: "knihy" },
  ],
};

// ---------- PRE ZAKLADATEĽOV ----------
// Prepínač ukazuje, že systém radí inak podľa typu komunity.

export const founders = {
  title: "Nenecháme ťa v tom",
  text: "Komunity nezanikajú pre nezáujem. Zanikajú preto, že nikto nepovie, čo nefunguje. My to vidíme.",
  closing: "Nájsť ľudí je začiatok. Udržať ich je robota. A v tej ti pomáhame.",
  switchLabel: "Dve komunity, dve úplne iné rady:",
  cases: [
    {
      key: "zivo",
      tab: "Florbal v Trnave",
      meta: "naživo · 12 členov · 6 týždňov ticho",
      tips: [
        "Nemáš zadané miesto. Pri florbale je to prvá vec, ktorú ľudia hľadajú.",
        "Šesť týždňov bez stretka. Vypíš termín, kým na vás nezabudnú.",
        "Chodia stále tí istí štyria. Skús víkend.",
      ],
    },
    {
      key: "online",
      tab: "Nočné sedenia",
      meta: "online · 41 členov · aktívna",
      tips: [
        "Miesto neriešime, ste online. S tým ťa otravovať nebudeme.",
        "Chýba veta o tom, čo sa u vás deje. Ľudia sa neprihlásia naslepo.",
        "Rastiete rýchlo. Pridaj druhého, kto môže vypisovať stretká.",
      ],
    },
  ],
};

export const faq = {
  title: "Časté otázky",
  items: [
    { q: "Je to zadarmo?", a: "Áno. Hľadanie aj založenie." },
    {
      q: "Musím mať účet?",
      a: "Áno, prihlásenie je na jeden klik. Potrebujeme vedieť, kto sa do partie pridáva.",
    },
    {
      q: "Čo keď v mojom meste nič nie je?",
      a: "Neboj sa, evidujeme ťa. Keď taká komunita vznikne, pošleme ti upozornenie. A ak nechceš čakať, založ ju — prihráme ti prvých ľudí a poradíme, ako začať.",
    },
    {
      q: "Sú tu aj online komunity?",
      a: "Áno. Pri nich mesto neriešime.",
      // Poznámka pre seba. Keď riadok zmažeš, nápis zo stránky zmizne.
      todo: "Vrátiť sa a zmeniť toto",
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
  title: "Tvoja komunita už možno existuje. Nenechaj ju čakať.",
  text: "Alebo čaká, kým ju založíš. Obe cesty vedú cez to isté tlačidlo.",
  ctaPrimary: "Hľadám partiu",
  ctaSecondary: "Zakladám komunitu",
};

export const footer = {
  tagline: "Miesto, kde sa ľudia a komunity konečne nájdu.",
  links: [
    { label: "Ako to funguje", href: "#ako-to-funguje" },
    { label: "Vyskúšaj", href: "#vyskusaj" },
    { label: "Pre zakladateľov", href: "#pre-zakladatelov" },
    { label: "Otázky", href: "#otazky" },
  ],
  note: "Pracovná verzia. Staviame to práve teraz.",
};
