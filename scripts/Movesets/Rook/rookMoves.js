function possibleMovesRookWhite(element) {
    let possibleMoves = []
    let i = 0
    
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

// Black Pieces

function possibleMovesRookBlack(element) {
    let possibleMoves = []
    let i = 0
    
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

