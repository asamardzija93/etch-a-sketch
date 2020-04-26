let gridSize = prompt('Enter size of grid');
const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');
const colorChange = document.getElementById('chgClr');



function makeGrid(gridSize){  
   
    let newRow = makeRow(gridSize);
    for(let j =0; j < gridSize; j++){
        let rowCopy = newRow.cloneNode(true);
        container.append(rowCopy);
    }
}

function makeRow(gridSize){
    let boxHeight = (800/gridSize)-2;
    let boxWidth = (800/gridSize)-2;
    let rows = document.createElement('div');
    rows.classList.add('rows');

    for(let i = 0; i < gridSize; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        newDiv.style.height = boxHeight+'px';
        newDiv.style.width = boxWidth+'px';
        newDiv.style['background-color'] = 'rgba(0,0,0,0.0)';
        rows.append(newDiv);
    }
    return rows;
}

function resetGrid(){
    let newGrid = prompt('Enter grid size');
   
    let rows=document.getElementsByClassName('rows');
    console.log(rows);

    for(let i=0; i < gridSize; i++) {
       while(rows[i].firstChild){
            rows[i].removeChild(rows[i].firstChild);
       }
    }
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }

  
    makeGrid(newGrid);
}

makeGrid(gridSize);

resetBtn.addEventListener('click', resetGrid);
