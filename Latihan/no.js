function tampilkanAngka() {
  const daftar = document.getElementById("daftar");
  daftar.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("li");
    item.textContent = i;
    daftar.appendChild(item);
  }
}
