function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("hasil").innerText = "Login berhasil!";
  } else {
    document.getElementById("hasil").innerText = "Username atau password salah.";
  }
}
