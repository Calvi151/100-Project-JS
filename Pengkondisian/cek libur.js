function cekHari() {
  const hari = document.getElementById("hari").value.toLowerCase();
  let hasil = "";

  switch(hari) {
    case "sabtu":
    case "minggu":
      hasil = "Akhir Pekan";
      break;
    case "senin":
    case "selasa":
    case "rabu":
    case "kamis":
    case "jumat":
      hasil = "Hari Kerja";
      break;
    default:
      hasil = "Hari tidak dikenali";
  }

  document.getElementById("hasil").innerText = hasil;
}
