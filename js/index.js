class Board {

    constructor(rows, squaresPerRow){
        this.rows          = rows;
        this.squaresPerRow = squaresPerRow;
        this.generateHtmlBoard();
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

            for(let j=1; j <= this.squaresPerRow; j++) {
                let square = this.createElementWithClass("div", "square")
                row.appendChild(square)
            }

        }
    }

}