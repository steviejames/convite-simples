// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore/lite";
//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6R1AWTBDI-ecIJaPs3a9yc6F2IZgi30c",
  authDomain: "convite-digital.firebaseapp.com",
  projectId: "convite-digital",
  storageBucket: "convite-digital.appspot.com",
  messagingSenderId: "951575544614",
  appId: "1:951575544614:web:a14b897d6495f2778cf7e7",
  measurementId: "G-Q1RSN87RWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//confirmation function
export async function confirmPresence(number) {
  const q = query(collection(db, "convidados"), where("phone", "==", number));
  const querySnapshot = await getDocs(q);
  const result = querySnapshot.forEach((doc) => {
    return doc.data;
  });

  const res = {
    ...result[0],
  };
  if (res) {
    console.log(true);
  } else {
    console.log(false);
  }
}

export async function getGuests(id) {}
