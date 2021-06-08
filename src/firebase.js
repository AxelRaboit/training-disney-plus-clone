import firebase from "firebase";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCClZTZvJ2hEdDWepZKHbuvH-G7KNm7gZI",
    authDomain: "disney-plus-clone-50123.firebaseapp.com",
    projectId: "disney-plus-clone-50123",
    storageBucket: "disney-plus-clone-50123.appspot.com",
    messagingSenderId: "945215564915",
    appId: "1:945215564915:web:714cd6e75b865cb0a34e06"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage =  firebase.storage();

  export { auth, provider, storage };
  export default db;