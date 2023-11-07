// let isPalidrom = (str) => {
//     let newStr = "";
//     for (let i = str.length; i >= 0; i--) {
//         newStr += str[i];
        
//     }
// return str === newStr ? "is polidrom" : "is not poldirom";
// }
// console.log(isPalidrom("melek"));
//-------------------------------------------------  TASK 1  -------------------------------------------------
const number = [1, 2, 3, 4, 5, 6, 7, 8];

//Tək ədədləri filter methodu vasitəsilə yeni bir dəyişkənə mənimsət:

const numbers = number.filter((num) => {
    return num%2===1;
}
) 
console.log(numbers);
//-------------------------------------------------  TASK 1  -------------------------------------------------


//----------- part II

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//1 və 10 aralığındakı rəqəmləri consol-a çıxart
const between = array.filter((bet) => {
    return bet > 0 && bet <11;
}
)
console.log(between);
// ====>   [1,2,3,4,5,6,7,8,9,10]
// -------------------------------------------------  TASK 2  -------------------------------------------------

const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];
const fullName = users.map((elem, i) => {
    return `${elem.first_name} ${elem.last_name}`
}
)
console.log(fullName);

// Verilmiş array-də objectlərin first_name və last_name dəyişkənin aşağıdaki kimi göstərin.

// =====> ["Mike Sheridan", "Tim Lee", "John Carte"]