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