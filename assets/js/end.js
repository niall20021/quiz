/*This css file is strictly used to log the users most recent score as they're final score and
shows them the results of the quiz */
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

finalScore.innerText = mostRecentScore

score = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
    }
}
