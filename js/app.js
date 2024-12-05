// 1. Define the variables
// 2. when user clicks next btn youll want a function that takes the values for their answers, then checks them against the correct answer for that question 

// 3.then calculate how many questions correct
// 4.display score on screen
// 5.
// 6.
// 7.


/*-------------------------------- Constants --------------------------------*/

const mathQuestion = [
    {
        question: "What is the value of Pi (π) up to two decimal places?",
        choice: ["3.55", "3.14", "3.87", "3.99" ],
        answer: 1

    },
    {
        question: "What is the smallest prime number?",
        choice: ["4", "7", "5", "2" ],
        answer: 3

    },
    {
        question: "What is the sum of the angles in a triangle?",
        choice: ["150", "165", "170", "180" ],
        answer: 3
    },
    {
        question: "What is the square root of 144?",
        choice: ["11", "8", "12", "13" ],
        answer: 2
    }

]

const scienceQuestion = [
    {
        question: "What planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1, 
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["O2", "H2O", "CO2", "NaCl"],
        answer: 1, 
    },
    {
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2, 
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        choices: ["Lungs", "Heart", "Brain", "Kidney"],
        answer: 1, 
    },
    
]



/*---------------------------- Variables (state) ----------------------------*/

let Topic = null
let question = null
let score = null

/*------------------------ Cached Element References ------------------------*/

const twoTopics = document.querySelector(".masc")
const mainQuestion = document.querySelector(".Quiz-question")
const showScore = document.querySelector(".score")
const retsartBtn = document.querySelector(".restart")
const nextBtn = document.querySelector(".next")


/*-------------------------------- Functions --------------------------------*/

const createQuestionElement = (question, choices, idex) => {
    const questionElement = document.createElement(`p`)
    questionElement.textContent = question
    mainQuestion.appendChild(questionElement)
    console.log(questionElement);
   

    const choiceContainerElement = document.createElement(`div`)
    choices.forEach((choice) => {
        const choiceElement = document.createElement(`input`)
        const label = document.createElement("label")
        choiceElement.type = "radio"
        choiceElement.name = idex
        label.textContent = choice
        choiceContainerElement.appendChild(choiceElement)
        choiceContainerElement.appendChild(label)
    })
    mainQuestion.appendChild(choiceContainerElement)
}
const createQuestions = () => {
    mathQuestion.forEach((question, idex) => {
        console.log(idex);
        
        createQuestionElement (question.question, question.choice, idex)
    
    }
    )
}

const checkAnswers = () => {
    const questions = Topic === "math" ? mathQuestion : scienceQuestion;
    const currentQuestion = questions[currentQuestionIndex];
    
}
createQuestions ()

/*----------------------------- Event Listeners -----------------------------*/

nextBtn.addEventListener(
    "next",
    (nextBtn) => {
        const nextButton = new FormData(".next")
        let output = "";
        for (const entry of nextButton){
            output = `${output}${entry[0]}=${entry[1]}\r`
        }
        log.innerText = output
        nextBtn.preventDefault();
    },
    false,
);


