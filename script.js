// 1. Menampilkan teks awal
document.getElementById("Pesan").textContent = "Hello World";
console.log("Hello World");

// 2. Alert dan prompt nama pengguna
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("Pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}

// 3. Fungsi operasi dasar matematika
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// 4. Logika if-else nilai mahasiswa
const inputNilai = prompt("Masukkan nilai (0-100):");
const nilaiMahasiswa = Number(inputNilai);

if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}

// 5. Logika Switch-Case
const inputPilihan = prompt("Masukkan angka 1-5:");
switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}

// 6. Fungsi Cek Bilangan Genap/Ganjil (Dipanggil dari tombol HTML)
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// 7. Fungsi Ubah Warna Latar (Dipanggil dari tombol HTML)
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// 8. Mengambil semua elemen (checkbox) dari HTML yang memiliki class "menu"
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;

  daftarMenu.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ==========================================
// BAGIAN G: EKSPERIMEN MANDIRI
// ==========================================

// POIN 1 & 9: Operasi Dasar dengan Prompt & Validasi Kosong
function operasiDariPrompt() {
  const input1 = prompt("Masukkan angka pertama untuk operasi dasar:");
  const input2 = prompt("Masukkan angka kedua untuk operasi dasar:");

  if (
    input1 === null ||
    input2 === null ||
    input1.trim() === "" ||
    input2.trim() === ""
  ) {
    alert("Kolom operasi dasar tidak boleh kosong!");
    return;
  }

  const a = Number(input1);
  const b = Number(input2);

  console.log("=== Hasil Eksperimen Poin 1 & 9 ===");
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
}
// Panggil fungsinya agar langsung jalan saat halaman direfresh
operasiDariPrompt();

// POIN 7: Perulangan Tabel Perkalian 7
function tabelPerkalianTujuh() {
  console.log("=== Hasil Eksperimen Poin 7 ===");
  console.log("Tabel Perkalian 7:");
  for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i);
  }
}
tabelPerkalianTujuh();

// POIN 8: Function cekGenap yang mengembalikan true/false
function cekGenapPoin8(angka) {
  if (angka % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("=== Hasil Eksperimen Poin 8 ===");
console.log("Apakah 10 genap?", cekGenapPoin8(10));
console.log("Apakah 7 genap?", cekGenapPoin8(7));

// POIN 11: Function untuk tombol hide/show HTML
function toggleTeks() {
  const elemen = document.getElementById("teksRahasia");

  if (elemen.style.display === "none") {
    elemen.style.display = "block";
  } else {
    elemen.style.display = "none";
  }
}
