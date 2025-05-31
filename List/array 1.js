// Membuat array sederhana
let buah = ["apel", "jeruk", "mangga"];

// Ambil elemen <ul> dari HTML
const ul = document.getElementById("daftar-buah");

// Tampilkan isi array ke dalam elemen <ul>
for (let i = 0; i < buah.length; i++) {
  let li = document.createElement("li");
  li.textContent = buah[i];
  ul.appendChild(li);
}
