// Retrieve the most recent score from local storage
const mostRecentScore = localStorage.getItem('mostRecentScore');

// Get the element to display the score
const scoreText = document.getElementById('finalScore');

// Display the score on the page
scoreText.innerText = `${mostRecentScore}`;
