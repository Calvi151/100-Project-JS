function ulangi() {
  const teks = document.getElementById("teks").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  document.getElementById("hasil").textContent = teks.repeat(jumlah);
}
