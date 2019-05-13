let gameScore = [];

function play(id){
    let player = document.getElementById('player');
    let selectedBox = document.getElementById(id);
    selectedBox.innerText = player.innerText;
    gameScore[id] = player.innerText;
    // console.log(selectedBox.innerText);
    let restart = checkWinner();
    if(!restart) restart = checkCat();

    // console.log(gameScore);

    restart ? reset() : player.innerText = togglePlayer(player);
}

function reset(){
    gameScore.forEach((item, index, arr) =>{
        document.getElementById(index).innerText = '';
    })
    gameScore = [];
    document.getElementById('player').innerText = 'X';
}

function checkCat(){
    let isCat = true;
    console.log(gameScore);
    if(gameScore.length < 9) isCat = false;
    let lastIndex = 0;
    gameScore.forEach((item, index) =>{
        if(index - lastIndex > 1) isCat = false;
        lastIndex = index;
        console.log(item);
        if(item === undefined) isCat = false;
    }) 
    if(isCat){
        alert('Cat Game');
        return true;
    }
    else false;
}

function togglePlayer(player){
    if(player.innerText === 'X'){
        return 'O';
    } else {
        return 'X';
    }
}

function checkWinner(){
    // player = document.getElementById ? '' : document.getElementById(id).innerText;
    let winner = false;
    let player = document.getElementById('player').innerText;
    
    let topLeft = gameScore[0];
    let topMiddle = gameScore[1];
    let topRight = gameScore[2];
    let middleLeft = gameScore[3];
    let middleMiddle = gameScore[4];
    let middleRight = gameScore[5];
    let bottomLeft = gameScore[6];
    let bottomMiddle = gameScore[7];
    let bottomRight = gameScore[8];

    if(topLeft && topLeft === topMiddle && topLeft === topRight) winner = true;
    if(middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) winner = true;
    if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) winner = true;
    if(topLeft && topLeft === middleLeft && topLeft === bottomLeft) winner = true;
    if(topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) winner = true;
    if(topRight && topRight === middleRight && topRight === bottomRight) winner = true;
    if(topRight && topRight === middleMiddle && topRight === bottomLeft) winner = true;
    if(topLeft && topLeft === middleMiddle && topLeft === bottomRight) winner = true;
    
    if(winner) {
        alert(`Player ${player} Wins!`);
        return true;
    }
    else return false;
    // console.log(checkSame(player, id, 4));

}



// function checkInBounds(id, change){
//     return (id + change >= 0) && (id + change < 9);
// }

// function checkSame(player, id, change){
//     // console.log('check same ', player)
//     if(checkInBounds(id, change) && player == gameScore[id + change]){
//         if((checkInBounds(id, change *2) && player == gameScore[id + change * 2])
//          || (checkInBounds(id, -change) &&  player == gameScore[id - change])){
//             return true;
//         }
//         else{
//             return false;
//         }
//     } else if(checkInBounds(id, -change) && player == gameScore[id - change]){
//         if(checkInBounds(id, -change * 2) && player == gameScore[id - change * 2]){
//             return true;
//         } else {
//             return false;
//         }
//     } else{
//         return false;
//     }
// }
