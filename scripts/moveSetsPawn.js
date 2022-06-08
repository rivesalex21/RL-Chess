// Movesets for the the pawns

function verticalMovePawn(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}
    
    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    
    return document.getElementById(`${startLetter}${startNumber+depth}`)
}

function diagonalMovePawn(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    let currentIndex = LETTERS.indexOf(startLetter)

    frontLeft = null
    frontRight = null

    if (currentIndex == 0) {
        frontRight = document.getElementById(`${LETTERS[1]}${startNumber+depth}`)
        frontLeft = document.getElementById(`${LETTERS[1]}${startNumber+depth}`)
    }
    

    if (currentIndex == 7) {
        frontLeft = document.getElementById(`${LETTERS[6]}${startNumber+depth}`)
        frontRight = document.getElementById(`${LETTERS[6]}${startNumber+depth}`)
    }

    if (currentIndex > 0 && currentIndex < 7) {
        frontRight = document.getElementById(`${LETTERS[currentIndex+1]}${startNumber+depth}`)
        frontLeft = document.getElementById(`${LETTERS[currentIndex-1]}${startNumber+depth}`)
    }

    return [frontLeft , frontRight]
}
