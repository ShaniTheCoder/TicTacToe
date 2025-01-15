let slots = [
    document.getElementById("slot1"),
    document.getElementById("slot2"),
    document.getElementById("slot3"),
    document.getElementById("slot4"),
    document.getElementById("slot5"),
    document.getElementById("slot6"),
    document.getElementById("slot7"),
    document.getElementById("slot8"),
    document.getElementById("slot9")
];
var turn = "X";
let current_turn = document.getElementById("turn");
current_turn.innerHTML = turn;
function trigger(val) {
    if (slots[val].innerHTML == "") {
        slots[val].innerHTML = turn;
        check_board();
        turn = turn == "X" ? "O" : "X";
        current_turn.innerHTML = turn;
    }
    else {
        toast(`Slot taken, choose another`);
    }
}
function check_board() {
    let str = `${turn} is the winner`;
    // Horizontal checks
    if (slots[0].innerHTML === turn && slots[1].innerHTML === turn && slots[2].innerHTML === turn) {
        toast(str);
    }
    else if (slots[3].innerHTML === turn && slots[4].innerHTML === turn && slots[5].innerHTML === turn) {
        toast(str);
    }
    else if (slots[6].innerHTML === turn && slots[7].innerHTML === turn && slots[8].innerHTML === turn) {
        toast(str);
    }
    // Vertical checks
    else if (slots[0].innerHTML === turn && slots[3].innerHTML === turn && slots[6].innerHTML === turn) {
        toast(str);
    }
    else if (slots[1].innerHTML === turn && slots[4].innerHTML === turn && slots[7].innerHTML === turn) {
        toast(str);
    }
    else if (slots[2].innerHTML === turn && slots[5].innerHTML === turn && slots[8].innerHTML === turn) {
        toast(str);
    }
    // Diagonal checks
    else if (slots[0].innerHTML === turn && slots[4].innerHTML === turn && slots[8].innerHTML === turn) {
        toast(str);
    }
    else if (slots[2].innerHTML === turn && slots[4].innerHTML === turn && slots[6].innerHTML === turn) {
        toast(str);
    }
}
function clear_board() {
    slots.forEach(element => {
        element.innerHTML = "";
        toast("board clear!");
    });
}
function toast(str) {
    let x = document.getElementById("toastBar");
    x.innerHTML = str;
    x.className = "show";
    setTimeout(function () { x.classList.remove("show"); }, 2000);
}