import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeGoGlND9F1o_JPcQbn0lnfeECTY98B6s",
  authDomain: "insurance-provider-dashboard.firebaseapp.com",
  projectId: "insurance-provider-dashboard",
  storageBucket: "insurance-provider-dashboard.firebasestorage.app",
  messagingSenderId: "1061265501839",
  appId: "1:1061265501839:web:9e029a10f607fff7b04afa",
  measurementId: "G-ZVF5NS5PTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);