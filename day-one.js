// Variabel dengan tipe nilai number
var angka = 87;

// Variabel dengan tipe nilai string
var peserta = "rendi";

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
var siswa1 = "ronaldo";
var siswa2 = "messi";

var cek_kehadiran_kedua_siswa = siswa1 && siswa2 ? "Hadir" : "Absen";

var cek_kehadiran_siswa = siswa1 || siswa2 ? "Hadir" : "Absen";

var siswa_ada = !siswa1 ? true : false;

var siswa = siswa1 == siswa2 ? true : false;

// Rumus kubus

function sisi(value) {
  result = value * value * value;
  return result;
}

// var umur = 18;
// var tinggi = 100;

// if (umur < 17) {
//     if (tinggi < 150) {
//         console.log("Dilarang Naik")
//     } else {
//         console.log("Boleh Naik")
//     }
// } else {
//     console.log("Boleh Naik")
// }

// var value = null;

// if (value) {
//     console.log(value);
// } else {
//     console.log("tests");
// }

// for (var x = 0; x <= 10; x++ ) {
//     console.log(x);
// }

// var x = 0;
// while(x <= 10) {
//     console.log(x);
//     x++;
// }

// var pola = '';

// for (var x = 1; x <= 10; x++) {
//     pola += x + ' ';
//     console.log(pola);
// }

// for (var x = 1; x <= 5; x++) {
//     var temp = '';
//     for (var y = 1; y <= x; y++) {
//         temp = temp + y;
//     }
//     console.log(temp);
// }

// var x = undefined;

// while (x) {
//     if (x > 5)
//     break;
// }

// var total = 0;
// for(var i =1; i <=5; i++) {
// total = total + i;
// }

// console.log(total)

// function minMax(value) {
//   var min = value[0]; // 12
//   var max = value[0]; // 12

//   for (var x = 0; x < value.length; x++) {
//     if (min > value[x]) { //[12, 5, 5, 2, 12, 1, 15, 5]
//       min = value[x];
//     }
//     if (max < value[x]) {
//       max = value[x];
//     }
//   }
//   return {
//     min: min,
//     max: max,
//   };
// }

// var array = [2, 5, 5, 2, 12, 1, 15, 5];

// console.log(minMax(array));

// function vokal(value) {
//     var result = {
//         a : 0,
//         i : 0,
//         u : 0,
//         e : 0,
//         o : 0,
//     }

//     for (var i = 0; i < value.length; i++) {
//         if (value[i] === 'a') {
//             result.a++;
//         } else if (value[i] === 'i') {
//             result.i++;
//         }else if (value[i] === 'u') {
//             result.u++;
//         } else if (value[i] === 'e') {
//             result.e++;
//         } else if (value[i] === 'o') {
//             result.o++;
//         }
//     }

//     return result;
// }

// console.log(vokal("makan nasi goreng"))

// function maxAvg(value) {
//     var result = [];

//     for (var i = 0; i < value.length; i++) {
//         result.push(avg(value[i]))
//     }

//     var max = result[0];
//     var index = 0;

//     for (var i = 0; i < result.length; i++) {
//         if (max < result[i]) {
//             max = result[i];
//             index = i + 1;
//         }
//     }

//     var isResult = "Array ke " + index + " merupakan rata-rata terbesar";

//     return isResult;
// }

// function avg(value) {
//     total = 0;

//     for (var x = 0; x < value.length; x++) {
//         total += value[x];
//     }
//     return total / value.length;
// }

// var array = [
//     [10, 3, 5, 7, 5],
//     [5, 116, 4, 1, 2],
//     [7, 8, 12, 10, 5],
// ]

// console.log(maxAvg(array));

// var x = 'abc' - 5;

// console.log(x);

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(array.slice(9))

// var array = ["a", "b", "c"];

// console.log(array[0] + array[1] + array[2])
// x = 20

// console.log(x);

// var x = 10;

// var arr = [];
// var newArr = [];
// var num = 1;
// var whileArr = [];
// for (var i = 1; i <= 10; i++) {
//   arr.push(i);
//   newArr.push(i * 2);
// }

// while (num <= 10) {
//   whileArr.unshift(num * 3);
//   num++;
// }

// console.log(arr);
// console.log(newArr);
// console.log(whileArr);

// for (var i = 1; i <= 5; i++) {
//   var temp = '';
//   var num = 1;
//   while (num <= i) {
//     temp += num;
//     num++
//   }

//   var arr = temp.split('');
//   var n = [];

//   var newArr = arr.forEach(function(value) {
//     n.push(value)
//   });

//   console.log(n);

// }

// var arr = [1, 2, 3, 4, 5];
// var arr2 = [10, 9, 8, 7, 6];

// var newArr =  arr.concat(arr2);

// console.log(newArr.sort((a, b) => a-b));

var murid = [
  [1, "Vincent", 3.5],
  [2, "Udin", 3.0],
  [3, "Mamang", 2.1],
];

// 1. Vincent, IPK = 3.5, Lulus
// 2. Udin, IPK = 3.0, Lulus
// 3. Mamang, IPK = 2.1, Gagal
// Syarat lulus IPK Minimum 3.0


// for (var x = 0; x < murid.length; x++) {
//   var temp = '';

//   if (murid[x][2] >= 3) {
//     temp = 'Lulus';
//   } else {
//     temp = 'Gagal';
//   }
//   console.log(x+1 + '. ' +murid[x][1] + ', IPK = ' + murid[x][2], temp);
// }


function kelulusan(value) {
  for (var x = 0; x < value.length; x++) {
    var temp = "";

    if (value[x][2] >= 3.0) {
      temp = "Lulus";
    } else {
      temp = "Gagal";
    }
    console.log(`${x + 1}. ${value[x][1]}, IPK = ${value[x][2]}, ${temp}`);
  }
}

// kelulusan(murid);


// function ganjilGenap(value) {
//   if (value % 2 === 0) {
//     console.log(value + " adalah termasuk bilangan genap")
//   } else {
//     console.log(value + "termasuk bilangan ganjil")
//   }
// }

// ganjilGenap(6);

// function ganjilGenap(value) {
// 	return (value % 2) === 0 ? 'Genap' :  'Ganjil';
// }

// console.log(ganjilGenap());

function splitWords(value) {
	return value.split(' ');
}

function words(value) {
	var x = splitWords(value).length;
	return "Jumlah kata ada: " + x;
}

console.log(words("halo gan saya sdas djsabdjwq dsajdbwq"));