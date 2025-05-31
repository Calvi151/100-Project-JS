function cekHuruf() {
  const h = document.getElementById("huruf").value.toLowerCase();
  const vokal = ["a", "i", "u", "e", "o"];
  let hasil = "";

  if (vokal.includes(h)) {
    hasil = "Huruf vokal";
  } else if (h.match(/[a-z]/)) {
    hasil = "Huruf konsonan";
  } else {
    hasil = "Bukan huruf";
  }

  document.getElementById("hasil").innerText = hasil;
}
