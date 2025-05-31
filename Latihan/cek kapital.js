function cek() {
  const huruf = document.getElementById("huruf").value;
  const kapital = huruf >= 'A' && huruf <= 'Z';
  document.getElementById("hasil").textContent = kapital ? "Huruf Kapital" : "Bukan Huruf Kapital";
}
