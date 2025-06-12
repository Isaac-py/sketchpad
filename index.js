const container = document.querySelector("#container");
const btn = document.querySelector('#reset');

function createGrid(size){
    container.innerHTML = '';


    const cellSize = 600/size;
    for(let i=0;i<size*size;i++){
        const content = document.createElement("div");
        content.classList.add("grid");
        content.style.width = cellSize+'px';
        content.style.height = cellSize+'px';
        container.appendChild(content);
        content.addEventListener('mouseenter',() => content.style.backgroundColor = "blue");
    }

}
createGrid(16);
btn.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (1–100):");
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
    }
);
