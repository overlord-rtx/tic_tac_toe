var counter = 0;
var cells = document.querySelectorAll('#field td');
var header = document.getElementById('header');


function isVictory() {
    var combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var combo of combos) {
        if (cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}


function tap(event) {
    if (counter % 2 == 0) {
        event.target.innerHTML = '<img src="masunya.png" width=100>';
    }
    else {
        event.target.innerHTML = '<img src="sima.png" width=100>';
    }

    if (isVictory()) {
        for (var cell of cells) {
            cell.removeEventListener('click', tap);
        }
        if (counter % 2 == 0) {
            header.innerText = 'Победила Масюня ';
        }
        else {
            header.innerText = 'Победил Сима';
        }
    }
    else if (counter == 8) {
        header.innerText = 'Ничья!';
    }

    counter++;
    event.target.removeEventListener('click', tap);
}


function startGame() {
    header.innerText = 'Симики - Масюники';
    counter = 0;
    for (var cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap);
    }
}

startGame()
