const grid = document.querySelector('.grid');

for (i = 1; i <= 16; i++) {
    const div = document.createElement('div');
    div.classList.add('column');
    for (j = 1; j <= 16; j++) {
        const unit = document.createElement('div');
        unit.classList.add('row');
        unit.addEventListener('mouseover', function() {
            unit.style.backgroundColor = "black";
        })
        div.appendChild(unit);
    }
    grid.appendChild(div);
}