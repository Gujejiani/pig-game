/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying; 


 init() 

 var past;

  document.querySelector('.btn-roll').addEventListener('click', function(){
 
    if(gamePlaying){

    
    
    //Do something
      // 1.Random number
      var dice = Math.floor(Math.random() * 6) + 1; 
      var dice2 = Math.floor(Math.random() * 6) + 1; 
      


      // 2. Display result
      var diceDom =  document.querySelector('.dice');
      diceDom.style.display = 'block';
     diceDom.src = 'dice-' + dice + '.png';
      var diceDo =  document.querySelector('.dice2');
      diceDo.style.display = 'block';
     diceDo.src = 'dice-' + dice2 + '.png';

console.log(dice2)






      //3. Update the round score only if rolld number wasn't 1
      if(dice2 ===6 && dice ===6){
       
        document.getElementById('score-' + activePlayer).textContent = 0;
   nextPlayer();
      }else if(dice !== 1 && dice2 !==1){
          //add score
         
          roundScore += (dice + dice2);
         
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
      }else{
          //next player
          nextPlayer()
        }
         past = dice

        console.log(past)

    }
  });

  



  document.querySelector('.btn-hold').addEventListener('click', function(){
//1 add curent score To Global score
if(gamePlaying){
scores[activePlayer] += roundScore;


//2. update UI
document.getElementById('score-' + activePlayer).textContent= scores[activePlayer];

var finalScore
var input = document.getElementById("input").value
//3. check if player won the game
if(input){
  finalScore = input
}else{
  finlScore = 100;
}



if (scores[activePlayer] >= finalScore){
   document.getElementById('name-' + activePlayer).textContent = 'Winner';
   document.querySelector('.dice').style.display = 'none';
   document.querySelector('.dice2').style.display = 'none';
   document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
   gamePlaying=false;
}else{
    //next player
    nextPlayer()
  }
}

  });

 
function nextPlayer(){
      //next player
      activePlayer === 0 ? activePlayer =1: activePlayer =0;
      roundScore=0;

      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';

      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      //document.querySelector('.player-0-panel').classList.remove('active');
      //document.querySelector('.player-1-panel').classList.add('active');
  
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.dice2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init)


function init() {
    scores = [0, 0];
    roundScore=0;
    activePlayer=0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
  document.getElementById('score-0').textContent='0'
  document.getElementById('score-1').textContent='0'
  document.getElementById('current-0').textContent='0'
  document.getElementById('current-1').textContent='0'

  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')

  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')


  
  document.getElementById('name-' + 0).textContent = 'Player-1';
  document.getElementById('name-' + 1).textContent = 'Player-2';

  document.getElementById("name-0").textContent=prompt("Enter Player-1 name")
  document.getElementById("name-1").textContent=prompt("Enter Player-2 name")
}
























// if (activePlayer===0){
//     document.getElementById('score-0').textContent=roundScore;
// }else{
//     document.getElementById('score-1').textContent=roundScore;
// }



  //dice = Math.floor(Math.random() * 6) + 1; 
  //console.log(dice)

  //document.querySelector('#current-' + activePlayer).textContent = dice

  //თუ დაკავშირება გვინდა html ის გამოყენებით 
  //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'



  //var x = document.querySelector('#score-0').textContent;