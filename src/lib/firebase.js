// ─────────────────────────────────────────────────────────────
//  Ukladanie e-mailov zo zoznamu záujemcov do Firebase (Firestore).
//
//  Kým nevyplníš súbor .env (pozri .env.example), stránka beží
//  v "demo režime": formulár funguje, e-mail sa vypíše do konzoly
//  prehliadača, ale nikam sa neuloží. Nič sa nerozbije.
// ─────────────────────────────────────────────────────────────

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(config.apiKey && config.projectId);

let db = null;
if (isFirebaseConfigured) {
  db = getFirestore(initializeApp(config));
}

export async function saveEmail(email) {
  if (!db) {
    console.info("[demo režim] Tento e-mail by sa uložil do Firebase:", email);
    return;
  }

  await addDoc(collection(db, "waitlist"), {
    email,
    createdAt: serverTimestamp(),
  });
}
