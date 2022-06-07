const gameBoard = document.getElementById('game-board')
const PIECES = ['pawn-white','knight-white','bishop-white','rook-white','queen-white','king-white',
                'pawn-black','knight-black','bishop-black','rook-black','queen-black','king-black']

const Moves = {
    currentPiece: null,
    currentTile: null , 
    possibleTiles : null,
    newTile: null,
    active: false
}

gameBoard.addEventListener('click', (event) => {
    
    if (Moves['active'] == true) {
        applyMove(event.target)
    }
    
    if (Moves['active'] == false) {
        getMove(event.target)
    }

    
})



const letters = ['a','b','c','d','e','f','g','h']

for (i=0 ; i < letters.length ; i++) {
    let currentTile = document.getElementById(`${letters[i]}2`)
    createPawnWhite(currentTile)
}

for (i=0 ; i < letters.length ; i++) {
    let currentTile = document.getElementById(`${letters[i]}7`)
    createPawnBlack(currentTile)
}



