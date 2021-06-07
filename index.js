   // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
        // HINT: for each question, create a container with the "question"
        // create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
        // when EVERY question has an answer (google for how to get a value from a radio button with JS)
        // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
        // Display first question with a title + radio button
        // when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
    

    // HOW TO calculate the result
    // You can do it in 2 ways:
    // If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
    // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
    // QUIZ GAME!

    // RULES:
    // / The player must guess correctly a certain amount of questions
    // / Each correct answer gives him one point
    // / Answers could be multiple or true/false
    // / At the end of the game, the user must know his/her total score

    // QUESTIONS:
    // / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
    // / Could be multiple of boolean (true / false)
    // / [EXTRA] Show if the answer provided was the wrong one or correct it after clicking
    // / [EXTRA] Present the questions one a time instead of having all displayed together

    // HINTS:
    // / Keep a global variable score for the user score
    // / Keep a variable questionNumber for the question the user is answering
    // / When questionNumber is bigger then the available questions, present the score
    // / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know it!)
    // / Start with the easier version and THEN implement the EXTRAs
    // / Please debug everything / try it on the console to be sure of what to expect from your code

    // EXTRA:
    // / Show if the answer provided was the wrong one or correct it after clicking
    // / Present the questions one a time instead of having all displayed together
    // / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)


var questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
  var p = document.getElementById("qtn");
  var current=0;
  var questionIndex=current+1;
  
  
  var prevButton=document.getElementById("prev");
  var nextButton=document.getElementById("next");
  var startButton=document.getElementById("start");
  let divv = document.getElementById("box")
  let divv2 = document.getElementById("options")
    let h1 = document.querySelector("h1")
    // console.log(h1)
  
  
  
  
  startButton.addEventListener("click", function(){
    
    h1.innerText = `QUESTION. ${questionIndex}`
    p.innerHTML = `${questions[current].question}`;
    let inputs = document.createElement("input")
    let labels = document.createElement("label")
    inputs.type = "radio"
    inputs.name = "name"
    inputs.id = `"${questions[current].correct_answer}"`
    labels.htmlFor = `"${questions[current].correct_answer}"`
    labels.innerText = `${questions[current].correct_answer}`
    divv2.appendChild(inputs)
    divv2.appendChild(labels)
    console.log(labels.innerText)
    // incorrect choises
    for (let i=0; i<questions[current].incorrect_answers.length; i++){
    let inc_Inputs = document.createElement("input")
    let inc_Labels = document.createElement("label")
    inc_Inputs.type = "radio"
    inc_Inputs.name = "name"
    inc_Inputs.id = `"${questions[current].incorrect_answers[i]}"`
    inc_Labels.htmlFor = `"${questions[current].incorrect_answers[i]}"`
    inc_Labels.innerText = `${questions[current].incorrect_answers[i]}`
    divv2.appendChild(inc_Inputs)
    divv2.appendChild(inc_Labels)

    }
    startButton.style.display = "none"
    nextButton.style.display = "block"
    prevButton.style.display = "none"
  })
  
 
  
  // function nextQuestion(){         //next button-------------------------
  
  // divv.innerText = ""
  // if(current<questions.length-1){
  // current++;
  // questionIndex=current+1;
  //   h1.innerText = `QUESTION. ${questionIndex}`
  // p.innerHTML = `${questions[current].question}`;


  // let answer = document.createElement("li")
  // answer.innerText = questions[current].correct_answer
  // divv.appendChild(answer)

  // for (let i = 0; i < questions[current].incorrect_answers.length; i++) {
  //   let answer_c = document.createElement("li")
  // answer_c.innerText = questions[current].incorrect_answers[i]
  // divv.appendChild(answer_c)
  // }

  

  // prevButton.style.display="block";
  // }
  
  // if(current===questions.length-1){
  // prevButton.style.display="block"
  // nextButton.style.display = "none";
  // }
  
  // }
  
  
  // function prevQuestion(){  //previouse question-------------------------------
  //   if(current>0){
  //     current--;
  //     questionIndex=questionIndex-1;
  //       h1.innerText = `QUESTION. ${questionIndex}`
  //     p.innerHTML = `${questions[current].question}`;
      
  //     nextButton.style.display="block";
  //     }
      
  //     if(current===0){
  //     prevButton.style.display="none"
  //     nextButton.style.display = "block";
  //     }
  //   }

  //   nextQuestion()
  //   prevQuestion()
