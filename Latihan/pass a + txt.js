function cekPassword() {
  const pass = document.getElementById("pass").value;
  const konfirmasi = document.getElementById("konfirmasi").value;

  const adaHuruf = /[a-zA-Z]/.test(pass);
  const adaAngka = /[0-9]/.test(pass);

  let pesan = "";

  if (pass.length < 6) {
    pesan = "Password minimal 6 karakter.";
  } else if (!adaHuruf || !adaAngka) {
    pesan = "Password harus mengandung huruf dan angka.";
  } else if (pass !== konfirmasi) {
    pesan = "Password dan konfirmasi tidak cocok.";
  } else {
    pesan = "Password valid dan cocok!";
  }

  document.getElementById("hasil").textContent = pesan;
}
