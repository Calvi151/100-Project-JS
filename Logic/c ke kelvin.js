function konversi() {
  const celcius = parseFloat(document.getElementById("celcius").value);
  
  if (isNaN(celcius)) {
    document.getElementById("hasil").innerText = "Masukkan suhu yang valid!";
    return;
  }

  const kelvin = celcius + 273.15;
  document.getElementById("hasil").innerText = `${celcius}°C = ${kelvin.toFixed(2)} K`;
}
