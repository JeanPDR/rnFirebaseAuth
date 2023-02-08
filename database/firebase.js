// database/firebaseDb.js
import * as firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyChip1U-EwMsppXwjkfwsQ1xvYCOKIxwlg",
    authDomain: "k1ngapps.firebaseapp.com",
    databaseURL: "https://k1ngapps-default-rtdb.firebaseio.com",
    projectId: "k1ngapps",
    storageBucket: "k1ngapps.appspot.com",
    messagingSenderId: "321595633492",
    appId: "1:321595633492:web:51b81ce0a9e317317962c1",
    measurementId: "G-M6KRBR2M9K"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;
