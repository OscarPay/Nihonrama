const colors = [
  '#1F77B4', // Blue
  '#FF7F0E', // Orange
  '#2CA02C', // Green
  '#D62728', // Red
  '#9467BD', // Purple
  '#8C564B', // Brown
  '#E377C2', // Pink
  '#7F7F7F', // Gray
  '#BCBD22', // Yellow-Green
  '#17BECF', // Cyan
  '#AEC7E8', // Light Blue
  '#FFBB78', // Light Orange
  '#98DF8A', // Light Green
  '#FF9896', // Light Red
  '#C5B0D5', // Light Purple
  '#C49C94', // Light Brown
  '#F7B6D2', // Light Pink
  '#C7C7C7', // Light Gray
  '#DBDB8D', // Light Yellow-Green
  '#9EDAE5'  // Light Cyan
];

let usedColors = new Set();

const baseArray0 = [
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
  { code: 10, name: 'Enseñar', id: '20' },
  { code: 11, name: 'する', plainName: 'する', group: 3, id: '21' }, // Hacer
  { code: 11, name: 'Hacer', id: '22' },
  { code: 12, name: '来る', plainName: 'くる', group: 3, id: '23' }, // Venir
  { code: 12, name: 'Venir', id: '24' },
  { code: 13, name: '開ける', plainName: 'あける', group: 2, id: '25' }, // Abrir
  { code: 13, name: 'Abrir', id: '26' },
  { code: 14, name: '閉める', plainName: 'しめる', group: 2, id: '27' }, // Cerrar
  { code: 14, name: 'Cerrar', id: '28' },
  { code: 15, name: '出る', plainName: 'でる', group: 2, id: '29' }, // Salir
  { code: 15, name: 'Salir', id: '30' }
];

const masuArray0 = [
  { code: 1, name: '食べます', plainName: 'たべます', group: 1, id: '1' },
  { code: 1, name: 'Comer', id: '2' },
  { code: 2, name: '飲みます', plainName: 'のみます', group: 1, id: '3' },
  { code: 2, name: 'Beber', id: '4' },
  { code: 3, name: '行きます', plainName: 'いきます', group: 1, id: '5' },
  { code: 3, name: 'Ir', id: '6' },
  { code: 4, name: '見ます', plainName: 'みます', group: 2, id: '7' },
  { code: 4, name: 'Mirar', id: '8' },
  { code: 5, name: '読みます', plainName: 'よみます', group: 1, id: '9' }, // Leer
  { code: 5, name: 'Leer', id: '10' },
  { code: 6, name: '書きます', plainName: 'かきます', group: 1, id: '11' }, // Escribir
  { code: 6, name: 'Escribir', id: '12' },
  { code: 7, name: '話します', plainName: 'はなします', group: 1, id: '13' }, // Hablar
  { code: 7, name: 'Hablar', id: '14' },
  { code: 8, name: '買います', plainName: 'かいます', group: 1, id: '15' }, // Comprar
  { code: 8, name: 'Comprar', id: '16' },
  { code: 9, name: '使います', plainName: 'つかいます', group: 1, id: '17' }, // Usar
  { code: 9, name: 'Usar', id: '18' },
  { code: 10, name: '教えます', plainName: 'おしえます', group: 2, id: '19' }, // Enseñar
  { code: 10, name: 'Enseñar', id: '20' },
  { code: 11, name: 'します', plainName: 'します', group: 3, id: '21' }, // Hacer
  { code: 11, name: 'Hacer', id: '22' },
  { code: 12, name: '来ます', plainName: 'きます', group: 3, id: '23' }, // Venir
  { code: 12, name: 'Venir', id: '24' },
  { code: 13, name: '開けます', plainName: 'あけます', group: 2, id: '25' }, // Abrir
  { code: 13, name: 'Abrir', id: '26' },
  { code: 14, name: '閉めます', plainName: 'しめます', group: 2, id: '27' }, // Cerrar
  { code: 14, name: 'Cerrar', id: '28' },
  { code: 15, name: '出ます', plainName: 'でます', group: 2, id: '29' }, // Salir
  { code: 15, name: 'Salir', id: '30' }
];

