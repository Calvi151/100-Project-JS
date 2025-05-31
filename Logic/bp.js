function cek() {
  const x = parseInt(document.getElementById("angka").value);
  const akar = Math.sqrt(x);
  const hasil = Number.isInteger(akar) ? "Persegi Sempurna" : "Bukan";
  document.getElementById("hasil").textContent = hasil;
}
