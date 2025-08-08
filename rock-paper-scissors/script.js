/*
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num == 0){
        return "rock";
    }else if (num == 1){
        return "paper";
    }else if (num == 2){
        return "scissors";
    }
}

function getHumanChoice(){
   let choice = window.prompt("pick one: rock, paper, or scissors");
   return choice.toLowerCase();
}

function playGame(){
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock"){
    if (computerChoice == "rock"){
        console.log("tie");
    }else if(computerChoice == "paper"){
        console.log("you lost! paper beats rock.");
        computerScore++;
    }else if(computerChoice == "scissors"){
        console.log("you win! rock beats scissors.");
        humanScore++;
    }
}if (humanChoice == "paper"){
    if (computerChoice == "rock"){
        console.log("you win! paper beats rock.");
        humanScore++;
    }else if(computerChoice == "paper"){
        console.log("tie");
    }else if(computerChoice == "scissors"){
        console.log("you lost! scissors beats paper.");
        computerScore++;
    }
}if (humanChoice == "scissors"){
    if (computerChoice == "rock"){
        console.log("you lost! rock beats scissors.");
        computerScore++;
    }else if(computerChoice == "paper"){
        console.log("you win! scissors beats paper.");
        humanScore++;
    }else if(computerChoice == "scissors"){
        console.log("tie");
    }
}
}

for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}

if (humanScore > computerScore){
    console.log("congrats, you win!");
}else if (humanScore < computerScore){
    console.log("uh oh, computer wins :(");
}else{
    console.log("It's a tie overall!");
}
}

playGame();

*/

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num == 0){
        return "rock";
    }else if (num == 1){
        return "paper";
    }else if (num == 2){
        return "scissors";
    }
}

function playGame(){
function playRound(humanChoice, computerChoice) {
    humanChoiceText.textContent = "your choice: " + humanChoice;
    computerChoiceText.textContent = "computer choice: " + computerChoice;
  
    if (computerChoice == "rock"){
        if (humanChoice == "paper"){
            humanScore++;
            roundResult.textContent = "you win! paper beats rock.";
        }else if(humanChoice== "scissors"){
            computerScore++;
            roundResult.textContent = "you lose! rock beats scissors.";
        }else{
            roundResult.textContent = "tie!";
        }
    }else if(computerChoice == "paper"){
        if(humanChoice == "rock"){
            computerScore++;
            roundResult.textContent = "you lose! paper beats rock."
        } else if (humanChoice == "scissors"){
            humanScore++;
            roundResult.textContent = "you win! scissors beats paper."

        } else {
            roundResult.textContent = "tie!";
        }
    } else {
        if (humanChoice == "rock") {
                humanScore++;
                roundResult.textContent = "you win! rock beats scissors.";
            } else if (humanChoice == "paper") {
                computerScore++;
                roundResult.textContent = "you lose! scissors beats paper.";
            } else {
                roundResult.textContent = "tie!";
            }
    }

humanScoreText.textContent = "your score: " + humanScore;
computerScoreText.textContent = "computer score: " + computerScore;

if (humanScore == 5 || computerScore == 5){
    const resultText = document.createElement("div");
    resultText.setAttribute("class", "resultText");
    result.appendChild(resultText);

    if (humanScore == 5){
        resultText.textContent = "congrats, you win!";
    } else {
        resultText.textContent = "uh oh, computer wins :(";
    }
    const refresh = document.createElement("p");
    refresh.textContent = "thanks for playing <3 refresh to play again";
    body.removeChild(buttonDiv);
    result.removeChild(choices);
    result.removeChild(roundResult);
    body.appendChild(refresh);
    }
}

const body = document.querySelector(".background");

let buttonDiv = document.createElement("div");
buttonDiv.setAttribute("class", "buttons");

const rockButton = document.createElement("button")
rockButton.textContent = "rock";

const paperButton = document.createElement("button")
paperButton.textContent = "paper";

const scissorsButton = document.createElement("button")
scissorsButton.textContent = "scissors";

buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);

body.appendChild(buttonDiv);

const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const choice = button.textContent;
            const computerChoice = getComputerChoice();
            playRound(choice, computerChoice);
    });
});

let humanScore = 0;
let computerScore = 0;
const result = document.createElement("div");
result.setAttribute("class", "result");
body.appendChild(result);

const choices = document.createElement("div");
    choices.setAttribute("class", "choices");
    const humanChoiceText = document.createElement("p");
    const computerChoiceText = document.createElement("p");
    humanChoiceText.textContent = "your choice: tbd";
    computerChoiceText.textContent = "computer choice: tbd";
    choices.appendChild(humanChoiceText);
    choices.appendChild(computerChoiceText);
    result.appendChild(choices);
    const roundResult = document.createElement("p");
    roundResult.textContent = "results will be displayed here"
    roundResult.setAttribute("class", "roundResultText");
    result.appendChild(roundResult);

    const scores = document.createElement("div");
    const humanScoreText = document.createElement("p");
    humanScoreText.textContent = "your score: " + humanScore;
    const computerScoreText = document.createElement("p");
    computerScoreText.textContent = "computer score: " + computerScore;
    scores.appendChild(humanScoreText);
    scores.appendChild(computerScoreText);
    result.appendChild(scores);
    
}

playGame();