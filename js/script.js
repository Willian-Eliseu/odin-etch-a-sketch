const container = document.getElementById('container');
const gridSize = [16];

window.addEventListener('DOMContentLoaded', () => {
    createItems(gridSize[0]);
})

function createItems(size){
    for(let i = 0; i < size; i++){
        
        const row = document.createElement('div');
        row.style.height = `calc(100% / ${size})`;
        row.style.width = '100%';
        row.classList.add('row');
        container.appendChild(row);

        for(let j = 0; j < size; j++){
            const item = document.createElement('div');
            item.style.width = `calc(100% / ${size})`;            
            item.classList.add('item');
            row.appendChild(item);

            item.addEventListener('mouseover', () => {
                item.classList.add('blacked');
            });
        }
    }

    writeBoardHeader(size);
}

function resetBoard(){
    container.innerHTML = '';
    createItems(gridSize[0]);
}

function changeGridSize(){
    const newGridSize = prompt('Enter the new grid size. Minimum 16 and maximum 100.');
    if(newGridSize >= 16 && newGridSize <= 100){
        container.innerHTML = '';
        createItems(newGridSize);
    }else if(newGridSize == null){
        resetBoard();
    }else{
        alert('Invalid Size');
        changeGridSize();
    }
}

function writeBoardHeader(size){
    let gridSizeElement = document.getElementById('grid-size');
    gridSizeElement.innerText = `${size} x ${size}`;
    gridSizeElement.style.textAlign = 'center';
}