class Board {

    constructor(rows, columns){
        this.rows    = rows;
        this.columns = columns;
        this.board   = {};
        this.setUpBlankBoard();
        this.printBoard();
    }

    createElementWithClass(element, className) {
      var newElement = document.createElement(element);
      newElement.classList.add(className);
      return newElement;
    }

    generateHtmlBoard() {
        this.board.map(square => {
          row = this.createElementWithClass("div", "row");

        })


        for (let i=1; i<=this.rows; i++) {
            for(let j=1; j <= this.columns; j++) {
                let square = this.createElementWithClass("div", "square")
                row.appendChild(square)
            }

        }
    }

    //A board is represented by a matrix 
    setUpBlankBoard() {
      for(let j = 0; j < this.rows; j++) {
        //Here we are going to create 4 letters. A, B, C, D
        let gridPositionX = String.fromCharCode(97 + j)

        //Here we are going to add the depth to the lettes (A1, A2, A3, A4);
        for(let y = 1; y <= this.columns; y++) {
          let gridPositionY = y;
            
          this.board[gridPositionX + gridPositionY] = 0;
        }
      }
    }

    /** 
     * A game is started by filling one of the empty squares with a 2
     **/
    startGame() {
        let number = 2;
    }

    /**
     * It generates a new number to be placed on the board
     * According to the wiki page for 2048, there's a 90%
     * chance that the new number will be 2 and a 10% chance 
     * for it to be a 4.
     */
    generateNewNumber()
    {
        return Math.random() < 0.9 ? 2 : 4;
    }

    printBoard() {
        console.log(this.board)
    }
}


















