let cellIndex;
let gameType;

/* -------gameboard------ */
const gameBoard = (() => {
  const displayData = () => {
    for (i=0; i<cells.length; i++) {
      const dataCell = document.getElementById(`${i}`);
      dataCell.textContent = gameBoard.cells[i];
    }
  }
  let cells = ['','','','','','','','',''];
  return {cells, displayData};
})();

/* -----------players----------- */

const player = (name, mark) => {
  const selection = () => {
    gameBoard.cells[cellIndex] = mark;
  };
  return {name, mark, selection};
}

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');
const player3 = player('Computer', 'O')

/* ---------game-------- */
const gameContr = (() => {
  let gameOver = 0;
  let gameResult = '';
  let playerTurn = 1;
  let cellFilled;
  const boardCells = document.querySelectorAll('.cell');

  /* play a move depending on game mode */
  const playMove = () => {
    if (gameType == 1) {
      event.target.textContent == '' ? cellFilled = 0 : cellFilled = 1;
      cellIndex = event.target.id;
      selectCellModeOne();
      gameBoard.displayData();
    } else {
      event.target.textContent == '' ? cellFilled = 0 : cellFilled = 1;
      cellIndex = event.target.id;
      selectCellModeTwo();
      gameBoard.displayData();
    }
  }

  /* change cell content if empty & check result - for mode 1 */
  const selectCellModeOne = () => {
    if (playerTurn == 1 && cellFilled == 0 && gameOver == 0) {
      player1.selection();
      result();
      playerTurn = 2;
    } else if (playerTurn == 2 && cellFilled == 0 && gameOver == 0) {
      player2.selection();
      result();
      playerTurn = 1;
    }
  }

  /* for mode 2 - computer makes a random play right after you */
  const selectCellModeTwo = () => {
    if (cellFilled == 0 && gameOver == 0) {
      let emptySpaces = 0;
      player1.selection();
      for (j = 0; j < 9; j++) {
        gameBoard.cells[j] == '' ? emptySpaces += 1 : emptySpaces += 0;
      }
      while ((gameBoard.cells[cellIndex] != '') && (emptySpaces != 0)) {
        cellIndex = Math.min(Math.max(((Math.random()*10).toFixed(0)), 1), 8);
      }
      result();
      if (emptySpaces != 0 && gameOver == 0) {
        player3.selection();
      }
      result();
    }
  }
  
  /* result logic */
  const result = () => {
    if (gameBoard.cells[0] == gameBoard.cells[1] && gameBoard.cells[1] == gameBoard.cells[2] && gameBoard.cells[1] !== '') {
      if (gameBoard.cells[0] == 'X') {
        player1.mark == 'X' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      } else {
        player1.mark == 'O' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      }
    } else if (gameBoard.cells[3] == gameBoard.cells[4] && gameBoard.cells[4] == gameBoard.cells[5] && gameBoard.cells[4] !== '') {
      if (gameBoard.cells[3] == 'X') {
        player1.mark == 'X' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      } else {
        player1.mark == 'O' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      }
    } else if (gameBoard.cells[6] == gameBoard.cells[7] && gameBoard.cells[7] == gameBoard.cells[8] && gameBoard.cells[7] !== '') {
      if (gameBoard.cells[6] == 'X') {
        player1.mark == 'X' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      } else {
        player1.mark == 'O' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      }
    } else if (gameBoard.cells[0] == gameBoard.cells[3] && gameBoard.cells[3] == gameBoard.cells[6] && gameBoard.cells[3] !== '') {
      if (gameBoard.cells[0] == 'X') {
        player1.mark == 'X' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      } else {
        player1.mark == 'O' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      }
    } else if (gameBoard.cells[1] == gameBoard.cells[4] && gameBoard.cells[4] == gameBoard.cells[7] && gameBoard.cells[4] !== '') {
      if (gameBoard.cells[1] == 'X') {
        player1.mark == 'X' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      } else {
        player1.mark == 'O' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      }
    } else if (gameBoard.cells[2] == gameBoard.cells[5] && gameBoard.cells[5] == gameBoard.cells[8] && gameBoard.cells[5] !== '') {
      if (gameBoard.cells[2] == 'X') {
        player1.mark == 'X' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      } else {
        player1.mark == 'O' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      }
    } else if (gameBoard.cells[0] == gameBoard.cells[4] && gameBoard.cells[4] == gameBoard.cells[8] && gameBoard.cells[4] !== '') {
      if (gameBoard.cells[0] == 'X') {
        player1.mark == 'X' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      } else {
        player1.mark == 'O' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      }
    } else if (gameBoard.cells[2] == gameBoard.cells[4] && gameBoard.cells[4] == gameBoard.cells[6] && gameBoard.cells[4] !== '') {
      if (gameBoard.cells[2] == 'X') {
        player1.mark == 'X' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      } else {
        player1.mark == 'O' ? gameResult = `${player1.name} wins!` : 
        gameResult = `${player2.name} wins!`;
        gameOver = 1;
        displayResult();
      }
    } else {
      if (gameBoard.cells[0] !== '' && gameBoard.cells[2] !== '' && gameBoard.cells[2] !== '' &&
      gameBoard.cells[3] !== '' && gameBoard.cells[4] !== '' && gameBoard.cells[5] !== '' &&
      gameBoard.cells[6] !== '' && gameBoard.cells[7] !== '' && gameBoard.cells[8] !== '') {
        gameResult = "Tie!";
        gameOver = 1;
        displayResult();
      }
    }
  }

  /* displaying result */
  const displayResult = () => {
    const resultText = document.querySelector('.result-text');
    resultText.textContent = gameResult;
  }

  /* restart */
  const restartGame = () => {
    gameResult = '';
    gameOver = 0;
    playerTurn = 1;
    gameBoard.cells = ['','','','','','','','',''];
    gameBoard.displayData();
    displayResult();
  }

  /* popup for game mode selection */
  const gameModePopupShow = () => {
    document.querySelector('.popup').style.display = 'flex';
  }
  const gameModePopupHide = () => {
    document.querySelector('.popup').style.display = 'none';
  }

  /* set game mode */
  const setGameModeOne = () => {
    gameType = 1;
  }
  const setGameModeTwo = () => {
    gameType = 2;
  }

  return {restartGame, gameModePopupShow, gameModePopupHide, 
          setGameModeOne, setGameModeTwo, playMove};
})();

gameContr.gameModePopupShow();