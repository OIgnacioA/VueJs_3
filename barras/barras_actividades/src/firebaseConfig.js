// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAl-NYCPRfMxRVEcLz7FS_3zQRRAldtbHQ",
    authDomain: "barsactivities.firebaseapp.com",
    projectId: "barsactivities",
    storageBucket: "barsactivities.appspot.com",
    messagingSenderId: "644453785063",
    appId: "1:644453785063:web:50fd4fd6fa753599c2f142",
    measurementId: "G-2J2DJLXZT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export { db };
