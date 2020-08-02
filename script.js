
var score = 0;
var secondsLeft = 60;

var myQuiz = [
    {
        question: "Which of these is not a JavaScript Data Type?",
        answers: {
            a: "String",
            b: "Boolean",
            c: "Number",
            d: "Variable"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these is not a JavaScript function?",
        answers: {
            a: "function myFunction",
            b: "var myFunction",
            c: "function notFunction",
            d: ".push()"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of these is not an HTML tag?",
        answers: {
            a: "<code>",
            b: "<div>",
            c: "<element>",
            d: "<strong>"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of these is a markup language?",
        answers: {
            a: "JavaScript",
            b: "Python",
            c: "CSS",
            d: "HTML"
        },
        correctAnswer: "d"
    },
    ];

    //function to add HTML to start of page


var h1EL = document.createElement("h1");
var pEl = document.createElement("p");
var startQuiz = document.createElement("button");

h1EL.textContent = "Coding Quiz Challenge";
pEl.textContent =  "Please answer the following code related questions within the time limit. You will be deducted points for each incorrect answer and your time will be reduced by ten seconds!";
startQuiz.textContent = "Start Quiz";
startQuiz.id = "start-button";

document.body.appendChild(h1EL);
document.body.appendChild(pEl);
document.body.appendChild(startQuiz);

h1EL.setAttribute("style", "text-align: center; color: green");
pEl.setAttribute("style", "text-align: center; color: green");
startQuiz.setAttribute("style", "background: cyan; display: block; margin: 0 auto");


    var answers1 = Object.values(myQuiz[0].answers);
    var answers2 = Object.values(myQuiz[1].answers);
    var answers3 = Object.values(myQuiz[2].answers);
    var answers4 = Object.values(myQuiz[3].answers);


    console.log(answers1);
    console.log(answers2);
    console.log(answers3);
    console.log(answers4);


    function initiateQ1() {

    //reset h1 and p
    h1EL.textContent = myQuiz[0].question;
    pEl.textContent = " ";
    
    startQuiz = document.querySelector("button");
    startQuiz.parentNode.removeChild(startQuiz);

    for (var i = 0; i < answers1.length; i++) {
    var Q1Btns = document.createElement("button");
    Q1Btns.textContent = answers1[i];
    document.body.appendChild(Q1Btns);
    Q1Btns.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px;");
    Q1Btns.setAttribute("type", "button");
    Q1Btns.setAttribute("class", "Q1Btns" + i);

    }
    var q1BtnClick = document.querySelector(".Q1Btns0");
    q1BtnClick.addEventListener("click", answerFunc); 
    var q1BtnClick = document.querySelector(".Q1Btns1");
    q1BtnClick.addEventListener("click", answerFunc); 
    var q1BtnClick = document.querySelector(".Q1Btns2");
    q1BtnClick.addEventListener("click", answerFunc); 
    var q1BtnClick = document.querySelector(".Q1Btns3");
    q1BtnClick.addEventListener("click", answerFunc); 

}

    function answerFunc() {
        
        for (var i = 0; i < answers1.length; i++) {
            var userChoice = document.querySelector("button");
            userChoice.value = answers1[i];
        }

        if ( userChoice.value == answers1[3] ) {
            score++;
            alert("Correct");
            alert(score);
        } else {
            score--;
            secondsLeft - 10;
            alert("wrong");
        }
    
       initiateQ2();
    }

    function initiateQ2() {

        //reset h1 and p
       h1EL.textContent = myQuiz[1].question;
        pEl.textContent = " ";

        //remove previous buttons
        Q1Btns = document.querySelector(".Q1Btns0");
        Q1Btns.parentNode.removeChild(Q1Btns);
        Q1Btns = document.querySelector(".Q1Btns1");
        Q1Btns.parentNode.removeChild(Q1Btns);
        Q1Btns = document.querySelector(".Q1Btns2");
        Q1Btns.parentNode.removeChild(Q1Btns);
        Q1Btns = document.querySelector(".Q1Btns3");
        Q1Btns.parentNode.removeChild(Q1Btns);


        for (var i = 0; i < answers2.length; i++) {
        var Q2Btns = document.createElement("button");
        Q2Btns.textContent = answers2[i];
        document.body.appendChild(Q2Btns);
        Q2Btns.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px;");
        Q2Btns.setAttribute("type", "button");
        Q2Btns.setAttribute("class", "Q2Btns" + i);
    
        }
        var q2BtnClick = document.querySelector(".Q2Btns0");
        q2BtnClick.addEventListener("click", answerFunc2); 
        var q2BtnClick = document.querySelector(".Q2Btns1");
        q2BtnClick.addEventListener("click", answerFunc2); 
        var q2BtnClick = document.querySelector(".Q2Btns2");
        q2BtnClick.addEventListener("click", answerFunc2); 
        var q2BtnClick = document.querySelector(".Q2Btns3");
        q2BtnClick.addEventListener("click", answerFunc2); 
    
    }

    function answerFunc2() {
        
        for (var i = 0; i < answers2.length; i++) {
            var userChoice = document.querySelector("button");
            userChoice.value = answers2[i];
        }

        if ( userChoice.value == answers2[1] ) {
            score++;
            alert("Correct");
            alert(score);
        } else {
            score--;
            secondsLeft - 10;
            alert("wrong");
        }
    
       initiateQ3();
    }


    function initiateQ3() {

        //reset h1 and p
       h1EL.textContent = myQuiz[2].question;
        pEl.textContent = " ";

        //remove previous buttons
        Q2Btns = document.querySelector(".Q2Btns0");
        Q2Btns.parentNode.removeChild(Q2Btns);
        Q2Btns = document.querySelector(".Q2Btns1");
        Q2Btns.parentNode.removeChild(Q2Btns);
        Q2Btns = document.querySelector(".Q2Btns2");
        Q2Btns.parentNode.removeChild(Q2Btns);
        Q2Btns = document.querySelector(".Q2Btns3");
        Q2Btns.parentNode.removeChild(Q2Btns);

        //create new buttons
        for (var i = 0; i < answers3.length; i++) {
        var Q3Btns = document.createElement("button");
        Q3Btns.textContent = answers3[i];
        document.body.appendChild(Q3Btns);
        Q3Btns.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px;");
        Q3Btns.setAttribute("type", "button");
        Q3Btns.setAttribute("class", "Q3Btns" + i);
    
        }
        var q3BtnClick = document.querySelector(".Q3Btns0");
        q3BtnClick.addEventListener("click", answerFunc3); 
        var q3BtnClick = document.querySelector(".Q3Btns1");
        q3BtnClick.addEventListener("click", answerFunc3); 
        var q3BtnClick = document.querySelector(".Q3Btns2");
        q3BtnClick.addEventListener("click", answerFunc3); 
        var q3BtnClick = document.querySelector(".Q3Btns3");
        q3BtnClick.addEventListener("click", answerFunc3); 
    
    }

    function answerFunc3() {
        
        for (var i = 0; i < answers3.length; i++) {
            var userChoice = document.querySelector("button");
            userChoice.value = answers3[i];
        }

        if ( userChoice.value == answers3[2] ) {
            score++;
            alert("Correct");
            alert(score);
        } else {
            score--;
            secondsLeft - 10;
            alert("wrong");
        }
    
       initiateQ4();
    }

    function initiateQ4() {
        //reset h1 and p
        h1EL.textContent = myQuiz[3].question;
        pEl.textContent = " ";

        //remove previous buttons
        Q3Btns = document.querySelector(".Q3Btns0");
        Q3Btns.parentNode.removeChild(Q3Btns);
        Q3Btns = document.querySelector(".Q3Btns1");
        Q3Btns.parentNode.removeChild(Q3Btns);
        Q3Btns = document.querySelector(".Q3Btns2");
        Q3Btns.parentNode.removeChild(Q3Btns);
        Q3Btns = document.querySelector(".Q3Btns3");
        Q3Btns.parentNode.removeChild(Q3Btns);

        //create new buttons
        for (var i = 0; i < answers4.length; i++) {
        var Q4Btns = document.createElement("button");
        Q4Btns.textContent = answers4[i];
        document.body.appendChild(Q4Btns);
        Q4Btns.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px;");
        Q4Btns.setAttribute("type", "button");
        Q4Btns.setAttribute("class", "Q4Btns" + i);
    
        }
        var q4BtnClick = document.querySelector(".Q4Btns0");
        q4BtnClick.addEventListener("click", answerFunc4); 
        var q4BtnClick = document.querySelector(".Q4Btns1");
        q4BtnClick.addEventListener("click", answerFunc4); 
        var q4BtnClick = document.querySelector(".Q4Btns2");
        q4BtnClick.addEventListener("click", answerFunc4); 
        var q4BtnClick = document.querySelector(".Q4Btns3");
        q4BtnClick.addEventListener("click", answerFunc4); 
    
    }

    function answerFunc4() {
        
        for (var i = 0; i < answers4.length; i++) {
            var userChoice = document.querySelector("button");
            userChoice.value = answers4[i];
        }

        if ( userChoice.value == answers4[3] ) {
            score++;
            alert("Correct");
            alert(score);
        } else {
            score--;
            secondsLeft - 10;
            alert("wrong");
        }
    
       FinalScore();
    }


    function FinalScore() {

        h1EL.textContent = "Final Score";
        pEl.textContent = " ";

        //remove previous buttons

        Q4Btns = document.querySelector(".Q4Btns0");
        Q4Btns.parentNode.removeChild(Q4Btns);
        Q4Btns = document.querySelector(".Q4Btns1");
        Q4Btns.parentNode.removeChild(Q4Btns);
        Q4Btns = document.querySelector(".Q4Btns2");
        Q4Btns.parentNode.removeChild(Q4Btns);
        Q4Btns = document.querySelector(".Q4Btns3");
        Q4Btns.parentNode.removeChild(Q4Btns);


        var inputScore = document.createElement("input");
        inputScore.innerHTML = "Enter your score";
        inputScore.id = "initials"
        document.body.appendChild(inputScore);
        inputScore.setAttribute("style", "display: block; margin: 0 auto;");

        var initialsLabel = document.createElement("label");
        initialsLabel.textContent = "Enter Initials";
        initialsLabel.id = "scorelabel"
        document.body.appendChild(initialsLabel);
        initialsLabel.setAttribute("for" , "initials");



    }



    //Query Selector and addEventLister for start quiz button;
    var selectBtn = document.querySelector("#start-button");
    selectBtn.addEventListener("click", initiateQ1);

      


/*
//assign score and timer
var score = 0;
var secondsLeft = 60;

//function to add HTML to start of page


var h1EL = document.createElement("h1");
var pEl = document.createElement("p");
var startQuiz = document.createElement("button");



h1EL.textContent = "Coding Quiz Challenge";
pEl.textContent =  "Please answer the following code related questions within the time limit. You will be deducted points for each incorrect answer and your time will be reduced by ten seconds!";
startQuiz.textContent = "Start Quiz";
startQuiz.id = "start-button";

document.body.appendChild(h1EL);
document.body.appendChild(pEl);
document.body.appendChild(startQuiz);

h1EL.setAttribute("style", "text-align: center; color: green");
pEl.setAttribute("style", "text-align: center; color: green");
startQuiz.setAttribute("style", "background: cyan; display: block; margin: 0 auto");

//function to click start button and initiate quiz
function initiateQ1() {
    //reset h1 and p
    h1EL.textContent = myQuiz[0].question;
    pEl.textContent = " ";
    
    startQuiz = document.querySelector("button");
    startQuiz.parentNode.removeChild(startQuiz);
    
    var Q1A1 = document.createElement("button");
    Q1A1.id = "Q1A1";
    Q1A1.class = "button";
    Q1A1.textContent = myQuiz[0].answers.a;
    document.body.appendChild(Q1A1);
    Q1A1.setAttribute("style", "background: cyan; display: block; margin: 0 auto");
    
    var Q1A2 = document.createElement("button");
    Q1A2.id = "Q1A2";
    Q1A2.class = "button";
    Q1A2.textContent = myQuiz[0].answers.b;
    document.body.appendChild(Q1A2);
    Q1A2.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");
    
    var Q1A3 = document.createElement("button");
    Q1A3.id = "Q1A3";
    Q1A3.class = "button";
    Q1A3.textContent = myQuiz[0].answers.c;
    document.body.appendChild(Q1A3);
    Q1A3.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");

    var Q1A4 = document.createElement("button");
    Q1A4.id = "Q1A4";
    Q1A4.class = "button";
    Q1A4.textContent = myQuiz[0].answers.d;
    document.body.appendChild(Q1A4);
    Q1A4.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");

    

    console.log(userAnswer);

    function answer() {
        var userAnswer = document.querySelector("button");
            userAnswer.value = 
        if (userAnswer == myQuiz[0].answers.d) {
        console.log(userAnswer);
        score++;
        console.log(score);
        } else {
        secondsLeft = secondsLeft - 10;
        alert(secondsLeft);
        };
     
        return userAnswer;

        
    };




    var q1a1Btn = document.querySelector("#Q1A1");
    q1a1Btn.addEventListener("click", answer, initiateQ2);
    var q1a2Btn = document.querySelector("#Q1A2");
    q1a2Btn.addEventListener("click", answer, initiateQ2);
    var q1a3Btn = document.querySelector("#Q1A3");
    q1a3Btn.addEventListener("click", answer, initiateQ2);
    var q1a4Btn = document.querySelector("#Q1A4");
    q1a4Btn.addEventListener("click", answer, initiateQ2);
    console.log(Q1A4);
    
    



    function initiateQ2() {
        //set new question
        h1EL.textContent = myQuiz[1].question;

        //remove previous buttons
        Q1A1 = document.querySelector("button");
        Q1A1.parentNode.removeChild(Q1A1);
        Q1A2 = document.querySelector("button");
        Q1A2.parentNode.removeChild(Q1A2);
        Q1A3 = document.querySelector("button");
        Q1A3.parentNode.removeChild(Q1A3);
        Q1A4 = document.querySelector("button");
        Q1A4.parentNode.removeChild(Q1A4);

        //set new buttons

        var Q2A1 = document.createElement("button");
        Q2A1.id = "Q2A1";
        Q2A1.textContent = myQuiz[1].answers.a;
        document.body.appendChild(Q2A1);
        Q2A1.setAttribute("style", "background: cyan; display: block; margin: 0 auto");
    
        var Q2A2 = document.createElement("button");
        Q2A2.id = "Q2A2";
        Q2A2.textContent = myQuiz[1].answers.b;
        document.body.appendChild(Q2A2);
        Q2A2.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");
    
        var Q2A3 = document.createElement("button");
        Q2A3.id = "Q2A3";
        Q2A3.textContent = myQuiz[1].answers.c;
        document.body.appendChild(Q2A3);
        Q2A3.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");

        var Q2A4 = document.createElement("button");
        Q2A4.id = "Q2A4";
        Q2A4.textContent = myQuiz[1].answers.d;
        document.body.appendChild(Q2A4);
        Q2A4.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");

        var q2a1Btn = document.querySelector("#Q2A1");
        q2a1Btn.addEventListener("click", initiateQ3);
        var q2a2Btn = document.querySelector("#Q2A2");
        q2a2Btn.addEventListener("click", initiateQ3);
        var q2a3Btn = document.querySelector("#Q2A3");
        q2a3Btn.addEventListener("click", initiateQ3);
        var q2a4Btn = document.querySelector("#Q2A4");
        q2a4Btn.addEventListener("click", initiateQ3);

        function initiateQ3() {

            //set new question
        h1EL.textContent = myQuiz[2].question;

        //remove previous buttons
        Q2A1 = document.querySelector("button");
        Q2A1.parentNode.removeChild(Q2A1);
        Q2A2 = document.querySelector("button");
        Q2A2.parentNode.removeChild(Q2A2);
        Q2A3 = document.querySelector("button");
        Q2A3.parentNode.removeChild(Q2A3);
        Q2A4 = document.querySelector("button");
        Q2A4.parentNode.removeChild(Q2A4);

        //set new buttons

        var Q3A1 = document.createElement("button");
        Q3A1.id = "Q3A1";
        Q3A1.textContent = myQuiz[2].answers.a;
        document.body.appendChild(Q3A1);
        Q3A1.setAttribute("style", "background: cyan; display: block; margin: 0 auto");
    
        var Q3A2 = document.createElement("button");
        Q3A2.id = "Q3A2";
        Q3A2.textContent = myQuiz[2].answers.b;
        document.body.appendChild(Q3A2);
        Q3A2.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");
    
        var Q3A3 = document.createElement("button");
        Q3A3.id = "Q3A3";
        Q3A3.textContent = myQuiz[2].answers.c;
        document.body.appendChild(Q3A3);
        Q3A3.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");

        var Q3A4 = document.createElement("button");
        Q3A4.id = "Q3A4";
        Q3A4.textContent = myQuiz[2].answers.d;
        document.body.appendChild(Q3A4);
        Q3A4.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");

        //add event listeners
        var q3a1Btn = document.querySelector("#Q3A1");
        q3a1Btn.addEventListener("click", initiateQ4);
        var q3a2Btn = document.querySelector("#Q3A2");
        q3a2Btn.addEventListener("click", initiateQ4);
        var q3a3Btn = document.querySelector("#Q3A3");
        q3a3Btn.addEventListener("click", initiateQ4);
        var q3a4Btn = document.querySelector("#Q3A4");
        q3a4Btn.addEventListener("click", initiateQ4);

        function initiateQ4() {

            h1EL.textContent = myQuiz[3].question;

        //remove previous buttons
            Q3A1 = document.querySelector("button");
            Q3A1.parentNode.removeChild(Q3A1);
            Q3A2 = document.querySelector("button");
            Q3A2.parentNode.removeChild(Q3A2);
            Q3A3 = document.querySelector("button");
            Q3A3.parentNode.removeChild(Q3A3);
            Q3A4 = document.querySelector("button");
            Q3A4.parentNode.removeChild(Q3A4);

            //set new buttons for Q4 questions
            var Q4A1 = document.createElement("button");
            Q4A1.id = "Q4A1";
            Q4A1.textContent = myQuiz[3].answers.a;
            document.body.appendChild(Q4A1);
            Q4A1.setAttribute("style", "background: cyan; display: block; margin: 0 auto");
    
            var Q4A2 = document.createElement("button");
            Q4A2.id = "Q4A2";
            Q4A2.textContent = myQuiz[3].answers.b;
            document.body.appendChild(Q4A2);
            Q4A2.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");
    
            var Q4A3 = document.createElement("button");
            Q4A3.id = "Q3A3";
            Q4A3.textContent = myQuiz[3].answers.c;
            document.body.appendChild(Q4A3);
            Q4A3.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");

            var Q4A4 = document.createElement("button");
            Q4A4.id = "Q3A4";
            Q4A4.textContent = myQuiz[3].answers.d;
            document.body.appendChild(Q4A4);
            Q4A4.setAttribute("style", "background: cyan; display: block; margin: 0 auto; margin-top: 10px");


            var q4a1Btn = document.querySelector("#Q4A1");
            q4a1Btn.addEventListener("click", initiateFS);
            var q4a2Btn = document.querySelector("#Q4A2");
            q4a2Btn.addEventListener("click", initiateFS);
            var q4a3Btn = document.querySelector("#Q4A3");
            q4a3Btn.addEventListener("click", initiateFS);
            var q4a4Btn = document.querySelector("#Q4A4");
            q4a4Btn.addEventListener("click", initiateFS);


        }   

        }

 }

}


//function for final results
function finalResult() {}

// Object for Quiz Questions and Answers
var myQuiz = [
{
    question: "Which of these is not a JavaScript Data Type?",
    answers: {
        a: "String",
        b: "Boolean",
        c: "Number",
        d: "Variable"
    },
    correctAnswer: "d"
},
{
    question: "Which of these is not a JavaScript function?",
    answers: {
        a: "function myFunction",
        b: "var myFunction",
        c: "function notFunction",
        d: ".push()"
    },
    correctAnswer: "b"
},
{
    question: "Which of these is not an HTML tag?",
    answers: {
        a: "<code>",
        b: "<div>",
        c: "<element>",
        d: "<strong>"
    },
    correctAnswer: "c"
},
{
    question: "Which of these is a markup language?",
    answers: {
        a: "JavaScript",
        b: "Python",
        c: "CSS",
        d: "HTML"
    },
    correctAnswer: "d"
},
];


//Query Selector and addEventLister for start quiz button;
var selectBtn = document.querySelector("#start-button");
selectBtn.addEventListener("click", initiateQ1);



/* This is my psuedo code
HTML
1. develop HTML Structure of Code Quiz

CSS
2. develop styling for Code Quiz, get creative

Questions
-develop questions for the code quiz

JavaScript
3.  declare countdown variables
4.  addEventListerner ("click") to start button to begin function.
4a. I will need a variable set to the value of the function called set Interval, see ex 8.
4b. in the function we will decrement the countdown variable and present a question (i.e. append element <p> containing question in the function);
4c. I will also need to append an element that has a list of answers that are clickable <ul> of buttons </ul>;
4d. I will need to incorporate an add an event lister to the question and when clicked, the If statement in the function to determine if the answer is correct, increment score and display correct, otherwise subtract time (decrement) and display wrong;
4e. I will need to have the element (question) removed each time the user clicks a button and appends the new question.
5.  when all questions are answered or || countdown = 0, exit out of the function and call a new function called Score.
6.  Score function will append an input field for their initials where they can save their score.
6a. when the save button is clicked for user's score, the element will be removed
7.  I will have to create and append another input field for highscore, use set item and get item from local storage so the highscore can be saved. remember JSON Stringify and parse.
*/

