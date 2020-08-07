import firebase from 'firebase/app'
import "firebase/firestore"
require('firebase/auth')
 
var firebaseConfig = {
    apiKey: "AIzaSyC6yixoavc5n-o7obElApQSWHVY8gm8vno",
    authDomain: "chatapp-3fbf0.firebaseapp.com",
    databaseURL: "https://chatapp-3fbf0.firebaseio.com",
    projectId: "chatapp-3fbf0",
    storageBucket: "chatapp-3fbf0.appspot.com",
    messagingSenderId: "97738465501",
    appId: "1:97738465501:web:3c5fdb6507d70ba87e7b34",
    measurementId: "G-QN04T3FPKX"
  };

  firebase.initializeApp(firebaseConfig)
  export const firestore=firebase.firestore()
  export default firebase
