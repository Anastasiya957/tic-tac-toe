class TicTacToe {
    constructor() {
        this.playingField = [
                              ['', '', ''],
                              ['', '', ''],
                              ['', '', '']
                            ];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if ( this.playingField[rowIndex][columnIndex] == '') {
            if ( this.currentPlayerSymbol == 'x') {
                this.playingField[rowIndex][columnIndex] = 'x';
                this.currentPlayerSymbol = 'o';
            } else {
                this.playingField[rowIndex][columnIndex] = 'o';
                this.currentPlayerSymbol = 'x';
            }
        }

    }

    isFinished() {
        if ( this.getWinner() !== null || this.noMoreTurns() ) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        var centerSymbol = this.playingField[1][1];
        if ( centerSymbol != '' ) {
            if ( centerSymbol == this.playingField[1][0] && centerSymbol == this.playingField[1][2] ||
                 centerSymbol == this.playingField[0][0] && centerSymbol == this.playingField[2][2] ||
                 centerSymbol == this.playingField[0][1] && centerSymbol == this.playingField[2][1] ||
                 centerSymbol == this.playingField[2][0] && centerSymbol == this.playingField[0][2] ) {
                return centerSymbol;
            }
        }

        var lowerLeftSymbol = this.playingField[2][0];
        if ( lowerLeftSymbol != '' ) {
            if ( lowerLeftSymbol == this.playingField[1][0] && lowerLeftSymbol == this.playingField[0][0] ||
                 lowerLeftSymbol == this.playingField[2][1] && lowerLeftSymbol == this.playingField[2][2] ) {
                return lowerLeftSymbol;
            }
        }

        var upperRightSymbol = this.playingField[0][2];
        if ( upperRightSymbol != '' ) {
            if ( upperRightSymbol == this.playingField[0][1] && upperRightSymbol == this.playingField[0][0] ||
                 upperRightSymbol == this.playingField[1][2] && upperRightSymbol == this.playingField[2][2] ) {
                return upperRightSymbol;
            }
        }

        return null;
    }

    noMoreTurns() {
        function isFull(arr) {
            return ( arr.indexOf('') == -1 );
        }
        if ( this.playingField.every(isFull) ) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if ( this.noMoreTurns() && this.getWinner() === null ) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if ( this.playingField[rowIndex][colIndex] == '') {
            return null;
        } else {
            return this.playingField[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
