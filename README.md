# Landing page — Spolu

Jednostránková landing page v Reacte, pripravená na nasadenie na Firebase Hosting.

---

## 1. Čo potrebuješ nainštalovať (raz za život)

**Node.js** — prostredie, v ktorom projekt beží.
Stiahni verziu „LTS" z [nodejs.org](https://nodejs.org) a nainštaluj.
Overenie, že to prešlo — otvor Terminál a napíš:

```bash
node -v
```

Ak ti to vypíše niečo ako `v20.11.0`, je to v poriadku.

**Firebase CLI** — nástroj na nasadzovanie. V Termináli:

```bash
npm install -g firebase-tools
firebase login
```

---

## 2. Spustenie na tvojom počítači

V Termináli sa presuň do priečinka s projektom a spusti:

```bash
cd ~/Developer/AI-build-week/landing-page
npm install
npm run dev
```

Terminál ti vypíše adresu (`http://localhost:5173`). Otvor ju v prehliadači.
Keď niečo v kóde zmeníš a uložíš, stránka sa sama obnoví.

Zastavíš to klávesovou skratkou `Ctrl + C`.

---

## 3. Ako meniť texty

Všetky texty stránky sú v jedinom súbore: **`src/content.js`**.
Nadpisy, popisy, otázky aj názov produktu — všetko sa dá prepísať tam a nikam inam liezť nemusíš.

> Názov **„Spolu"** je len pracovný. Prepíšeš ho na prvom riadku `content.js`.

Farby a písma sú na začiatku súboru **`src/styles.css`** v sekcii `:root`.

---

## 4. Zbieranie e-mailov

Formulár funguje hneď, ale kým nenastavíš Firebase, beží v **demo režime** — e-mail sa iba vypíše do konzoly prehliadača a nikam sa neuloží.

Aby sa e-maily naozaj ukladali:

1. Vo [Firebase konzole](https://console.firebase.google.com) vytvor projekt.
2. V projekte zapni **Firestore Database** (režim „production").
3. V `Project settings → General → Your apps` pridaj **webovú aplikáciu** a skopíruj si údaje.
4. V priečinku projektu skopíruj `.env.example` do nového súboru `.env` a vyplň hodnoty.
5. Do `.firebaserc` daj namiesto `SEM-DAJ-ID-SVOJHO-FIREBASE-PROJEKTU` skutočné ID projektu.
6. Reštartuj `npm run dev`.

Zapísané e-maily nájdeš vo Firebase konzole v kolekcii `waitlist`.
Pravidlá v `firestore.rules` sú nastavené tak, že ktokoľvek sa vie zapísať, ale nikto zvonku zoznam neprečíta.

---

## 5. Nasadenie na internet

```bash
npm run build
firebase deploy
```

Prvýkrát ťa Firebase môže vyzvať na potvrdenie nastavení — priečinok na zverejnenie je **`dist`**.

Ak si Firestore ešte nezapla a `firebase deploy` hlási chybu, nasaď zatiaľ len samotnú stránku:

```bash
firebase deploy --only hosting
```

Skratka pre oboje naraz je `npm run deploy`.

---

## 6. Čo je v ktorom súbore

```
landing-page/
├── index.html              titulok stránky, popis pre Google, načítanie písiem
├── package.json            zoznam knižníc a príkazov
├── vite.config.js          nastavenie buildu
├── firebase.json           nastavenie Firebase Hostingu
├── .firebaserc             ID tvojho Firebase projektu
├── firestore.rules         kto smie zapisovať do databázy
├── .env.example            vzor pre prístupové údaje k Firebase
├── public/
│   └── favicon.svg         ikonka v záložke prehliadača
└── src/
    ├── content.js          ⭐ VŠETKY TEXTY STRÁNKY
    ├── styles.css          ⭐ farby, písma, vzhľad
    ├── App.jsx             poskladanie sekcií za sebou
    ├── main.jsx            štart aplikácie
    ├── lib/firebase.js     ukladanie e-mailov
    └── components/
        ├── Nav.jsx             horná lišta
        ├── Hero.jsx            úvodná obrazovka
        ├── RouteDiagram.jsx    linka s odbočkou
        ├── WaitlistForm.jsx    formulár na e-mail
        ├── Problem.jsx         tri karty s problémom
        ├── HowItWorks.jsx      dve vrstvy produktu
        ├── Promise.jsx         tmavý pás so sľubom
        ├── Faq.jsx             časté otázky
        ├── FinalCta.jsx        záverečná výzva
        └── Footer.jsx          pätička
```
