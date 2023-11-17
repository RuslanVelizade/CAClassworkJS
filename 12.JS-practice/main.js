//TASK 1
// Write a JavaScript function that reverse a number.
// Sample Data and output:

// Example x = 32243;
// Expected Output : 34223
// function first(param) {
//     return param.reverse();
// }
// console.log(first(67854));
let result;
function reversedNum(num) {
        let result = String(num).toString()
          .split('')
          .reverse()
        .join('')   
    return result;
}
console.log(reversedNum(534));
//TASK 2
// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
function alpha(order)
{
    return order.split('').sort().join('')
}
console.log(alpha("cab"));
//TASK 3
// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));
//TASK 4
const person = {
    firstName: "John",
    lastName: "Doe",
    city: "Ganja",
    website: "code.edu.az",
    languageInfo: {
      eng: "Advance",
      aze: "Fluenty",
      rus: "Intermediate",
    },
  };
  
//   person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq 
//   personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.
  
  console.log(eng); // "Advance"
  console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}
