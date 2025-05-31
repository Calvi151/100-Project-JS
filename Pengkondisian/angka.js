const angkaBenar = Math.floor(Math.random() * 10) + 1;

function tebak() {
  const tebakan = parseInt(document.getElementById("tebakan").value);
  const hasil = document.getElementById("hasil");

  if (tebakan === angkaBenar) {
    hasil.textContent = "Tebakan kamu benar!";
  } else {
    hasil.textContent = "Salah! Coba lagi.";
  }
}
