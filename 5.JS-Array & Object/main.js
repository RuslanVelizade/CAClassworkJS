//TASK 1
let numbers = [12, 45, 6, 78, 34, 99, 23];
let sum = 0;
let max = numbers[0];
let min = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]>max) {
        max = numbers[i];
    }else if (numbers[i]<min){
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
[elements[0], elements[elements.length-1]]=[elements[elements.length-1], elements[0]]
console.log(elements);



