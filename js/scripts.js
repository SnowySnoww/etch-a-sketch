import {grid, numSquares2, btnConfirm, btnReset, chosenColor} from "./selectors.js";

const numSquares = document.querySelector("#numSquares");
const topContent = document.querySelector(".topContent");
let warningContent = document.createElement("p");
let color = chosenColor.value;
let isClicked = false;
let warningActive = false;

btnConfirm.addEventListener("click", confirm);
btnReset.addEventListener("click", reset);

function reset(){
    let gridItem = grid.querySelectorAll("div");
    gridItem.forEach(divs => {
        divs.remove();
    })
}

function paint(){
    if(isClicked == true){
        color = chosenColor.value;
        this.style.cssText = `background: ${color};`
    }
}
function confirm(){
    let squares = parseInt(numSquares.value);
    if(squares >= 2 && squares <= 100){
        removeChild();
        erase();
        color = chosenColor.value;
        grid.style.cssText = `grid-template: repeat(${squares}, 1fr) / repeat(${squares}, 1fr)`
        numSquares2.innerHTML = `x ${squares}`;
        for(let n = 0; n < squares**2; n++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            gridItem.style.cssText = `background: white`
            grid.appendChild(gridItem);
            gridItem.addEventListener("mouseover", paint)
        }
    }else{
        erase();
        warningContent.classList.add("warningContent");
        warningContent.innerText = "The number of squares must be between 2 and 100."
        warningContent.style.cssText = "background: #B33A3A; color: white; padding: 5px; border-radius: 10px;"
        topContent.appendChild(warningContent);
        warningActive = true;
    }
}

function removeChild(){
    if(warningActive == true){
        topContent.removeChild(warningContent);
        erase();
    }else{
        erase();
        return;
    }
}

function erase(){
    let divs = document.querySelectorAll(".gridItem");
    divs.forEach(divs => {
        divs.remove();
    })
}

document.querySelector(".grid").addEventListener("click", () =>{
    isClicked = !isClicked;
})

console.log(grid);