function hitungDigit() {
  const input = document.getElementById("angka").value;
  const angka = Math.abs(parseInt(input));

  if (isNaN(angka) || angka === 0) {
    document.getElementById("hasil").textContent = "Masukkan angka lebih dari 0";
    return;
  }

  const digit = angka.toString().length;
  const digitUtama = Math.floor((digit - 1) / 3);

  document.getElementById("hasil").textContent = `Jumlah digit utama: ${digitUtama}`;
}
