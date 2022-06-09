function knightPattern(element) {
    let moveSets  = []
    let target = element
    if (target.id == '') {target = element.parentNode}

    let currentTile = target.id
    let startLetter = currentTile[0]
    let startNumber = parseInt(currentTile[1])
    let currentIndex = LETTERS.indexOf(startLetter)
    
    let pairs = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2]]

    for(i in pairs) {
        let pair = pairs[i]
        let target = document.getElementById(`${LETTERS[currentIndex+pair[0]]}${startNumber+pair[1]}`)
        moveSets.push(target)
    }

    return moveSets
}

