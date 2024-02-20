import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Stars from "./components/Stars";

const firebaseConfig = {
  apiKey: "AIzaSyAeG7BWiXXRh_qo8T6ligUCDIJQz4xibuM",
  authDomain: "mohamedsefyaniportfolio.firebaseapp.com",
  projectId: "mohamedsefyaniportfolio",
  storageBucket: "mohamedsefyaniportfolio.appspot.com",
  messagingSenderId: "459317818195",
  appId: "1:459317818195:web:77e86b351b3545954867a6",
  measurementId: "G-H4LWE0F32E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Stars />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
