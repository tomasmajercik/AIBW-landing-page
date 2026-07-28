// ─────────────────────────────────────────────────────────────
//  VŠETKY TEXTY STRÁNKY SÚ TU.
//  Ak chceš zmeniť čokoľvek napísané na stránke, meň to v tomto
//  súbore - do ostatných súborov nemusíš vôbec chodiť.
//  Pozor len na to, aby ostali úvodzovky a čiarky na svojich miestach.
// ─────────────────────────────────────────────────────────────

export const brand = "Prisadni si";

// Logo je dvojfarebné: "pri" čiernou, "sadni si" vínovou.
// Ak zmeníš názov, rozdeľ ho tu na dve časti.
export const wordmark = {
  first: "pri",
  rest: "sadni si",
};

export const nav = {
  links: [
    { label: "Nápoje", href: "#napoje" },
    { label: "Ako to funguje", href: "#ako" },
    { label: "Otázky", href: "#otazky" },
  ],
  cta: "Zapísať sa",
};

export const hero = {
  eyebrow: "Slovensko · pripravujeme",
  title: "Nájdi tých, čo ti sadnú.",
  titleAccent: "Prisadni si.",
  lede: "Veľa ľudí by rado niekam zašlo - len nemá s kým. Vytvor stôl pri káve, čaji, pive alebo víne a kto chce, ten si prisadne. Vždy traja a viac.",
  // Veta hneď nad formulárom v úvode
  formLead: "Chyť si svoje miesto pri stole.",
  formNote: "Napíšeme ti, keď spustíme prvé stretnutia. Nič iné ti posielať nebudeme.",
};

// Ukážka stretnutia v telefóne.
// `open: true` znamená, že položka je "otvorená" - organizátor ju
// nevyplnil a dohodnú sa na nej až tí, čo sa pridali.
export const preview = {
  eyebrow: "Takto to vyzerá",
  title: "Nápoj, čas a miesto určíš ty. Zvyšok môže ostať otvorený.",
  lede: "Organizátor vyplní vždy tri veci - čo sa pije, o koľkej a kde. Téma povinná nie je. Keď ju nechá otvorenú, dohodnete sa na nej až vy, čo idete.",
  note: "Prerušovaný krúžok s plusom je voľné miesto pri stole. To je to tvoje.",
  // Obsah obrazovky v telefóne. Kľúč `key` určuje farbu podľa nápoja.
  // `people` sú iniciály ľudí, `free` je počet voľných miest.
  app: {
    title: "Kde je pre teba voľné miesto",
    sub: "Dnes večer · 4 stoly čakajú na tretieho",
    chips: ["Dnes", "Len ženy", "Veda"],
    cards: [
      {
        key: "vino",
        seats: "1 voľné miesto",
        text: "Lucia, Martin a Tereza sa bavia o knihách vs. seriáloch",
        meta: "Víno · 19:30 · Pod hradom",
        people: ["LK", "MJ", "T"],
        free: 1,
        button: "Prisadnúť si",
      },
      {
        key: "pivo",
        seats: "2 voľné miesta",
        text: "Ján a Peťo chcú vysvetliť, ako naozaj funguje AI",
        meta: "Pivo · 20:00 · Amorté",
        people: ["JD", "P"],
        free: 2,
        button: "Prisadnúť si",
      },
    ],
  },
};

// Štyri nápoje. Nič nepredpisujú - sú to len príklady toho,
// čo si u nás môžeš vytvoriť. Číslo (01, 02...) sa dopĺňa
// automaticky podľa poradia.
export const drinks = {
  eyebrow: "Čo si dáte",
  title: "Vytvoríš si to, na čo máš chuť",
  lede: "Nič nepredpisujeme. Chceš ísť pozerať futbal na pivo? Vytvoríš stretnutie a kto chce, ten sa pridá. Chceš si len tak posedieť pri čaji? To isté. Ty určíš tému, čas aj miesto.",
  items: [
    {
      key: "kava",
      name: "Káva",
      example: "„Kávička a pokec o knihách?“",
    },
    {
      key: "caj",
      name: "Čaj",
      example: "„Len tak si posedieť pri čaji.“",
    },
    {
      key: "pivo",
      name: "Pivo",
      example: "„Ideme pozerať futbal, kto sa pridá?“",
    },
    {
      key: "vino",
      name: "Víno",
      example: "„Víno a debata o filmoch.“",
    },
    // Posledná dlaždica nie je nápoj - je to odkaz, že zoznam nie je
    // uzavretý. Namiesto poradového čísla má znak z `icon`.
    {
      key: "ine",
      name: "Iné",
      icon: "+",
    },
  ],
};

