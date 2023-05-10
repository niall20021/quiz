const quizData = [
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        a:"Rome",
        b:"Shanghai",
        c:"Napoli",
        d:"Madrid",
        correct:"a",
    },
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        a:"81",
        b:"99",
        c:"109",
        d:"90",
        correct:"a",
    },
    {
        question: "What former United States Predident is on the $20 bill?",
        a:"George Washington",
        b:"Andrew Jackson",
        c:"Abraham Lincoln",
        d:"Thomas Jefferson",
        correct:"b",
    },
    {
        question: "What country has the highest life expectancy?",
        a:"Australia",
        b:"Hong Kong",
        c:"Japan",
        d:"Monaco",
        correct:"d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

/**
 * Linking each question created in Javascript to its equal counterpart
 * in the game.html section,
 */
function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

/**
 * Keeping Tally of the score the users incorrect and correct answer
 * 
 */
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

/**
 * Logs the Users answer of each question to calculate the answer
 * and tell them their result at the end of the quiz.
 */
submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            const restartbutton = document.getElementById('restart')
            restartbutton.style.visibility = 'visible'
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick ='location.reload()'>Reload</button>
            `
        }
    }
})