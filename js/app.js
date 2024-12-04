// 1. Define the variables
// 2. 
// 3.
// 4.
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

const createQuestionElement = (question, choices) => {
    const questionElement = document.createElement(`p`)
    questionElement.textContent = question
    mainQuestion.appendChild(questionElement)
    console.log(questionElement);
   

    const choiceContainerElement = document.createElement(`div`)
    choices.forEach((choice) => {
        const choiceElement = document.createElement(`p`)
        choiceElement.textContent = choice
        choiceContainerElement.appendChild(choiceElement)
    })
    mainQuestion.appendChild(choiceContainerElement)
}

createQuestionElement ("What is the value of Pi (π) up to two decimal places?", ["3.55", "3.14", "3.87", "3.99" ])


/*----------------------------- Event Listeners -----------------------------*/



