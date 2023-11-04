//PART 1
//TASK 1
let numbers = [12, 45, 6, 78, 34, 99, 23];
let sum = 0;
let max = numbers[0];
let min = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  } else if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(max);
console.log(min);
//TASK 2
let num = [12, 45, 6, 78, 34, 99, 23];
let addition = 0;
for (let i = 0; i < num.length; i++) {
  addition += num[i];
}
console.log(addition);
//TASK 3
let elements = [1, 2, 3, 4, 5];
// let order = elements;
[elements[0], elements[elements.length - 3]] = [
  elements[elements.length - 2],
  elements[0],
];
console.log(elements);
//TASK 4
// let positive = [12, -5, 6, -3, 34, -1, 23];
// let order = positive[i];
// for (let i = 0; i < positive.length; i++) {
//   if (positive[i] > 0) {
//     console.log(order); 
//   }
//}
//PART 2
//TASK 1
let empty = new Array();
console.log(empty);
//TASK 2
let itCompanies = ["Facebook", "Google","Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies);
//TASK 3
console.log(itCompanies.length);
//TASK 4
let one = itCompanies[0];
let two = itCompanies[Math.floor(itCompanies.length/2)];
let last = itCompanies[itCompanies.length-1];
 console.log(one, two, last);


// task6

let newArray = [];

for (let i = 0; i < itCompanies.length; i++) {
    newArray.push(itCompanies[i].toLocaleUpperCase())
}
console.log(newArray);
//task 7
console.log(itCompanies + " boyuk IT sirketleridir");


