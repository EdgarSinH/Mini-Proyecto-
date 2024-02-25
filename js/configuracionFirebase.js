
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyA0fGQ8ZL45n3X7JpudSJV7GARbKdX213Q",
  authDomain: "computadoras-b5045.firebaseapp.com",
  projectId: "computadoras-b5045",
  storageBucket: "computadoras-b5045.appspot.com",
  messagingSenderId: "516288978118",
  appId: "1:516288978118:web:12c5eda5c721a238090bc7"
};

// Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, doc, setDoc, getDocs, collection, deleteDoc, updateDoc };
