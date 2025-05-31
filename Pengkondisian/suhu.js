function cekSuhu() {
  const suhu = parseFloat(document.getElementById("suhu").value);
  let hasil = "";

  if (suhu < 10) {
    hasil = "Dingin";
  } else if (suhu < 25) {
    hasil = "Sejuk";
  } else if (suhu < 35) {
    hasil = "Hangat";
  } else {
    hasil = "Panas";
  }

  document.getElementById("hasil").innerText = hasil;
}
