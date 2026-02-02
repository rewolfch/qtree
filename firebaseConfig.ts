
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Zugriff auf Vite Environment Variables
const env = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
};

// Initialisierung
let app;
let db: any;

try {
  // Wir initialisieren nur, wenn Config da ist, um Abstürze zu vermeiden
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase initialized.");
  } else {
    console.warn("Firebase Config missing. App running in offline mode.");
  }
} catch (e) {
  console.error("Firebase Init Error:", e);
}

export { db };
