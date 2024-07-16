const gameContainer = document.querySelector('.game-container');
const cardGrid = document.querySelector('.card-grid');

// Emojis para las cartas
const emojis = [
    '😊',
    '👻',
    '🎉',
    '🤩',
    '🚀',
    '👽',
    '💻',
    '📚',
    '🎊',
    '👾',
    '💸',
    '🔥'
];

// Función para crear cartas
function createCard(emoji) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<span>${emoji}</span>`;
    return card;
}

// Función para crear pares de cartas
function createPairs(emojis) {
    const pairs = [];
    for (let i = 0; i < emojis.length; i++) {
        pairs.push(createCard(emojis[i]));
        pairs.push(createCard(emojis[i]));
    }
    return pairs;
}

// Función para mezclar cartas
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

// Función para mostrar cartas
function showCards(cards) {
    cardGrid.innerHTML = '';
    cards.forEach((card) => {
        cardGrid.appendChild(card);
    });
}

// Función para voltear carta
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Función para verificar si hay un par
function checkPair(card1, card2) {
    if (card1.children[0].textContent === card2.children[0].textContent) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        return true;
    } else {
        setTimeout(() => {
            flipCard(card1);
            flipCard(card2);
        }, 1000);
        return false;
    }
}

// Inicializar juego
let cards = createPairs(emojis);
cards = shuffleCards(cards);
showCards(cards);

// Eventos para cartas
cardGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('card')) {
        const card = e.target;
        flipCard(card);
        const flippedCards = document.querySelectorAll('.card.flipped');
        if (flippedCards.length === 2) {
            const card1 = flippedCards[0];
            const card2 = flippedCards[1];
            if (checkPair(card1, card2)) {
                console.log('¡Encontraste un par!');
            }
        }
    }
});
