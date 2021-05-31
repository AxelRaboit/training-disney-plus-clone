import firebase from "firebase";

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC8bFnEtm464nZ1vbHwBIQ25p3djn2rr-c",
    authDomain: "disneyplus-clone-2f20f.firebaseapp.com",
    projectId: "disneyplus-clone-2f20f",
    storageBucket: "disneyplus-clone-2f20f.appspot.com",
    messagingSenderId: "818229197015",
    appId: "1:818229197015:web:43eb8cec75d3a0ea851892"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage =  firebase.storage();

  export { auth, provider, storage };
  export default db;