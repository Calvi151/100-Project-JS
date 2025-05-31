function cek() {
  const pass = document.getElementById("pass").value;
  const valid = pass.length >= 8 && /\d/.test(pass);
  document.getElementById("hasil").textContent = valid ? "Password valid" : "Password tidak valid";
}
