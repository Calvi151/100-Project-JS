 function cekkabisat(){
           let tahun = Number(document.getElementById("angka:").value);
            if (tahun.value % 4 == 0)
           document.getElemenid("hasil").innerText = tahun  +   "\tini adalah tahun kabisat";
           
           else{
               document.getElementById("hasil").innerText = tahun + "\tini bukan tahun kabisat";
           }
        }