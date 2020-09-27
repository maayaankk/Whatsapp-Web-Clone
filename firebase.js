import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqVBUi2YHldMpEIdV6IxKcAHBVz6l94X0",
  authDomain: "whatsapp-web-40ec8.firebaseapp.com",
  databaseURL: "https://whatsapp-web-40ec8.firebaseio.com",
  projectId: "whatsapp-web-40ec8",
  storageBucket: "whatsapp-web-40ec8.appspot.com",
  messagingSenderId: "92174243742",
  appId: "1:92174243742:web:1d4727136ac04843eda88f",
  measurementId: "G-8R3DWKS3W0",
};

  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;