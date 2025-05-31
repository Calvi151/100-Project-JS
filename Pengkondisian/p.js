function positifdannegatif(){
    const angka = document.getElementById("angka").value;
    if (angka > 0)
    document.getElementById("hasil").innerText = angka + "\tini adalah angka positif"
    
    if (angka < 0)
        document.getElementById("hasil").innerText = angka + "\t ini adalah angka negatif"
}

