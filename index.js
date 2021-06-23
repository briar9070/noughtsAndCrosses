let gameBoard = {
    boardArray : ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], //baseline array for the board. e stands for empty
    
    populateBoard : function () {
        for (let i = 0; i<=8; i++){ //runs through all items in the array and checks what is contained in there. also runs through the grid numbers
            gridReference = document.getElementById(`grid${i}`);
            if (this.boardArray[i] == 'e'){
                gridReference.textContent = "";
            }
            else if (this.boardArray[i] == 'x'){
                gridReference.textContent = "X";
            }
            else if(this.boardArray[i] == "o"){
                gridReference.textContent = "O";
            }
        }
    },
    //insetGameToken first if statement checks to see if a token has been placed already. If there is nothing there it adds an event listener to checked box.
    insertGameToken : function () {
        document.querySelectorAll('.gridItem').forEach(item => {
            item.addEventListener('click', function (e) {
                thisGridReferenceID = e.target.id;
                numberReference = thisGridReferenceID.charAt(thisGridReferenceID.length - 1);
                if (gameBoard.boardArray[numberReference] == 'x' || gameBoard.boardArray[numberReference] == 'o'){
                    console.log("Not a valid move");
                }
                else {
                    if (gameFlow.turn === 0){
                        gameBoard.boardArray[numberReference] = 'x';
                        gameBoard.populateBoard();
                        gameFlow.checkWinStatus();
                        gameFlow.turnCounter();
                    }
                    else if (gameFlow.turn === 1){
                        gameBoard.boardArray[numberReference] = 'o';
                        gameBoard.populateBoard();
                        gameFlow.checkWinStatus();
                        gameFlow.turnCounter();
                    }
                }
            })
        })
    },
    
    resetBoard : function(){//function resets the baseline array.
        this.boardArray = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
        gameBoard.populateBoard();
    },

}

const gameFlow = {
    startGame : function () { //initialises the game through the gameBoard function
        gameBoard.insertGameToken();

    },

    checkWinStatus : function () {//checks if the tokens are aligned in a winning pattern.
        if (gameBoard.boardArray[0] === gameBoard.boardArray[1] && gameBoard.boardArray[1] === gameBoard.boardArray[2]){
            console.log("you win");
        }
    },

    turn : 0, //keeps track of whose turn it is. 0 or 1 for two player states

    turnCounter : function () {//switches the players
        if (gameFlow.turn === 0) {
            gameFlow.turn = 1;
        }
        else if (gameFlow.turn === 1) {
            gameFlow.turn = 0;
        }
    }
}
function Player (name, piece) {
    this.name = name
    this.piece = piece
}

const player1 = new Player("Lewis", "x");
const player2 = new Player("Computer", "o")

startGameButton = document.getElementById('startButton');
startGameButton.addEventListener('click', function (){
    gameBoard.insertGameToken();
})

resetGameButton = document.getElementById('resetButton');
resetGameButton.addEventListener('click', function(){
    gameBoard.resetBoard();
})