import { GenerateSoal } from "./main.js";

let bil_a = new GenerateSoal(0, 100).getRandom()
let bil_b = new GenerateSoal(0, 100).getRandom()

let skor = 0;

let jawaban = bil_a + bil_b;
document.getElementById("label-penjumlahan").innerHTML = `jawaban dari: ${bil_a} + ${bil_b}`;

window.penjumlahan = function () {
    let input = parseInt(document.getElementById("input").value);
    if (input === jawaban) {
        document.getElementById("notif").innerHTML = 'Jawaban Benar!';
        skor += 10;
        resetSoal();
    } else {
        document.getElementById("notif").innerHTML = `Jawaban Salah!`;
        setTimeout(() => {
            document.querySelector('.gameOver').style.display = 'flex';
            document.getElementById("notif-go").innerHTML = `Game Over!`;
            document.querySelector('.penjumlahan').style.display = 'none';
        }, 1000);
    }
    setTimeout(() => (document.getElementById('notif').innerHTML = ''), 500);
    document.getElementById("skor").innerHTML = `skor: ${skor}`;
}

function resetSoal() {
    let bil_a = new GenerateSoal(0, 100).getRandom()
    let bil_b = new GenerateSoal(0, 100).getRandom()
    jawaban = bil_a + bil_b;
    document.getElementById("label-penjumlahan").innerHTML = `Jawaban dari: ${bil_a} + ${bil_b}`;
    document.getElementById("input").value = '';
}

document.getElementById('input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        penjumlahan();
    }
});

window.ulang = function () {
    skor = 0;
    resetSoal();
    document.getElementById("skor").innerHTML = `skor: ${skor}`;
    document.querySelector('.penjumlahan').style.display = 'flex';
    document.querySelector('.gameOver').style.display = 'none';
}