function hitung() {
  const a = parseFloat(document.getElementById("basis").value);
  const b = parseFloat(document.getElementById("pangkat").value);
  document.getElementById("hasil").textContent = `${a} pangkat ${b} = ${Math.pow(a, b)}`;
}
