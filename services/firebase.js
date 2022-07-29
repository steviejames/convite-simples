// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  doc,
  query,
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
  let state;
  if (docSnap.exists()) {
    const doc = await setDoc(
      docRef,
      {
        confirmed: option == "confirm" ? true : false,
      },
      { merge: true }
    );
    return true;
  } else {
    return false;
  }
}

export async function addGuest(name, phone, invitedby) {
  const ref = doc(db, "convidados", `${phone}`);

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

export async function getGuest(phone) {
  // const ref = doc(db, "convidados", `${phone}`);
  // const doc = await getDoc(ref);
  const q = query(collection(db, "convidados"), where("phone", "==", phone));
  let docs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docs.push(doc.data());
  });
  const guest = docs.find(
    (item, index, {}) => Number(item.phone) == Number(phone)
  );
  if (docs.length) {
    return guest;
  } else {
    return null;
  }
}
