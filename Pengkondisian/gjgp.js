function ganjilgenap() {
    const angka = Number(document.getElementById("number").value);
    if (angka % 2 == 0)
    document.getElementById("hasil").innerText = angka +  "\tini angka genap";

    else {
    document.getElementById("hasil").innerText = angka + "\tini angka ganjil";
    }

}