export const how = {
  eyebrow: "Ako to funguje",
  title: "Štyri kroky, žiadne swipovanie",
  lede: "Zlaďte sa témou, časom a nápojom a prisadnite si k jednému stolu.",
  steps: [
    {
      title: "Niekto vypíše stretnutie",
      body: "Téma, nápoj, dátum, mesto a počet miest. Napríklad: „Ideme na pivo pozerať zápas - štvrtok o 20:00, Staré Mesto, 5 miest.“",
    },
    {
      title: "Ostatní ho uvidia",
      body: "V zozname si filtruješ podľa nápoja, mesta a témy. Žiadne profily na prezeranie - rovno vidíš, kam sa dá ísť.",
    },
    {
      title: "Klikneš „Prisadnúť si“",
      body: "Miesto sa zaberie a vidíš, kto ďalší príde. Keď sa stretnutie naplní, zavrie sa.",
    },
    {
      title: "Stretnete sa naživo",
      body: "Bez týždňov chatovania. Prídeš, sadneš si, rozprávate sa o veci, ktorá vás všetkých baví.",
    },
  ],
};

export const faq = {
  // Ak sem dáš prázdne úvodzovky, malý nadpisík sa nezobrazí.
  eyebrow: "",
  title: "Často kladené otázky",
  items: [
    {
      q: "Naozaj to nie je zoznamka?",
      a: "Nie. Na každom stretnutí sú minimálne traja ľudia a to sa nedá obísť. Nikto nechodí na rande vo štvorici - a presne o to nám ide.",
    },
    {
      q: "Som hanblivá, čo ak nebudem vedieť čo povedať?",
      a: "Práve preto sú stretnutia na tému. Nesadáte si k stolu, aby ste sa „spoznali“ - sadáte si, lebo vás všetkých baví to isté. A v skupine nemusíš hovoriť ty, stačí počúvať.",
    },
    {
      q: "Kedy to spustíte?",
      a: "Pripravujeme prvé stretnutia. Ľudia zo zoznamu sa dozvedia ako prví - a budú si môcť vypísať vlastné stretnutie skôr než ostatní.",
    },
    {
      q: "Nepijem alkohol. Je to aj pre mňa?",
      a: "Áno. Polovica formátov je nealkoholická - káva a čaj. Nikto ťa nikam netlačí a na pivo si môžeš dať kofolu.",
    },
    {
      q: "Musím vypísať stretnutie, aby som sa mohol pridať?",
      a: "Nie. Väčšina ľudí sa len pridáva a je to úplne v poriadku. Vypísať vlastné stretnutie je možnosť, nie povinnosť.",
    },
    {
      q: "V ktorých mestách to bude?",
      a: "Na celom Slovensku - stretnutie si môžeš vypísať kdekoľvek. Prvé budú najhustejšie v Bratislave.",
    },
    {
      q: "Koľko to bude stáť?",
      a: "Nič. Zapísať sa, vypísať stretnutie aj pridať sa je zadarmo. Platíš si len vlastný nápoj, ako vždy.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Zapíš sa",
  title: "Chceš byť pri prvých",
  titleAccent: "stretnutiach?",
  body: "Ozveme sa, keď bude kam prísť.",
};

export const footer = {
  line: "Staviame na Slovensku.",
};

export const form = {
  placeholder: "tvoj@email.sk",
  button: "Zapísať sa",
  buttonBusy: "Ukladám…",
  success: "Hotovo - máme ťa v zozname. Ozveme sa.",
  errorEmail: "Skontroluj e-mail, niečo tam nesedí.",
  errorGeneric: "Nepodarilo sa uložiť. Skús to o chvíľu znova.",
};
