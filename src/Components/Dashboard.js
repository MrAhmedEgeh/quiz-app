import React, {useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { v4 as uuidv4 } from "uuid";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import {db} from '../Firebase/FirebaseConfig'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
    const {currentUser} = useAuth()
    const [myQuizzes, setMyQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addQuizBool, setAddQuizBool] = useState(false);
    const [show, setShow] = useState(false);  // for dialog bootstrap
    const [imageUrl, setImageUrl] = useState(''); // using image URL as an id
    const [quizToAdd, setQuizToAdd] = useState(
        {
            "id": uuidv4(),
            "Image": "",
             "Name": "",
             "Difficulty": "",
             "Author": {
                      "name" : "", 
              },
             "description": "",
             "questions": [
             {
              "id": uuidv4(),
              "Question": "",
              "answer": "",
              "Answers": [
               {"answer": "", "isCorrect": true},
               {"answer": "", "isCorrect": false},
               {"answer": "", "isCorrect": false},
               {"answer": "", "isCorrect": false},
              ]
              
             },
                {
              "id": uuidv4(),
              "Question": "",
              "answer": "",
              "Answers": [
               {"answer": "", "isCorrect": true},
               {"answer": "", "isCorrect": false},
               {"answer": "", "isCorrect": false},
               {"answer": "", "isCorrect": false},
              ]
              
             },
                {
              "id": uuidv4(),
              "Question": "",
              "answer": "",
              "Answers": [
               {"answer": "", "isCorrect": true},
               {"answer": "", "isCorrect": false},
               {"answer": "", "isCorrect": false},
               {"answer": "", "isCorrect": false},
              ]
              
             },
                {
              "id": uuidv4(),
              "Question": "",
              "answer": "",
              "Answers": [
               {"answer": "", "isCorrect": true},
               {"answer": "", "isCorrect": false},
               {"answer": "", "isCorrect": false},
               {"answer": "", "isCorrect": false},
              ]
              
             },
             ]
          }
    )
    let temp = [];
    let toBeDeleted = []
    useEffect(() => {
        const readData = async () => {
          let querySnapshot = await getDocs(collection(db, "quiz-data"));
          querySnapshot.forEach((doc) => {
            doc.data().quizzes.map((el) => el.Author.name === 'John Snow' ? temp.push(el) : '')
          })
            setLoading(false);
            setMyQuizzes(temp)
      }
     
      readData();

      }, [])
    /*
    if(currentUser === null){
        return <Navigate from="/dashboard" to="/" />
     }*/
     // HANDLERS
     const handleClose = () => {
         setShow(false)
         setImageUrl('')
    };
     const handleShow = () => setShow(true);


    const DeleteQuiz = async(myImgUrl) => {
        // using image as an ID
        let image = myImgUrl;
        // finsing the parent element since we have no way to know which parent or category
        const readData = async () => {
            let querySnapshot = await getDocs(collection(db, "quiz-data"));
            querySnapshot.forEach((doc) => {
              doc.data().quizzes.map((el) => el.Image === image ? toBeDeleted.push(doc.data()) : '')
            })
        }
       
        // after we find the parent we pop it out of quizzes array and update that parent
        await readData().then(async() => {
            toBeDeleted[0].quizzes = toBeDeleted[0].quizzes.filter((el) => el.Image !== image)
            
            const userDoc = doc(db, "quiz-data",toBeDeleted[0].name);
            const newFields =   toBeDeleted[0];
            await updateDoc(userDoc, newFields);
            
        })

    }
    const addQuizHandler = () => {
        setQuizToAdd({...quizToAdd, questions: [...quizToAdd.questions,{
            "id": uuidv4(),
            "Question": "",
            "answer": "",
            "Answers": [
             {"answer": "", "isCorrect": true},
             {"answer": "", "isCorrect": false},
             {"answer": "", "isCorrect": false},
             {"answer": "", "isCorrect": false},
            ]
            
           },]})
    }
    const deleteQuizHandler = (e) => {

    let id = e.target.id;
    setQuizToAdd({...quizToAdd, "questions": quizToAdd.questions.filter((el) => el.id !== id)})

    }
    return ( 
        <div className="dashboard">
        <div className="firstline">
        <h2>My Quizzes</h2>
        {
            addQuizBool === false ?
            (
            <button className="action-btn bg-blue" onClick={() => setAddQuizBool(true)}>Add Quiz</button>
            )
            :
            (
             <button className="action-btn btn-lightblue" onClick={() => setAddQuizBool(false)}>Main Menu</button>
            )
        }
        </div>
        {
            loading === true ?
            (
                <div className="lds-dual-ring"></div>
            )
            :
            addQuizBool === false ?
            (
            <div className="dashboard-quizzes">
                {
                <div className="quiz-container margin-top60">
                    {
                        myQuizzes.map((el, i) => (
                    
                            <div className="quiz" key={i}>
                            <div className="imageContainer">
                                <img src={el.Image} alt={''} />
                            </div>
                            <div className="content">
                            <div className="quiztitle">
                            <h2>{el.Name}</h2>
                            <div className="secondRow">
                            <span className="length"><span className="bold">Questions:</span> {el.questions.length}</span>
                            
                            <span className="diff"><span className="bold">Difficulty:</span> {el.Difficulty}</span>
                            </div>
                            </div>
                            <p>{el.description}</p>
                            <div className="author">
                            <div className="con">
                        <FontAwesomeIcon style={{color: '#448570'}} size="2x" icon={faUserCircle}/>
                            <span className="authorName">{el.Author.name}</span>
                            </div>
                            <div className="btns">
                            <button className='action-btn bg-red font-14 '>Update</button>
                            <button className='action-btn bg-gray font-14' data-image={el.Image} onClick={(e) => {setImageUrl(e.target.dataset.image); handleShow()}}>Delete</button>
                            </div>
                            </div>
                            </div>
                        </div> 
                        ))
                        
                    }
                    
                </div> 
                }
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Deleting a Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you really want to delete this quiz?
                    It cannot be restored.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    No
                    </Button>
                    <Button variant="primary" onClick={() => {DeleteQuiz(imageUrl); handleClose()}}>Yes</Button>
                </Modal.Footer>
                </Modal>
            </div>
            )
            :
            addQuizBool === true ?
            (
            <div className="add-quiz">
                {
                    [quizToAdd].map(el => (
                        <form>
                        <div className="row">
                            {/**QUIZ NAME */}
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Quiz Name" />
                            </div>
                            {/**CATEGORY  */}
                            <div className="col">
                                <select className="form-control" style={{"appearance": "auto", "height": "37.6px"}}>
                                    <option>Nature</option>
                                    <option>Technology</option>
                                    <option>History</option>
                                    <option>Geography</option>
                                    <option>Arts</option>
                                    <option>Movies</option>
                                    <option>Software Development</option>
                                    <option>Sport</option>
                                </select>
                            </div>
                            {/**DIFFECULTIY OF QUIZ */}
                            <div className="col">
                                <select className="form-control" style={{"appearance": "auto", "height": "37.6px"}}>
                                    <option>Easy</option>
                                    <option>Moderate</option>
                                    <option>Hard</option>
                                </select>
                            </div>
                        </div>
                        {/**CHOOSE IMAGE FILE FOR QUIZ IMAGE */}
                        <div className="row upload-image">
                            <input type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" for="customFile">Choose file</label>
                        </div>
                        {/**TEXT AREA */}
                        <div className="row upload-image">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Quiz Description' rows="3"></textarea>
                        </div>
                        <div className="questions">
                          <h3 className="margin-top30 margin-bottom30">Questions</h3>
                        {el.questions.map((ques, i) => (     
             
                <div className="quizQuestions" key={i}>
                   
                    <div class="card margin-top30" key={ques.id}>
                        <div className="question-header">
                        <h4 className="margin-top15 padding-left-1rem">Question {i+1}</h4>
                        {
                            i >= 4 ?
                            (
                                <FontAwesomeIcon
                                id={ques.id}
                                   className='margin-top15 minusIcon'
                                   size="2x" 
                                   icon={faMinusCircle}
                                   onClick={(e) => deleteQuizHandler(e)}
                                   />
                            )
                            :
                            ('')
                        }
                        </div>
                        <div className="card-body">
                     
                            <input type="text" className="form-control" placeholder="Question" />
                            <h4 className='margin-top15'>Answers</h4>
                            {ques.Answers.map((ans) => (
                                <div className="row margin-top15">
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Answer" />
                            </div>
                            <div className="col">
                            <select className="form-control" style={{"appearance": "auto", "height": "37.6px"}}>
                                    {
                                        ans.isCorrect === true ? 
                                        (
                                            <>
                                             <option selected>Correct Answer</option>
                                              <option>Wrong Answer</option>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                             <option>Correct Answer</option>
                                              <option selected>Wrong Answer</option>
                                            </>
                                        )
                                    }
                                </select>
                            </div>
                            
                            </div>
                            ))}
                       
                        </div>
                    </div>
                   
                     
                </div>
                        ))}
                    </div>
                         <div className="addQuiz-action-btns">
                                <div className="addQuestion-BTN">
                                    <button type="button" className="btn btn-primary" onClick={addQuizHandler}>Add Questions</button>
                                </div>
                                <div className="Submit-BTN">
                                    <button type="button" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </form>
                    ))
                }
            </div>
            )
            :
            ""
        }
    </div>
     );
}

export default Dashboard;