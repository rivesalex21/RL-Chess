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

function getPossibleMoves(element) {
    let piece = containsPiece(element)
    let currentColor = piece.split('-')[1]

    if(piece == 'pawn-white') { return possibleMovesPawnWhite(element)}
    if(piece == 'bishop-white') { return possibleMovesBishopWhite(element)}
    if(piece == 'rook-white') { return possibleMovesRookWhite(element)}
    if(piece == 'knight-white') { return possibleMovesKnightWhite(element)}
    if(piece == 'queen-white') {return possibleMovesQueenWhite(element)}
    if(piece == 'king-white') { return possibleMovesKingWhite(element)}

    if(piece == 'pawn-black') { return possibleMovesPawnBlack(element)}
    if(piece == 'bishop-black') { return possibleMovesBishopBlack(element)}
    if(piece == 'rook-black') { return possibleMovesRookBlack(element)}
    if(piece == 'knight-black') { return possibleMovesKnightBlack(element)}
    if(piece == 'queen-black') { return possibleMovesQueenBlack(element)}
    if(piece == 'king-black') { return possibleMovesKingBlack(element)}  
}

function applyMove(element) {
    if (Moves['possibleTiles']== undefined) { return Moves['active'] = false}

    // Prevent switching target piece: 
    let target = element
    if (target.id == '') {target = element.parentNode}

    if (Moves['possibleTiles'].includes(target)) {
        movePiece(Moves.currentPiece,Moves.currentTile,target)
        if(inCheck(Moves.turn)) {
            movePiece(Moves.currentPiece,target,Moves.currentTile)
            alert('causes check, invalid')
            return Moves['active'] = false

        }


        changeTurn()
    }
    Moves['active'] = false
}

function analyzeMove(element) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    // check to see if the move causes a check

    if (target.childElementCount > 1) {
        target.firstChild.remove()
    }

    
}

function inCheck(currentPlayer) {
    // Checks the board to see if the kings are in check
    let currentBoard = null
    let whiteKing = document.getElementsByClassName('king-white')[0]
    let blackKing = document.getElementsByClassName('king-black')[0]

    if (currentPlayer == 'white') {currentBoard = document.getElementsByClassName('black')}
    if (currentPlayer == 'black') {currentBoard = document.getElementsByClassName('white')}

    let possibleMoves = []
    for(let i = 0 ; i < currentBoard.length ; i++) {
        target = currentBoard[i]
        possibleMoves.push(getPossibleMoves(target))
    }

    possibleMoves = possibleMoves.flat()

    if (currentPlayer == 'white') {
        if(possibleMoves.includes(whiteKing.parentElement)) {return true}
    }
    if (currentPlayer == 'black') {
        if(possibleMoves.includes(blackKing.parentElement)) {return true}
    }

    return false
}
