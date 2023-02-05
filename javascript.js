let gameCount = 0;
let scoreCount = 0;

function getComputerChoice() {
    let rand = Math.random();
    if (rand < 0.333){
        return "rock";
    } else if (rand < 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

function testResults(playerChoice,computerChoice) {
    console.log("You chose " + playerChoice + " and the computer chose " + computerChoice + ".");
    if (playerChoice === "rock") {
        if (computerChoice == "rock") {
            return 0;
        } else if (computerChoice == "paper"){
            return -1;
        } else {
            return 1;
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return 1;
        } else if (computerChoice == "paper"){
            return 0;
        } else {
            return -1;
        }
    } else {
        if (computerChoice == "rock") {
            return -1;
        } else if (computerChoice == "paper"){
            return 1;
        } else {
            return 0;
        }
    }
}
function scoreCounter () {
    /*let scoreCounter = 0;
    for (i = 0; i < 5; i++) {
        let computerChoiceFinal = getComputerChoice();
        scoreCounter = scoreCounter + testResults(playerChoiceFinal, computerChoiceFinal);
        console.log("Current score is " + scoreCounter);
    }*/
    
    return testResults(playerChoiceFinal, getComputerChoice());
}
function findWinner (score) {
    const roundScore = document.querySelector('#roundScore');
    if (score > 0) {
        roundScore.textContent = "You won!";
    } else if (score < 0) {
        roundScore.textContent = "Oh no! You lost!";
    } else {
        roundScore.textContent = "You tied!";
    }
    gameCount++;
    scoreCount += score;
    const gameCounter = document.querySelector('#gameCount');
    gameCounter.textContent = gameCount;
    if (gameCount === 5) {
        gameWinner(score);
    }
}
function gameWinner (score) {
    const gameScore = document.querySelector('#gameScore');
    if (score > 0) {
        gameScore.textContent = "You won the best of five!";
    } else if (score < 0) {
        gameScore.textContent = "You lost the best of five!";
    } else {
        gameScore.textContent = "You tied the best of five!";
    }

    const btns = document.querySelectorAll('.button-container > button');
    btns.forEach((btn) => {
        btn.disabled = true;
    });
}
function reset () {
    const btns = document.querySelectorAll('.button-container > button');
    btns.forEach((btn) => {
        btn.disabled = false;
    });
    const para = document.querySelectorAll('.results > p');
    para.forEach((graph) => {
        graph.textContent = "";
        graph.appendChild(document.createElement('br'));
    })
    gameCount = 0;
    scoreCount = 0;
    const gameCounter = document.querySelector('#gameCount');
    gameCounter.textContent = 0;
}

function clickStart(clickedID) {
    findWinner(testResults(clickedID,getComputerChoice()));
    //findWinner(playRound());
}