const container = document.querySelector("#container");
for(let i=0;i<256;i++){
    const content = document.createElement("div");
    content.classList.add("grid");
    container.appendChild(content);
    content.addEventListener('mouseenter',() => content.style.backgroundColor = "blue");
}
const btn = document.querySelector('#reset');
btn.addEventListener('click', () => {
    const content = Array.from(document.querySelectorAll('.grid'));
    content.forEach(content => {
        content.style.backgroundColor = "lightblue"; 
    });
    }
);
