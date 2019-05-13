let cardId = document.getElementById('cardId');
let cardStyle = document.getElementById('cardStyle');

function setCard(){
    try{
        let value = cardId.value;
        if(value !== "spades" &&
        value !== "hearts" &&
        value !== "diamonds" &&
        value !== "clubs") throw Error(`Invalid Id entered: ${value}`)

        let card = document.getElementById(value);
        card.style.color = cardStyle.value;
    }
    catch(err){
        alert(err);
    }
}

function reset(){
    document.getElementById('spades').style.color = 'grey';
    document.getElementById('hearts').style.color = 'grey';
    document.getElementById('clubs').style.color = 'grey';
    document.getElementById('diamonds').style.color = 'grey';
}