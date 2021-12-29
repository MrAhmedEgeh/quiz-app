import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage";

import { getAuth } from "firebase/auth";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBsRhZeSqG1jsJAVQKWcfO8fbFnKX2Xj5A",

    authDomain: "quiz-app-10d35.firebaseapp.com",
  
    projectId: "quiz-app-10d35",
  
    storageBucket: "quiz-app-10d35.appspot.com",
  
    messagingSenderId: "456227089584",
  
    appId: "1:456227089584:web:5be812f528d10e65231f75",
  
    measurementId: "G-05BP4B0VZG"
  
});

const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);

export {db, auth, storage};

