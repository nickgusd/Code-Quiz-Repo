
//myQuiz Object
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

    //function to set timer
    var score = 0;
    var secondsLeft = 60;

    var timeEl =document.querySelector("nav");

    function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
        if (secondsLeft === 0) {
            alert("Time is up!");
            clearInterval(timerInterval);
            FinalScore();
        }
    
     }, 1000);
    }


    var h1EL = document.createElement("h1");
    var pEl = document.createElement("p");
    var startQuiz = document.createElement("button");

    h1EL.textContent = "Coding Quiz Challenge";
    pEl.textContent =  "Please answer the following code related questions within the time limit. You will be deducted points for each incorrect answer and your time will be reduced by a second!";
    startQuiz.textContent = "Start Quiz";
    startQuiz.id = "start-button";

    document.body.appendChild(h1EL);
    document.body.appendChild(pEl);
    document.body.appendChild(startQuiz);

    h1EL.setAttribute("style", "text-align: center; color: white");
    pEl.setAttribute("style", "text-align: center; color: white; margin-top: 20px;");
    startQuiz.setAttribute("style", "background: #c08487; display: block; margin: 0 auto; margin-top: 20px");

    var answers1 = Object.values(myQuiz[0].answers);
    var answers2 = Object.values(myQuiz[1].answers);
    var answers3 = Object.values(myQuiz[2].answers);
    var answers4 = Object.values(myQuiz[3].answers);

    console.log(answers1);
    console.log(answers2);
    console.log(answers3);
    console.log(answers4);

    var selectBtn = document.querySelector("button");
    selectBtn.addEventListener("click", initiateQ1);

    

    function initiateQ1() {
    setTime();
   
    h1EL.textContent = myQuiz[0].question;
    pEl.textContent = " ";
    
    startQuiz = document.querySelector("button");
    startQuiz.parentNode.removeChild(startQuiz);

    for (var i = 0; i < answers1.length; i++) {
    var Q1Btns = document.createElement("button");
    Q1Btns.textContent = answers1[i];
    document.body.appendChild(Q1Btns);
    Q1Btns.setAttribute("style", "background: #c08497; display: block; margin: 0 auto; margin-top: 10px;");
    Q1Btns.setAttribute("type", "button");
    Q1Btns.setAttribute("class", "Q1Btns" + i);

    }
    var q1BtnClick = document.querySelector(".Q1Btns0");
    q1BtnClick.addEventListener("click", wrongAnswer1); 
    var q1BtnClick = document.querySelector(".Q1Btns1");
    q1BtnClick.addEventListener("click", wrongAnswer1); 
    var q1BtnClick = document.querySelector(".Q1Btns2");
    q1BtnClick.addEventListener("click", wrongAnswer1); 
    var q1BtnClick = document.querySelector(".Q1Btns3");
    q1BtnClick.addEventListener("click", correctAnswer1); 

}

    function correctAnswer1() {

        
        var userChoice = document.querySelector("button");
        userChoice.value = "Variable";
        

        if ( userChoice.value == answers1[3] ) {
            score++;
            alert("Correct");
            alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
        } else  {
            score--;
            secondsLeft--;
            alert("wrong");
            alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
        }
    
       initiateQ2();
    }


    function wrongAnswer1() {

    var userChoice = document.querySelector("button");
        userChoice.value = "String";

        if ( userChoice.value == answers1[3] ) {
            score++;
            alert("Correct");
            alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
        } else  {
            score--;
            secondsLeft--;
            alert("wrong");
            alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
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
        Q2Btns.setAttribute("style", "background: #c08497; display: block; margin: 0 auto; margin-top: 10px;");
        Q2Btns.setAttribute("type", "button");
        Q2Btns.setAttribute("class", "Q2Btns" + i);
    
        }
        var q2BtnClick = document.querySelector(".Q2Btns0");
        q2BtnClick.addEventListener("click", wrongAnswer2); 
        var q2BtnClick = document.querySelector(".Q2Btns1");
        q2BtnClick.addEventListener("click", correctAnswer2); 
        var q2BtnClick = document.querySelector(".Q2Btns2");
        q2BtnClick.addEventListener("click", wrongAnswer2); 
        var q2BtnClick = document.querySelector(".Q2Btns3");
        q2BtnClick.addEventListener("click", wrongAnswer2); 
    
    }

    function correctAnswer2() {
        
        var userChoice = document.querySelector("button");
        userChoice.value = "var myFunction";
        

        if ( userChoice.value == answers2[1] ) {
            score++;
            alert("Correct");
            alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
        } else  {
            score--;
            secondsLeft--;
            alert("wrong");
            alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
        }
    
       initiateQ3();
    }

    function wrongAnswer2() {

        var userChoice = document.querySelector("button");
            userChoice.value = "function notFunction";
    
            if ( userChoice.value == answers2[1] ) {
                score++;
                alert("Correct");
                alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
            } else  {
                score--;
                secondsLeft--
                alert("wrong")
                alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
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
        Q3Btns.setAttribute("style", "background: #c08497; display: block; margin: 0 auto; margin-top: 10px;");
        Q3Btns.setAttribute("type", "button");
        Q3Btns.setAttribute("class", "Q3Btns" + i);
    
        }
        var q3BtnClick = document.querySelector(".Q3Btns0");
        q3BtnClick.addEventListener("click", wrongAnswer3); 
        var q3BtnClick = document.querySelector(".Q3Btns1");
        q3BtnClick.addEventListener("click", wrongAnswer3); 
        var q3BtnClick = document.querySelector(".Q3Btns2");
        q3BtnClick.addEventListener("click", correctAnswer3); 
        var q3BtnClick = document.querySelector(".Q3Btns3");
        q3BtnClick.addEventListener("click", wrongAnswer3); 
    
    }

    function correctAnswer3() {
        
        var userChoice = document.querySelector("button");
        userChoice.value = "<element>";
        

        if ( userChoice.value == answers3[2] ) {
            score++;
            alert("Correct");
            alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
        } else  {
            score--;
            secondsLeft--;
            alert("wrong");
            alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
        }
    
       initiateQ4();
    }


    function wrongAnswer3() {

        var userChoice = document.querySelector("button");
            userChoice.value = "<div>";
    
            if ( userChoice.value == answers3[2] ) {
                score++;
                alert("Correct");
                alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
            } else  {
                score--;
                secondsLeft - 10;
                alert("wrong");
                alert("your score is " + score + " and there are " + secondsLeft + " seconds left");
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
        Q4Btns.setAttribute("style", "background: #c08497; display: block; margin: 0 auto; margin-top: 10px;");
        Q4Btns.setAttribute("type", "button");
        Q4Btns.setAttribute("class", "Q4Btns" + i);
    
        }
        var q4BtnClick = document.querySelector(".Q4Btns0");
        q4BtnClick.addEventListener("click", wrongAnswer4); 
        var q4BtnClick = document.querySelector(".Q4Btns1");
        q4BtnClick.addEventListener("click", wrongAnswer4); 
        var q4BtnClick = document.querySelector(".Q4Btns2");
        q4BtnClick.addEventListener("click", wrongAnswer4); 
        var q4BtnClick = document.querySelector(".Q4Btns3");
        q4BtnClick.addEventListener("click", correctAnswer4); 
    
    }

    function correctAnswer4() {
        
        var userChoice = document.querySelector("button");
        userChoice.value = "HTML";
        

        if ( userChoice.value == answers4[3] ) {
            score++;
            alert("Correct");
            alert("your score is " + score + " and there are " + secondsLeft + " secondsLeft");
        } else  {
            score--;
            secondsLeft--;;
            alert("wrong");
            alert("your score is " + score + " and there are " + secondsLeft + " secondsLeft");
        }
    
       FinalScore();
    }


    function wrongAnswer4() {

        var userChoice = document.querySelector("button");
            userChoice.value = "JavaScript";
    
            if ( userChoice.value == answers4[3] ) {
                score++;
                alert("Correct");
                alert("your score is " + score + " and there are " + secondsLeft + " secondsLeft");
            } else  {
                score--;
                secondsLeft--;
                alert("your score is " + score + " and there are " + secondsLeft + " secondsLeft");
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
        
        //create form
        var formEl = document.createElement("form");
        formEl.innerHTML = "";
        document.body.appendChild(formEl);


        var initialsLabel = document.createElement("label");
        initialsLabel.textContent = "Enter Initials";
        initialsLabel.id = "scorelabel"
        formEl.appendChild(initialsLabel);
        initialsLabel.setAttribute("for" , "initials");
        

        var inputScore = document.createElement("input");
        inputScore.innerHTML = "Enter your score";
        inputScore.id = "initials";
        inputScore.type = "text";
        inputScore.placeholder = "Enter your initials";
        inputScore.name = "initials";

        formEl.appendChild(inputScore);
        inputScore.setAttribute("style", "display: block; margin: 0 auto;");


        var submitBtn = document.createElement("button");
        submitBtn.textContent = "submit";
        submitBtn.id = "submit-button"
        document.body.appendChild(submitBtn);
        submitBtn.setAttribute("style", "display: block; margin: 0 auto; background: blue; color: white;");
        
        var selectSubmit = document.querySelector("button");
        
        
        selectSubmit.addEventListener("click", function() {
            
          var initials = document.querySelector("#initials").value;
            
            
            if (initials === " ") {
                displayMessage("error", "initials cannot be blank");
            } 
            

            localStorage.setItem("initials", initials);

            renderInitials()
        });


        function renderInitials() {
            h1EL.textContent = "High Scores";
            pEl.textContent = " ";
            h1EL.id = "highScore";
            inputScore = document.querySelector("#initials");
            inputScore.parentNode.removeChild(inputScore);
            initialsLabel = document.querySelector("#scorelabel");
            initialsLabel.parentNode.removeChild(initialsLabel);
            submitBtn.textContent = "Go Back";
            submitBtn.id = "goBack";
            submitBtn.setAttribute("style", "display: block; margin: 0 auto; background: #133C55; color: white;");
            var clearBtn = document.createElement("button");
            clearBtn.textContent = "Clear Score";
            clearBtn.id = "clear";
            document.body.appendChild(clearBtn);
            clearBtn.setAttribute("style", "display: block; margin: 0 auto; background: #133C55; color: white;");

            var highScores = document.createElement("ul");
            highScores.setAttribute("style", "text-align: center; background: #C08497; font-size: 20px; margin-top: 10px");
            document.body.appendChild(highScores);
            
            var initials = localStorage.getItem("initials")

            highScores.textContent = initials + " " + score + " points";

            clearBtn.addEventListener("click", function() {
                highScores.remove();
            });


            submitBtn.addEventListener("click", function() {
                window.location.reload();
                
            });

            }}; 



    
