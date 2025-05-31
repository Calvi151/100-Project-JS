function tampilkanWaktu() {
  const sekarang = new Date();
  document.getElementById("waktu").textContent = sekarang.toLocaleTimeString();
}
