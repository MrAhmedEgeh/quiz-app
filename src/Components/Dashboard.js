import React, {useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { v4 as uuidv4 } from "uuid";
import {
    collection,
    getDocs,
    getDoc,
    updateDoc,
    doc,
  } from "firebase/firestore";
  import {db, storage} from '../Firebase/FirebaseConfig'
  import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
    const {currentUser} = useAuth()
    const [myQuizzes, setMyQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addQuizBool, setAddQuizBool] = useState(false);
    const [show, setShow] = useState(false);  // for dialog bootstrap
    const [imageUrl, setImageUrl] = useState(''); // using image URL as an id
    const [errors, setErrors] = useState('');
    const [updateQuizBool, setUpdateQuizBool] = useState(false);
    const [quizToAddImage, setQuizToAddImage] = useState({});
    const [quizToAdd, setQuizToAdd] = useState(
        {
            "id": uuidv4(),
            "Image": "url",
            "Category": "nature",
             "Name": "",
             "Difficulty": "Easy",
             "Author": {
                      "name" : currentUser === null ? ('') : (currentUser.displayName), 
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
    let toBeDeleted = [];
    let addquiz = [];
    let category = {};
    let prog;
    useEffect(() => {
        const readData = async () => {
            if(currentUser === null || currentUser === undefined) return;
          let querySnapshot = await getDocs(collection(db, "quiz-data"));
          querySnapshot.forEach((doc) => {
            doc.data().quizzes.map((el) => el.Author.name === currentUser.displayName ? temp.push(el) : '')
          })
            setLoading(false);
            setMyQuizzes(temp)
      }
     
      readData();

      }, [myQuizzes])
    

     const handleClose = () => {
         setShow(false)
         setImageUrl('')
    };
     const handleShow = () => setShow(true);


    const DeleteQuiz = async(id) => {
        console.log(id)
        // finsing the parent element since we have no way to know which parent or category
        const readData = async () => {
            let querySnapshot = await getDocs(collection(db, "quiz-data"));
            querySnapshot.forEach((doc) => {
              doc.data().quizzes.map((el) => el.id === id ? toBeDeleted.push(doc.data()) : '')
            })
        }
       
        // after we find the parent we pop it out of quizzes array and update that parent
        await readData().then(async() => {
            toBeDeleted[0].quizzes = toBeDeleted[0].quizzes.filter((el) => el.id !== id)
            
            const userDoc = doc(db, "quiz-data",toBeDeleted[0].name);
            const newFields =   toBeDeleted[0];
            //console.log(toBeDeleted[0].name)
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
    const deleteQuestionHandler = (e) => {
    let id = e.target.parentNode.parentNode.dataset.id;
    setQuizToAdd({...quizToAdd, "questions": quizToAdd.questions.filter((el) => el.id !== id)})

    }
    const onChangeQuizName = (e) => {
        setQuizToAdd({...quizToAdd, "Name": e.target.value})
    }
    const onChangeQuizType = (e) =>{
        setQuizToAdd({...quizToAdd, "Category": e.target.value})
    }
    const onChangeQuizDiffeculty = (e) =>{
        setQuizToAdd({...quizToAdd, "Difficulty": e.target.value})
    }
    const onChangeDescription = (e) => {
        setQuizToAdd({...quizToAdd, "description": e.target.value})
    }
    const onChangeTrueAnswer = (e) => {
        let answerArrayElement = parseInt(e.target.parentNode.parentNode.id);
        let questionID = e.target.parentNode.parentNode.parentNode.id;
        let value = e.target.value;
        if(value === 'Correct Answer'){
            setQuizToAdd(
                {...quizToAdd, 
                    "questions": quizToAdd.questions.map(el => el.id === questionID ? 
                        ({...el, 
                            "Answers": el.Answers.map((element, i) => i === answerArrayElement ? ({...element, "isCorrect": true}) : ({...element, "isCorrect": false}))
                        }) 
                        : 
                        ({...el}))})
        }
       

    }
    const onChangeQuestion = (e) => {
        let questionID = e.target.parentNode.id;
        let value = e.target.value;
        setQuizToAdd({...quizToAdd, "questions": quizToAdd.questions.map(question => question.id === questionID ? ({...question, "Question": value}) : ({...question}))})
    }
    const onChangeAnswerInput = (e) => {
        let answerArrayElement = parseInt(e.target.parentNode.parentNode.id);
        let questionID = e.target.parentNode.parentNode.parentNode.id;
        let value = e.target.value;
        setQuizToAdd(
            {...quizToAdd, 
                "questions": quizToAdd.questions.map(el => el.id === questionID ? 
                    ({...el, 
                        "Answers": el.Answers.map((element, i) => i === answerArrayElement ? ({...element, "answer": value}) : ({...element}))
                    }) 
                    : 
                    ({...el}))})
    }
    const onChangeImage = (e) => {
     setQuizToAddImage(e.target.files[0])
    }
    const validateQuizToAdd = () => {
        const isEmpty = Object.values(quizToAdd).every(x => x !== '');
        if(isEmpty){
            return true;
        }else{
            setErrors('All Fields are Required')
            window.scrollTo(0,0);
        }
    }
    const validateQuestions = () => {
        const isEmpty = quizToAdd.questions.map(el => Object.values(el).every(x => x.Question !== ''))
        if(isEmpty){
            return true;
        }else{
            setErrors('All Question Fields are Required')
            window.scrollTo(0,0);
        }
    }
    const validateAnswers = () => {
        let result = quizToAdd.questions.map(el => el.Answers.map(ans => Object.values(ans).every(x => x !== '')))
        result = result.map(el => el.every((el) => el === true));
        result = result.every((el) => el === true);
        if(result){
            return true;
        }else{
            setErrors('All Answer Fields are Required')
            window.scrollTo(0,0);
        }
    }
    const validateImage = () => {
        if(quizToAddImage === undefined || quizToAddImage.name === undefined || quizToAddImage.name === null){
            console.log(quizToAddImage);
            setErrors('Please add an image')
            window.scrollTo(0,0);
        }else{
            return true;
        }
    }
    const validateImageData = () => {
        if(quizToAdd.Image === 'url'){
            setErrors(`Image couldn't be uploaded`)
        }else{
            return true;
        }
    }
    const uploadNewQuiz = async() => {
        const docRef = doc(db, "quiz-data", quizToAdd.Category);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            category = docSnap.data()
            addquiz = [...docSnap.data().quizzes]
            addquiz.push(quizToAdd)
            category = {...category, "quizzes": addquiz};
            const userDoc = doc(db, "quiz-data",quizToAdd.Category);
            const newFields = category;
            await updateDoc(userDoc, newFields).then(() => setAddQuizBool(false))
        }

    }
    const uploadImageToStorage = () => {

        const sotrageRef = ref(storage, `files/${quizToAddImage.name+ new Date().getTime()}`);
        const uploadTask = uploadBytesResumable(sotrageRef, quizToAddImage);
    
        uploadTask.on(
            "state_changed",
            (snapshot) => {
              prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
             
            },
            (error) => console.log(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setQuizToAdd({...quizToAdd, "Image": downloadURL})
                console.log(downloadURL)
              });
            }
          );
      };
      const addQuizToFirebase = () =>{
        if(validateAnswers() && validateQuestions() && validateQuizToAdd() && validateImage()){
            setErrors('')
            uploadImageToStorage();
            if(validateImageData()){
                uploadNewQuiz();
            }
            

        }
    }
    const updateQuiz = (e) =>{
        setUpdateQuizBool(true);
        setAddQuizBool(true)
        setQuizToAdd(myQuizzes.filter(el => el.id === e.target.dataset.id)[0])
    }
    const updateQuizToFirebase = async() => {
        if(validateAnswers() && validateQuestions() && validateQuizToAdd()){
            setErrors('')

            const docRef = doc(db, "quiz-data", quizToAdd.Category);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                category = docSnap.data()
                addquiz = [...docSnap.data().quizzes]
                addquiz = addquiz.filter((el) => el.id !== quizToAdd.id)
                addquiz.push(quizToAdd)
                category = {...category, "quizzes": addquiz};
                const userDoc = doc(db, "quiz-data",quizToAdd.Category);
                const newFields = category;
                await updateDoc(userDoc, newFields)
                .catch((error) => console.log(error))
                .then(() => {
                    resetter()
                    setAddQuizBool(false)
                })
            }
            

        }
    }
    const resetter = () => {
        setAddQuizBool(false);
        setUpdateQuizBool(false);
        setQuizToAdd({
            "id": uuidv4(),
            "Image": "url",
            "Category": "nature",
             "Name": "",
             "Difficulty": "Easy",
             "Author": {
                      "name" : currentUser === null ? ('') : (currentUser.displayName), 
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
          })
    }
    if(currentUser === null){
        return <Navigate from="/dashboard" to="/" />
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
             <button className="action-btn btn-lightblue" onClick={resetter}>Main Menu</button>
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
             myQuizzes.length === 0 ?
             (
                <div style={{margin: '30px 28%', fontSize: '25px'}}>You don't have quizzes yet, you can add them! &#128513;</div>
             )
             :
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
                            <button className='action-btn bg-red font-14 ' data-id={el.id} onClick={updateQuiz}>Update</button>
                            <button className='action-btn bg-gray font-14' data-id={el.id} onClick={(e) => {setImageUrl(e.target.dataset.id); handleShow()}}>Delete</button>
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
                    errors !== '' ?
                    (
                    <div className="alert alert-danger" role="alert">
                    {errors}
                    </div>
                    )
                    :
                    ''
                }
                {
                    [quizToAdd].map(el => (
                        <form>
                            {
                            updateQuizBool !== true ?
                            (
                                <div className="card margin-bottom30">
                                    <div className="card-body">
                                        <h3 className='margin-bottom15'>Instructions</h3>
                                        <ul>
                                            <li>Once you add the quiz you can't update or change the image</li>
                                            <li>Once you add the quiz you can't update ot change the category (nature, Arts, Sport, etc...)</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                            :
                                ''
                            }
                        <div className="row">
                            {/**QUIZ NAME */}
                            <div className="col">
                                <input 
                                 type="text" 
                                 className="form-control" 
                                 placeholder="Quiz Name" 
                                 value={quizToAdd.Name}
                                 onChange={onChangeQuizName}
                                 />
                            </div>
                            {/**CATEGORY  */}
                            {
                                updateQuizBool !== true ?
                                (
                                    <div className="col">
                                    <select 
                                      className="form-control" 
                                      style={{"appearance": "auto", "height": "37.6px"}}
                                      onChange={onChangeQuizType}
                                      value={quizToAdd.Category}
                                      >
                                        <option>nature</option>
                                        <option>Technology</option>
                                        <option>History</option>
                                        <option>Geography</option>
                                        <option>Arts</option>
                                        <option>Movies</option>
                                        <option>Software Development</option>
                                        <option>Sport</option>
                                    </select>
                                </div>
                                )
                                :
                                ('')
                            }
                            {/**DIFFECULTIY OF QUIZ */}
                            <div className="col">
                                <select 
                                 className="form-control" 
                                 style={{"appearance": "auto", "height": "37.6px"}}
                                 onChange={onChangeQuizDiffeculty}
                                 value={quizToAdd.Difficulty}
                                 >
                                    <option>Easy</option>
                                    <option>Moderate</option>
                                    <option>Hard</option>
                                </select>
                            </div>
                        </div>
                        {/**CHOOSE IMAGE FILE FOR QUIZ IMAGE */}
                        {
                            updateQuizBool !== true ?
                            (
                                <div className="row upload-image">
                                <input 
                                 type="file" 
                                 className="custom-file-input" 
                                 id="customFile" 
                                 onChange={onChangeImage}/>
                                <label className="custom-file-label" for="customFile">Choose file</label>
                            </div>
                            )
                            :
                            ('')
                        }
                        {/**TEXT AREA */}
                        <div className="row upload-image">
                            <textarea 
                             className="form-control" 
                             id="exampleFormControlTextarea1" 
                             placeholder='Quiz Description' 
                             rows="3"
                             value={quizToAdd.description}
                             onChange={onChangeDescription}
                             ></textarea>
                        </div>
                        <div className="questions">
                          <h3 className="margin-top30 margin-bottom30">Questions</h3>
                        {el.questions.map((ques, i) => (     
             
                <div className="quizQuestions" key={i}>
                   
                    <div class="card margin-top30" key={ques.id} data-id={ques.id}>
                        <div className="question-header">
                        <h4 className="margin-top15 padding-left-1rem">Question {i+1}</h4>
                        {
                            i >= 4 ?
                            (
                                <FontAwesomeIcon
                                   className='margin-top15 minusIcon'
                                   size="2x" 
                                   icon={faMinusCircle}
                                   onClick={deleteQuestionHandler}
                                   />
                            )
                            :
                            ('')
                        }
                        </div>
                        <div className="card-body" id={ques.id}>
                     
                            <input 
                             type="text" 
                             className="form-control" 
                             value={ques.Question} 
                             placeholder="Question" 
                             onChange={onChangeQuestion}
                             />
                            <h4 className='margin-top15'>Answers</h4>
                            {ques.Answers.map((ans, i) => (
                                <div className="row margin-top15" id={i}>
                                <div className="col">
                                <input type="text"  
                                  onChange={onChangeAnswerInput} 
                                  className="form-control" 
                                  placeholder="Answer" 
                                  value={ans.answer}
                                  />
                            </div>
                            <div className="col">
                            <select className="form-control" 
                                    style={{"appearance": "auto", "height": "37.6px"}}
                                    onChange={onChangeTrueAnswer}
                                    >
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
                                {
                                    updateQuizBool !== true ?
                                    (
                                    <div className="Submit-BTN">
                                        <button type="button" className="btn btn-success" onClick={addQuizToFirebase}>Submit</button>
                                    </div>
                                    )
                                    :
                                    (
                                    <div className="Submit-BTN">
                                        <button type="button" className="btn btn-danger" onClick={updateQuizToFirebase}>Update</button>
                                    </div>
                                    )
                                }
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