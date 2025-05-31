function cek() {
  const n = parseInt(document.getElementById("angka").value);
  let hasil = "Bukan kelipatan 3 atau 7";
  if (n % 3 === 0 && n % 7 === 0) hasil = "Kelipatan 3 dan 7";
  else if (n % 3 === 0) hasil = "Kelipatan 3";
  else if (n % 7 === 0) hasil = "Kelipatan 7";
  document.getElementById("hasil").textContent = hasil;
}
