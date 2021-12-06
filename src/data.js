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
                        "Question": " If trees are useful, they should be:",
                        "Answers": [
                            {
                                "answer": "chopped down",
                                "isCorrect": false,
                            },
                            {
                                "answer": "preserved",
                                "isCorrect": true,
                            },
                            {
                                "answer": "decorated",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "When the wind blows, the leaves:",
                        "Answers": [
                            {
                                "answer": "make a rustling noise",
                                "isCorrect": false,
                            },
                            {
                                "answer": "fall down",
                                "isCorrect": true,
                            },
                            {
                                "answer": "are blown away",
                                "isCorrect": false,
                            },
                            {
                                "answer": "are stirred",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": " A tree-house is:",
                        "Answers": [
                            {
                                "answer": " a house made of trees",
                                "isCorrect": false,
                            },
                            {
                                "answer": "a shelter in a tree for children to play",
                                "isCorrect": true,
                            },
                            {
                                "answer": "a shelter In a tree for birds to play",
                                "isCorrect": false,
                            },
                            {
                                "answer": "A storage area",
                                "isCorrect": false,
                            },

                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "Compose the rhyme-word – Trees give us the shine, Make trees the:",
                        "Answers": [
                            {
                                "answer": "swine",
                                "isCorrect": false,
                            },
                            {
                                "answer": "dead wine",
                                "isCorrect": false,
                            },
                            {
                                "answer": "life-line",
                                "isCorrect": false,
                            },
                            {
                                "answer": "life-fine",
                                "isCorrect": true,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 4,
                        "Question": "The tree that gives us no shade can also:",
                        "Answers": [
                            {
                                "answer": "be a help in winters",
                                "isCorrect": true,
                            },
                            {
                                "answer": "be chopped and used",
                                "isCorrect": false,
                            },
                            {
                                "answer": "serve other purposes",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 5,
                        "Question": "The synonym of ‘hide’ is:",
                        "Answers": [
                            {
                                "answer": "to cover",
                                "isCorrect": false,
                            },
                            {
                                "answer": "protect",
                                "isCorrect": false,
                            },
                            {
                                "answer": "conceal",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 6,
                        "Question": "How are trees useful for birds?",
                        "Answers": [
                            {
                                "answer": "to hatch eggs",
                                "isCorrect": false,
                            },
                            {
                                "answer": "to build nests on",
                                "isCorrect": false,
                            },
                            {
                                "answer": " to sit on",
                                "isCorrect": false,
                            },
                            {
                                "answer": "All the above",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 7,
                        "Question": "What should be done to save trees?",
                        "Answers": [
                            {
                                "answer": " we should embrace trees when one wants to cut them.",
                                "isCorrect": false,
                            },
                            {
                                "answer": "we should light some bulbs near trees.",
                                "isCorrect": false,
                            },
                            {
                                "answer": "everyone should plant as much trees as possible",
                                "isCorrect": true,
                            },
                            {
                                "answer": "we should love trees.",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 8,
                        "Question": "Who play ‘Hide and Seek’ behind the trees?",
                        "Answers": [
                            {
                                "answer": " birds",
                                "isCorrect": false,
                            },
                            {
                                "answer": "passersby",
                                "isCorrect": false,
                            },
                            {
                                "answer": "children",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 9,
                        "Question": "Who can have parties under the trees?",
                        "Answers": [
                            {
                                "answer": " adults",
                                "isCorrect": true,
                            },
                            {
                                "answer": "children",
                                "isCorrect": false,
                            },
                            {
                                "answer": "beggars",
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
                        "Question": "What is the preferred way for adding a background color in HTML?",
                        "Answers": [
                            {
                                "answer": "<body background=\"yellow\">",
                                "isCorrect": false,
                            },
                            {
                                "answer": "<background>yellow</background>",
                                "isCorrect": false,
                            },
                            {
                                "answer": "< body style=\"background-color:yellow\">",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "What is the correct HTML for creating a hyperlink?",
                        "Answers": [
                            {
                                "answer": "<a href=\"http://www.example.com\">example</a>",
                                "isCorrect": true,
                            },
                            {
                                "answer": "<a url=\"http://www.example.com\">example</a> ",
                                "isCorrect": false,
                            },
                            {
                                "answer": "<a name=\"\">A</a> ",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": "How can you create an e-mail link?",
                        "Answers": [
                            {
                                "answer": "<a href=\"a@b\">",
                                "isCorrect": false,
                            },
                            {
                                "answer": "<a href=\"mailto:a@b.com\">",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "How can you open a link in a new browser window?",
                        "Answers": [
                            {
                                "answer": "<a href=\"url\" target=\"_blank\">",
                                "isCorrect": true,
                            },
                            {
                                "answer": "<a href=\"url\" target=\"new\"> ",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 4,
                        "Question": "Which of these tags are all <table> tags?",
                        "Answers": [
                            {
                                "answer": "Puts a number or a character above another",
                                "isCorrect": false,
                            },
                            {
                                "answer": "<table><tr><td>",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 5,
                        "Question": "Which of the following JavaScript cannot do?",
                        "Answers": [
                            {
                                "answer": "JS is a language for designing only",
                                "isCorrect": false,
                            },
                            {
                                "answer": "JavaScript can be use to validate data ",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
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
                        "Question": "Who is considered as the first English poet?",
                        "Answers": [
                            {
                                "answer": "chaucer",
                                "isCorrect": false,
                            },
                            {
                                "answer": "william langland",
                                "isCorrect": false,
                            },
                            {
                                "answer": "caedmon",
                                "isCorrect": true,
                            },
                            {
                                "answer": "robert burns",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "Who is the author of Ecclesiastical History of the English People ?",
                        "Answers": [
                            {
                                "answer": "bede",
                                "isCorrect": true,
                            },
                            {
                                "answer": "bacon",
                                "isCorrect": false,
                            },
                            {
                                "answer": "johnson",
                                "isCorrect": false,
                            },
                            {
                                "answer": "chaucer",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": "The Hundred Years of War between......",
                        "Answers": [
                            {
                                "answer": "france and germany",
                                "isCorrect": false,
                            },
                            {
                                "answer": "ireland and england",
                                "isCorrect": false,
                            },
                            {
                                "answer": "england and france",
                                "isCorrect": true,
                            },
                            {
                                "answer": "england and germany",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "In which year the peasant Revolt happened? ",
                        "Answers": [
                            {
                                "answer": "1381",
                                "isCorrect": true,
                            },
                            {
                                "answer": "1400",
                                "isCorrect": false,
                            },
                            {
                                "answer": "1350",
                                "isCorrect": false,
                            },
                            {
                                "answer": "1300",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 4,
                        "Question": "Who is the author of ‘Piers Plowman’?",
                        "Answers": [
                            {
                                "answer": "caedmon",
                                "isCorrect": false,
                            },
                            {
                                "answer": "layamon",
                                "isCorrect": false,
                            },
                            {
                                "answer": "william langland",
                                "isCorrect": true,
                            },
                            {
                                "answer": "bede",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 5,
                        "Question": "The earliest surviving English poem",
                        "Answers": [
                            {
                                "answer": "piers plowman ",
                                "isCorrect": false,
                            },
                            {
                                "answer": "brut",
                                "isCorrect": false,
                            },
                            {
                                "answer": "beowulf",
                                "isCorrect": false,
                            },
                            {
                                "answer": "king horn",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 6,
                        "Question": "Who is the author of The Canterbury Tales?",
                        "Answers": [
                            {
                                "answer": "geoffrey chaucer",
                                "isCorrect": true,
                            },
                            {
                                "answer": "geoffrey chaucer",
                                "isCorrect": false,
                            },
                            {
                                "answer": "robert burn",
                                "isCorrect": false,
                            },
                            {
                                "answer": "spenser",
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
                        "Question": "Europe is a located entirely in which of the following Hemisphere?",
                        "Answers": [
                            {
                                "answer": "Southern Hemisphere",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Northern Hemisphere",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Southern and Eastern Hemisphere",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Northern and Western Hemisphere",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "Which of the following group of countries together called 'Scandinavia'?",
                        "Answers": [
                            {
                                "answer": "Norway, Sweden, Iceland and Denmark",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Spain and Portugal",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Yugoslavia, Greece, Romania and Albania",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Lithuania, Latvia and Estonia",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": "Which of the following separated Europe from Asia?",
                        "Answers": [
                            {
                                "answer": "Caspian Sea and Atlantic Ocean",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Caspian Sea and Mediterranean Sea",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Atlantic Ocean and Mediterranean Sea",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Caspian Sea and Ural mountains",
                                "isCorrect": true,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "Which of the following group of countries together called 'Iberia'?",
                        "Answers": [
                            {
                                "answer": " Lithuania, Latvia and Estonia",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Yugoslavia, Greece, Romania and Albania",
                                "isCorrect": false,
                            },
                            {
                                "answer": " Spain and Portugal",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Norway, Sweden, Iceland and Denmark",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 4,
                        "Question": "Which of the following group of countries together called 'Balkan States'?",
                        "Answers": [
                            {
                                "answer": "Spain and Portugal",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Norway, Sweden, Iceland and Denmark",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Lithuania, Latvia and Estonia",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Yugoslavia, Greece, Romania and Albania",
                                "isCorrect": true,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 5,
                        "Question": " Which of the following group of countries together called 'Baltic States'?",
                        "Answers": [
                            {
                                "answer": "Yugoslavia, Greece, Romania and Albania",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Lithuania, Latvia and Estonia",
                                "isCorrect": true,
                            },
                            {
                                "answer": " England and Ireland",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Norway, Sweden, Iceland and Denmark",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
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
                        "Question": "What is the name of the famous \"Piazza\" in Florence where you can see Michelangelo's \"David\"?",
                        "Answers": [
                            {
                                "answer": "Piazza della Signoria",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Piazza del Duomo",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Piazza dei Miracoli",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "Which of these works by Michelangelo is part of the \"Tomb of Pope Julius II\" in Rome?",
                        "Answers": [
                            {
                                "answer": "David",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Moses",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Pieta",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": "As who did Michelangelo represent himself in his Pieta?",
                        "Answers": [
                            {
                                "answer": "Saint John",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Roman soldier",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Joseph of Arimathea",
                                "isCorrect": true,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "Which of these Fountains is/are decorated with sculptures by Gian Lorenzo Bernini?",
                        "Answers": [
                            {
                                "answer": "Fountain of the Four Rivers in Piazza Navone in Rome",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Fontana di Trevi near the Spanish Steps",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Fontana di Roma, in Tivoli",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 4,
                        "Question": "Where in Italy can you see Verrocchio's famous equestrian statue of the great Condottiere Bartolomeo Colleoni?",
                        "Answers": [
                            {
                                "answer": "Piazza Navone, Rome",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Piazza del Santo, Padua",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Campo Santi Giovanni e Paolo, Venice",
                                "isCorrect": true,
                            },
                        ],
                        "answer": '',
                    },
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
                "Difficulty": "Moderate",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "C# was developed by",
                        "Answers": [
                            {
                                "answer": "Bjarne Stroustrup",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Anders Hejlsberg",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Rasmus Lerdorf",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Dennis M. Ritchie",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "Which of the following is the valid size of float data type?",
                        "Answers": [
                            {
                                "answer": "4 Bytes",
                                "isCorrect": true,
                            },
                            {
                                "answer": "2 Bytes",
                                "isCorrect": false,
                            },
                            {
                                "answer": "6 Bytes",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": "Which of the following String method is used to compare two strings with each other?",
                        "Answers": [
                            {
                                "answer": "Copy()",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Compare To()",
                                "isCorrect": false,
                            },
                            {
                                "answer": "ConCat()",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Compare()",
                                "isCorrect": true,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "Which of the following Syntax is used for declaration and initialization of data variable?",
                        "Answers": [
                            {
                                "answer": "= ;",
                                "isCorrect": true,
                            },
                            {
                                "answer": ";",
                                "isCorrect": false,
                            }
                        ],
                        "answer": '',
                    },
                    {
                        "id": 4,
                        "Question": "Which of the following is the subset of ‘int’ data type?",
                        "Answers": [
                            {
                                "answer": "long, ulong, uint",
                                "isCorrect": false,
                            },
                            {
                                "answer": "long, float, double",
                                "isCorrect": true,
                            },
                            {
                                "answer": "long, ulong, ushort",
                                "isCorrect": true,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 5,
                        "Question": "Which of the following option is default access specifier of a class?",
                        "Answers": [
                            {
                                "answer": "Internal",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Public",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Private",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Protected",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
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
                "Name": "How much do you know about Movies?",
                "Difficulty": "Easy",
                "Author": {
                    "name" : "John Snow",
                    "image": author,
                },
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                "questions": [
                    {
                        "id": 0,
                        "Question": "Which movie won the Best Feature Film award, at the National Film Awards ceremony?",
                        "Answers": [
                            {
                                "answer": "Marakkar: Lion of the Arabian Sea",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Chhichhore",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Asuran",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Kesari",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "Which of these actors DIDN'T appear in \"Pulp Fiction\"?",
                        "Answers": [
                            {
                                "answer": "Samuel L.Jackson",
                                "isCorrect": false,
                            },
                            {
                                "answer": "John Turturro",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Uma Thurman",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Bruce Willis",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": "In the \"Godfather\" series, where was Vito Corleone born?",
                        "Answers": [
                            {
                                "answer": "NYC",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Athens",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Corleone, Sicily",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Rome",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "In the movie \"Frozen\", who is Olaf?",
                        "Answers": [
                            {
                                "answer": "A snowman",
                                "isCorrect": true,
                            },
                            {
                                "answer": "A knight",
                                "isCorrect": false,
                            },
                            {
                                "answer": "A ghost",
                                "isCorrect": false,
                            },
                            {
                                "answer": "A man",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 4,
                        "Question": "What was the first movie in the Marvel Cinematic Universe?",
                        "Answers": [
                            {
                                "answer": "Batman",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Spider Man",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Iron Man",
                                "isCorrect": true,
                            },
                            {
                                "answer": "The Avengers",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
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
                        "Question": "Which footballer does not play for Everton FC?",
                        "Answers": [
                            {
                                "answer": "James Rodríguez",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Dominic Calvert-Lewin",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Jordan Pickford",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Paul Pogba",
                                "isCorrect": true,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 1,
                        "Question": "In which city did the Hillsborough disaster happen? ",
                        "Answers": [
                            {
                                "answer": "Liverpool",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Sheffield",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Manchester",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Leeds",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 2,
                        "Question": "When were the docklands designated a UNESCO World Heritage site? ",
                        "Answers": [
                            {
                                "answer": "2000",
                                "isCorrect": false,
                            },
                            {
                                "answer": "2004",
                                "isCorrect": true,
                            },
                            {
                                "answer": "2008",
                                "isCorrect": false,
                            },
                            {
                                "answer": "2012",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 3,
                        "Question": "Which company headquartered in Liverpool owned the Titanic?",
                        "Answers": [
                            {
                                "answer": "White Star Line",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Cunard",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Costa Cruises",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Princess Cruises",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 4,
                        "Question": "What’s the name of the two liver birds by the docks?",
                        "Answers": [
                            {
                                "answer": "Bella & Bertie",
                                "isCorrect": true,
                            },
                            {
                                "answer": "Bertha & Bernie",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Bernie & Bianca",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Bernard & Isabella",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 5,
                        "Question": "Who founded Liverpool?",
                        "Answers": [
                            {
                                "answer": "King John",
                                "isCorrect": true,
                            },
                            {
                                "answer": "King Henry VIII",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Queen Victoria",
                                "isCorrect": false,
                            },
                            {
                                "answer": "Napoleon",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 6,
                        "Question": "Which famous band is from Liverpool?",
                        "Answers": [
                            {
                                "answer": "Oasis",
                                "isCorrect": false,
                            },
                            {
                                "answer": "The Bee Gees",
                                "isCorrect": false,
                            },
                            {
                                "answer": "The Beatles",
                                "isCorrect": true,
                            },
                            {
                                "answer": "The Smiths",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                    {
                        "id": 7,
                        "Question": "Which newspaper is boycotted in Liverpool?",
                        "Answers": [
                            {
                                "answer": "The Daily Mail",
                                "isCorrect": false,
                            },
                            {
                                "answer": "The Times",
                                "isCorrect": false,
                            },
                            {
                                "answer": "The Sun",
                                "isCorrect": true,
                            },
                            {
                                "answer": "The Guardian",
                                "isCorrect": false,
                            },
                        ],
                        "answer": '',
                    },
                ]
            }
        ]
    },
]