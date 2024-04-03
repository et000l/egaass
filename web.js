let buku = [
    {"nama": "sherlock", "jumlah":2},
    {"nama": "lupin", "jumlah":2},
    {"nama": "aladin", "jumlah":2}
];

function pinjamBuku() {
    let jumlah = document.getElementById("jumlah").value;
    let selectedBuku = document.getElementById("buku").value;
    let found = false;
    
    if (jumlah === "") {
        alert("Masukkan jumlah buku!");
        return;
    }
    
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === selectedBuku) {
            found = true;
            if (parseInt(jumlah) > buku[i].jumlah) {
                alert("Jumlah buku tidak tersedia!");
            } else {
                alert("Silahkan ambil buku Anda.");
            }
            break;
        }
    }
    
    if (!found) {
        alert("Buku tidak ditemukan!");
    }
}