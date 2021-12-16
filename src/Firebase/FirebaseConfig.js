import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
//import { collection, getDocs } from "firebase/firestore"; 
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import data from "../data";
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


let querySnapshot;

/* already used in App' useEffect ------READ FUNCTION
const readData = async () => {
    querySnapshot = await getDocs(collection(db, "quiz-data"));
    data.length = 0;
    querySnapshot.forEach((doc) => {
       data.push(doc.data())
      });
}
*/
/*------------UPDATE FUNCTION
const updateCategories = async () => {
    const userDoc = doc(db, "quiz-data","docid");
    const newFields =   {/* PUT YOUR OBJECT HERE TO PUSH IT TO THE DOC SPECIFIED ABOVE /*};
    await updateDoc(userDoc, newFields);
};
*/

//export default readData;
export {db, auth};

