const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:'Where would you be if you were standing on the Spanish Steps?',
        choice1:'Madrid',
        choice2:'Rome',
        choice3:'Barcelona',
        choice4:'Napoli',
        answer: 2,
    },
    {
        question:'Excluding english what is the most spoken language in the world?',
        choice1:'Spanish',
        choice2:'French',
        choice3:'Hindi',
        choice4:'Mandarin',
        answer: 4,
    },
    {
        question:'In which Continent is the is the largest dessert in the world located?',
        choice1:'Europe',
        choice2:'Asia',
        choice3:'South America',
        choice4:'Africa',
        answer: 4,
    },
    {
        question:'What country has the highest life expectancy in the world?',
        choice1:'Japan',
        choice2:'Macao',
        choice3:'Hong Kong',
        choice4:'Singapore',
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question %{}
}