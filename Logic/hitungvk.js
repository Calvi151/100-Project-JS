function hitungVokal() {
  const teks = document.getElementById("teks").value.toLowerCase();
  const vokal = teks.match(/[aeiou]/g);
  const jumlah = vokal ? vokal.length : 0;
  document.getElementById("hasil").textContent = "Jumlah huruf vokal: " + jumlah;
}
