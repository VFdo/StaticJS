// ****************************ROLL**********************************
const roll1 = document.getElementById('btnDice1');
const roll2 = document.getElementById('btnDice2');
const die_1 = document.getElementById('dice_1');
const die_2 = document.getElementById('dice_2');


let myRoll_1 = 0;
let myRoll_2 = 0;
var die_1Clicked = false;
var die_2Clicked = false;
var played = false;


roll1.addEventListener('click', function(){
    if(played){
        alert("Click Re-Play to Play Again!");
    }
    
    else if(die_1Clicked){
        alert("Now Click The Other Die!");
    }

    else{
        const num_1 = Math.floor(Math.random() * 6) + 1;
        myRoll_1 = num_1;
        die_1Clicked = true;
        roll1.classList.add("btnRollClicked");

        switch(myRoll_1){
            case 1: die_1.classList.add("die1");
                    break;
    
            case 2: die_1.classList.add("die2");
                    break;
    
            case 3: die_1.classList.add("die3");
                    break;
    
            case 4: die_1.classList.add("die4");
                    break;
    
            case 5: die_1.classList.add("die5");
                    break;
    
            case 6: die_1.classList.add("die6");
                    break;
    
            default: alert("Click the Dice Before Clicking GO!");
        }
    }
})

roll2.addEventListener('click', function(){
    if(played){
        alert("Click Re-Play to Play Again!");
    }
    else if(die_2Clicked){
        alert("Now Click GO!");
    }


    else{
        const num_2 = Math.floor(Math.random() * 6) + 1;
        myRoll_2 = num_2;
        die_2Clicked = true;
        roll2.classList.add("btnRollClicked");

        switch(myRoll_2){
            case 1: die_2.classList.add("die1");
                    break;
    
            case 2: die_2.classList.add("die2");
                    break;
    
            case 3: die_2.classList.add("die3");
                    break;
    
            case 4: die_2.classList.add("die4");
                    break;
    
            case 5: die_2.classList.add("die5");
                    break;
    
            case 6: die_2.classList.add("die6");
                    break;
    
            default: alert("Click the Dice Before Clicking GO!");
       }
    }
})


// *****************************STATUS********************************
const btnStatus = document.getElementById('btnStatus');

function getState(){
    if(myRoll_1 == 0 || myRoll_2 == 0){
        alert("Click and Roll both Dice First!");
    }

    else if(played){
        alert("Click Re-Play Button to Play Again!");
    }

    else if(myRoll_1 == myRoll_2){
        const statusDiv = document.getElementById('statusDiv');
        die_1.classList.remove("hide");
        die_1.classList.add("dice");

        die_2.classList.remove("hide");
        die_2.classList.add("dice");
        var won = document.createElement('h1');
        won.innerHTML = "You Have Won The Game!";
        won.className = "winner";
        statusDiv.append(won);
        document.body.classList.add("win");
        played = true;
    }

    else{
        die_1.classList.remove("hide");
        die_1.classList.add("dice");

        die_2.classList.remove("hide");
        die_2.classList.add("dice");
        var lost = document.createElement('h1');
        lost.innerHTML = "You Lost! Better Luck Next Time!";
        lost.className = "loser";
        statusDiv.append(lost);
        played = true;

    }
}

btnStatus.addEventListener('click', function(){
    getState();
})

const btnRefresh = document.getElementById('btnRefresh');


// ******************************REFRESH******************************
btnRefresh.addEventListener('click', function(){
    location.reload();
})
