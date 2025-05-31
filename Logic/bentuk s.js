function cekSegitiga() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  let hasil = "";

  if (a === b && b === c) {
    hasil = "Segitiga sama sisi";
  } else if (a === b || b === c || a === c) {
    hasil = "Segitiga sama kaki";
  } else {
    hasil = "Segitiga sembarang";
  }

  document.getElementById("hasil").innerText = hasil;
}
