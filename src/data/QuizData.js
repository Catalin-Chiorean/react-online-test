/* eslint-disable */
export const quiz1 = {
  "quizTitle": "Demo 1",
  "quizSynopsis": "HTML questions",
  "questions": [
    {
      "question": "What does HTML stand for?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Text Markup Language"
      ],
      "correctAnswer": "3",
      "point": "20"
    },
    {
      "question": "Choose the correct HTML element for the largest heading:",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "<heading>",
        "<head>",
        "<h1> ",
        "<h6>"
      ],
      "correctAnswer": "3",
      "point": "20"
    },
    {
      "question": "What is the correct HTML element for inserting a line break?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "<br>",
        "<lb>",
        "<break>"
      ],
      "correctAnswer": "1",
      "point": "20"
    }, {
      "question": "How can you make a numbered list?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "<list>",
        "<ul>",
        "<ol> ",
        "<dl>"
      ],
      "correctAnswer": "3",
      "point": "20"
    }, {
      "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "alt",
        "title",
        "src",
        "longdesc"
      ],
      "correctAnswer": "1",
      "point": "20"
    }
  ]
}

export const quiz2 = {
  "quizTitle": "Demo 2",
  "quizSynopsis": "JavaScript questions",
  "questions": [
    {
      "question": "Inside which HTML element do we put the JavaScript?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "<javascript>",
        "<js>",
        "<scripting>",
        "<script>"
      ],
      "correctAnswer": "4",
      "point": "20"
    },
    {
      "question": "How do you create a function in JavaScript?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "function:myFunction()",
        "function = myFunction()",
        "function myFunction()"
      ],
      "correctAnswer": "3",
      "point": "20"
    },
    {
      "question": "How to write an IF statement in JavaScript?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "if i = 5",
        "if (i == 5)",
        "if i = 5 then",
        "if i == 5 then"
      ],
      "correctAnswer": "2",
      "point": "20"
    }, {
      "question": "How does a FOR loop start?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "for (i = 0; i <= 5; i++) ",
        "for i = 1 to 5",
        "for (i = 0; i <= 5)",
        "for (i <= 5; i++)"
      ],
      "correctAnswer": "1",
      "point": "20"
    }, {
      "question": "JavaScript is the same as Java.",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "False",
        "True"
      ],
      "correctAnswer": "1",
      "point": "20"
    }
  ]
}

export const quiz3 = {
  "quizTitle": "Demo 3",
  "quizSynopsis": "React questions",
  "questions": [
    {
      "question": "What are the advantages of React JS?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
      ],
      "correctAnswer": [1, 2, 4],
      "point": "20"
    },
    {
      "question": "How can you access the state of a component from inside of a member function?",
      "questionType": "text",
      "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      "answerSelectionType": "single",
      "answers": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correctAnswer": "3",
      "point": "20"
    },
    {
      "question": "What is state in React?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A persistant storage.",
        "An internal data store (object) of a component."
      ],
      "correctAnswer": "2",
      "point": "20"
    }, {
      "question": "What is used to pass data to a component from outside?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "setState",
        "render with arguments",
        "PropTypes",
        "props"
      ],
      "correctAnswer": "4",
      "point": "20"
    }, {
      "question": "What are the two ways that data gets handled in React?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "state & props",
        "services & components"
      ],
      "correctAnswer": "1",
      "point": "20"
    }
  ]
}

export const meme = {
  "quizTitle": "Memes demo quiz",
  "quizSynopsis": "Dank memes incoming",
  "questions": [
    {
      "question": "Who is this very handsome dog?",
      "questionType": "text",
      "questionPic": "https://www.beano.com/wp-content/uploads/legacy/68757_blob.png?resize=768%2C440&quality=76&strip=all",
      "answerSelectionType": "single",
      "answers": [
        "Dage",
        "Dogg",
        "Doggo",
        "Doge"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Such answer, much wow",
      "messageForIncorrectAnswer": "Wow, what are you doing...",
      "point": "25"
    },
    {
      "question": "What is this woman shouting at?",
      "questionType": "text",
      "questionPic": "https://www.beano.com/wp-content/uploads/legacy/68758_blob.png?resize=768%2C432&quality=76&strip=all",
      "answerSelectionType": "single",
      "answers": [
        "A waiter",
        "John Cena",
        "Spongebob",
        "A cat"
      ],
      "correctAnswer": "4",
      "point": "25"
    },
    {
      "question": "Complete this guy's name:Hide the Pain ___",
      "questionType": "text",
      "questionPic": "https://www.beano.com/wp-content/uploads/legacy/68761_587.jpg?quality=76&strip=all",
      "answerSelectionType": "single",
      "answers": [
        "Hugo",
        "Joe",
        "Bernard",
        "Harold"
      ],
      "correctAnswer": "4",
      "point": "25"
    },
    {
      "question": "What's up with this cat?",
      "questionType": "text",
      "questionPic": "https://www.beano.com/wp-content/uploads/legacy/68762_grump.jpg?resize=768%2C432&quality=76&strip=all",
      "answerSelectionType": "single",
      "answers": [
        "It's Grumpy",
        "It's Moody",
        "It's Worried",
        "It's Angry"
      ],
      "correctAnswer": "4",
      "point": "25"
    },
  ]
}
