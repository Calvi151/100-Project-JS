function hitungFaktorial() {
  let angka = parseInt(document.getElementById("angka").value);
  let hasil = 1;

  if (angka < 0) {
    document.getElementById("hasil").textContent = "Faktorial tidak didefinisikan untuk angka negatif.";
    return;
  }

  for (let i = 1; i <= angka; i++) {
    hasil *= i;
  }

  document.getElementById("hasil").textContent = "Faktorial dari " + angka + " adalah " + hasil;
}
