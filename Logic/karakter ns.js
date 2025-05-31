function hitung() {
  const teks = document.getElementById("teks").value;
  const jumlah = teks.replace(/\s/g, "").length;
  document.getElementById("hasil").textContent = `Jumlah karakter non-spasi: ${jumlah}`;
}
