import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAQg92XaXKp_4xtCXqUMpEu6L_98hXCOr0",
    authDomain: "slack-clone-fe3db.firebaseapp.com",
    projectId: "slack-clone-fe3db",
    storageBucket: "slack-clone-fe3db.appspot.com",
    messagingSenderId: "842498015760",
    appId: "1:842498015760:web:c8a422ffa2ad9ec4328095",
    measurementId: "G-J3C7QV0MEX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
