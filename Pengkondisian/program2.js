 let gender = document.getElementById('gender');
        let tinggi = document.getElementById("tinggi");
        let berat = document.getElementById("berat");
        function hitungBMI() {
           if (gender.value == "pria");
           bbi = (tinggi.value - 100) * 0.9;
           if (gender.value == "wanita")
           bbi = (tinggi.value - 100) * 0.85;
           bmi = berat.value / (tinggi.value / 100) / (tinggi.value / 100);
           document.getElementById("hasil").innerText = "Hasilnya adalah: BBI = " + bbi + ", BMI = " + bmi;
        }