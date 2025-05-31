function ceklampu(){
  const lampu = document.getElementById("lampu").value;
  let hasil = lampu;
  if (lampu === "hijau") {
    document.getElementById("hasil").innerText = hasil + "\tGaskan itu kode";
  }
  else if (lampu === "merah") {
    document.getElementById("hasil").innerText = hasil + "\tnice try";
  } else if (lampu === "kuning") { 
    document.getElementById("hasil").innerText = hasil + "\tHati-hati karena ada peringatan";
  } else {
    document.getElementById("hasil").innerText =hasil +  "\tKode lampu tidak dikenali"
  }
}