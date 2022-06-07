function containsPiece(element) {
    if (element.hasChildNodes()) {
        let possiblePiece = element.className.split(' ')[2]
        if (PIECES.includes(possiblePiece)) {
            return possiblePiece
        }
    }

    return 'no-piece'
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


function getMove(element) {
    let piece = containsPiece(element)
    
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
    if(containsPiece(element)!= 'no-piece') { target = element.parentNode }  

    if (Moves['possibleTiles'].includes(target)) {
        movePiece(Moves.currentPiece,Moves.currentTile,target)
    }
    Moves['active'] = false
}
