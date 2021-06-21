const gameBoard = {
    boardArray : ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], //baseline array for the board
    
    populateBoard : function () {
        for (let i = 0; i<=8; i++){
            gridReference = document.getElementById(`grid${i}`);
            if (this.boardArray[i] == 'e'){
                gridReference.textContent = "test";
            }
            else if (this.boardArray[i] == 'x'){
                gridReference.textContent = "X";
            }
            else if(this.boardArray[i] == "o"){
                gridReference.textContent = "O";
            }
        }
    },
    //insetGameToken updates the 
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
    }



}