// Get elements from the HTML
const questionElement = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');

// Quiz variables
let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Questions and answers
const questions = [
    {
        question: 'Where is the singer Paolo Nutini from?',
        choice1: 'Scotland',
        choice2: 'Ireland',
        choice3: 'USA',
        choice4: 'England',
        answer: 1,
    },
    {
        question: 'Where would you be if you were standing on the Spanish Steps',
        choice1: 'Barcelona',
        choice2: 'Rome',
        choice3: 'Madrid',
        choice4: 'London',
        answer: 2,
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choice1: 'Earth',
        choice2: 'Mars',
        choice3: 'Jupiter',
        choice4: 'Saturn',
        answer: 2,
    },
    {
        question: 'What is the capital of France?',
        choice1: 'Berlin',
        choice2: 'Madrid',
        choice3: 'Paris',
        choice4: 'Rome',
        answer: 3,
    },
];

// Points system and question limit
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

// Start the game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// Load a new question
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // Redirect to "end.html" when the game ends
        window.location.href = 'end.html';
        return;
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    // Track the current question
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    questionElement.innerText = currentQuestion.question;

    // Update choices
    choices.forEach((choice, index) => {
        choice.innerText = currentQuestion['choice' + (index + 1)];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswer = true;
};

// Event listener for choice selection
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // Increase score for correct answers
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        // Delay to show correct/incorrect feedback
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

        // Store the score in local storage after each question
        localStorage.setItem('mostRecentScore', score);
    });
});

// Calculate the user's score
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', startGame);
