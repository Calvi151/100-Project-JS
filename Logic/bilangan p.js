function cekPrima() {
  const angka = parseInt(document.getElementById("angka").value);
  let prima = true;

  if (angka <= 1) {
    prima = false;
  } else {
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        prima = false;
        break;
      }
    }
  }

  document.getElementById("hasil").textContent = prima 
    ? angka + " adalah bilangan prima." 
    : angka + " bukan bilangan prima.";
}
