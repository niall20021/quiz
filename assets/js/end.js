const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

finalScore.innerText = mostRecentScore

score = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
    }
}
