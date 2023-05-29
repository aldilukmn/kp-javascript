// Variabel dengan tipe nilai number
var angka = 87;

// Variabel dengan tipe nilai string
var peserta = 'rendi';

// Variabel dengan tipe nilai boolean
var statusHadir = true;

// Operator matematika
var gaji = "750000";
var lembur = 60000;
var penjumlah = gaji + lembur;
var pengurangan = gaji - lembur;
var perkalian = gaji * lembur;
var pembagian = gaji / lembur;

// Operator logika
var siswa1 = 'ronaldo';
var siswa2 = 'messi';

var cek_kehadiran_kedua_siswa = (siswa1 && siswa2) ? 'Hadir' : 'Absen';

var cek_kehadiran_siswa = (siswa1 || siswa2) ? 'Hadir' : 'Absen';

var siswa_ada = (!siswa1) ? true : false;

var siswa = (siswa1 == siswa2) ? true : false;

// Rumus kubus

function sisi(value) {
    result = value * value * value;
    return result;
}
