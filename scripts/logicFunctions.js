function containsPiece(element) {
    if (element.hasChildNodes()) {
        let possiblePiece = element.className.split(' ')[2]
        if (PIECES.includes(possiblePiece)) {
            return possiblePiece
        }
    }

    return 'no-piece'
}

function Legal(element) {
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
}
