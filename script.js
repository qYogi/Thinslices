// DOM Elements
const xButton = document.getElementById('X');
const oButton = document.getElementById('O');
const menu = document.querySelector('.menu');
const newGame = document.getElementById('CPU');
const newGame2 = document.getElementById('Player');
const gameContainer = document.querySelector('.gameContainer');
const restartButton = document.getElementById('restart');
const nextRoundButton = document.getElementById('next-round');
const quitButton = document.getElementById('quit-btn');
const playerTurn = document.getElementById('playerTurn');
const winnerText = document.querySelector('#modal-content p');
const svgContainer = document.querySelector('.winner-container svg');
const winnerTextH2 = document.querySelector('#modal-content h2');
const buttons = document.querySelectorAll("#gameBoard button");
const modalID = document.getElementById('modal');

// SVGs
const oSVG = `<svg class="o" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>`;
const xSVG = `<svg class="x" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>`;
const turnSvgO = '<svg width="20" height="20" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#A8BFC9"/></svg>';
const turnSvgX = '<svg width="20" height="20" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#A8BFC9" fill-rule="evenodd"/></svg>';
const newSvg = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>';
const newSvgX = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>'

// Variables
let initialPlayer;
let currentPlayer;
let WIN;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameOver = false;
let xScore = 0;
let oScore = 0;
let drawScore = 0;

// Initialization
window.onload = function () {
    currentPlayer = 1;
    xButton.click();
    setCurrentPlayer();
};

// Event Listeners
xButton.addEventListener('click', () => {
    currentPlayer = 1;
    initialPlayer = 1;
    xButton.querySelector('svg path').setAttribute('fill', '#1A2A33');
    oButton.querySelector('svg path').setAttribute('fill', '#A8BFC9');
    xButton.style.backgroundColor = '#A8BFC9';
    oButton.style.backgroundColor = '#1A2A33';
    setCurrentPlayer();
});

oButton.addEventListener('click', () => {
    currentPlayer = 2;
    initialPlayer = 2;
    oButton.querySelector('svg path').setAttribute('fill', '#1A2A33');
    xButton.querySelector('svg path').setAttribute('fill', '#A8BFC9');
    oButton.style.backgroundColor = '#A8BFC9';
    xButton.style.backgroundColor = '#1A2A33';
    setCurrentPlayer();
});

newGame.addEventListener('click', () => {
    menu.style.display = 'none';
    gameContainer.style.display = 'flex';
});

newGame2.addEventListener('click', () => {
    menu.style.display = 'none';
    gameContainer.style.display = 'flex';
});

restartButton.addEventListener('click', () => {
    nextGame();
    currentPlayer = initialPlayer;
    setCurrentPlayer();
});

quitButton.addEventListener('click', () => {
    quitGame();
    modalID.style.display = 'none';
    updateScores(0, 0, 0);
});

nextRoundButton.addEventListener('click', () => {
    modalID.style.display = 'none';
    nextGame();
    setCurrentPlayer();
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameOver || button.innerHTML !== "") return;

        restartButton.disabled = false;

        const buttonId = button.id;
        const row = parseInt(buttonId[0]) - 1;
        const column = parseInt(buttonId[2]) - 1;
        const index = row * 3 + column;

        board[index] = currentPlayer;
        button.innerHTML = currentPlayer === 1 ? xSVG : oSVG;

        const winner = checkWinner(board);
        if (winner) {
            restartButton.disabled = true;
            gameOver = true;
            handleWinner(winner);
        } else if (board.every(cell => cell !== 0)) {
            handleDraw();
        }

        currentPlayer = currentPlayer === 1 ? 2 : 1;
        setCurrentPlayer();
    });
});

// Functions
function setCurrentPlayer() {
    playerTurn.innerHTML = currentPlayer === 1 ? turnSvgX + '<h6>TURN</h6>' : turnSvgO + '<h6>TURN</h6>';
}

function checkWinner(board) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) {
            WIN = board[a];
            return pattern; // Return winner pattern
        }
    }
    return board.every(cell => cell !== 0) ? 0 : null; // Return 0 for draw, null for ongoing game
}

function handleWinner(winner) {
    winner.forEach(i => {
        buttons[i].classList.add(WIN === 1 ? 'winning-pattern' : 'winning-pattern2');
        buttons[i].querySelector('svg path').setAttribute('fill', '#1F3641');
    });
    if (WIN === 1) {
        xScore++;
        modalID.style.display = 'flex';
        winnerTextH2.style.color = '#31C3BD';
        winnerText.textContent = 'Player X WINS!';
        svgContainer.innerHTML = newSvgX;
    } else {
        oScore++;
        modalID.style.display = 'flex';
        winnerTextH2.style.color = '#F2B137';
        winnerText.textContent = 'Player O WINS!';
        svgContainer.innerHTML = newSvg;
    }
    updateScores(xScore, drawScore, oScore);
}

function handleDraw() {
    gameOver = true;
    drawScore++;
    modalID.style.display = 'flex';
    winnerTextH2.textContent = 'NO ONE WINS POINTS';
    winnerText.textContent = 'Ha, losers';
    winnerTextH2.style.color = '#A8BFC9';
    svgContainer.outerHTML = '';
    updateScores(xScore, drawScore, oScore);
}

function nextGame() {
    buttons.forEach(button => {
        button.innerHTML = '';
        button.classList.remove('winning-pattern', 'winning-pattern2');
    });
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gameOver = false;
    currentPlayer = initialPlayer;
    setCurrentPlayer();
}

function quitGame() {
    nextGame();
    xScore = 0;
    oScore = 0;
    drawScore = 0;
}

function updateScores(xScore, drawScore, oScore) {
    document.getElementById('scoreBox1').querySelector('h5').textContent = xScore;
    document.getElementById('scoreBox2').querySelector('h5').textContent = drawScore;
    document.getElementById('scoreBox3').querySelector('h5').textContent = oScore;
}

newGame.disabled = true;
