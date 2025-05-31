function cekUmur() {
  const umur = parseInt(document.getElementById("umur").value);
  const hasil = umur >= 17 ? "Kamu boleh ikut memilih." : "Kamu belum cukup umur untuk memilih.";
  document.getElementById("hasil").textContent = hasil;
}
