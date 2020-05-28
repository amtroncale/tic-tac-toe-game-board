let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    event.target.textContent = 'X'
}

function display_input(square) {
    var element = document.getElementById(square);
    if (element.innerHTML != "") return;

    if (player_one == 1) {
        element.innerHTML = "X";
        player_one = 0;
    } else {
        element.innerHTML = "O";
        player_one = 1;
    }
}

