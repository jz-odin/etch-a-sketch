// let squareDiv = document.createElement("div");
let container = document.querySelector(".container");


function initGrid(size){
    let divs = [];
    for(let i =0; i<size**2; i++){
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("class","square");
        divs.push(squareDiv);
    }
    return divs;
}

function layoutGrid(grid){
    while(container.childElementCount>0){
        container.removeChild(container.lastChild);
    }//empty container before filling new grid
    grid.forEach(square => {
        container.appendChild(square);
    })
}

divs = initGrid(4);
//testing
divs.forEach(div => {div.textContent = "he"});
divs[0].textContent = "ehvsc";

divs.forEach(div => {container.appendChild(div)})

let activateGridOnHover = (gridArray) => {gridArray.forEach( square => {
    square.addEventListener('mouseover',event => {
        square.classList.add("hover")
    })
    square.addEventListener('mouseout',(event)=>{
        square.classList.remove('hover');
    })
});
};

activateGridOnHover(divs);

let question = document.querySelector("button#size")
let size;
question.addEventListener("click", event => {
    size = Number(prompt("How many squares per side (max 100)"));
    if(typeof size !== 'number'  || size>100 || size<1 || Math.floor(size)!==size){
        alert("Not a valid number");
    }
    else{
        grid = initGrid(size);
        let containerBound = container.getBoundingClientRect();
        //have to change everytime you change the size
        let width = containerBound.width/size;
        let height = containerBound.height/size;
        grid.forEach((square) =>{
            square.style['flex-basis'] = `${width}px`;
            square.style['height'] = `${height}px`;
        })
        console.log(container.getBoundingClientRect().width,width);
        layoutGrid(grid);
        activateGridOnHover(grid);
    }
})

