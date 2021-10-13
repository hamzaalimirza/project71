import firebase from 'firebase'
require("@firebase/firestore")
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBDZER7nATH6x1BfBKwqi2u-aB7eQRnAhQ",
  authDomain: "complaint-forum-b5000.firebaseapp.com",
  projectId: "complaint-forum-b5000",
  storageBucket: "complaint-forum-b5000.appspot.com",
  messagingSenderId: "697019652777",
  appId: "1:697019652777:web:1e239faeed68d634f3a7b8"
};

 
      if(!firebase.apps.length){
       firebase.initializeApp(firebaseConfig)
       }
  export default firebase.firestore()

