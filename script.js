const grid = document.querySelector('.grid');

function reset() {
    document.querySelectorAll('.grid > div > div').forEach(div => div.style.backgroundColor = 'white');   
}
function del() {
    document.querySelectorAll('.grid div').forEach(div => div.remove());   
}
function createGrid(number) {
    for (i = 1; i <= number; i++) {
        const div = document.createElement('div');
        div.classList.add('column');
        for (j = 1; j <= number; j++) {
            const unit = document.createElement('div');
            unit.classList.add('row');
            unit.addEventListener('mouseover', () => unit.style.backgroundColor = "black")
            div.appendChild(unit);
        }
        grid.appendChild(div);
    }
}
function size() { 
    let answer = prompt("Type the size in pixels between 1 and 100");
    if (answer > 100 || answer < 1 || isNaN(answer)) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    del()
    createGrid(answer)
}
createGrid(16)
document.querySelector('#size').onclick = size;
document.querySelector('#reset').onclick = reset;
