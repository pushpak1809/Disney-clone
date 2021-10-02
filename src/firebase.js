import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbcI53jfG-gsX9D3yRcHyLGWNGT7j8OgE",
  authDomain: "disney-se.firebaseapp.com",
  projectId: "disney-se",
  storageBucket: "disney-se.appspot.com",
  messagingSenderId: "749788966839",
  appId: "1:749788966839:web:c0910d4e5e0b3d19f74232",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default dbConfig;
