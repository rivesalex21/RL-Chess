const gameBoard = document.getElementById('game-board')



const PIECES = ['pawn','knight','bishop','rook','queen','king']

const Moves = {
    currentTile: '' , 
    newTile: ''
}

gameBoard.addEventListener('click', (event) => {
    let target = event.target
    console.log(containsPiece(target))

})