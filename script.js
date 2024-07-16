// Código JavaScript para añadir interactividad
const cards = [
    { id: 1, 🌸: 'A' },
    { id: 2, 🌽: 'B' },
    { id: 3, 🚙: 'C' },
    { id: 4, ❄️: 'D' },
    { id: 5, ❄️: 'E' },
    { id: 6, 🚙: 'F' },
    { id: 7, 🌽: 'G' },
    { id: 8, 🌸: 'H' },
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
