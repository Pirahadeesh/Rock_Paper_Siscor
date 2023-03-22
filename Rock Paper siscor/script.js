//TITLE DIV
 let message = `Rock Paper Scissors`
 let titleDiv = document.getElementById('titleDiv')
 titleDiv.innerHTML=`<h1>${message}</h1>`

//  COLOR SQUARES

let rockDiv = document.getElementById('rock')
let PaperDiv =document.getElementById('Paper')
let scissorsDiv =document.getElementById('scissors')
const squares = document.querySelectorAll('.square-color')
let result = document.querySelectorAll('#result')
let psc = document.getElementById('#player-score')
let csc = document.getElementById('#computer-score')

//timesclicked
const timesclicked ={'rock':0,'Paper':0,'scissors':0 }


//clearscores
function clearscoes(){
     timesclicked.rock= 0
     timesclicked.Paper=0
     timesclicked.scissors=0

    squares.forEach(square=>{
        square.innerText=""
    })
}
const cleargamebtn = document.getElementById('clear-game')
cleargamebtn.onclick =()=> clearscoes()


// GAME MODE ON
squares.forEach(square=>square.addEventListener('click',playGame));

let playerScore =0;
let computerScore =0;

//computerPlay

function computerPlay(){
    const squares = ['rock','Paper','scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return squares[randomNumber]
}

//PLAY GAME

function playGame(e){
     const playerChoice = e.target.id
    const computerChoice = computerPlay();

document.getElementById("vs1").textContent=`You choose: ${playerChoice}.`;
document.getElementById("vs2").textContent=`Com choose: ${computerChoice}.`;
    

    if(playerChoice === computerChoice){
        document.getElementById('result').textContent="It's a tie!";
    } else if(
        (playerChoice ==='rock' && computerChoice === 'scissors') || (playerChoice ==='Paper' && computerChoice === 'rock') ||(playerChoice === 'scissors' && computerChoice === 'Paper')
    ){
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
document.getElementById('result').textContent="You Win!";

    }
    else{
computerScore++;
document.getElementById('computer-score').textContent = computerScore;
document.getElementById('result').textContent = "You lose!";

    }

} 

// Function to update scoreboard
function updateScoreboard() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
  }

document.getElementById('clear-game').addEventListener('click', function(){
    playerScore =0;
    computerScore =0;
    updateScoreboard();
    document.getElementById('result').textContent = "";
    document.getElementById("vs1").textContent=``;
document.getElementById("vs2").textContent=``;

 });






