// ─────────────────────────────────────────────────────────────
//  VŠETKY TEXTY STRÁNKY SÚ TU.
//  Ak chceš zmeniť čokoľvek napísané na stránke, meň to v tomto
//  súbore - do ostatných súborov nemusíš vôbec chodiť.
//  Pozor len na to, aby ostali úvodzovky a čiarky na svojich miestach.
// ─────────────────────────────────────────────────────────────

// "Spolu" je zatiaľ len pracovný názov - pokojne ho prepíš.
export const brand = "Spolu";

export const nav = {
  links: [
    { label: "Prečo", href: "#preco" },
    { label: "Ako to funguje", href: "#ako" },
    { label: "Otázky", href: "#otazky" },
  ],
  cta: "Zapísať sa",
};

export const hero = {
  eyebrow: "Bratislava · pripravujeme",
  title: "Nájdi si v meste ľudí, s ktorými to má pokračovanie.",
  lede: "Väčšina appiek ti nájde event. My chceme, aby ti ostali ľudia, ktorých na ňom stretneš - či už si v meste nový, alebo tu žiješ roky a len nemáš s kým chodiť na to, čo ťa baví.",
  formNote: "Napíšeme ti, keď spustíme beta verziu v Bratislave. Nič iné ti posielať nebudeme.",
  // Fotka na pozadí nadpisu. Musí ležať v public/fotky landing page/.
  // Ak sem dáš prázdne úvodzovky, pozadie sa nezobrazí vôbec.
  background: "tanec.jpg",
};

// Fotky pod úvodným nadpisom.
// `src` je názov súboru v priečinku public/fotky landing page/
// `caption` je text pod fotkou, `alt` je popis pre nevidiacich
// a pre prípad, že sa fotka nenačíta.
export const collage = {
  items: [
    {
      src: "piknik.webp",
      caption: "Piknik v parku",
      alt: "Partia ľudí sediaca v kruhu na tráve v parku",
    },
    {
      src: "beh.webp",
      caption: "Ranný beh",
      alt: "Bežkyne si po dobehnutí plácajú ruky",
    },
    {
      src: "workshop.webp",
      caption: "Kreatívny workshop",
      alt: "Ľudia maľujú pri dlhých stoloch vonku",
    },
    {
      src: "prechadzka.webp",
      caption: "Večerná prechádzka",
      alt: "Skupina ľudí kráča po chodníku do zapadajúceho slnka",
    },
  ],
};

export const diagram = {
  eyebrow: "Jedna cesta, dva konce",
  caption:
    "Bod, v ktorom sa dnešné appky končia, je pre nás odbočka - nie cieľová stanica.",
  stops: [
    { label: "Chýba ti partia", color: "teal" },
    { label: "Nájdeš verejný event", color: "teal" },
    { label: "Spoznáš ľudí", color: "teal" },
  ],
  branches: [
    { label: "Partia sa stretáva ďalej", color: "raspberry" },
    { label: "Ostane ti jedno spojenie", color: "amber" },
  ],
};

export const problem = {
  eyebrow: "Prečo to staviame",
  title: "Nástroje, ktoré dnes máme, riešia vždy len polovicu",
  cards: [
    {
      kicker: "Objavovacie platformy",
      body: "VaultGrid, Meetup, Eventbrite či Luma ti nájdu akciu. Lenže event nemá pamäť - o mesiac sa tá istá partia skladá odznova.",
    },
    {
      kicker: "Súkromné pozvánky",
      body: "Partiful, WhatsApp či Apple Invites spoľahlivo vyriešia, kto ide a koľko nás bude. Nepomôžu ti však vtedy, keď ešte nemáš koho pozvať.",
    },
    {
      kicker: "Peniaze mimo appky",
      body: "Kto koľko dlží, sa dohaduje v popise eventu a v správach. Najotravnejšia časť organizovania ostáva nevyriešená.",
    },
  ],
};

export const how = {
  eyebrow: "Ako to funguje",
  title: "Dve vrstvy, jedna appka",
  layers: [
    {
      tag: "Súkromná",
      title: "Pre partiu, ktorú už máš",
      body: "Vytvoríš akciu, pošleš link, vidíš kto príde. Kamarát sa nemusí nikde registrovať ani nič sťahovať. Funguje od prvého dňa - aj keď appku nemá nikto iný v meste.",
      color: "teal",
    },
    {
      tag: "Verejná",
      title: "Pre ľudí, ktorých ešte nepoznáš",
      body: "Nič netlačíme - veľa akcií je jednorazových a tak to má ostať. Keď sa ale vaša partia stretne tretíkrát, ponúkneme organizátorovi otvoriť ju pre ďalších. A po jednorazovej akcii ponúkneme účastníkom ostať v kontakte s konkrétnymi ľuďmi, ktorých tam stretli.",
      color: "raspberry",
    },
  ],
};

export const promise = {
  eyebrow: "Sľub",
  title: "Vytvoriť akciu bude vždy zadarmo",
  body: "Bez výnimiek a bez hviezdičky. Platíš len vtedy, keď sám vyberáš peniaze od účastníkov - vtedy si necháme 5 až 10 % z vybranej sumy. Nič vopred, žiadne riziko pre organizátora.",
};

export const faq = {
  eyebrow: "Časté otázky",
  title: "Čo sa väčšinou pýtate",
  items: [
    {
      q: "Kedy to spustíte?",
      a: "Staviame beta verziu pre Bratislavu. Ľudia zo zoznamu sa k nej dostanú ako prví.",
    },
    {
      q: "Nie som nový v meste. Je to aj pre mňa?",
      a: "Áno. Partia na konkrétnu vec - ranné behanie, deskovky, lezenie, jazyky - chýba rovnako ľuďom, ktorí tu žijú roky. Eventy preto triedime podľa témy, nie podľa toho, ako dlho v meste si.",
    },
    {
      q: "Musia si appku stiahnuť aj moji kamaráti?",
      a: "Nie. Na potvrdenie účasti stačí link - bez inštalácie a bez registrácie.",
    },
    {
      q: "Organizujem akcie pravidelne. Má to pre mňa zmysel?",
      a: "Áno, a radi sa s tebou porozprávame. Zapíš sa a odpíš nám do e-mailu, čo organizuješ.",
    },
    {
      q: "Koľko to bude stáť?",
      a: "Vytváranie akcií a súkromná koordinácia zadarmo, navždy. Províziu si berieme len z akcií, na ktoré sami vyberáte vstupné.",
    },
  ],
};

export const finalCta = {
  title: "Chceš byť pri tom od začiatku?",
  body: "Zapíš sa do zoznamu. Ozveme sa, keď bude čo skúšať.",
};

export const footer = {
  line: "Staviame v Bratislave.",
};

export const form = {
  placeholder: "tvoj@email.sk",
  button: "Chcem byť medzi prvými",
  buttonBusy: "Ukladám…",
  success: "Hotovo - máme ťa v zozname. Ozveme sa.",
  errorEmail: "Skontroluj e-mail, niečo tam nesedí.",
  errorGeneric: "Nepodarilo sa uložiť. Skús to o chvíľu znova.",
};
