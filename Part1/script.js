let gameScore = [];

function play(id){
    let player = document.getElementById('player');
    let selectedBox = document.getElementById(id);
    selectedBox.innerText = player.innerText;
    gameScore[id] = player.innerText;
    // console.log(selectedBox.innerText);
    setInterval(checkWinner(id, player.innerText), 5000);

    // console.log(gameScore);

    player.innerText = togglePlayer(player);
}

function togglePlayer(player){
    if(player.innerText === 'X'){
        return 'O';
    } else {
        return 'X';
    }
}

function checkWinner(id, player){
    // player = document.getElementById ? '' : document.getElementById(id).innerText;
    console.log('checkWinner', player);
    if(checkSame(player, id, 1)) alert(`Player ${player} Wins!`);
    // console.log(checkSame(player, id, 1));
    if(checkSame(player, id, 3)) alert(`Player ${player} Wins!`);
    // console.log(checkSame(player, id, 3));
    if(checkSame(player, id, 4)) alert(`Player ${player} Wins!`);
    // console.log(checkSame(player, id, 4));

}

function checkInBounds(id, change){
    return (id + change >= 0) && (id + change < 9);
}

function checkSame(player, id, change){
    // console.log('check same ', player)
    if(checkInBounds(id, change) && player == gameScore[id + change]){
        if((checkInBounds(id, change *2) && player == gameScore[id + change * 2])
         || (checkInBounds(id, -change) &&  player == gameScore[id - change])){
            return true;
        }
        else{
            return false;
        }
    } else if(checkInBounds(id, -change) && player == gameScore[id - change]){
        if(checkInBounds(id, -change * 2) && player == gameScore[id - change * 2]){
            return true;
        } else {
            return false;
        }
    } else{
        return false;
    }
}
