function containsPiece(element) {
    if (element.hasChildNodes()) {
        let possiblePiece = element.className.split(' ')[2]
        if (PIECES.includes(possiblePiece)) {
            return possiblePiece
        }
    }

    return 'no-piece'
}

function isLegal(element) {
    if (element.hasChildNodes()) {
            return false
        }
    return true
}

function containsBlackPiece(element){
    if (element.hasChildNodes()) {
        let possiblePiece = element.firstChild.className.split(' ')[1]
        if (possiblePiece.includes('black')) {
            return true
        }
    }
    return false
}

function containsWhitePiece(element){
    if (element.hasChildNodes()) {
        let possiblePiece = element.firstChild.className.split(' ')[1]
        if (possiblePiece.includes('white')) {
            return true
        }
    }
    return false
}

function changeTurn() {
    return (Moves.turn == 'white' ? Moves.turn = 'black' : Moves.turn = 'white')
}

function getMove(element) {
    let piece = containsPiece(element)
    let currentColor = piece.split('-')[1]
    
    if(currentColor != Moves.turn) {
        piece = 'no-piece'
    }
    
    switch (piece) {
        case 'pawn-white':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesPawnWhite(element)
            Moves['active'] = true
            break;

        case 'pawn-black':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesPawnBlack(element)
            Moves['active'] = true
            break;

        // Bishops
        case 'bishop-white':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesBishopWhite(element)
            Moves['active'] = true
            break;

        case 'bishop-black':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesBishopBlack(element)
            Moves['active'] = true
            break;

        // Rooks
        case 'rook-white':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesRookWhite(element)
            Moves['active'] = true
            break;

        case 'rook-black':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesRookBlack(element)
            Moves['active'] = true
            break;

        case 'knight-white':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesKnightWhite(element)
            Moves['active'] = true
            break;

        case 'knight-black':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesKnightBlack(element)
            Moves['active'] = true
            break;
        
        case 'queen-white':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesQueenWhite(element)
            Moves['active'] = true
            break;

        case 'queen-black':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesQueenBlack(element)
            Moves['active'] = true
            break;

        case 'king-white':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesKingWhite(element)
            Moves['active'] = true
            break;

        case 'king-black':
            Moves['currentPiece'] = piece
            Moves['currentTile'] = element.parentNode
            Moves['possibleTiles'] = possibleMovesKingBlack(element)
            Moves['active'] = true
            break;

        default:
            Moves['currentTile'] = null
            Moves ['possibleTiles'] = null
            Moves['newTile'] = null
            Moves['active'] = false
    }
}

function applyMove(element) {
    if (Moves['possibleTiles']== undefined) { return Moves['active'] = false}

    // Prevent switching target piece: 
    let target = element
    if (target.id == '') {target = element.parentNode}

    if (Moves['possibleTiles'].includes(target)) {
        movePiece(Moves.currentPiece,Moves.currentTile,target)
    }
    Moves['active'] = false
}

function analyzeMove(element) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    if (target.childElementCount > 1) {
        target.firstChild.remove()
    }

    changeTurn()
    
}
