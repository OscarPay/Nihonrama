const cardArray = [
  { code: 1, name: '食べる', plainName: 'たべる', group: 1, id: '1' },
  { code: 1, name: 'Comer', id: '2' },
  { code: 2, name: '飲む', plainName: 'のむ', group: 1, id: '3' },
  { code: 2, name: 'Beber', id: '4' },
  { code: 3, name: '行く', plainName: 'いく', group: 1, id: '5' },
  { code: 3, name: 'Ir', id: '6' },
  { code: 4, name: '見る', plainName: 'みる', group: 2, id: '7' },
  { code: 4, name: 'Mirar', id: '8' },
  { code: 5, name: '読む', plainName: 'よむ', group: 1, id: '9' },
  { code: 5, name: 'Leer', id: '10' },
  { code: 6, name: '書く', plainName: 'かく', group: 1, id: '11' },
  { code: 6, name: 'Escribir', id: '12' },
  { code: 7, name: '話す', plainName: 'はなす', group: 1, id: '13' },
  { code: 7, name: 'Hablar', id: '14' },
  { code: 8, name: '買う', plainName: 'かう', group: 1, id: '15' },
  { code: 8, name: 'Comprar', id: '16' },
  { code: 9, name: '使う', plainName: 'つかう', group: 1, id: '17' },
  { code: 9, name: 'Usar', id: '18' },
  { code: 10, name: '教える', plainName: 'おしえる', group: 2, id: '19' },
  { code: 10, name: 'Enseñar', id: '20' }
];

// Shuffle function using Fisher-Yates algorithm
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
const cardsWon = [];

const gameStatus = document.getElementById('gameStatus');
const resetButton = document.getElementById('resetButton');

// Initialize the game
function initGame() {
  // Clear previous game state
  hasFlippedCard = false;
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  cardsWon.length = 0;
  gameStatus.textContent = '';

  // Clear the game board
  const gameBoard = document.getElementById('gameBoard');
  gameBoard.innerHTML = '';

  // Shuffle the cards
  const shuffledCards = shuffle([...cardArray]);

  // Create the board with shuffled cards
  shuffledCards.forEach((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.setAttribute('data-id', card.id);

      // Inner container for the flip effect
      const cardInner = document.createElement('div');
      cardInner.classList.add('card-inner');
      cardElement.appendChild(cardInner);

      // Card front (displaying Japanese verb)
      const cardFront = document.createElement('div');
      cardFront.classList.add('card-front');

      // Adding the plainName above the Japanese verb if exists
      if (card.plainName) {
          const plainNameElement = document.createElement('div');
          plainNameElement.classList.add('plain-name');
          plainNameElement.innerText = card.plainName; // Display Hiragana name
          cardFront.appendChild(plainNameElement);
      }

      const japaneseNameElement = document.createElement('div');
      japaneseNameElement.classList.add('japanese-name');
      japaneseNameElement.innerText = card.name; // Display Japanese verb (kanji) or Spanish translation
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

// Flip card function
function flipCard() {
  if (lockBoard) return; // Do nothing if the board is locked

  const cardId = this.getAttribute('data-id');
  const cardFlipped = cardArray.find((card) => card.id === cardId)

  // Do nothing if the same card is clicked
  if (firstCard && cardFlipped.id === firstCard.id) {
    return
  }

  this.classList.add('flipped');

  if (!hasFlippedCard) {
      // First click
      hasFlippedCard = true;
      firstCard = cardFlipped;
      return;
  }

  // Second click
  secondCard = cardFlipped;
  hasFlippedCard = false;

  // Check for a match
  checkForMatch();
}

// Check if two cards match
function checkForMatch() {
  const firstCardCode = firstCard.code;
  const secondCardCode = secondCard.code;

  if (firstCardCode === secondCardCode) {
      // It's a match
      disableCards();
      checkWinCondition();
  } else {
      // Not a match
      unflipCards();
  }
}

// Disable matched cards
function disableCards() {
  // Reset variables
  resetBoard();
}

// Unflip unmatched cards
function unflipCards() {
  const cards = document.querySelectorAll('.card');
  lockBoard = true;

  setTimeout(() => {
    cards.forEach((card) => {
      if (card.dataset.id === firstCard.id || card.dataset.id === secondCard.id) {
        card.classList.remove('flipped');
      }
    });
    resetBoard();
  }, 1000); // Adjust delay as needed
}

// Reset board variables
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Check if all pairs have been found
function checkWinCondition() {
  const gameBoard = document.getElementById('gameBoard');
  const totalCards = cardArray.length;
  const flippedCards = gameBoard.querySelectorAll('.flipped').length;

  if (flippedCards === totalCards) {
      gameStatus.textContent = 'Congratulations! You matched all the cards!';
  }
}

// Event listener for Reset button
resetButton.addEventListener('click', initGame);

// Initialize the game on page load
initGame();
