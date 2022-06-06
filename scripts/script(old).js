function findMove(piece){
    
}
let alpArray = {
    1: 'a', 2: 'b', 3:'c', 4:'d',
    5: 'e', 6: 'f', 7: 'g', 8:'h'
}

let currentMoves =[];
let currentBackgroundColor = '';
let currentPiece = '';

document.addEventListener("mousedown",(event) => {
    let target = event.target;
    currentBackgroundColor = getComputedStyle(target.parentNode).backgroundColor;
    console.log(target.className, target.style.cssText);

    if (target.className.includes("pawn") && target.className.includes("white")){

        currentPiece = target;
        console.log("this is a White pawn");
        target.parentNode.style.cssText = "background-color: tomato"
        
        if(target.className.includes("white") && target.parentNode.className.includes("two")){
            console.log('this is a starting position pawn, this piece has been selected')
            let letter = target.parentNode.id.split('')[0];
            let number = target.parentNode.id.split('')[1]
            console.log(target.parentNode.id.split('')[0], target.parentNode.id.split('')[1]);
            console.log(`${letter}${parseInt(number)+1}`)
            let possibleMove1 = document.getElementById(`${letter}${parseInt(number)+1}`);
            let possibleMove2 = document.getElementById(`${letter}${parseInt(number)+2}`);
            currentMoves = [];  
            currentMoves.push(possibleMove1,possibleMove2)     
        }
    }
})

document.addEventListener('click',(event)=>{
    let target = event.target;
    for(i in currentMoves){
        if(currentMoves[i].id == target.id){
            let piece = currentPiece.innerText;
            currentPiece.innerText = '';
            target.innerText = piece;
            break;
        }
    }
})

