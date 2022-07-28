// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  doc,
  query,
  addDoc,
  where,
  getDocs,
  getDoc,
  setDoc,
} from "firebase/firestore";
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
//const analytics = getAnalytics(app);
const db = getFirestore(app);

//confirmation function
export async function confirmPresence(number, option) {
  const docRef = doc(db, "convidados", `${number}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setDoc(
      docRef,
      {
        confirmed: option == "confirm" ? true : false,
      },
      { mmerge: true }
    )
      .then((resDoc) => {
        console.log("Atualizado");
        return {
          state: "success",
        };
      })
      .catch((error) => {
        console.log(error);
        return {
          state: "failed",
        };
      });
  }
}

export async function addGuest(name, phone, invitedby) {
  const ref = doc(db, "convidados", `${phone}`);
  try {
    const docRef = await setDoc(
      ref,
      {
        name,
        invitedby,
        phone,
        confirmed: false,
      },
      { merge: true }
    );
    return {
      state: "success",
    };
  } catch (error) {
    console.log(error);
    return { state: "failed" };
  }
}

export async function listGuests() {
  const q = query(collection(db, "convidados"));

  const querySnapshot = await getDocs(q);
  const docs = [];

  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  return docs;
}
