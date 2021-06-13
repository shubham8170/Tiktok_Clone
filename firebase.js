// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD-YqrNA9HjlFqT4EXIoQVg95jwneRErg0",
    authDomain: "tiktok-clone-a83f0.firebaseapp.com",
    projectId: "tiktok-clone-a83f0",
    storageBucket: "tiktok-clone-a83f0.appspot.com",
    messagingSenderId: "527659330810",
    appId: "1:527659330810:web:c30729796a805406a3ed43",
    measurementId: "G-Y327EX6RC5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;