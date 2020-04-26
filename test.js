let gridSize = prompt('Enter size of grid');

const container = document.getElementById('container');

const resetBtn = document.getElementById('resetBtn');

const colorChange = document.getElementById('chgClr');

let colors = false;

makeGrid(gridSize);


function makeGrid(gridSize){  
   
    let newRow = makeRow(gridSize);
    for(let j =0; j < gridSize; j++){
        let rowCopy = newRow.cloneNode(true);
        container.append(rowCopy);
    }
    let gridBox = document.getElementsByClassName('grid');
    makeColors(gridBox);
}



colorChange.addEventListener('click', colorGrid);

function colorGrid(){
    colors=true;
    makeColors();

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





function makeColors(gridBox){
    
    if(colors){

    for(let i =0; i < gridBox.length; i++){
        
        gridBox[i].addEventListener('mouseover', () =>{
            console.log('colorssss')
            
            if(gridBox[i].style['background-color'] === 'rgba(0, 0, 0, 0)'){
                conso
                let r=Math.floor(Math.random()*256);
                let g=Math.floor(Math.random()*256);
                let b=Math.floor(Math.random()*256);
                
                gridBox[i].style['background-color'] = 'rgba('+r+','+g+','+b+'0.1)';    
            }
            
            else{
                
                let opcValue = gridBox[i].style['background-color'].match(/[^,]+(?=\))/)[0];
                opcValue=Number(opcValue);

                if(opcValue===1)
                    return;
                else{
                    opcValue+=0.1;
                    let newShade = gridBox[i].style['background-color'].replace(/[^,]+(?=\))/, opcValue);
                    gridBox[i].style['background-color'] = newShade;
                }
             }
        });
    }
    }
    else{
        for(let i =0; i < gridBox.length; i++){
   
            gridBox[i].addEventListener('mouseover', () =>{
                console.log('im here');
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
    }
}   

resetBtn.addEventListener('click', resetGrid);

function resetGrid(){
    let newGrid = prompt('Enter grid size');
   
    let rows=document.getElementsByClassName('rows');

    for(let i=0; i < gridSize; i++) {
       while(rows[i].firstChild){
            rows[i].removeChild(rows[i].firstChild);
       }
    }
    for(let j=0; j< gridSize; j++){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }

    console.log('it clicked');
    
    makeGrid(newGrid);
}


for(let i =0; i < gridSize*gridSize; i++){
   
    gridBox[i].addEventListener('mouseover', () =>{
        
        console.log('im here');
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