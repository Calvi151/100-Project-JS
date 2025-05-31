  function hitungTrapesium() {
            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);
            let c = parseFloat(document.getElementById("c").value);
            let d = parseFloat(document.getElementById("d").value);
            let tinggi = parseFloat(document.getElementById("tinggi").value);
            let luas = 1/2 * (a + b) * tinggi;
            let keliling = a + b + c + d;
            document.getElementById("hasil").innerText = "Luasnya adalah: " + luas + " \nkelilingnya adalah: " + keliling;
        }