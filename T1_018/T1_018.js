// Fungsi-fungsi konversi suhu
const konversi = {
  CtoF: c => (c * 9/5) + 32,
  CtoR: c => c * 4/5,
  FtoC: f => (f - 32) * 5/9,
  FtoR: f => (f - 32) * 4/9,
  RtoC: r => r * 5/4,
  RtoF: r => (r * 9/4) + 32
};

// IIFE (Immediately Invoked Function Expression) agar DOM dipastikan sudah siap
(() => {
  const form   = document.getElementById('formKonversi');
  const hasil  = document.getElementById('hasil');

  form.addEventListener('submit', e => {
    e.preventDefault(); // cegah reload halaman

    const nilai  = parseFloat(document.getElementById('nilaiSuhu').value);
    const tipe   = document.getElementById('tipeKonversi').value;

    if (isNaN(nilai)) {
      hasil.textContent = 'Masukkan angka yang valid!';
      return;
    }

    let output = '';
    switch (tipe) {
      case 'CtoF': output = `${nilai} °C = ${konversi.CtoF(nilai).toFixed(2)} °F`; break;
      case 'CtoR': output = `${nilai} °C = ${konversi.CtoR(nilai).toFixed(2)} °R`; break;
      case 'FtoC': output = `${nilai} °F = ${konversi.FtoC(nilai).toFixed(2)} °C`; break;
      case 'FtoR': output = `${nilai} °F = ${konversi.FtoR(nilai).toFixed(2)} °R`; break;
      case 'RtoC': output = `${nilai} °R = ${konversi.RtoC(nilai).toFixed(2)} °C`; break;
      case 'RtoF': output = `${nilai} °R = ${konversi.RtoF(nilai).toFixed(2)} °F`; break;
      default:     output = 'Pilih jenis konversi!';
    }
    hasil.textContent = output;
  });
})();