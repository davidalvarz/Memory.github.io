// Código JavaScript para añadir interactividad
const cards = [
    { id: 1, icon: 'A' },
    { id: 2, icon: 'B' },
    { id: 3, icon: 'C' },
    { id: 4, icon: 'D' },
    { id: 5, icon: 'E' },
    { id: 6, icon: 'F' },
    { id: 7, icon: 'G' },
    { id: 8, icon: 'H' },
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
