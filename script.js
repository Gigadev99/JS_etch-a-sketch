const grid = document.querySelector('.grid');
var blackflag = 0;
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
    document.querySelector('#lgbt').classList.remove('clicked')
    document.querySelector('#come').classList.remove('clicked')
    blackflag = 0
}
function BLM(nigga, a, b, c) {
    nigga.style.backgroundColor = `hsl(${a}, ${b}%, ${c}%)`
}

function lgbt(q) {
    q.target.classList.toggle('clicked')
    document.querySelector('#come').classList.remove('clicked')
    blackflag += 1;
    let units = document.querySelectorAll('.grid > div > div');
    if (blackflag % 2 == 0) {
        units.forEach(unit => unit.addEventListener('mouseover', () => unit.style.backgroundColor = "black"))
        return
    }
    units.forEach(unit => {
        var blackness = 0;
        var h;
        var s;
        var l;
        unit.addEventListener('mouseover', () => {    
            blackness += 10;
            h = Math.floor(Math.random() * 360);
            s = Math.floor(Math.random() * 101);
            l = 100 - blackness;
            BLM(unit, h, s, l)
        }) 
    })
} 

function come() {
    let units = document.querySelectorAll('.grid > div > div');
    units.forEach(unit => unit.addEventListener('mouseover', () => unit.style.backgroundColor = "white"))
    document.querySelector('#come').classList.toggle('clicked')
}

createGrid(16)
document.querySelector('#size').onclick = size;
document.querySelector('#reset').onclick = reset;
document.querySelector('#lgbt').onclick = lgbt;
document.querySelector('#come').onclick = come;
