
function createPawn (element) {
    newPawn = document.createElement('div')
    newPawn.className = 'pawn white'
    newPawn.innerText = 'P'

    element.appendChild(newPawn)
}