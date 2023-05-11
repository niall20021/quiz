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
    progressText.innerText = `Question %{questionCounter} of ${MAX_QUESTIONS}`
/*Keeps Track of which question the user is on*/
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswer = true
}

choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptingAnswer) return

        acceptingAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset('number')
/* Toggling either or green or red if question is incorrect or correct*/
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
/*Increasing score if answer is correct */
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    }) 
})

incrementScore = num => {
    score =+ num
    scoreText.innerText = score
}

startGame()