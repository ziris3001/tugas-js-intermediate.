// Data awal mahasiswa
const mahasiswa = [
  { nama: "Andi", nilai: 85, jurusan: "Informatika" },
  { nama: "Budi", nilai: 70, jurusan: "Sistem Informasi" },
  { nama: "Citra", nilai: 90, jurusan: "Informatika" },
  { nama: "Dewi", nilai: 60, jurusan: "Teknik Elektro" }
];

// --- Array Method ---
// soal.3
const daftarNama = mahasiswa.map(({ nama }) => nama); // => arrow fungsion / fungsion terbaru dari ES6

// soal.3
const mahasiswaLulus = mahasiswa.filter(({ nilai }) => nilai >= 75).map(({ nama }) => nama);

// soal.3
const rataRata = mahasiswa.reduce((total, { nilai }) => total + nilai, 0) / mahasiswa.length;

console.log("Daftar Mahasiswa:", daftarNama);
console.log("Mahasiswa Lulus:", mahasiswaLulus);
console.log("Rata-rata Nilai:", rataRata);

// soal.4
class Mahasiswa {
  constructor(nama, nilai, jurusan) {
    this.nama = nama;
    this.nilai = nilai;
    this.jurusan = jurusan;
  }

  getStatus() {
    return this.nilai >= 75 ? "Lulus" : "Tidak Lulus";
  }
}

class MahasiswaBeasiswa extends Mahasiswa {
  constructor(nama, nilai, jurusan) {
    super(nama, nilai, jurusan);
    this.beasiswa = true;
  }
}

const mhs1 = new Mahasiswa("Andi", 85, "Informatika");
const mhs2 = new Mahasiswa("Budi", 70, "Sistem Informasi");

console.log(`Status ${mhs1.nama}: ${mhs1.getStatus()}`);
console.log(`Status ${mhs2.nama}: ${mhs2.getStatus()}`);

// soal.5
const getMahasiswa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sukses = false; // coba ganti false untuk simulasi error
      if (sukses) {
        resolve(mahasiswa);
      } else {
        reject("Gagal mengambil data dari server");
      }
    }, 1000);
  });
};

// soal.6
const fetchMahasiswa = async () => {
  try {
    const data = await getMahasiswa();
    console.log("Data berhasil diambil dari server", data);
  } catch (error) {
    console.error(error);
  }
};

fetchMahasiswa();
