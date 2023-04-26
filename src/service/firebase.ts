import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_API_FIREBASE_DONAIN,
    projectId: import.meta.env.VITE_API_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_API_FIREBASE_BUSKET,
    messagingSenderId: import.meta.env.VITE_API_FIREBASE_SENDERID,
    appId: import.meta.env.VITE_API_FIREBASE_APPID,
    measurementId: import.meta.env.VITE_API_FIREBASE_MEASUREMENTID,
};
const app = initializeApp(firebaseConfig);