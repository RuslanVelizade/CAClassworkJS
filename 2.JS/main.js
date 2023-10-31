// TASK 1
let hava = 39;
let a = " Qalin geyin";
let b = " Pencek geyin";
let c = "Nazik geyin";

if (hava < 15) {
  console.log((hava = a));

}else if (15 < hava && hava < 22) {
    console.log((hava = b));
} else if  (hava > 22) 
console.log((hava = c));

// TASK 2
let letter = "h";

if (letter == "a" || letter == "o" || letter == "u") {
  console.log(`${letter} SAITDIR`);
} else {
  console.log(`${letter} SAMITDIR`);

}
// TASK 3
let x = 30;
let y = 45;
let z = 60;
if (z>x && z>y) {
    console.log(`${z} is greater`);
}
//TASK 4
let result1 = "A";
let result2 = "B";
let result3 = "C";
let result4 = "D";
let result5 = "E";
let result = 85;
if(result>90){
    console.log("Exam grade:" + result1);
} else if (result>80){
console.log("Exam grade:" + result2);
}else if (result>70){
    console.log("Exam grade:" + result3);
}else if (result>60) {
console.log("Exam grade:" + result4);
}else if (result>50) {
    console.log("Exam grade:" + result5);
}
//TASK 5
let userName = "Fikret";
console.log(
    console.log(userName.length)
);
if (userName.length <= 5) {
    console.log(`Qisa adiniz var`);
}else if (userName.length  <= 10){
console.log(`Orta uzunluqda adiniz var`);
}else {
    console.log(`Uzun adiniz var`);
}
