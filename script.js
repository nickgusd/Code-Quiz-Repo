
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

        h1EL.textContent = "Quiz Complete!";
        pEl.textContent = "Your final score is " + score;

        //remove previous buttons

        Q4Btns = document.querySelector(".Q4Btns0");
        Q4Btns.parentNode.removeChild(Q4Btns);
        Q4Btns = document.querySelector(".Q4Btns1");
        Q4Btns.parentNode.removeChild(Q4Btns);
        Q4Btns = document.querySelector(".Q4Btns2");
        Q4Btns.parentNode.removeChild(Q4Btns);
        Q4Btns = document.querySelector(".Q4Btns3");
        Q4Btns.parentNode.removeChild(Q4Btns);
        
        //create input fields
        var inputScore = document.createElement("input");
        inputScore.innerHTML = "Enter your score";
        inputScore.id = "initials";
        inputScore.type = "text";
        inputScore.name = "initials";
        document.body.appendChild(inputScore);
        inputScore.setAttribute("style", "display: block; margin: 0 auto;");

        var initialsLabel = document.createElement("label");
        initialsLabel.textContent = "Enter Initials";
        initialsLabel.id = "scorelabel"
        document.body.appendChild(initialsLabel);
        initialsLabel.setAttribute("for" , "initials");
        initialsLabel.setAttribute("style" , "border: 1px solid black; background: blue; color: white; position: relative; left: 520px; bottom: 20px;")

        var submitBtn = document.createElement("button");
        submitBtn.textContent = "submit";
        submitBtn.id = "submit-button"
        document.body.appendChild(submitBtn);
        submitBtn.setAttribute("style", "display: block; margin: 0 auto; background: blue; color: white;");
        
        var selectSubmit = document.querySelector("button");
        
        
        selectSubmit.addEventListener("click", function() {
            
          var initials = document.querySelector("#initials").value;
            console.log(initials);
            
            if (initials === " ") {
                displayMessage("error", "initials cannot be blank");
            } 
            

            localStorage.setItem("initials", initials);

            renderInitials()
        });


        function renderInitials() {
            h1EL.textContent = "High Scores";
            pEl.textContent = " ";

            inputScore = document.querySelector("#initials");
            inputScore.parentNode.removeChild(inputScore);
            initialsLabel = document.querySelector("#scorelabel");
            initialsLabel.parentNode.removeChild(initialsLabel);
            submitBtn.textContent = "Go Back";
            submitBtn.id = "goBack";


            var highScores = document.createElement("ul");
            highScores.setAttribute("style", "text-align: center; background: lightgray; font-size: 20px;");
            document.body.appendChild(highScores);
            
            var initials = localStorage.getItem("initials")

            highScores.textContent = initials + " " + score + " points";
        }



    }
       



    



    //Query Selector and addEventLister for start quiz button;
    var selectBtn = document.querySelector("#start-button");
    selectBtn.addEventListener("click", initiateQ1);
    
