const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex
// why is this not closed?

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) { 
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
 }

 function clearStatusClass(element) {
     element.classList.remove("correct")
     element.classList.remove("wrong")
 }

const questions = [
    {
        question: "The getElementById() is:",
        answers: [
            { text: "a DOM method used to a apply an event to a button.", correct: false },
            { text: " a DOM method used to return the element that has the ID attribute with the specified value.", correct: true },
            { text: "a DOM method used to dynamically create an element.", correct: false },
            { text: "a DOM method used to show images and text.", correct: false },
        ]
    }, 
    // what does the comma do?
{
    question: "In JavaScript, an array is:",
    answers: [
        { text: "an HTML element found in the index file.", correct: false },
        { text: "a name for a node of a HTML document.", correct: false },
        { text: "a single varaiable that is used to store different elements.", correct: true },
        { text: "a primitive data type.", correct: false },
    ]
}, 
{
    question: "In Javascript what is a string",
    answers: [
        { text: "a sequence of one or more characters that may consist of letters, numbers, or symbols.", correct: true },
        { text: "something cats love to play with.", correct: false },
        { text: "a DOM element contained in the index file", correct: false },
        { text: "a  property set that returns the HTML content (inner HTML) of an element.", correct: false }
    ]
}, 
{
    question: "The getElementById() method:",
    answers: [
        { text: "returns a css class with a specified class RGB value.", correct: false },
        { text: "returns a collection of elements with a specified name.", correct: false },
        { text: "returns a child element with a given tag name.", correct: false },
        { text: "returns an element with a specified value.", correct: true }
    ]
}, 
{
    question: "The if/else statement executes a block of code if a specified condition is:",
    answers: [
        { text: "false", correct: false },
        { text: "true", correct: true },
        { text: "greater than", correct: false },
        { text: "lesss than", correct: false },
    ]
}
]

 