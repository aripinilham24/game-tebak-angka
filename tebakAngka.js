import { GenerateSoal } from './main.js'


let angka_x = new GenerateSoal(0, 100).getRandom()
console.log('awal',angka_x)

window.cekJawaban = function () {
    let jawaban = parseInt(document.getElementById('jawaban').value)

    if (jawaban === angka_x) {
        document.getElementById('notif').innerHTML = 'Jawaban Benar!'
        document.getElementById('tebak').style.display = 'none'
        document.getElementById('ulang').style.display = 'flex'
    }
    else if (jawaban < angka_x) {
        document.getElementById('notif').innerHTML = 'Angka Terlalu Kecil!'
        setTimeout(() => { document.getElementById('notif').innerHTML = 'tebak angka "x"' }, 1000)
    }
    else if (jawaban > angka_x) {
        document.getElementById('notif').innerHTML = 'Angka Terlalu Besar!'
        setTimeout(() => { document.getElementById('notif').innerHTML = 'tebak angka "x"' }, 1000)
    } else {
        document.getElementById('notif').innerHTML = 'Jawaban Undifined'
        setTimeout(() => { document.getElementById('notif').innerHTML = 'tebak angka "x"' }, 1000)
    }
}

document.getElementById('jawaban').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        cekJawaban();
    }
});

function resetSoal() {
    angka_x = new GenerateSoal(0, 100).getRandom()
    console.log('Angka yang harus ditebak (reset):', angka_x);
    document.getElementById('jawaban').value = ''
}

window.ulangi = function () {
    resetSoal()
    document.getElementById('notif').innerHTML = 'tebak angka "x"'
    document.getElementById('tebak').style.display = 'flex'
    document.getElementById('ulang').style.display = 'none'
}





