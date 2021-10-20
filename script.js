computerSelection = computerPlay();
playerSelection = '';
let score = 0;

function computerPlay() {
    rockPaperOrScissors = Math.floor(Math.random()*3)+1
    if (rockPaperOrScissors === 1) {
        return "rock";
    } else if (rockPaperOrScissors === 2) {
        return "paper";
    } else if (rockPaperOrScissors === 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const win = `You Win! ${playerSelection} beats ${computerSelection}`;
    const lose = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const draw = `Draw! You both picked ${playerSelection}`;

    if (score === 5) {
        alert("You win!");
    } else if (score === -5) {
        alert("You lose!");
    }

    computerSelection = computerPlay();
    if (playerSelection == "rock" && computerSelection == "rock") {
        return draw;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        score--;
        return lose;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        score++;
        return win;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        score++;
        return win;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return draw;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        score--;
        return lose;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        score--;
        return lose;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        score++;
        return win;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return draw;
    }
}



const results = document.querySelector('.results');
const scoreDiv = document.querySelector('.score');

window.addEventListener('click', function(e) {
    const button = document.querySelector(`button[data-move="${e.target.dataset.move}"]`);
    if (e.target.dataset.move == undefined) return;
    results.textContent = playRound(e.target.dataset.move, computerSelection);
    scoreDiv.textContent = score;
});

// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => button.addEventListener('click', function(e) {
//     const button = document.querySelector(`button[data-move="${e.target.dataset.move}"]`);
//     if (e.target.dataset.move == undefined) return;
//     console.log(e.target.dataset.move);
// }));


// function game() {
//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt("Choose rock, paper or scissors").toLowerCase()
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(`Score: ${score}`);
//     }
// }

// game();