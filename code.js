var score=0;
var timeremaining;
var action;

function mathgame(){
    if(document.getElementById('startreset').innerHTML=='Start Game'){
        
        document.getElementById('startreset').innerHTML='Reset Game';
        show('timeremaining');
        timeremaining=60;
        document.getElementById('timeremainingcount').innerHTML=timeremaining;
        hide('gameover');
        document.getElementById('scorecount1').innerHTML=0;
        document.getElementById('scorecount2').innerHTML=0;
        
        startcountdown();
        QnA();
    }
    else{
        //reloading page
        location.reload();
        //changing name of startreset div
        document.getElementById('startreset').innerHTML='Start Game';
        //displaying timeremaining block
        hide('timeremaining');
        //changing score variable
        score=0;
        document.getElementById('scorecount').innerHTML=score;
        
    }
    
}

//function to start the queation and answer
function QnA(){
    var first=1+Math.round(Math.random()*9);
    var second=1+Math.round(Math.random()*9);
    document.getElementById('question').innerHTML=first + 'X' + second;
    var answer=first*second;
    var choice=1+Math.round(Math.random()*3);
    document.getElementById('box' + choice).innerHTML=answer;
    for(i=1;i<=4;i++)
        {
            if(i!= choice){
                var wrong = 1 + Math.round(Math.random()*100);
                document.getElementById('box' + i).innerHTML=wrong;
            }
        }
    
    for(i=1;i<=4;i++){
        document.getElementById('box' +i).onclick=function(){
            if(this.innerHTML==answer){
                show('correct');
                setTimeout(function(){hide('correct')},1000);
                score++;
                document.getElementById('scorecount1').innerHTML=score;
                document.getElementById('scorecount2').innerHTML=score;
                QnA();
            }
            else{
                show('tryagain');
                setTimeout(function(){hide('tryagain')},1000);
            }
        }
    }
    
}

function hide(id){
    document.getElementById(id).style.display='none';
}

function show(id){
    document.getElementById(id).style.display='block';
}


function startcountdown(){
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById('timeremainingcount').innerHTML=timeremaining;
        if(timeremaining==0){
            clearInterval(action);
            show('gameover');
            hide('timeremaining');
            hide('correct');
            hide('tryagain');
            document.getElementById('startreset').innerHTML='Start Game';
        }
    },1000);

}