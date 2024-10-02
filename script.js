const cardArray = [
  { code: 1, name: '食べる', plainName: 'たべる', id: 1 },
  { code: 1, name: 'Comer', id: 2 },
  { code: 2, name: '飲む', plainName: 'のむ', id: 3 },
  { code: 2, name: 'Beber', id: 4 },
  { code: 3, name: '行く', plainName: 'いく', id: 5 },
  { code: 3, name: 'Ir', id: 6 },
  { code: 4, name: '見る', plainName: 'みる', id: 7 },
  { code: 4, name: 'Mirar', id: 8 },
  { code: 5, name: '読む', plainName: 'よむ', id: 9 },
  { code: 5, name: 'Leer', id: 10 },
  { code: 6, name: '書く', plainName: 'かく', id: 11 },
  { code: 6, name: 'Escribir', id: 12 }
];

let chosenCardCodes = [];
let chosenCardIds = [];
const cardsWon = [];

function createBoard() {
  const gameBoard = document.getElementById('gameBoard');
  cardArray.sort(() => 0.5 - Math.random()); // Shuffle cards
  cardArray.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-id', index);

    // Inner container for the flip effect
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
    cardElement.appendChild(cardInner);

    // Card front (displaying Japanese verb)
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    // Adding the plainName above the Japanese verb
    if (card.plainName) {
      const plainNameElement = document.createElement('div');
      plainNameElement.classList.add('plain-name');
      plainNameElement.innerText = card.plainName; // Display Hiragana name
      cardFront.appendChild(plainNameElement);
    }

    const japaneseNameElement = document.createElement('div');
    japaneseNameElement.classList.add('japanese-name');
    japaneseNameElement.innerText = card.name; // Display Japanese verb (kanji)
    cardFront.appendChild(japaneseNameElement);

    cardInner.appendChild(cardFront);

    // Card back (displaying ?)
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.innerText = '?'; // Placeholder for the back
    cardInner.appendChild(cardBack);

    // Click event to flip card
    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
  });
}


function flipCard() {
  const cardId = this.getAttribute('data-id');

  // return if we are selecting an already selected card
  if (chosenCardIds[0] === cardId) {
    return
  }

  const cardCode = cardArray[cardId].code; // Get the code of the flipped card
  chosenCardCodes.push(cardCode);
  chosenCardIds.push(cardId);
  
  this.classList.add('flipped'); // Adds the 'flipped' class to trigger the CSS rotation

  if (chosenCardCodes.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll('.card');
  const [firstCardId, secondCardId] = chosenCardIds;

  const firstCardCode = chosenCardCodes[0];
  const secondCardCode = chosenCardCodes[1];

  if (firstCardCode === secondCardCode) {
    cards[firstCardId].removeEventListener('click', flipCard);
    cards[secondCardId].removeEventListener('click', flipCard);
    cardsWon.push(chosenCardCodes);
  } else {
    setTimeout(() => {
      cards[firstCardId].classList.remove('flipped');
      cards[secondCardId].classList.remove('flipped');
    }, 500);
  }

  chosenCardCodes = [];
  chosenCardIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    alert('Congratulations! You matched all the cards!');
  }
}

// Initialize the game board
createBoard();