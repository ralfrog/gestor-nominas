import firebase from "firebase/app";
import "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyAS_QFuAg9GEEfe66UdsL8JF1V5jhHbvSo",
    authDomain: "gestor-nominas-aa322.firebaseapp.com",
    projectId: "gestor-nominas-aa322",
    storageBucket: "gestor-nominas-aa322.appspot.com",
    messagingSenderId: "127269244587",
    appId: "1:127269244587:web:db6cbe42822a4e3349f1ee"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Utils
  // Autentificacion de firebase
  const auth = firebase.auth();


  //Exports

  export {auth};