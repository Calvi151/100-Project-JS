function hitungUsia() {
  const tahunLahir = parseInt(document.getElementById("lahir").value);
  const tahunSekarang = new Date().getFullYear();
  const usia = tahunSekarang - tahunLahir;
  const hasil = (usia >= 0 && usia <= 120) 
    ? `Usia Anda: ${usia} tahun`
    : "Tahun lahir tidak valid";
  document.getElementById("hasil").textContent = hasil;
}
