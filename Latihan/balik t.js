function balik() {
  const teks = document.getElementById("teks").value;
  const hasil = teks.split('').reverse().join('');
  document.getElementById("hasil").textContent = hasil;
}
