// Fungsi bawaan dari modul tetap dipertahankan
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// Fungsi baru untuk memproses input, validasi, dan output HTML
function prosesNilai() {
  const tugas = Number(document.getElementById("inputTugas").value);
  const uts = Number(document.getElementById("inputUts").value);
  const uas = Number(document.getElementById("inputUas").value);

  // Validasi rentang 0-100
  if (
    tugas < 0 ||
    tugas > 100 ||
    uts < 0 ||
    uts > 100 ||
    uas < 0 ||
    uas > 100
  ) {
    alert("Validasi Gagal: Setiap nilai harus berada pada rentang 0-100.");
    return;
  }

  // Perhitungan
  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  // Menampilkan ke HTML (menggantikan console.log)
  document.getElementById("hasilAkhir").textContent =
    "Nilai akhir: " + akhir.toFixed(2);
  document.getElementById("hasilPredikat").textContent =
    "Predikat: " + predikat;
  document.getElementById("hasilStatus").textContent = "Status: " + status;
}
