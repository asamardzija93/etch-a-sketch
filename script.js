let gridSize = prompt('Enter size of grid');
const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');
const colorChange = document.getElementById('chgClr');
const blkWhite = document.getElementById('blkWhite');

let colors=false;

makeGrid(gridSize);

function makeGrid(gridSize){  
   
    let newRow = makeRow(gridSize);
    for(let j =0; j < gridSize; j++){
        let rowCopy = newRow.cloneNode(true);
        container.append(rowCopy);
    }
    let gridBox = document.getElementsByClassName('grid');
    
    colorGrid(gridBox);
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
    let rows=document.getElementsByClassName('rows');
   
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }

    gridSize = prompt('What would you like the new grid to be?');
    makeGrid(gridSize);
}


resetBtn.addEventListener('click', resetGrid);
let gridBox = document.getElementsByClassName('grid');

colorChange.addEventListener('click', () =>{
    colors=true;
    resetGrid();
});
blkWhite.addEventListener('click', () =>{
    colors=false;
    resetGrid();
});



function colorGrid(gridBox){
for(let i =0; i < gridSize*gridSize; i++){
    if(!colors){
        gridBox[i].addEventListener('mouseover', () =>{
            /*matches last value of rgba, to get opacity*/
            let opcValue = gridBox[i].style['background-color'].match(/[^,]+(?=\))/)[0];
            opcValue=Number(opcValue);
            if(opcValue===1)
                return;
            else{
                opcValue+=0.1;
                let newShade = gridBox[i].style['background-color'].replace(/[^,]+(?=\))/, opcValue);
                gridBox[i].style['background-color'] = newShade;
            }
        });
    }
    else{
        gridBox[i].addEventListener('mouseover', () =>{
        if(gridBox[i].style['background-color'] === 'rgba(0, 0, 0, 0)'){
            let r=Math.floor(Math.random()*256);
            let g=Math.floor(Math.random()*256);
            let b=Math.floor(Math.random()*256);
          
            gridBox[i].style['background-color'] = 'rgba('+r+','+g+','+b+',0.1)';    
        }
        
        else{
            let opcValue = gridBox[i].style['background-color'].match(/[^,]+(?=\))/)[0];
            opcValue=Number(opcValue);

            if(opcValue===1)
                return;
            else{
                console.log('it gets here');
                opcValue+=0.1;
                let newShade = gridBox[i].style['background-color'].replace(/[^,]+(?=\))/, opcValue);
                gridBox[i].style['background-color'] = newShade;
            }
         }
    });
    }
   
}
}

