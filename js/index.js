class Board {

    constructor(rows, columns){
        this.rows    = rows;
        this.columns = columns;
        this.board   = [];
        this.setUpBlankBoard();
        this.printBoard();
    }

    createElementWithClass(element, className) {
      var newElement = document.createElement(element);
      newElement.classList.add(className);
      return newElement;
    }

    generateHtmlBoard() {
        for (let i=1; i<=this.rows; i++) {
            let row     = this.createElementWithClass("div", "row");

            document.getElementById('gameboard-wrap').appendChild(row);


            for(let j=1; j <= this.columns; j++) {
                let square = this.createElementWithClass("div", "square")
                row.appendChild(square)
            }

        }
    }

    //A board is represented a matrix 
    setUpBlankBoard() {
        for(let j = 1; j<= this.rows; j++) {
            let squaresInRow = new Array(this.columns).fill(0);

            this.board.push(squaresInRow);
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


















