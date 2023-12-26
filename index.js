let cards = [];
let sum = 0;
// blackjack durumu kontrol ediyoruz
let hasBlackJack = false;
// oyuncunun yanıp yanmadığını kontrol ediyoruz.
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// querySelector seçtiğimiz zaman id'mi yoksa class'mı olduğunu belirtmemiz gerekiyor.
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector("#cards-el");

// player name and credit
let player = {
     name:"Per",
     chips: 320,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let chipsEl1 = document.querySelector(".chips-1").addEventListener("click",function () {
    player.chips -= 10;
    playerEl.textContent = player.name + ": $" + player.chips;
   
});

let chipsEl2 = document.querySelector(".chips-2").addEventListener("click", function () {
    player.chips -= 50;
    playerEl.textContent = player.name + ": $" + player.chips;
});

let chipsEl3 = document.querySelector(".chips-3").addEventListener("click",function () {
    player.chips -= 100;
    playerEl.textContent = player.name + ": $" + player.chips;
})


// Create Random Numbers
// getRandomCard ()
// 1- 13 arası sayı elde edeceğiz.
function getRandomCard() {
    // A = 11, bu yüzden if bloğu girmek gerekiyor.
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

// oyunu başlattığımız func
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = ("Do you want to draw a new card?")
    } else if (sum === 21) {
        message = ("You've got Blackjack!");
        hasBlackJack = true;
    } else {
        message = ("You're out of the game!")
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack  === false) {
        let card = getRandomCard();
        sum += card;
        // startGame func çalıştır.
        cards.push(card);
        console.log(cards);
        renderGame();
    }

}

