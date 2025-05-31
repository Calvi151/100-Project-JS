function konversi() {
  let total = parseInt(document.getElementById("detik").value);
  const jam = Math.floor(total / 3600);
  total %= 3600;
  const menit = Math.floor(total / 60);
  const detik = total % 60;
  document.getElementById("hasil").textContent = `${jam} jam ${menit} menit ${detik} detik`;
}
