function possibleMovesPawnWhite(element) {
    let possibleMoves = []

    let singleForward  = verticalMovePawn(element,1)
    let doubleForward = verticalMovePawn(element,2)
    let [frontLeft , frontRight] = diagonalMovePawn(element,1)

    if (element.parentNode.parentNode.id == 'row-2' && isLegal(doubleForward) && isLegal(singleForward)) {
        possibleMoves.push(doubleForward)
    }
    
    if (isLegal(singleForward) ) {possibleMoves.push(singleForward)}
    if (containsBlackPiece(frontLeft)) {possibleMoves.push(frontLeft)}
    if (containsBlackPiece(frontRight)) {possibleMoves.push(frontRight)}
        
    return possibleMoves
}

function possibleMovesPawnBlack(element) {
    let possibleMoves = []

    let singleForward  = verticalMovePawn(element,-1)
    let doubleForward = verticalMovePawn(element,-2)
    let [frontLeft , frontRight] = diagonalMovePawn(element,-1)

    if (element.parentNode.parentNode.id == 'row-7'&& isLegal(doubleForward) && isLegal(singleForward)) {
        possibleMoves.push(doubleForward)
    }
    if (isLegal(singleForward) ) {possibleMoves.push(singleForward)}
    if (containsWhitePiece(frontLeft)) {possibleMoves.push(frontLeft)}
    if (containsWhitePiece(frontRight)) {possibleMoves.push(frontRight)}
        
    return possibleMoves
}