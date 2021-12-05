import React, {useState, useEffect} from 'react';
import { NavLink, useParams} from 'react-router-dom';
import data from "../data";

const ListQuizzes = ({sortTypes, setCurrentQuestions, setQuestion, SetQuizName}) => {

    // useParam
    const {category} = useParams();

    //USE EFFECT
    useEffect(() => {
        setCurrentQuestions([]);
        setQuestion({});
        SetQuizName('')
    }, [])

    const idLogger = (parentId, quizId) => {
        setCurrentQuestions(data[parentId].quizzes[quizId].questions);
        setQuestion(data[parentId].quizzes[quizId].questions[0]);
        SetQuizName(data[parentId].name);
    }
    
    return(
        <div className="quiz-container">
            {data.map((element, i) => (
              element.name === category ?
                element.quizzes.map(quiz => (
                    quiz.Name.toUpperCase().match(sortTypes.toUpperCase()) ||  sortTypes === 'All'?
                    <div key={i} className="quiz">
                        <div className="imageContainer">
                            <img src={quiz.Image} alt={''} />
                        </div>
                        <div className="content">
                        {/**QUIZ TYPE AND QUIZ TITLE */}
                        <div className="quiztitle">
                        <h5>{element.name}</h5>
                        <h2>{quiz.Name}</h2>
                        {/**QUIZ PROPERTIES, LENGHT AND NUMBER OF QUIZZES */}
                        <div className="secondRow">
                        <span className="length"><span className="bold">Questions:</span> {quiz.questions.length}</span>
                        
                        <span className="diff"><span className="bold">Difficulty:</span> {quiz.Difficulty}</span>
                        </div>
                        </div>
                        <p>{quiz.description}</p>
                        {/**AUTHOR DETAILS */}
                        <div className="author">
                        <div className="con">
                        <img className="authorImage" src={quiz.Author.image} alt="author image" />
                        <span className="authorName">{quiz.Author.name}</span>
                        </div>
                        <NavLink to='/quiz'>
                        <button className="takequiz" onClick={() => idLogger(element.id, quiz.id)}>Take Quiz</button>
                        </NavLink>
                        </div>
                        </div>
                    </div> 
                    :
                   ''
                ))
                :
                ''
            ))}
        </div>
    );
}

export default ListQuizzes;