const teArray0 = [
  { code: 1, name: '食べて', plainName: 'たべて', group: 1, id: '1' },
  { code: 1, name: 'Comer', id: '2' },
  { code: 2, name: '飲んで', plainName: 'のんで', group: 1, id: '3' },
  { code: 2, name: 'Beber', id: '4' },
  { code: 3, name: '行って', plainName: 'いって', group: 1, id: '5' },
  { code: 3, name: 'Ir', id: '6' },
  { code: 4, name: '見て', plainName: 'みて', group: 2, id: '7' },
  { code: 4, name: 'Mirar', id: '8' },
  { code: 5, name: '読んで', plainName: 'よんで', group: 1, id: '9' },
  { code: 5, name: 'Leer', id: '10' },
  { code: 6, name: '書いて', plainName: 'かいて', group: 1, id: '11' },
  { code: 6, name: 'Escribir', id: '12' },
  { code: 7, name: '話して', plainName: 'はなして', group: 1, id: '13' },
  { code: 7, name: 'Hablar', id: '14' },
  { code: 8, name: '買って', plainName: 'かって', group: 1, id: '15' },
  { code: 8, name: 'Comprar', id: '16' },
  { code: 9, name: '使って', plainName: 'つかって', group: 1, id: '17' },
  { code: 9, name: 'Usar', id: '18' },
  { code: 10, name: '教えて', plainName: 'おしえて', group: 2, id: '19' },
  { code: 10, name: 'Enseñar', id: '20' },
  { code: 11, name: 'して', plainName: 'して', group: 3, id: '21' }, // Hacer
  { code: 11, name: 'Hacer', id: '22' },
  { code: 12, name: '来て', plainName: 'きて', group: 3, id: '23' }, // Venir
  { code: 12, name: 'Venir', id: '24' },
  { code: 13, name: '開けて', plainName: 'あけて', group: 2, id: '25' }, // Abrir
  { code: 13, name: 'Abrir', id: '26' },
  { code: 14, name: '閉めて', plainName: 'しめて', group: 2, id: '27' }, // Cerrar
  { code: 14, name: 'Cerrar', id: '28' },
  { code: 15, name: '出て', plainName: 'でて', group: 2, id: '29' }, // Salir
  { code: 15, name: 'Salir', id: '30' }
];


const unit0 = {
  base: baseArray0,
  masu: masuArray0,
  te: teArray0
}

const baseArray17 = [
  { code: 1, name: '覚える', plainName: 'おぼえる', group: 2, id: '1' },
  { code: 1, name: 'Memorizar', id: '2' },
  { code: 2, name: '忘れる', plainName: 'わすれる', group: 2, id: '3' },
  { code: 2, name: 'Olvidar', id: '4' },
  { code: 3, name: 'なくす', plainName: 'なくす', group: 1, id: '5' },
  { code: 3, name: 'Perder', id: '6' },
  { code: 4, name: '出す', plainName: 'だす', group: 1, id: '7' },
  { code: 4, name: 'Entregar', id: '8' },
  { code: 5, name: '払う', plainName: 'はらう', group: 1, id: '9' },
  { code: 5, name: 'Pagar', id: '10' },
  { code: 6, name: '返す', plainName: 'かえす', group: 1, id: '11' },
  { code: 6, name: 'Devolver', id: '12' },
  { code: 7, name: '出かける', plainName: 'でかける', group: 2, id: '13' },
  { code: 7, name: 'Salir', id: '14' },
  { code: 8, name: '脱ぐ', plainName: 'ぬぐ', group: 1, id: '15' },
  { code: 8, name: 'Quitarse (ropa)', id: '16' },
  { code: 9, name: '持って行く', plainName: 'もっていく', group: 1, id: '17' },
  { code: 9, name: 'Llevar (algo)', id: '18' },
  { code: 10, name: '持って来る', plainName: 'もってくる', group: 3, id: '19' },
  { code: 10, name: 'Traer (algo)', id: '20' },
  { code: 11, name: '心配する', plainName: 'しんぱいする', group: 3, id: '21' },
  { code: 11, name: 'Preocuparse', id: '22' },
  { code: 12, name: '残業する', plainName: 'ざんぎょうする', group: 3, id: '23' },
  { code: 12, name: 'Hacer horas extras', id: '24' },
  { code: 13, name: '出張する', plainName: 'しゅっちょうする', group: 3, id: '25' },
  { code: 13, name: 'Viajar por trabajo', id: '26' }
]

