function acakWarna() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const warna = `rgb(${r}, ${g}, ${b})`;

  const judul = document.getElementById("judul");
  judul.style.color = warna;

  document.getElementById("kodeWarna").textContent = `Warna teks: ${warna}`;
}
