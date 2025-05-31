function konversiNilai() {
  const nilai = parseInt(document.getElementById("nilai").value);
  let huruf;

  if (nilai >= 90 && nilai <= 100) {
    huruf = "A";
  } else if (nilai >= 80) {
    huruf = "B";
  } else if (nilai >= 70) {
    huruf = "C";
  } else if (nilai >= 60) {
    huruf = "D";
  } else if (nilai >= 0) {
    huruf = "E";
  } else {
    huruf = "Nilai tidak valid";
  }

  document.getElementById("hasil").textContent = 
    typeof huruf === "string" && huruf.length === 1 
    ? "Nilai huruf: " + huruf 
    : huruf;
}
