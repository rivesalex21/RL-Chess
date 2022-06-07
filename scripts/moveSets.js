// Check if there is a piece //
function possibleMovesPawnWhite(element) {
    let currentTile = element.parentNode.id
    let possibleMoves = []

    if (element.parentNode.parentNode.id == 'row-2') {
        possibleMoves.push(document.getElementById(`${currentTile[0]}${parseInt(currentTile[1])+2}`))
    }
    possibleMoves.push(document.getElementById(`${currentTile[0]}${parseInt(currentTile[1])+1}`))

    // diagonal attacks
    let frontLeft = `${letters[letters.indexOf(currentTile[0]) - 1]}${parseInt(currentTile[1])+1}`
    let frontRight = `${letters[letters.indexOf(currentTile[0]) + 1]}${parseInt(currentTile[1])+1}`
    console.log(frontLeft,frontRight,frontLeft==undefined)

    if (frontLeft != undefined) {
        if (containsBlackPiece(document.getElementById(frontLeft))) {
            possibleMoves.push(document.getElementById(frontLeft))
        }
    }

    if (frontRight != undefined){
        if (containsBlackPiece(document.getElementById(frontRight))){
            possibleMoves.push(document.getElementById(frontRight))
        }
    }
    
    console.log(frontLeft,frontRight)
    return possibleMoves
}

function possibleMovesPawnBlack(element) {
    let currentTile = element.parentNode.id
    let possibleMoves = []
    if (element.parentNode.parentNode.id == 'row-7') {
        console.log(`${currentTile[0]}${parseInt(currentTile[1])-1}`)
        console.log(`${currentTile[0]}${parseInt(currentTile[1])-2}`)
        return [document.getElementById(`${currentTile[0]}${parseInt(currentTile[1])-1}`) ,
                document.getElementById(`${currentTile[0]}${parseInt(currentTile[1])-2}`)]
    }

    possibleMoves.push(document.getElementById(`${currentTile[0]}${parseInt(currentTile[1])-1}`))
    return possibleMoves

}


function diagonals(element) {

}

