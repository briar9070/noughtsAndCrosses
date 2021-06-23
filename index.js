const gameBoard = {
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
    //insetGameToken adds an event listener to each of the boxes. this listener updates the above array and 
    insertGameToken : function () {
        document.querySelectorAll('.gridItem').forEach(item => {
            item.addEventListener('click', function (e) {
                thisGridReferenceID = e.target.id;
                numberReference = thisGridReferenceID.charAt(thisGridReferenceID.length - 1) ;
                console.log(numberReference);
                gameBoard.boardArray[numberReference] = 'x';
                gameBoard.populateBoard();
            })
        })
    },
    
    resetBoard : function(){//function resets the baseline array.
        this.boardArray = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
        gameBoard.populateBoard();
    },

}