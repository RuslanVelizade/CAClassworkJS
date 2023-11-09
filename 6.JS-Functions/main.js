//TASK 1
function printfullName(firstName = "lorem", lastName = "ipsum") {
  let fullName = firstName + lastName;
  return fullName;
}
console.log(printfullName("I am ", "ruslan velizade"));
//TASK 2
let sum = (num1, num2) => num1 + num2;
{
  console.log(sum(2, 3));
}
let multiply = (num1, num2) => num1 * num2;
{
  console.log(multiply(2, 3));
}
let subtruct = (num1, num2) => num1 - num2;
{
  console.log(subtruct(2, 3));
}
let divide = (num1, num2) => num1 / num2;
{
  console.log(divide(2, 3));
}
//TASK 3
function calculator(operator, num1, num2) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "*") {
    result = num1 * num2;
  }
  return result;
}
console.log(calculator("+", 2, 5));
console.log(calculator("-", 2, 5));
console.log(calculator("/", 2, 5));
console.log(calculator("*", 2, 5));
//TASK 4

let employee = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];
function filterEmployees(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary >= 60000) {
      newArr.push(array[i]);
    }
}
return newArr;
}
console.log(filterEmployees(employee));
//TASK 5
// function reverseString(string) {
//   let arr = [string];
//   let array = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     array += arr[i];
//   }
//   return array;
// }
// console.log(reverseString("Hello"));
