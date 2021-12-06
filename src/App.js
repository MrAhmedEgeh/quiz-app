import React, {useState} from "react";
import './Styles/app.scss';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';


import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Types from "./Components/Types";

import ListQuizzes from "./Components/ListQuizzes";
import Quiz from "./Components/Quiz";
import NotFound from "./Components/NotFound";

function App() {
  const [sortTypes, setSortTypes] = useState("All"); // for searching the types of quizzes which can be found in Types.js
  const [quizName, SetQuizName] = useState('');
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [question, setQuestion] = useState({});

  return (
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
