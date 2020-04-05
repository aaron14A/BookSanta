import firebase from 'firebase';
require('@firebase/firestore');


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC76uUFds3EHgLqcdIpBUd8mNa-_zA0ny0",
    authDomain: "booksanta-d0bfe.firebaseapp.com",
    databaseURL: "https://booksanta-d0bfe.firebaseio.com",
    projectId: "booksanta-d0bfe",
    storageBucket: "booksanta-d0bfe.appspot.com",
    messagingSenderId: "478421464792",
    appId: "1:478421464792:web:ee69b328b058c6b7dc09ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();