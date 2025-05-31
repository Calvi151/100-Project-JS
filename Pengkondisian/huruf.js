function checkcase() {
    var input = document.getElementById("inputText").value;
    if (input === "") {
        document.getElementById("result").innerText = "Masukkan huruf terlebih dahulu";
        return;
    }
    var char = input.charAt(0);
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        document.getElementById("result").innerText = char + "\tHuruf Besar";
    } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        document.getElementById("result").innerText = char + "\tHuruf Kecil";
    } else {
        document.getElementById("result").innerText = char + "\tBukan Huruf";
    }
}