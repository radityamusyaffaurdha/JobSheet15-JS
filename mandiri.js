let customer = prompt("Masukkan nama pembeli: ");
let barang = prompt("Masukkan barang yang dibeli:");
let harga = Number(prompt("Masukkan Harga Barang:"));
let jumlahpembelian = Number(prompt("Masukkan Jumlah Pembelian:"));
let uanguntukbayar = Number(prompt("Masukkan Jumlah Uang yang dibayar:"));

let totalharga = harga * jumlahpembelian;
let uangkembalian = uanguntukbayar - totalharga;

alert(
    "======= NOTE =======\n" +
    "Nama Pembeli:" + customer + "\n" +
    "Produk:" + barang + "\n" +
    "Harga:" + harga + "\n" +
    "Jumlah Barang:" + jumlahpembelian + "\n" +
    "---------------------------\n" +
    "Total: Rp." + totalharga + "\n" +
    "Pembayaran(Tunai/Non): Rp." + uanguntukbayar + "\n" +
    "Kembalian: Rp." + uangkembalian + "\n" +
    "===== THANKS FOR SHOPPING!! ====="
)