const masuArray17 = [
  { code: 1, name: '覚えます', plainName: 'おぼえます', group: 2, id: '1' },
  { code: 1, name: 'Memorizar', id: '2' },
  { code: 2, name: '忘れます', plainName: 'わすれます', group: 2, id: '3' },
  { code: 2, name: 'Olvidar', id: '4' },
  { code: 3, name: 'なくします', plainName: 'なくします', group: 1, id: '5' },
  { code: 3, name: 'Perder', id: '6' },
  { code: 4, name: '出します', plainName: 'だします', group: 1, id: '7' },
  { code: 4, name: 'Entregar', id: '8' },
  { code: 5, name: '払います', plainName: 'はらいます', group: 1, id: '9' },
  { code: 5, name: 'Pagar', id: '10' },
  { code: 6, name: '返します', plainName: 'かえします', group: 1, id: '11' },
  { code: 6, name: 'Devolver', id: '12' },
  { code: 7, name: '出かけます', plainName: 'でかけます', group: 2, id: '13' },
  { code: 7, name: 'Salir', id: '14' },
  { code: 8, name: '脱ぎます', plainName: 'ぬぎます', group: 1, id: '15' },
  { code: 8, name: 'Quitarse (ropa)', id: '16' },
  { code: 9, name: '持って行きます', plainName: 'もっていきます', group: 1, id: '17' },
  { code: 9, name: 'Llevar (algo)', id: '18' },
  { code: 10, name: '持って来ます', plainName: 'もってきます', group: 3, id: '19' },
  { code: 10, name: 'Traer (algo)', id: '20' },
  { code: 11, name: '心配します', plainName: 'しんぱいします', group: 3, id: '21' },
  { code: 11, name: 'Preocuparse', id: '22' },
  { code: 12, name: '残業します', plainName: 'ざんぎょうします', group: 3, id: '23' },
  { code: 12, name: 'Hacer horas extras', id: '24' },
  { code: 13, name: '出張します', plainName: 'しゅっちょうします', group: 3, id: '25' },
  { code: 13, name: 'Viajar por trabajo', id: '26' }
]

const teArray17 = [
  { code: 1, name: '覚えて', plainName: 'おぼえて', group: 2, id: '1' },
  { code: 1, name: 'Memorizar', id: '2' },
  { code: 2, name: '忘れて', plainName: 'わすれて', group: 2, id: '3' },
  { code: 2, name: 'Olvidar', id: '4' },
  { code: 3, name: 'なくして', plainName: 'なくして', group: 1, id: '5' },
  { code: 3, name: 'Perder', id: '6' },
  { code: 4, name: '出して', plainName: 'だして', group: 1, id: '7' },
  { code: 4, name: 'Entregar', id: '8' },
  { code: 5, name: '払って', plainName: 'はらって', group: 1, id: '9' },
  { code: 5, name: 'Pagar', id: '10' },
  { code: 6, name: '返して', plainName: 'かえして', group: 1, id: '11' },
  { code: 6, name: 'Devolver', id: '12' },
  { code: 7, name: '出かけて', plainName: 'でかけて', group: 2, id: '13' },
  { code: 7, name: 'Salir', id: '14' },
  { code: 8, name: '脱いで', plainName: 'ぬいで', group: 1, id: '15' },
  { code: 8, name: 'Quitarse (ropa)', id: '16' },
  { code: 9, name: '持って行って', plainName: 'もっていって', group: 1, id: '17' },
  { code: 9, name: 'Llevar (algo)', id: '18' },
  { code: 10, name: '持って来て', plainName: 'もってきて', group: 3, id: '19' },
  { code: 10, name: 'Traer (algo)', id: '20' },
  { code: 11, name: '心配して', plainName: 'しんぱいして', group: 3, id: '21' },
  { code: 11, name: 'Preocuparse', id: '22' },
  { code: 12, name: '残業して', plainName: 'ざんぎょうして', group: 3, id: '23' },
  { code: 12, name: 'Hacer horas extras', id: '24' },
  { code: 13, name: '出張して', plainName: 'しゅっちょうして', group: 3, id: '25' },
  { code: 13, name: 'Viajar por trabajo', id: '26' }
];


const unit17 = {
  base: baseArray17,
  masu: masuArray17,
  te: teArray17
}

const cardArray = {
  0: unit0,
  17: unit17
}

const rightCanvas = new bootstrap.Offcanvas('#offcanvasRight')
const leftCanvas = new bootstrap.Offcanvas('#offcanvasLeft')

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

