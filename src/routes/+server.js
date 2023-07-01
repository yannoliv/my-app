// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { collection, doc, getFirestore } from "Firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWpycN1h6uMw40bjNo2OZ3MTxEunOiyZQ",
  authDomain: "yannick-olivier.firebaseapp.com",
  projectId: "yannick-olivier",
  storageBucket: "yannick-olivier.appspot.com",
  messagingSenderId: "546696904669",
  appId: "1:546696904669:web:4e74eccfbe986389f0c034",
  measurementId: "G-R35SPRS0SY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
const db = getFirestore(app);
const contactCollection = collection(db, "contact");

export { db, contactCollection}