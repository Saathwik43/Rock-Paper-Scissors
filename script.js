let userScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const resetButton=document.querySelector("#reset-button");
const userScorePara=document.querySelector("#player-score");
const computerScore=document.querySelector("#computer-score");

const generateComputerChoice=()=>{
   const randomNumber=Math.floor(Math.random()*3);
   if(randomNumber===0) return "rock";
   if(randomNumber===1) return "paper";
   return "scissors";
}

const drawGame=()=>{
   console.log("It's a draw!");
   msg.innerText="It's a draw! Play again";
   msg.style.backgroundColor="#081b31";
}


const playGame=(userChoice)=>{
   const computerChoice=generateComputerChoice();
   if(userChoice===computerChoice){
    drawGame();
   }else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=computerChoice==="paper"? false: true;
    }
    else if(userChoice==="paper"){
        userWin=computerChoice==="scissors"? false: true;
    }
    else{
        userWin=computerChoice==="rock"? false: true;
    }
    showWinner(userWin,userChoice,computerChoice);
  }
}

const showWinner=(userWin,userChoice,computerChoice)=>{
   if(userWin){
       userScore++;
       userScorePara.innerText=userScore;
       msg.innerText=`You win! Your ${userChoice} beats ${computerChoice}`;
       msg.style.backgroundColor="green";
   }else{
       CompScore++;
       computerScore.innerText=CompScore;
       msg.innerText=`Computer wins! ${computerChoice} beats your ${userChoice}`;
       msg.style.backgroundColor="darkred";
   }
}

choices.forEach(choice=>{
   choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
       playGame(userChoice);
   })
})

resetButton.addEventListener("click",()=>{
   userScore=0;
   CompScore=0;
   userScorePara.innerText=userScore;
   computerScore.innerText=CompScore;
   msg.innerText="Play your move.";
   msg.style.backgroundColor="#081b31";
})
