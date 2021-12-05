import React, {useState} from 'react';
import { Navigate } from "react-router-dom";
const Quiz = ({question, setQuestion, currentQuestions, setCurrentQuestions, quizName}) => {
    // VARIABLES
    let currentQuestionIndex = currentQuestions.findIndex((el) => el.Question === question.Question);
    let len = currentQuestions.length;
    let qizResult = 0;

    // useState
    const [done, setIsDone] = useState(false);
    // HANDLERS
    const AnswerClicked = (e) => {
        setQuestion({...question, "answer": e.target.textContent}) 
    }

    const FinishQuizHandler = () => {
        setCurrentQuestions(currentQuestions.map(ques => (
            ques.id === question.id ? ({...question}) : ({...ques})
        )))
        setIsDone(true);
    }
    const NextQuestionHandler = () => {
        setCurrentQuestions(currentQuestions.map(ques => (
            ques.id === question.id ? ({...question}) : ({...ques})
        )))
        setQuestion(currentQuestions[currentQuestionIndex + 1])
    }
    const PreviousQuestionHandler = () => {
        setQuestion(currentQuestions[currentQuestionIndex - 1])
    }
    
    if(Object.keys(question).length === 0){
       return <Navigate from="/quiz" to="/" />
    }
    return(
        <div className="quiz-questions">
            {done === false ? (
                [question].map((ques) => (
                    <div className="question-card">
                        <div className="top">
                            <h2>{quizName}</h2>
                            <div className="percentage">{currentQuestionIndex + 1} / {len}</div>
                        </div>
                        <div className="question">{ques.Question}</div>
                        <div className="answers">
                        {
                        ques.Answers.map((ans) => (
                        ans.answer === ques.answer ?
                        <div onClick={AnswerClicked} className="answer selectedAnswer">{ans.answer}</div>
                        :
                        <div onClick={AnswerClicked} className="answer ">{ans.answer}</div>
                        
                        ))
                        }
                        </div>
                        <div className="btns">
                             {currentQuestionIndex !== len - 1 ? 
                             (<button onClick={NextQuestionHandler} className="next-btn">Next</button>)
                              :
                              (<button onClick={FinishQuizHandler} className="next-btn">Finish</button>)}
                             {currentQuestionIndex === 0 ? ('') : (<button onClick={PreviousQuestionHandler} className="back-btn">Back</button>)}
                         </div>
                    </div>
                ))
            ) : (
                <div className="done">
                    <h2>{quizName}</h2>
                    {
                        currentQuestions.map(ques => {
                            ques.Answers.map(ans => (
                                ans.answer === ques.answer && ans.isCorrect === true?
                                qizResult += 1
                                :
                                ''
                            ))
                        })
                    }
                     <div className="percentage">Your Result is: <span>{qizResult} / {len}</span></div>
                    {
                        currentQuestions.map((question) => (
                            <div className="questionlist">
                            <h4>{question.Question}</h4>
                            <div className="answers">
                            {
                            question.Answers.map((ans) => (
                                ans.answer === question.answer?
                                (
                                    <div className="answer chosen">{ans.answer}</div>
                                )
                                :
                                (
                                    <div className="answer">{ans.answer}</div>
                                )
                            ))}
                            {
                                /**CHECK IF USER ANSWER IS CORRECT */
                                question.Answers.map((ans) => (
                                    ans.answer === question.answer && ans.isCorrect === true?
                                    (
                                        <div className="isCorrect">Your answer is correct</div>
                                    )
                                    :
                                    ans.answer === question.answer && ans.isCorrect === false?
                                    (
                                        <div className="isCorrect">Your answer is Wrong</div>
                                    )
                                    :
                                    ('')

                                ))
                            }
                            {
                                /** RETURN CORRECT ANSWER */
                                question.Answers.map(ans => ans.isCorrect === true ? (<div className="correctAnswer">Answer: {ans.answer}</div>) : (''))
                            }
                            </div>
                            
                        </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
}

export default Quiz;


