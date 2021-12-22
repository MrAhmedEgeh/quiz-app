import React, {useState, useEffect} from 'react';
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
    const {currentUser} = useAuth()
    const [myQuizzes, setMyQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addQuizBool, setAddQuizBool] = useState(false);
    const [show, setShow] = useState(false);  // for dialog bootstrap
    const [imageUrl, setImageUrl] = useState('');
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
    return ( 
        <div className="dashboard">
        <div className="firstline">
        <h2>My Quizzes</h2>
        {
            addQuizBool === false ?
            (
            <button className="action-btn bg-blue">Add Quiz</button>
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
                <div class="lds-dual-ring"></div>
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
                        <FontAwesomeIcon className="skip-back" style={{color: '#448570'}} size="2x" icon={faUserCircle}/>
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
            ''
        }
    </div>
     );
}

export default Dashboard;