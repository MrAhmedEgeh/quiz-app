import React, {useState, useEffect} from "react";
import './Styles/app.scss';
import './Styles/loader.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';


import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Types from "./Components/Types";

import ListQuizzes from "./Components/ListQuizzes";
import Quiz from "./Components/Quiz";
import NotFound from "./Components/NotFound";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import ResetPassword from "./Components/RestPassword";
import { AuthProvider } from "./context/AuthContext"

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import data from "./data";
import {db, updateCategories} from './Firebase/FirebaseConfig'
function App() {
  const [sortTypes, setSortTypes] = useState("All"); // for searching the types of quizzes which can be found in Types.js
  const [quizName, SetQuizName] = useState('');
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);
  let bool = false;
  useEffect(() => {
    const readData = async () => {
      let querySnapshot = await getDocs(collection(db, "quiz-data"));
      data.length = 0;
      querySnapshot.forEach((doc) => {
         if(Object.keys(doc.data()).length > 0){
          data.push(doc.data())
        }
        });
        setLoading(false);
  }
  readData();
  }, [])
  return (
    loading === true?
    (
      <AuthProvider>
      <Router>
        <Nav />
        <div class="lds-dual-ring"></div>
      </Router>
      </AuthProvider>
    )
    :
    (
      <AuthProvider>
      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
         <Search setSortTypes={setSortTypes}/>
         <Types sortTypes={sortTypes}/>
         </>
         } 
        />
        {/**LIST THE ROUTES: LOGIN, LIST TYPES, QUIZ*/}
        <Route path="/quizzes/:category" element={
        <>
        <Search setSortTypes={setSortTypes}/>
        <ListQuizzes
        sortTypes={sortTypes} 
        setCurrentQuestions={setCurrentQuestions}
        setQuestion={setQuestion}
        SetQuizName={SetQuizName}/>
        </>
        }/>
        <Route path="/quiz" 
        element={
        <Quiz 
        question={question}
        setQuestion={setQuestion}
        currentQuestions={currentQuestions}
        setCurrentQuestions={setCurrentQuestions}
        quizName={quizName}
        />}
        />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/ResetPassword" element={<ResetPassword />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </AuthProvider>
    )
  );
}

export default App;
