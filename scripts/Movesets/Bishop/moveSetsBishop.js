function diagonalUpperRight(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    let currentIndex = LETTERS.indexOf(startLetter)

    if (startLetter == 'h' || startNumber == 8) {return}
    console.log()
    return document.getElementById(`${LETTERS[currentIndex+depth]}${startNumber+depth}`)
}

function diagonalLowerRight(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    let currentIndex = LETTERS.indexOf(startLetter)

    if (startLetter == 'h' || startNumber == 1) {return}
    return document.getElementById(`${LETTERS[currentIndex+depth]}${startNumber-depth}`)
}


function diagonalUpperLeft(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    let currentIndex = LETTERS.indexOf(startLetter)

    if (startLetter == 'a' || startNumber == 8) {return}
    console.log()
    return document.getElementById(`${LETTERS[currentIndex-depth]}${startNumber+depth}`)
}

function diagonalLowerLeft(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    let currentIndex = LETTERS.indexOf(startLetter)

    if (startLetter == 'a' || startNumber == 1) {return}
    console.log()
    return document.getElementById(`${LETTERS[currentIndex-depth]}${startNumber-depth}`)
}

