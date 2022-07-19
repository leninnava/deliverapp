import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCa9A6F3F_5MI3e5MlX5xaHHf8uKV5tuuE",
  authDomain: "deliverapp-de892.firebaseapp.com",
  projectId: "deliverapp-de892",
  storageBucket: "deliverapp-de892.appspot.com",
  messagingSenderId: "1091137223942",
  appId: "1:1091137223942:web:a60ad9ca93088543763287",
  measurementId: "G-6ZN3Z8DZC2"
}; /// To do: add to env vars in Vercel?

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);