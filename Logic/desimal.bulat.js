function cek() {
  const x = parseFloat(document.getElementById("angka").value);
  const hasil = Number.isInteger(x) ? "Bulat" : "Desimal";
  document.getElementById("hasil").textContent = `Angka tersebut adalah ${hasil}`;
}
