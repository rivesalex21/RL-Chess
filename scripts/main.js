const gameBoard = document.getElementById('game-board')
const PIECES = ['pawn-white','knight-white','bishop-white','rook-white','queen-white','king-white',
                'pawn-black','knight-black','bishop-black','rook-black','queen-black','king-black']

const LETTERS = ['a','b','c','d','e','f','g','h']               

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
        analyzeMove(event.target)
        return
    }
    
    if (Moves['active'] == false) {
        getMove(event.target)
    }

    
})




for (i=0 ; i < LETTERS.length ; i++) {
    let currentTile = document.getElementById(`${LETTERS[i]}2`)
    createBishopWhite(currentTile)
}

for (i=0 ; i < LETTERS.length ; i++) {
    let currentTile = document.getElementById(`${LETTERS[i]}7`)
    createBishopBlack(currentTile)
}




yar = document.getElementById('a4')
yer = document.getElementById('a2')
yee = document.getElementById('b2')
