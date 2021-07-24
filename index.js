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
        if (gameFlow.turn === 1){
            nextPieceTextBox = document.getElementById('nextPiecePlay');
            nextPieceTextBox.textContent = 'O';
        }
        else if (gameFlow.turn === 0){
            nextPieceTextBox = document.getElementById('nextPiecePlay');
            nextPieceTextBox.textContent = 'X';
        }
        document.querySelectorAll('.gridItem').forEach(item => {
            item.addEventListener('click', function (e) {
                thisGridReferenceID = e.target.id;
                numberReference = thisGridReferenceID.charAt(thisGridReferenceID.length - 1);
                if (gameBoard.boardArray[numberReference] == 'x' || gameBoard.boardArray[numberReference] == 'o'){
                    console.log("Not a valid move");
                    alert("Not a Valid move");
                }
                else {
                    if (gameFlow.turn === 0){
                        gameBoard.boardArray[numberReference] = 'x';
                        nextPieceTextBox = document.getElementById('nextPiecePlay');
                        nextPieceTextBox.textContent = 'O';
                        gameBoard.populateBoard();
                        gameFlow.totalTurnIncrement();
                        gameFlow.checkWinStatus();
                        gameFlow.turnCounter();
                    }
                    else if (gameFlow.turn === 1){
                        gameBoard.boardArray[numberReference] = 'o';
                        nextPieceTextBox = document.getElementById('nextPiecePlay');
                        nextPieceTextBox.textContent = 'X';
                        gameBoard.populateBoard();
                        gameFlow.totalTurnIncrement();
                        gameFlow.checkWinStatus();
                        gameFlow.turnCounter();
                    }
                }
            })
        })
    },
    
    resetBoard : function(){//function resets the baseline array.
        this.boardArray = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
        gameFlow.totalTurns = 0;
        gameBoard.populateBoard();
    },

}

const gameFlow = {
    
    totalGamesToPlay : 3,

    totalGamesIncreased : function () {
        this.totalGamesToPlay--;
        console.log(this.totalGamesToPlay);
        if (this.totalGamesToPlay === 0 ){
            if (player1.score > player2.score) {
                alert (player1.name + "is the winner")
            }
            else if (player2.score > player1.score) {
                alert (player2.name + "is the winner")
            }
            else if (player1.score == player2.score){ 
                alert("Bore Draw");
            }
        }
    },

    startGame : function () { //initialises the game through the gameBoard function
        gameBoard.insertGameToken();
    },

    checkWinStatus : function () {//checks if the tokens are aligned in a winning pattern.
        if (gameBoard.boardArray[0] != "e" && gameBoard.boardArray[0] === gameBoard.boardArray[1] && gameBoard.boardArray[1] === gameBoard.boardArray[2]){
            console.log("You Win");
            this.totalGamesIncreased();
        }
        else if (gameBoard.boardArray[3] != "e" && gameBoard.boardArray[3] === gameBoard.boardArray[4] && gameBoard.boardArray[4] === gameBoard.boardArray[5]){
            console.log("You Win");
            this.totalGamesIncreased();
        }
        else if (gameBoard.boardArray[6] != "e" && gameBoard.boardArray[6] === gameBoard.boardArray[7] && gameBoard.boardArray[7] === gameBoard.boardArray[8]){
            console.log("You Win");
            this.totalGamesIncreased();
        }
        else if (gameBoard.boardArray[0] != "e" && gameBoard.boardArray[0] === gameBoard.boardArray[3] && gameBoard.boardArray[3] === gameBoard.boardArray[6]){
            console.log("You Win");
            this.totalGamesIncreased();
        }
        else if (gameBoard.boardArray[1] != "e" && gameBoard.boardArray[1] === gameBoard.boardArray[4] && gameBoard.boardArray[4] === gameBoard.boardArray[7]){
            console.log("You Win");
            this.totalGamesIncreased();
        }
        else if (gameBoard.boardArray[2] != "e" && gameBoard.boardArray[2] === gameBoard.boardArray[5] && gameBoard.boardArray[5] === gameBoard.boardArray[8]){
            console.log("You Win");
            this.totalGamesIncreased();
        }
        else if (gameBoard.boardArray[0] != "e" && gameBoard.boardArray[0] === gameBoard.boardArray[4] && gameBoard.boardArray[4] === gameBoard.boardArray[8]){
            console.log("You Win");
            this.totalGamesIncreased();
        }
        else if (gameBoard.boardArray[2] != "e" && gameBoard.boardArray[2] === gameBoard.boardArray[4] && gameBoard.boardArray[4] === gameBoard.boardArray[6]){
            console.log("You Win");
            this.totalGamesIncreased();
        }
        else if (this.totalTurns === 9) {
            console.log("That's a Draw!")
        }
    },

    turn : 0, //keeps track of whose turn it is. 0 or 1 for two player states

    totalTurns : 0, //Keeps track of the total number of turns in the game

    turnCounter : function () {//switches the players
        if (gameFlow.turn === 0) {
            gameFlow.turn = 1;
        }
        else if (gameFlow.turn === 1) {
            gameFlow.turn = 0;
        }
    },

    totalTurnIncrement : function () {
        gameFlow.totalTurns+= 1;
    }
}
function Player (name, piece,score) {
    this.name = name
    this.piece = piece
    this.score = score
}

const player1 = new Player("Lewis", "x",0);
const player2 = new Player("Computer", "o",0)



startGameButton = document.getElementById('startButton');
startGameButton.addEventListener('click', function (){
    gameBoard.insertGameToken();
});

resetGameButton = document.getElementById('resetButton');
resetGameButton.addEventListener('click', function(){
    gameBoard.resetBoard();
});

