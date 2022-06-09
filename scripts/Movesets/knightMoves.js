function possibleMovesKnightWhite(element) {
    let possibleMoves = []
    let potentialMoves = knightPattern(element)

    for(let i = 0 ; i<potentialMoves.length ; i++) {
        if (potentialMoves[i] == null || potentialMoves[i] == undefined) {continue}
        if (containsBlackPiece(potentialMoves[i])) {
            console.log(true)
            possibleMoves.push(potentialMoves[i])
            continue
        }
        if(isLegal(potentialMoves[i])){
            possibleMoves.push(potentialMoves[i])
        }
    }

    return possibleMoves
}

function possibleMovesKnightBlack(element) {
    let possibleMoves = []
    let potentialMoves = knightPattern(element)

    for(let i = 0 ; i<potentialMoves.length ; i++) {
        if (potentialMoves[i] == null || potentialMoves[i] == undefined) {continue}
        if (containsWhitePiece(potentialMoves[i])) {
            possibleMoves.push(potentialMoves[i])
            continue
        }
        if(isLegal(potentialMoves[i])){
            possibleMoves.push(potentialMoves[i])
        }
    }

    return possibleMoves
}