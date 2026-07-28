# Projekt

Jednostránková appka v Reacte, pripravená na nasadenie na Firebase Hosting.
Zatiaľ prázdny základ - obsah pribudne, keď bude jasný nápad.

---

## 1. Čo potrebuješ nainštalovať (raz za život)

**Node.js** - prostredie, v ktorom projekt beží.
Stiahni verziu „LTS" z [nodejs.org](https://nodejs.org) a nainštaluj.
Overenie, že to prešlo - otvor Terminál a napíš:

```bash
node -v
```

Ak ti to vypíše niečo ako `v20.11.0`, je to v poriadku.

**Firebase CLI** - nástroj na nasadzovanie. V Termináli:

```bash
npm install -g firebase-tools
firebase login
```

---

## 2. Spustenie na tvojom počítači

V Termináli sa presuň do priečinka s projektom a spusti:

```bash
npm install
npm run dev
```

Terminál ti vypíše adresu (`http://localhost:5173`). Otvor ju v prehliadači.
Keď niečo v kóde zmeníš a uložíš, stránka sa sama obnoví.

Zastavíš to klávesovou skratkou `Ctrl + C`.

---

## 3. Ukladanie dát do Firebase

Appka beží aj bez Firebase - pripojenie je zatiaľ len pripravené (`src/lib/firebase.js`).

Aby sa dáta naozaj ukladali:

1. Vo [Firebase konzole](https://console.firebase.google.com) vytvor projekt.
2. V projekte zapni **Firestore Database** (režim „production").
3. V `Project settings → General → Your apps` pridaj **webovú aplikáciu** a skopíruj si údaje.
4. V priečinku projektu skopíruj `.env.example` do nového súboru `.env` a vyplň hodnoty.
5. Do `.firebaserc` daj namiesto `SEM-DAJ-ID-SVOJHO-FIREBASE-PROJEKTU` skutočné ID projektu.
6. V `firestore.rules` nastav, kto smie čo čítať a zapisovať.
7. Reštartuj `npm run dev`.

---

## 4. Nasadenie na internet

```bash
npm run build
firebase deploy
```

Prvýkrát ťa Firebase môže vyzvať na potvrdenie nastavení - priečinok na zverejnenie je **`dist`**.

Ak si Firestore ešte nezapla a `firebase deploy` hlási chybu, nasaď zatiaľ len samotnú stránku:

```bash
firebase deploy --only hosting
```

Skratka pre oboje naraz je `npm run deploy`.

---

## 5. Čo je v ktorom súbore

```
├── index.html              titulok stránky, načítanie appky
├── package.json            zoznam knižníc a príkazov
├── vite.config.js          nastavenie buildu
├── firebase.json           nastavenie Firebase Hostingu
├── .firebaserc             ID tvojho Firebase projektu
├── firestore.rules         kto smie čítať a zapisovať do databázy
├── .env.example            vzor pre prístupové údaje k Firebase
├── public/                 statické súbory (favicon, obrázky)
└── src/
    ├── styles.css          farby, písma, vzhľad
    ├── App.jsx             poskladanie stránky
    ├── main.jsx            štart aplikácie
    ├── lib/firebase.js     pripojenie na Firebase
    └── components/         jednotlivé časti stránky
```
