// Código JavaScript para añadir interactividad
const cards = [
    { id: 1, icon: '🌸' },
    { id: 2, icon: '🌽' },
    { id: 3, icon: '🚙' },
    { id: 4, icon: '❄️' },
    { id: 5, icon: '❄️' },
    { id: 6, icon: '🚙' },
    { id: 7, icon: '🌽' },
    { id: 8, icon: '🌸' },
];

const game = document.querySelector('.memory-game');

cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = card.icon;

    const back = document.createElement('div');
    back.classList.add('back');

    cardElement.appendChild(front);
    cardElement.appendChild(back);
    game.appendChild(cardElement);
});
