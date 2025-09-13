const container = document.getElementById('container');
const gridSize = [16];
const colors = [
    "#E0B0DD",
    "#2C3C9A",
    "#F589B9",
    "#8159E1",
    "#A3C828",
    "#5E9ACD",
    "#14479E",
    "#DB5053",
    "#D91694",
    "#FC2C23"
];
const count = {
    value: 0,
    colored: true,
    trace: true
};

window.addEventListener('DOMContentLoaded', () => {
    createItems(gridSize[0]);
})

function changeColor() {
    count.colored = !count.colored;
}

function createItems(size) {
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {

        const row = document.createElement('div');
        row.style.height = `calc(100% / ${size})`;
        row.style.width = '100%';
        row.classList.add('row');
        container.appendChild(row);

        for (let j = 0; j < size; j++) {
            const item = document.createElement('div');
            item.style.width = `calc(100% / ${size})`;
            item.classList.add('item');
            row.appendChild(item);

            if (count.trace) {
                item.addEventListener('mouseover', () => {
                    if (count.colored) {
                        item.style.backgroundColor = colors[count.value];
                        count.value++;
                        if (count.value === colors.length) {
                            count.value = 0;
                        }
                    } else {
                        item.classList.add('blacked');
                    }
                });
            } else {
                item.addEventListener('click', () => {
                    if (count.colored) {
                        item.style.backgroundColor = colors[count.value];
                        count.value++;
                        if (count.value === colors.length) {
                            count.value = 0;
                        }
                    } else {
                        item.classList.add('blacked');
                    }
                });
            }


        }
    }

    writeBoardHeader(size);
}

function resetBoard() {
    container.innerHTML = '';
    createItems(gridSize[0]);
}

function changeGridSize() {
    const newGridSize = prompt('Enter the new grid size. Minimum 16 and maximum 100.');
    if (newGridSize >= 16 && newGridSize <= 100) {
        
        createItems(newGridSize);
    } else if (newGridSize == null) {
        resetBoard();
    } else {
        alert('Invalid Size');
        changeGridSize();
    }
}

function changeTraceMethod() {
    count.trace = !count.trace;
    createItems(gridSize[0]);
}

function writeBoardHeader(size) {
    let gridSizeElement = document.getElementById('grid-size');
    gridSizeElement.innerText = `${size} x ${size}`;
    gridSizeElement.style.textAlign = 'center';
}