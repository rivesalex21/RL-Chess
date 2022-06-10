const gameBoard = document.getElementById('game-board')
const PIECES = ['pawn-white','knight-white','bishop-white','rook-white','queen-white','king-white',
                'pawn-black','knight-black','bishop-black','rook-black','queen-black','king-black']

const a1 = document.getElementById('a1') ; const a8 = document.getElementById('a8')
const b1 = document.getElementById('b1') ; const b8 = document.getElementById('b8')
const c1 = document.getElementById('c1') ; const c8 = document.getElementById('c8')
const d1 = document.getElementById('d1') ; const d8 = document.getElementById('d8')
const e1 = document.getElementById('e1') ; const e8 = document.getElementById('e8')
const f1 = document.getElementById('f1') ; const f8 = document.getElementById('f8')
const g1 = document.getElementById('g1') ; const g8 = document.getElementById('g8')
const h1 = document.getElementById('h1') ; const h8 = document.getElementById('h8')

const LETTERS = ['a','b','c','d','e','f','g','h'] 


const Moves = {
    currentPiece: null,
    currentTile: null , 
    possibleTiles : null,
    newTile: null,
    active: false,
    turn: 'white'
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


// Creating the game board.
/*
for (i=0 ; i < LETTERS.length ; i++) {
    let currentTile = document.getElementById(`${LETTERS[i]}2`)
    createPawnWhite(currentTile)
}

createRookWhite(a1) ; createRookWhite(h1)
createKnightWhite(b1) ; createKnightWhite(g1)
createBishopWhite(c1) ; createBishopWhite(f1)
createQueenWhite(d1) ;

createKingWhite(e1)

/*
for (i=0 ; i < LETTERS.length ; i++) {
    let currentTile = document.getElementById(`${LETTERS[i]}7`)
    createPawnBlack(currentTile)
}

xcreateRookBlack(a8) ; createRookBlack(h8)
createKnightBlack(b8) ; createKnightBlack(g8)
createBishopBlack(c8) ; createBishopBlack(f8)
createQueenBlack(d8) ; 


createKingBlack(e8)
*/

createKingWhite(e1)
yar = document.getElementById('a4')
yer = document.getElementById('a2')
yee = document.getElementById('b2')
