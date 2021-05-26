let container = document.getElementById('container')
function createGame(){
    for (i = 0; i < 64; i++){
    const apple = document.createElement("div");
    apple.id = "apple" + i;
    apple.classList.add('apple');
    container.appendChild(apple);
    apple.style.left = 30 * i +"px";
}

    const snake = document.createElement("div");
    snake.id = 'snake';
    snake.classList.add('snake');
    container.appendChild(snake);
    
}
createGame()
let redLeft = 150;
let redTop = 150;
let leftNumber = 0;
let topNumber = 0;
let direction = 0;
function rightArrowPressed(){
    var element = document.getElementById('snake')
    leftNumber += 30;
    element.style.left = leftNumber + "px";
    let direction = 1;
    console.log(direction)
}
function leftArrowPressed(){
    var element = document.getElementById('snake')
    leftNumber -= 30;
    element.style.left = leftNumber + "px";
    let direction = 2;
    console.log(direction)
}
function upArrowPressed(){
    var element = document.getElementById('snake')
    topNumber -= 30;
    element.style.top = topNumber + "px";
    let direction = 3;
    console.log(direction)
}
function downArrowPressed(){
    var element = document.getElementById('snake')
    topNumber += 30;
    element.style.top = topNumber + "px";
    let direction = 4;
    console.log(direction)
}


document.onkeydown = function(e) {
    switch (e.keyCode){
        case 39:
            rightArrowPressed()
            
            break;
        case 37:
            leftArrowPressed()
            break;
        case 38:
            upArrowPressed()
            break;
        case 40:
            downArrowPressed()
            break;
    }
}