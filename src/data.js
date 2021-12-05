import { v4 as uuidv4 } from "uuid";

import nature from "./Assets/nature.jpg";
import technology from "./Assets/technology.jpg";
import history from "./Assets/History.jpg";
import geography from "./Assets/geography.jpg";
import arts from "./Assets/arts.jpg";
import software from "./Assets/software.png";
import movies from "./Assets/movies.jpg";
import sport from "./Assets/sports.jpg";

// QUIZZES
import trees from "./Assets/trees.jpg";
import web from "./Assets/web.jpeg";
import england from "./Assets/england.jpg";
import europe from "./Assets/europe.jpg";
import italia from "./Assets/italia.jpg";
import csharp from "./Assets/csharp.png";
import actor from "./Assets/actor.jpg";
import liverpool from "./Assets/liverpool.jpg";


import author from "./Assets/author.jpg";


export default [
    {
        "id": 0,
        "image": nature,
        "name": "Nature",
        "text": "Quizzes About Nature",
        "quizzes": [
            {
                "id": 0,
                "Image": trees,
                "Name": "Types of trees",
                "Difficulty": "Easy",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "QUESTION 1",
                        "Answers": [
                            {
                                "answer": "Yes",
                                "isCorrect": true,
                            },
                            {
                                "answer": "No",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Maybe",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "QUESTION 2",
                        "Answers": [
                            {
                                "answer": "Yes",
                                "isCorrect": true,
                            },
                            {
                                "answer": "No",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": "QUESTION 3",
                        "Answers": [
                            {
                                "answer": "Yes",
                                "isCorrect": true,
                            },
                            {
                                "answer": "No",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "QUESTION 4",
                        "Answers": [
                            {
                                "answer": "Yes",
                                "isCorrect": true,
                            },
                            {
                                "answer": "No",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                ]
            }
        ]
    },
    {
        "id": 1,
        "image": technology,
        "name": "Technology",
        "text": "Quizzes About Technology",
        "quizzes": [
            {
                "id": 0,
                "Image": web,
                "Name": "Web Development",
                "Difficulty": "Easy",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "What is <sup> used for in HTML?",
                        "Answers": [
                            {
                                "answer": "Puts a number or a character above another",
                                "isCorrect": true,
                            },
                            {
                                "answer": "It makes a line stroke",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "image": history,
        "name": "History",
        "text": "Quizzes About HISTORY",
        "quizzes": [
            {
                "id": 0,
                "Image": england,
                "Name": "History of England",
                "Difficulty": "Moderate",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "What is <sup> used for in HTML?",
                        "Answers": [
                            {
                                "answer": "Puts a number or a character above another",
                                "isCorrect": true,
                            },
                            {
                                "answer": "It makes a line stroke",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "image": geography,
        "name": "Geography",
        "text": "Quizzes About Geography",
        "quizzes": [
            {
                "id": 0,
                "Image": europe,
                "Name": "Geography Of Europe",
                "Difficulty": "Hard",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "What is <sup> used for in HTML?",
                        "Answers": [
                            {
                                "answer": "Puts a number or a character above another",
                                "isCorrect": true,
                            },
                            {
                                "answer": "It makes a line stroke",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "image": arts,
        "name": "Arts",
        "text": "Quizzes About Arts",
        "quizzes": [
            {
                "id": 0,
                "Image": italia,
                "Name": "Italian Arts",
                "Difficulty": "Hard",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "What is <sup> used for in HTML?",
                        "Answers": [
                            {
                                "answer": "Puts a number or a character above another",
                                "isCorrect": true,
                            },
                            {
                                "answer": "It makes a line stroke",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "image": software,
        "name": "Software Development",
        "text": "Quizzes About Software Development",
        "quizzes": [
            {
                "id": 0,
                "Image": csharp,
                "Name": "C# Quiz",
                "Difficulty": "Hard",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "What is <sup> used for in HTML?",
                        "Answers": [
                            {
                                "answer": "Puts a number or a character above another",
                                "isCorrect": true,
                            },
                            {
                                "answer": "It makes a line stroke",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "image": movies,
        "name": "Movies",
        "text": "Quizzes About Movies",
        "quizzes": [
            {
                "id": 0,
                "Image": actor,
                "Name": "Who is this Actor?",
                "Difficulty": "Easy",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "What is <sup> used for in HTML?",
                        "Answers": [
                            {
                                "answer": "Puts a number or a character above another",
                                "isCorrect": true,
                            },
                            {
                                "answer": "It makes a line stroke",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "image": sport,
        "name": "Sport",
        "text": "Quizzes About Sport",
        "quizzes": [
            {
                "id": 0,
                "Image": liverpool,
                "Name": "Test your knowledege about Liverpool",
                "Difficulty": "Easy",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "What is <sup> used for in HTML?",
                        "Answers": [
                            {
                                "answer": "Puts a number or a character above another",
                                "isCorrect": true,
                            },
                            {
                                "answer": "It makes a line stroke",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    }
                ]
            }
        ]
    },
]