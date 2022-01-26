// Firebase Config

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

sss;

const firebaseConfig = {
  // Replace with Firebase API
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// Elementos Identificação
const btn_ligar = document.getElementById("btn-ligar");
const btn_desligar = document.getElementById("btn-desligar");
const text_status = document.getElementById("span-status");

btn_ligar.addEventListener("click", function (e) {
  e.preventDefault();
  set(ref(db, "Status"), {
    Status: "ON",
  }).then(() => {
    text_status.innerHTML = "ligada!";
    btn_desligar.classList.remove("disabled");
    btn_ligar.classList.add("disabled");
  });
});

btn_desligar.addEventListener("click", function (e) {
  e.preventDefault();
  set(ref(db, "Status"), {
    Status: "ON",
  }).then(() => {
    text_status.innerHTML = "desligada!";
    btn_ligar.classList.remove("disabled");
    btn_desligar.classList.add("disabled");
  });
});
