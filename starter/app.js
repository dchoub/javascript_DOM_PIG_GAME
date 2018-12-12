/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// varibale for games
var score, roundScore, activePlayer, gamePlaying;
var lastDice;
    

init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // random number genrate
        
   var dice = Math.floor((Math.random()*6)+1);
        var dice2 = Math.floor((Math.random()*6)+1);
        console.log(dice)
        //console.log("last dice is " +lastDice)
        
        
    
    
    //show on dice
    document.querySelector('#dice-1').style.display ='block';
    document.querySelector('#dice-2').style.display ='block';
    document.querySelector('#dice-1').src = 'dice-' +dice+'.png';
    document.querySelector('#dice-2').src = 'dice-' +dice2 +'.png';
    /*if(lastDice===6 && dice ===6){
       score[activePlayer]=0;
        document.getElementById('score-' +activePlayer).textContent =score[activePlayer];
        nextPlayer();
        
    }*/
    
    //update the roundScore if not 1
    /*if(dice!==1){roundScore +=dice;
    document.getElementById('current-' +activePlayer).textContent = roundScore;}
    else{
        
        nextPlayer();
        } */ 
         if(dice===1 || dice2===1){
            
             nextPlayer();
        }
        else{
            roundScore +=dice;
    document.getElementById('current-' +activePlayer).textContent = roundScore;
            
        }
    }
        
       
    //update the score to 0 if continues two 6 comes
   
    
     //lastDice =dice;
    
});
    
    

function nextPlayer(){
    activePlayer ===0 ? activePlayer =1 : activePlayer =0;
    roundScore =0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    
}

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
         //score of round score set as global score
    score[activePlayer]+=roundScore;
    document.getElementById('score-' +activePlayer).textContent =score[activePlayer];
    
        var winningScore;
    var input = document.querySelector('.final-score').value;
        console.log(input);
        if(input){
            winningScore=input;
            
        }
        else{
            winningScore=20;
        }
    //check if its winner
    if(score[activePlayer]>=winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!!!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying=false;
        
    }
    else{
        //change the player
         nextPlayer();
    }
    }
   
    
   
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
score = [0,0];
roundScore =0;
activePlayer=0;
gamePlaying = true;
document.getElementById('score-0').textContent =0;
document.getElementById('score-1').textContent =0;
document.getElementById('current-0').textContent =0;
document.getElementById('current-1').textContent =0;
document.querySelector('#dice-1').style.display = 'none';
document.querySelector('#dice-2').style.display = 'none';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2'
}

