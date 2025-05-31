function cekDiskon() {
  const total = parseFloat(document.getElementById("total").value);
  let diskon = 0;

  if (total >= 500000) {
    diskon = 20;
  } else if (total >= 300000) {
    diskon = 10;
  } else if (total >= 100000) {
    diskon = 5;
  }

  document.getElementById("hasil").innerText = `Diskon: ${diskon}%`;
}
