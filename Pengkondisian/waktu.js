function konversi() {
  const jam = parseFloat(document.getElementById("jam").value);
  const detik = jam * 3600;
  document.getElementById("hasil").textContent = jam + " jam = " + detik + " detik.";
}
