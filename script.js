function TambahKeLayar(nilai) {
    let layar = document.getElementById("layar");
    layar.value = layar.value + nilai;
}

function operator(nilai) {
    let layar = document.getElementById("layar");
    layar.value = layar.value + nilai;
}

function HitungNilai() {
    let layar = document.getElementById("layar")
    let hasilakhir = eval(layar.value);
    layar.value = hasilakhir;
}

function HapusSemua() {
    let layar = document.getElementById("layar");
    layar.value = "";
}

function BackSpace() {
    let layar = document.getElementById("layar");
    layar.value = layar.value.slice(0, -1);
}

function HitungNilai() {
    let layar = document.getElementById("layar");
    let teksAngka = layar.value.replace(',', '.');
    let hasilakhir = eval(teksAngka);
    layar.value = hasilakhir;
}