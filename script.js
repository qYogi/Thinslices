const xButton = document.getElementById('X');
const oButton = document.getElementById('O');

const menu = document.querySelector('.menu')
const newGame = document.getElementById('CPU');
const newGame2 = document.getElementById('Player');

const gameContainer = document.querySelector('.gameContainer');
let currentPlayer = 1;
const oSVG =`<svg class="o" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>`
const xSVG =`<svg class="x" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>`

const restartButton = document.getElementById('restart');

xButton.addEventListener('click', () => {
    currentPlayer = 1;
    xButton.querySelector('svg path').setAttribute('fill', '#F2B137');
    oButton.querySelector('svg path').setAttribute('fill', '#1A2A33');

});

oButton.addEventListener('click', () => {
    currentPlayer = 1;
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

let WIN;

function checkWinner (board){
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], //linii
        [0,3,6], [1,4,7], [2,5,8], //coloane
        [0,4,8], [2,4,6]           //diagonale
    ]

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) {
            WIN = board[a];
            return pattern; //return winner
        }
    }
    if (board.every(cell => cell !== 0)) {
        return 0; // Draw
    }

    return null;

}

let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let gameOver = false;

let xScore = 0;
let oScore = 0;
let drawScore = 0;

document.getElementById('scoreBox1').querySelector('h5').textContent = xScore;
document.getElementById('scoreBox2').querySelector('h5').textContent = drawScore;
document.getElementById('scoreBox3').querySelector('h5').textContent = oScore;

function updateScores(xScore, drawScore, oScore){
    document.getElementById('scoreBox1').querySelector('h5').textContent = xScore;
    document.getElementById('scoreBox2').querySelector('h5').textContent = drawScore;
    document.getElementById('scoreBox3').querySelector('h5').textContent = oScore;
}

const buttons = document.querySelectorAll("#gameBoard button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameOver) return; // Do nothing if the game is over

        if (gameOver || button.innerHTML !== "") return;

        const buttonId = button.id;
        const row = parseInt(buttonId[0]) - 1; //selectam randul ( ex pt 1_1 o sa fie linia 0 )
        const column = parseInt(buttonId[2]) - 1; //same logic doar ca selectam al 3-lea caracter
        const index = row * 3 + column;

        board[index] = currentPlayer;
        button.innerHTML = currentPlayer === 1 ? xSVG : oSVG;

        const winner = checkWinner(board);
        if (winner) {
            gameOver = true;

            if(WIN ===1){
                winner.forEach(i => {
                    buttons[i].classList.add('winning-pattern');
                    buttons[i].querySelector('svg path').setAttribute('fill', '#1F3641')
                });
                xScore++
            }else if(WIN ===2){
                winner.forEach(i => {
                    buttons[i].classList.add('winning-pattern2');
                    buttons[i].querySelector('svg path').setAttribute('fill', '#1F3641')
                });
                oScore++
            }
        } else if (board.every(cell => cell !== 0)) {
            gameOver = true;
            drawScore++;
        }
        updateScores(xScore, drawScore, oScore);


        currentPlayer = currentPlayer === 1 ? 2 : 1;


    });
});

function nextGame(){
    buttons.forEach(button =>{
        button.innerHTML = '';
        button.classList.remove('winning-pattern');
        button.classList.remove('winning-pattern2');
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        gameOver = false;
        currentPlayer = 1;
    });
}

restartButton.addEventListener('click', () => {
    nextGame()
})




