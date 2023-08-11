const playerList = document.querySelector('#players');
const form = document.querySelector('#form');
const input = document.querySelector('#nameinput');
const submitButton = document.querySelector('#addplayerbtn');
const scoreBoard = document.querySelector('#scoreboard')
const players = [];
let gameOver = false;
let theWinner = players[0];
const header = document.querySelector('header');
//const restartButton = document.querySelector('#restartButton')



function showGameOver() {
    const gameOverText = document.createElement('h2')
    gameOverText.innerHTML = `${theWinner.name} IS THE WINNER`
    gameOverText.classList.add('gameOverText')
    header.append(gameOverText)

}




submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (players.length < 6 && form.elements.playername.value) {
        new Player(form.elements.playername.value);
        players[players.length - 1].CreatePlayerCard();
        form.elements.playername.value = '';
        console.log(players);
    }
})

// restartButton.addEventListener('click', function () {
//     location.reload();
//     gameOver = false;
// })

function updateScore(arr) {
    let winningPlayer = arr[0];
    let leadChange = true;
    for (let player of arr) {
        if (player.level > winningPlayer.level) {
            !leadChange;
            winningPlayer = player;
        }
        if (player.level >= 10) {
            gameOver = true;
            theWinner = winningPlayer;
        }
    }

    winningPlayer.isWinning = true;
    if (leadChange) {
        winningPlayer.playerCard.classList.add('isWinning')
    }

    for (let player of arr) {
        if (player.level < winningPlayer.level) {
            player.playerCard.classList.remove('isWinning');

        }

    }

    if (gameOver === true) {
        showGameOver();
    }



}

class Player {
    constructor(name) {
        this.name = name;
        this.strength = 0;
        this.level = 0;
        players.push(this);
        this.playerNameHeader = document.createElement('h3');
        this.columnsDiv = document.createElement('div');
        this.strengthColumn = document.createElement('div')
        this.strengthLabel = document.createTextNode("Strength: ");
        this.strengthButtonsDiv = document.createElement('div');
        this.strengthMinusButton = document.createElement('button');
        this.strengthPlusButton = document.createElement('button');
        this.levelColumn = document.createElement('div')
        this.levelLabel = document.createTextNode("Strength: ");
        this.levelButtonsDiv = document.createElement('div');
        this.levelMinusButton = document.createElement('button');
        this.levelPlusButton = document.createElement('button');
        this.id = Math.floor(Math.random() * Date.now()).toString(16)
        this.isWinning = false;
        console.log(this.id)


    }

    colorChange() {
        if (isWinning = false) {
            this.playerCard.classList.remove('isWinning')
        }
    }

    CreatePlayerCard() {
        this.playerCard = document.createElement('div');
        this.playerCard.classList.add('playercard')


        this.playerNameHeader.textContent = this.name;
        this.playerCard.appendChild(this.playerNameHeader);
        this.playerNameHeader.classList.add("nameHeader")


        this.columnsDiv.classList.add('columns');
        this.playerCard.appendChild(this.columnsDiv);

        //Create and add strength column

        this.strengthColumn.classList.add('column', 'column-str');
        this.columnsDiv.appendChild(this.strengthColumn);


        this.strengthColumn.appendChild(this.strengthLabel);

        this.strengthSpan = document.createElement('span');
        this.strengthSpan.textContent = this.strength;
        this.strengthColumn.appendChild(this.strengthSpan);


        this.strengthButtonsDiv.classList.add('buttons');
        this.strengthColumn.appendChild(this.strengthButtonsDiv);


        this.strengthMinusButton.classList.add('scorebutton');
        this.strengthMinusButton.textContent = '-';
        this.strengthButtonsDiv.appendChild(this.strengthMinusButton);



        this.strengthPlusButton.classList.add('scorebutton');
        this.strengthPlusButton.textContent = '+';
        this.strengthButtonsDiv.appendChild(this.strengthPlusButton);


        //Create and add level column
        this.levelColumn = document.createElement('div')
        this.levelColumn.classList.add('column', 'column-str');
        this.columnsDiv.appendChild(this.levelColumn);

        this.levelLabel = document.createTextNode("Level: ");
        this.levelColumn.appendChild(this.levelLabel);

        this.levelSpan = document.createElement('span');
        this.levelSpan.textContent = this.level;
        this.levelColumn.appendChild(this.levelSpan);

        this.levelButtonsDiv = document.createElement('div');
        this.levelButtonsDiv.classList.add('buttons');
        this.levelColumn.appendChild(this.levelButtonsDiv);

        this.levelMinusButton = document.createElement('button');
        this.levelMinusButton.classList.add('scorebutton');
        this.levelMinusButton.textContent = '-';
        this.levelButtonsDiv.appendChild(this.levelMinusButton);

        this.levelPlusButton = document.createElement('button');
        this.levelPlusButton.classList.add('scorebutton');
        this.levelPlusButton.textContent = '+';
        this.levelButtonsDiv.appendChild(this.levelPlusButton);

        //Append player card to scoreboard
        scoreBoard.appendChild(this.playerCard);
        var thisPlayer = this;
        //Add functionality to buttons
        this.strengthPlusButton.addEventListener('click', function () {
            if (!gameOver) {
                thisPlayer.strength++
                thisPlayer.strengthSpan.textContent = thisPlayer.strength;
                console.log(thisPlayer);
                updateScore(players);
            }
        })
        this.strengthMinusButton.addEventListener('click', function () {
            if (!gameOver && thisPlayer.strength > 0) {
                thisPlayer.strength--
                thisPlayer.strengthSpan.textContent = thisPlayer.strength;
                console.log(thisPlayer);
                updateScore(players);
            }
        })
        this.levelPlusButton.addEventListener('click', function () {
            if (!gameOver) {
                thisPlayer.level++
                thisPlayer.levelSpan.textContent = thisPlayer.level;
                console.log(thisPlayer);
                updateScore(players);
            }
        })
        this.levelMinusButton.addEventListener('click', function () {
            if (!gameOver && thisPlayer.level > 0) {
                thisPlayer.level--
                thisPlayer.levelSpan.textContent = thisPlayer.level;
                console.log(thisPlayer)
                updateScore(players);
            }
        })




    }
}




