//selecting element 
const score0El  = document.getElementById('score--0');
const score1El  = document.getElementById('score--1');
const current0El  =document.getElementById('current--0')
const current1El  =document.getElementById('current--1')
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll');
btnRoll.classList.remove('hidden');
const btnHold = document.querySelector('.btn--hold')
let glbSc0 = document.getElementById('score--0');
let glbSc1 = document.getElementById('score--1');
let globalScorePlayer0 = 0;
let globalScorePlayer1 = 0;
let currentScore = 0;
const player = [0,0];
activePlayer  = 0;
score0El.textContent  = 0;
score1El.textContent  = 0;
diceEl.classList.add('hidden');


 //Rolling dice Functionality
 

 btnRoll.addEventListener('click',function(){

    //generating random dice

    dice = Math.trunc(Math.random()*6)+1;
    
    //display dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; 

    if(dice!==1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        
        currentScore=0;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        activePlayer = activePlayer === 0 ? 1: 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

    }
 });


//Hold Button Functionality

 btnHold.addEventListener('click',function(){

    if(activePlayer===0){
        globalScorePlayer0 += currentScore;
        glbSc0.textContent = globalScorePlayer0;
    }else{
         globalScorePlayer1 += currentScore;
         glbSc1.textContent = globalScorePlayer1;
    }
    
     //Declare Winner
     if(globalScorePlayer0 >= 100||globalScorePlayer1>=100){
        if(globalScorePlayer0 >= 100){
            document.querySelector('.winner1').textContent = 'Player 1 Won';
            diceEl.classList.add('hidden');
            btnRoll.classList.add('hidden');
        }else if(globalScorePlayer1>=100){
            document.querySelector('.winner2').textContent = 'Player 2 Won';
            diceEl.classList.add('hidden');
            btnRoll.classList.add('hidden');
        }
    }

         currentScore = 0;
         dice  = 0;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
         activePlayer = activePlayer === 0 ? 1: 0;
         player0El.classList.toggle('player--active');
         player1El.classList.toggle('player--active');
 });

 //New Game 
 btnNew.addEventListener('click',function(){
    currentScore = 0;
    activePlayer = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    globalScorePlayer0 = 0;
    globalScorePlayer1 = 0;
    glbSc0.textContent = 0;
    glbSc1.textContent = 0;
    if(activePlayer===0){
          player0El.classList.add('player--active');
          player1El.classList.remove('player--active');
    }else{
          player1El.classList.add('player--active');
          player0El.classList.remove('player--active');
    }
    btnRoll.classList.remove('hidden');
   document.querySelector('.winner1').textContent = 'Player 1';
   document.querySelector('.winner2').textContent = 'Player 2';
   
    diceEl.classList.add('hidden');
 });
