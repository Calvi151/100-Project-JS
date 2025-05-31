function hitungLuasSegitiga() {
        let alas =parseFloat(document.getElementById("alas").value);
            let tinggi = parseFloat(document.getElementById("tinggi").value);
            let hasil = tinggi * alas * 1/2;
           document.getElementById("hasil").innerText = "hasilnya adalah:\n" + hasil;
        }