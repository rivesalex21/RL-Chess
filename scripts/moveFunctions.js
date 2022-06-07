function deletePiece(element) {
    while (element.hasChildNodes()){
        element.firstChild.remove()
    }
}

function movePiece(pieceType,startingPoint,endingPoint) {
    deletePiece(startingPoint)

    switch (pieceType) {
        case 'pawn-white':
            createPawnWhite(endingPoint)
            break

        case 'knight-white':
            createKnightWhite(endingPoint)
            break

        case 'bishop-white':
            createBishopWhite(endingPoint)
            break

        case 'rook-white':
            createRookWhite(endingPoint)
            break

        case 'queen-white':
            createQueenWhite(endingPoint)
            break

        case 'pawn-white':
            createKingWhite(endingPoint)
            break

    // for black pieces  // 

        case 'pawn-black':
            createPawnBlack(endingPoint)
            break

        case 'knight-black':
            createKnightBlack(endingPoint)
            break

        case 'bishop-black':
            createBishopBlack(endingPoint)
            break

        case 'rook-black':
            createRookBlack(endingPoint)
            break

        case 'queen-black':
            createQueenBlack(endingPoint)
            break

        case 'pawn-black':
            createKingBlack(endingPoint)
            break
    }
}
