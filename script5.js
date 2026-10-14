//untuk buat variable nya
let namaproduk = prompt("Masukkan Produk:");
let hargaproduk = Number(prompt("Masukkan Harga Produk:"));
let jumlahpembelian = Number(prompt("Masukkan Jumlah Pembelian:"));

//untuk ngitungnya
let totalharga = hargaproduk * jumlahpembelian;

alert(
    "===Nota===\n" +
    "Produk:" + namaproduk + "\n" +
    "Harga:" + hargaproduk + "\n" +
    "Jumlah:" + jumlahpembelian + "\n" +
    "------------\n" +
    "Total Harga Belanja: Rp." + totalharga + "\n" +
    "========="
)