const gameSection = document.getElementById('gameSection');
const unit17Lesson = document.getElementById('unit17Lesson');
const unit18Lesson = document.getElementById('unit18Lesson');
const unit19Lesson = document.getElementById('unit19Lesson');
const gameStatus = document.getElementById('gameStatus');
const resetButton = document.getElementById('resetButton');
let currentSet = 'base'; // Establecer el conjunto inicial
let currentUnit = 0; // Establecer la unidad inicial

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
  const shuffledCards = shuffle([...cardArray[currentUnit][currentSet]]);

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

      if (card.group) {
        const plainNameElement = document.createElement('div');
        plainNameElement.classList.add('group');
        plainNameElement.innerText = card.group; // Display Hiragana name
        cardFront.appendChild(plainNameElement);
      }

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
  const cardFlipped = cardArray[currentUnit][currentSet].find((card) => card.id === cardId)

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
  const cards = document.querySelectorAll('.card');
  const cardsMatched = [];
  cards.forEach((card) => {
    if (card.dataset.id === firstCard.id || card.dataset.id === secondCard.id) {
      cardsMatched.push(card);
    }
  });

  if (cardsMatched.length !== 0) {
    const randomColor = getUniqueColor();
    cardsMatched.forEach((card) => {
      let card_front = card.querySelector('.card-front')
      card_front.classList.add('card-match');
      card_front.style.backgroundColor = randomColor;
      card_front.style.borderColor = randomColor;
    })
  } 
 
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
  }, 1500); // Adjust delay as needed
}

// Reset board variables
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Check if all pairs have been found
function checkWinCondition() {
  const gameBoard = document.getElementById('gameBoard');
  const totalCards = cardArray[currentUnit][currentSet].length;
  const flippedCards = gameBoard.querySelectorAll('.flipped').length;

  if (flippedCards === totalCards) {
    gameStatus.innerHTML = '¡Felicidades! ¡Has emparejado todas las cartas!<br>おめでとうございます！すべてのカードをマッチさせました！';
  }
}

function updateCardSet(form) {
  currentSet = form; // Cambiar el conjunto actual
  initGame();
}

function updateUnit(unit_num) {
  currentUnit = unit_num;
  initGame();
}

function getUniqueColor() {
  if (usedColors.size >= colors.length) {
    return getRandomColor();
  }

  let color;
  do {
    color = colors[Math.floor(Math.random() * colors.length)];
  } while (usedColors.has(color));

  usedColors.add(color);
  return color;
}

function getRandomColor() {
  const min = 0;
  const max = 150; // Limit the maximum value to avoid bright colors
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  const g = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;
  return `rgb(${r}, ${g}, ${b})`;
}

// Agregar eventos a los botones
document.getElementById('baseFormBtn').addEventListener('click', () => {
  updateCardSet('base')
  rightCanvas.hide();
});

document.getElementById('masuFormBtn').addEventListener('click', () => {
  updateCardSet('masu')
  rightCanvas.hide();
});

document.getElementById('teFormBtn').addEventListener('click', () => {
  updateCardSet('te')
  rightCanvas.hide();
});

// Event listener for Reset button
resetButton.addEventListener('click', () => {
  initGame();
  rightCanvas.hide();
});

document.getElementById('unit0').addEventListener('click', () => {
  updateUnit(0);
  leftCanvas.hide();
  gameSection.style.display = 'block'
});

document.getElementById('unit17').addEventListener('click', () => {
  updateUnit(17);
  leftCanvas.hide();
  gameSection.style.display = 'block'
  hideLessons();
});

document.getElementById('unit17LessonBtn').addEventListener('click', () => {
  updateUnit(17);
  leftCanvas.hide();
  gameSection.style.display = 'none'
  hideLessons();
  unit17Lesson.style.display = 'block';
});

document.getElementById('unit18LessonBtn').addEventListener('click', () => {
  //updateUnit(18);
  leftCanvas.hide();
  gameSection.style.display = 'none'
  hideLessons();
  unit18Lesson.style.display = 'block';
});

document.getElementById('unit19LessonBtn').addEventListener('click', () => {
  //updateUnit(19);
  leftCanvas.hide();
  gameSection.style.display = 'none'
  hideLessons();
  unit19Lesson.style.display = 'block';
});

// Function to hide elements by class name
function hideLessons() {
  const elements = document.querySelectorAll(`.lessonSection`);
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

hideLessons();

// Initialize the game on page load
initGame();


