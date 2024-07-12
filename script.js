const xButton = document.getElementById('X');
const oButton = document.getElementById('O');

const menu = document.querySelector('.menu')
const newGame = document.getElementById('CPU');
const newGame2 = document.getElementById('Player');

const gameContainer = document.querySelector('.gameContainer');

let currentPlayer = null;

xButton.addEventListener('click', () => {
    currentPlayer = 'X';
    xButton.querySelector('svg path').setAttribute('fill', '#F2B137');
    oButton.querySelector('svg path').setAttribute('fill', '#1A2A33');

});

oButton.addEventListener('click', () => {
    currentPlayer = 'O';
    oButton.querySelector('svg path').setAttribute('fill', '#F2B137');
    xButton.querySelector('svg path').setAttribute('fill', '#A8BFC9');
});

newGame.addEventListener('click', () => {
    menu.style.display = 'none';
    gameContainer.style.display = 'flex';
})
newGame2.addEventListener('click', () => {
    menu.style.display = 'none';
    gameContainer.style.display = 'flex';
})

//added a comment just to try
//from webstorm

