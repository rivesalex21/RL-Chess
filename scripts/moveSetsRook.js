function upperVertical(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])

    if (startNumber == 8) {return}
    return document.getElementById(`${startLetter}${startNumber+depth}`)
}

function lowerVertical(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])

    if (startNumber == 1) {return}
    return document.getElementById(`${startLetter}${startNumber-depth}`)
}


function upperHorizontal(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    let currentIndex = LETTERS.indexOf(startLetter)

    if (startLetter == 'h') {return}
    return document.getElementById(`${LETTERS[currentIndex+depth]}${startNumber}`)
}

function lowerHorizontal(element,depth) {
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    let currentIndex = LETTERS.indexOf(startLetter)

    if (startLetter == 'a') {return}
    return document.getElementById(`${LETTERS[currentIndex-depth]}${startNumber}`)
}