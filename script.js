
const grid = document.querySelector('.grid');
const clickHistory = [];

for (let i = 0; i < 25; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.dataset.index = i;
    grid.appendChild(box);
}

grid.addEventListener('click', (e) => {
    if (!e.target.classList.contains('box')) return;
    
    const clickedBox = e.target;
    const boxIndex = clickedBox.dataset.index;
    
    if (clickHistory.length > 0 && clickHistory[clickHistory.length - 1] === boxIndex) {
        return;
    }
    
    clickHistory.push(boxIndex);
    
    updateColors();
});


function updateColors() {
    document.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = 'white';
    });
  
    // color set

    const len = clickHistory.length;
    
    if (len >= 1) {
        const lastBox = document.querySelector(`[data-index="${clickHistory[len-1]}"]`);
        lastBox.style.backgroundColor = 'red';
    }
    
    if (len >= 2) {
        const secondLastBox = document.querySelector(`[data-index="${clickHistory[len-2]}"]`);
        secondLastBox.style.backgroundColor = 'green';
    }
    
    if (len >= 3) {
        const thirdLastBox = document.querySelector(`[data-index="${clickHistory[len-3]}"]`);
        thirdLastBox.style.backgroundColor = 'blue';
    }
} 