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
