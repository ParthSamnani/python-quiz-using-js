const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');
const myQuestions = [
  {
    question: "What is a correct syntax to output \"Hello World\" in Python?",
    answers: {
      a: "echo (\"Hello World\")",
      b: "echo \"Hello World\"",
      c: "p(\"Hello World\")",
      d: "print(\"Hello World\")"
    },
    correctAnswer: "d"
  },
  {
    question: "How do you insert COMMENTS in Python code",
    answers: {
      a: "//This is a comment",
      b: "/*This is a comment*/",
      c: "#This is a comment",
      d: "None of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one is NOT a legal variable name?",
    answers: {
      a: "my-var",
      b: "Myvar",
      c: "my_var",
      d: "_myvar"
    },
    correctAnswer: "a"
  },
  {
    question: "How do you create a variable with the numeric value 5?",
    answers: {
      a: "x=5",
      b: "x= int(5)",
      c: "Both a and b",
      d: "None of the above"
    },
    correctAnswer: "c"
  },{
    question: "What is the correct file extension for Python files?",
    answers: {
      a: ".pyt",
      b: ".pt",
      c: ".py",
      d: ".pyth"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the correct way to create a function in Python?",
    answers: {
      a: "create myFunction():",
      b: "function myFunction():",
      c: "def myFunction():",
      d: "None of these"
    },
    correctAnswer: "c"
  },
  {
    question: "How do you create a variable with the floating number 2.8?",
    answers: {
      a: "x=2.8",
      b: "x=float(2.8)",
      c: "Both a and b",
      d: "x = (float)2.8"
    },
    correctAnswer: "c"
  },{
    question: "What is the correct syntax to output the type of a variable or object in Python",
    answers: {
      a: "print(typeof(x))",
      b: "print(typeof x)",
      c: "print(typeOf(x))",
      d: "print(type(x))"
    },
    correctAnswer: "d"
  },
  {
    question: "In Python, 'Hello', is the same as \"Hello\"",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: "a"
  }
];

function buildQuiz(){
  const output = [];

  myQuestions.forEach(
    (currQuestion, qNum) => {

      const answers = [];

      for(letter in currQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${qNum}" value="${letter}">
            ${letter} :
            ${currQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="slide">
          <div class="question"> ${currQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}

function showResults(){

  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach( (currQuestion, qNum) => {

    const answerContainer = answerContainers[qNum];
    const selector = `input[name=question${qNum}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currQuestion.correctAnswer){
      numCorrect++;

      answerContainers[qNum].style.color = 'lightgreen';
    }
    else{
      answerContainers[qNum].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
  slides[currSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currSlide = n;
  if(currSlide === 0){
    prevBtn.style.display = 'none';
  }
  else{
    prevBtn.style.display = 'inline-block';
  }
  if(currSlide === slides.length-1){
    nextBtn.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
  }
}

function showPrevSlide() {
  showSlide(currSlide - 1);
}
function showNextSlide() {
  showSlide(currSlide + 1);
}

buildQuiz();
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currSlide = 0;
showSlide(currSlide);

submitBtn.addEventListener('click', showResults);
prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);
