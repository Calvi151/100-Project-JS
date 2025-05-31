function nilairapot(){
    const angka = Number(document.getElementById("angka").value);
    if (angka > 90){
        document.getElementById("hasil").innerText = angka + "\tNilai A"
    if (angka < 80)
        document.getElementById("hasil").innerText = angka + "\tNilai B"
    if (angka < 80)
        document.getElementById("hasil").innerText = angka + "\tNilai C"}
    else { (
    document.getElementById("hasil").innerText = angka + "\tNilai kamu  Kecil coba lagi >-<");
    };
}