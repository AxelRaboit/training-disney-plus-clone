import firebase from "firebase";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDB8FgInqDDs84O51Qnb0vgJnMTM2ZORbs",
    authDomain: "disneyplus-clone-375e8.firebaseapp.com",
    projectId: "disneyplus-clone-375e8",
    storageBucket: "disneyplus-clone-375e8.appspot.com",
    messagingSenderId: "1007346078408",
    appId: "1:1007346078408:web:9dcb5ea54f34c405a78bfd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage =  firebase.storage();

  export { auth, provider, storage };
  export default db;