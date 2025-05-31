function hitungKata() {
  const kalimat = document.getElementById("kalimat").value.trim();
  const kata = kalimat ? kalimat.split(/\s+/).length : 0;
  document.getElementById("hasil").textContent = "Jumlah kata: " + kata;
}
