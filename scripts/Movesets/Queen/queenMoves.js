function possibleMovesQueenWhite(element) {
    let possibleMoves = []
    
    let i = 1
    while (diagonalUpperRight(element,i) != undefined ) {
        let target = diagonalUpperRight(element,i)
        if (containsBlackPiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (diagonalUpperLeft(element,i) != undefined ) {
        let target = diagonalUpperLeft(element,i)
        if (containsBlackPiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (diagonalLowerRight(element,i) != undefined ) {
        let target = diagonalLowerRight(element,i)
        if (containsBlackPiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (diagonalLowerLeft(element,i) != undefined ) {
        let target = diagonalLowerLeft(element,i)
        if (containsBlackPiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (upperVertical(element,i) != undefined ) {
        let target = upperVertical(element,i)
        if (containsBlackPiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (lowerVertical(element,i) != undefined ) {
        let target = lowerVertical(element,i)
        if (containsBlackPiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (upperHorizontal(element,i) != undefined ) {
        let target = upperHorizontal(element,i)
        if (containsBlackPiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (lowerHorizontal(element,i) != undefined ) {
        let target = lowerHorizontal(element,i)
        if (containsBlackPiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    return possibleMoves
}

////////////////////// BLACK QUEEN //////////////////////

function possibleMovesQueenBlack(element) {
    let possibleMoves = []
    
    let i = 1
    while (diagonalUpperRight(element,i) != undefined ) {
        let target = diagonalUpperRight(element,i)
        if (containsWhitePiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (diagonalUpperLeft(element,i) != undefined ) {
        let target = diagonalUpperLeft(element,i)
        if (containsWhitePiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (diagonalLowerRight(element,i) != undefined ) {
        let target = diagonalLowerRight(element,i)
        if (containsWhitePiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (diagonalLowerLeft(element,i) != undefined ) {
        let target = diagonalLowerLeft(element,i)
        if (containsWhitePiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (upperVertical(element,i) != undefined ) {
        let target = upperVertical(element,i)
        if (containsWhitePiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (lowerVertical(element,i) != undefined ) {
        let target = lowerVertical(element,i)
        if (containsWhitePiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (upperHorizontal(element,i) != undefined ) {
        let target = upperHorizontal(element,i)
        if (containsWhitePiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    i = 1
    while (lowerHorizontal(element,i) != undefined ) {
        let target = lowerHorizontal(element,i)
        if (containsWhitePiece(target)) {possibleMoves.push(target) ; break}
        if (!isLegal(target)) {break}
        possibleMoves.push(target)
        i += 1
    }

    return possibleMoves
}