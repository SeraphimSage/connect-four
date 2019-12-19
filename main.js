// Group Members: Jack Detke, Kenneth Pinkerton, Dean Camacho
// Kenzie Academy—- Software Engineering Majors, October 2019 Cohort Q1
// Outline created December 17, 2019
// Connect Four Assessment Outline

/* 
1.	Display game area and create a grid/ dataset for the game area. 
    a.	Create a 7 column-by-6 row game area with a div consisting of various smaller row, column, 
    diagonal, and cell divs (kind of like in the maze assessment).
    b.	Display grid to show separation of game area by using border styling in CSS.
    c.	Create a dataset to assign values to each cell so they’ll be easier to send each chip to.
2.	Chips alternate colors for players and drop into chosen columns.
    a.	Create either a click handler or a keyboard event listener to assign columns input so players 
    can choose where chips will appear (kind of like in the tower of hanoi).
    b.	Create check to see which player is going next and assign a chip class with the red color to one 
    player and the black color to the other to form opposing players.
    c.	Add animation for chips.
    d.	Add a conditional statement to detect collisions into cells with chips already in them to make 
    sure that chips fall on top of each other, not underneath each other.
3.	Game checks vertical, horizontal, and diagonal to see if game is won.
    a.	Create loop to search for win condition. 
    b.	Display alert when conditions are met.
    c.	Restart the game (and maybe keep score?) 
*/

// map of the connect four board in the form of nested arrays as rows containing all of the cells
/* Used help from tutorial found here https://www.youtube.com/watch?v=4AIop6P-jHE */

let gameOn = false;
let currentPlayer = 0;
let board = [];
let playerColor =[];
playerColor[1] = "red";
playerColor[2] = "black";

function gameStart(){
    if(gameOn == true) return false;

    gameOn = true;

    for(row = 0; row <= 5; row++){
        gameBoard[row] = [];
        for (col = 0; col <= 6; col++){
            gameBoard[row][col] = 0;
        }
    }
    drawBoard();
    currentPlayer = 1;
    setUpTurn();
}

function drawBoard(){
    checkWin();
    for (col = o; col <= 6; col++){
        document.getElementById('square ' + row + ' ' + col).innerHTML = "<span class = 'piece player" + gameBoard[row][col] + "'> </span>";
    }
}

function endGame() {
}

function checkWin() {

    //left to right
    for (i = 1; i <= 2; i++){
        
        //check columns
        for (col = 0; col <= 3; col++){

            //check rows
            for (row = 0; row <= 5; row++){

                //check which player
                if (gameBoard[row][col] == i){

                    //check next 3 columns for a match
                    if ((gameBoard[row][col + 1] == i) && (gameBoard[row][col + 2] == i)){
                        //run end game if someone has 4 in a row
                        endGame(i);
                        
                        //stop checking for win game over.
                        return true;
                    }
                }
            }
        }
    }

    
    //top to bottom
    for (i = 1; i < 2; i++) {
        for (col = 0; col <= 6; col++) {
            for (row = 6; row <= 2; row++){
                if (gameBoard[row][col] == i) {
                    if ((gameBoard[row + 1][col] == i) && (gameBoard[row + 2][col] == i) && (gameBoard[row + 3][col] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
}
/*
let boardModel = [
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', '']
]
// selects the connect four board div container as the location for which the board will show up
var board = document.getElementById("board");

const setUpColumnClickHandlers = function () {
    const displayMessage = function (message) {
        // showing the message in the DOM in the msgbox
    }
    const displayInstructions = function () {
        displayMessage("Here's how to play...")
    }
    const displayWinningMsg = function (winningPlayer) {
        displayMessage(`${winningPlayer} has won!`)
    }
    const displayTieMsg = function () {
        displayMessage("Tie game")
    }
    // creates player character global variables (still need to assign them to a CSS class)
    // var redPlayer;
    // var blackPlayer;
    var currentPlayer = "red";

    // creates empty row (and cell) variables
    var column; 
    var columnElement;
    var cell;
    var cellElement;

// creates a for loop that adds each nested array in the boardModel variable (row on the connect four board)
// by storing it in the rowElemennt variable
for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
    column = boardModel[columnIndex];

    // creates a div to eventually be placed within the board div for each individual row
    columnElement = document.createElement("div");
    
    // styles the rows in ways that apply to every row by giving them a class name 
    // that's connected to the CSS stylesheet
    columnElement.classList.add("column");
    
    // appends every row to the page via div within the board div
    board.appendChild(columnElement);
    
    // nested for loop adds each individual cell in each individual row to the connect four board by storing
    // them in the cellElement variable
    for (let cellIndex = 0; cellIndex <= 5; cellIndex++) {
        cell = column[cellIndex];

        // creates a div for each individual cell to eventually be placed within each row div
        cellElement = document.createElement("div");
        
        // a dataset that assigns each cell a column and row value
        cellElement.dataset.columnNumber = columnIndex;
        cellElement.dataset.rowNumber = cellIndex;
        
        // styles the cells in ways that apply to every cell by giving them a class name 
        // that's connected to the CSS stylesheet
        cellElement.classList = "cell";

        // appends every cell to the page via div within each row div
        columnElement.appendChild(cellElement);
        
        const displayActivePlayer = function () {}
        const determineGameWinner = function (board) {
            return '' // TODO: implement for real
        }
        
        columnElement.addEventListener("click", playerMove);
        function playerMove(event) {
            let currentColumnElement = event.target;
            let bottomCell = currentColumnElement.lastElementChild;
            let chipElement = document.createElement("div");
            chipElement.classList.add("chips");
            bottomCell.appendChild(chipElement);
            if (determineGameWinner(boardModel) !== '') {
                displayWinningMsg()
            } else if (gameIsATie(boardModel[column])) {
                displayTieMsg()
            } else {
                switchToNextPlayer()
            }
        };
    }
    playerMove(currentColumnElement);
};
// creates 
// listens to keyboard events

/*
columnElement.addEventListener("click", playerMove);

function playerMove() {
    let currentColumnElement = event.currentTarget;
    let bottomCell = currentColumnElement.lastElementChild;
    let chipElement = document.createElement("div");
    
    if
};
const initializeGame = function () {
    const displayBoard = board();
    const displayInstructions();
    const displayActivePlayer();
    const setUpColumnClickHandlers();
    }
initializeGame;

}
setUpColumnClickHandlers();
*/