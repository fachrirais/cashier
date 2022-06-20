const form = document.querySelector("form");
let ErrorMassage = [];

function subTotal(harga, barang) {
  const total = harga * barang;
  return total;
}

function cekDiskon(subtotal) {
  let Diskon;

  if (subTotal >= 250000) {
    Diskon = 25;
  } else if (subTotal >= 200000) {
    Diskon = 20;
  } else if (subTotal >= 150000) {
    Diskon = 15;
  } else if (subtotal >= 100000) {
    Diskon = 10;
  } else if (subtotal >= 50000) {
    Diskon = 5;
  } else {
    Diskon = 0;
  }
  return Diskon;
}

function nilaiDiskon(harga, diskon) {
  return harga * (diskon / 100);
}

function jumlahPembayaran(total, nilaiDis) {
  return total - nilaiDis;
}

function validation(kodeBarang, harga, jumlah, nama) {
  if (kodeBarang == "") {
    ErrorMassage.push("Kode Barang Harus di Isi !!");
  }
  if (harga == "") {
    ErrorMassage.push("Harga Tidak Boleh Nol !!");
  }
  if (jumlah == "") {
    ErrorMassage.push("Jumlah Barang Tidak Boleh Nol !!");
  }
  if (nama == "") {
    ErrorMassage.push("Nama Barang Harus di Isi !!");
  }
}

form.addEventListener("submit", (event) => {
  let kodeBarang = document.getElementById("code").value;
  let harga = document.getElementById("price").value;
  let jumlahJual = document.getElementById("total").value;
  let namaBarang = document.getElementById("name").value;

  validation(kodeBarang, harga, jumlahJual, namaBarang);

  if (ErrorMassage.length < 1) {
    const total = subTotal(harga, jumlahJual);
    const diskon = cekDiskon(total);
    const nilaiDis = nilaiDiskon(total, diskon);
    const totalBayar = jumlahPembayaran(total, nilaiDis);

    document.getElementById("subtotal").value = `Rp ${total}`;
    document.getElementById("discount").value = `${diskon}%`;
    document.getElementById("total-discount").value = `Rp ${nilaiDis},-`;
    document.getElementById("total-price").value = `Rp ${totalBayar},-`;
  } else {
    alert(ErrorMassage.join("/n"));
    ErrorMassage = [];
  }
});
