function bandingkan() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  let hasil = "";
  if (a > b) hasil = "Angka pertama lebih besar";
  else if (a < b) hasil = "Angka kedua lebih besar";
  else hasil = "Keduanya sama besar";
  document.getElementById("hasil").textContent = hasil;
}
