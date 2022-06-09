function possibleMovesKingWhite(element) {
    let possibleMoves = []
    let target = ''

    target = diagonalUpperRight(element,1)
    if (target != null || target != undefined) {
        if (containsBlackPiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = diagonalUpperLeft(element,1)
    if (target != null || target != undefined) {
        if (containsBlackPiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = diagonalLowerLeft(element,1)
    if (target != null || target != undefined) {
        if (containsBlackPiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = diagonalLowerRight(element,1)
    if (target != null || target != undefined) {
        if (containsBlackPiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = upperVertical(element,1)
    if (target != null || target != undefined) {
        if (containsBlackPiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = lowerVertical(element,1)
    if (target != null || target != undefined) {
        if (containsBlackPiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = upperHorizontal(element,1)
    if (target != null || target != undefined) {
        if (containsBlackPiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = lowerHorizontal(element,1)
    if (target != null || target != undefined) {
        if (containsBlackPiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    return possibleMoves
}
//// BLACK KING /////


function possibleMovesKingBlack(element) {
    let possibleMoves = []
    let target = ''

    target = diagonalUpperRight(element,1)
    if (target != null || target != undefined) {
        if (containsWhitePiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = diagonalUpperLeft(element,1)
    if (target != null || target != undefined) {
        if (containsWhitePiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = diagonalLowerLeft(element,1)
    if (target != null || target != undefined) {
        if (containsWhitePiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = diagonalLowerRight(element,1)
    if (target != null || target != undefined) {
        if (containsWhitePiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = upperVertical(element,1)
    if (target != null || target != undefined) {
        if (containsWhitePiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = lowerVertical(element,1)
    if (target != null || target != undefined) {
        if (containsWhitePiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = upperHorizontal(element,1)
    if (target != null || target != undefined) {
        if (containsWhitePiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    target = lowerHorizontal(element,1)
    if (target != null || target != undefined) {
        if (containsWhitePiece(target)) {possibleMoves.push(target)}
        if (isLegal(target)) {possibleMoves.push(target)}
    }

    return possibleMoves
}