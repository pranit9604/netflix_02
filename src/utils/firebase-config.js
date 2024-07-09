import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfyzuHECqPQPJj2sLNoUJMMjlDk6hjdSE",
  authDomain: "netflix-project-f9deb.firebaseapp.com",
  projectId: "netflix-project-f9deb",
  storageBucket: "netflix-project-f9deb.appspot.com",
  messagingSenderId: "257493190877",
  appId: "1:257493190877:web:fc0dc5ddd198c5386d3334",
  measurementId: "G-7SEY1WQYNE",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
