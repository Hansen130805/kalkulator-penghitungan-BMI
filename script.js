function hitungBMI() {
    // Mengambil nilai dari input
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    // Menghitung BMI
    const bmi = berat / (tinggi * tinggi);
    let kategori = '';

    // Menentukan kategori BMI
    if (bmi < 18.5) {
        kategori = 'Kurus';
    } else if (bmi < 24.9) {
        kategori = 'Normal';
    } else if (bmi < 29.9) {
        kategori = 'Kelebihan berat badan';
    } else {
        kategori = 'Obesitas';
    }

    // Menampilkan hasil
    document.getElementById('result').innerHTML = `Indeks Massa Tubuh (BMI) Anda adalah: <strong>${bmi.toFixed(2)}</strong><br>Kategori: <strong>${kategori}</strong>`;
}
