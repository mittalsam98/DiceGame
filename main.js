
var activePlayer,score,roundScore,dice,state;

state=true;
init();
//document.querySelector('#current-0').=dice;



// function btn(){
//     dice=Math.floor(Math.random()*6+1);
//     document.querySelector('#current-'+activePlayer).textContent=dice;
// }
// btn();
document.querySelector('.btn-roll').addEventListener('click',function(){
   
    if(state){
    dice=Math.floor(Math.random()*6)+1;

    document.querySelector('.dice').src='dice-'+dice+'.png';
    document.querySelector('.dice').style.display='block';

    if(dice!==1){
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
    else{
        newPlayer();
    }
}

    
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(state){
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent=score[activePlayer];
    

    if(score[activePlayer]>=20){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        state=false;
    }
    else{
        newPlayer();
    }

}

});


function newPlayer(){
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    roundScore=0;
     
    document.querySelector('.dice').style.display='none';
}


document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    score=[0,0];
    activePlayer=0;
    roundScore=0;

    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    state=true;

}