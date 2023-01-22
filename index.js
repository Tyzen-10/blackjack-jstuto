let firstCard = randomCard();
let secondCard = randomCard();
//let firstCard = 3;
//let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard+secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messsageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame();
}
function renderGame(){
    //messsageEl.textContent = message;
    cardsEl.textContent = "Cards: ";
    for (let i=0;i<cards.length;i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        message = "You can pick another card"
    }else if(sum === 21){
        message = "Blackjack"
        hasBlackJack = true;
    }else{
        message = "You lost the game, Value greater than 21";
        isAlive = false;
    }
    messsageEl.textContent = message;

}
function newCard(){
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();

}
function randomCard(){
    return Math.floor(Math.random()*13);

}