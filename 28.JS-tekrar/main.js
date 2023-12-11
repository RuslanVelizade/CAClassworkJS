// TASK 1

const employees = [
  { name: "Jamil", salary: 1500, department: "IT" },
  { name: "Jale", salary: 5000, department: "HR" },
  { name: "Bayram", salary: 24000, department: "IT" },
  { name: "Sahil", salary: 6000, department: "HR" },
  { name: "Maryam", salary: 18000, department: "IT" },
  { name: "Elnara", salary: 20000, department: "HR" },
  { name: "Davud", salary: 14000, department: "IT" },
];

// #ortalama maaşı 20000-dən çox olan departamentləri çapa verən program tərtib edin.

console.log(employees.filter((item) => item.salary>20000));

// #ortalama maaşı 10000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.

console.log(employees.filter((item)=> item.salary>10000 && item.department == "IT"));

// #sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin

console.log(employees.filter((item)=> item.department == "HR"));
// -------------------
// TASK 2

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

// const  { firstName, languageInfo:{ eng, rus }, ...otherInfo} = person;


// person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq
// personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.

// console.log(eng); // "Advance"
// console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}


// -------------------------

// TASK 3

const human = {
    firstName: 'Michael',
    lastName: 'Pam',
    age: 26,
    city: 'Poland'
};

// 1. human object-nin sadəcə key-lərini console-a çıxardın.
console.log(Object.keys(human));

// 2. human object-nin sadəcə value-lərini console-a çıxardın.

console.log(Object.values(human));
// 3. Aşağıdakı kimi console-a çıxardın.
//     [firstName: 'Michael']
//     [lastName: 'Pam']
//     [age:26]
//     [city: 'Poland']



// 4. object-in age propertysini silin.
let rem = delete human.age;
console.log(human);
// 5. Ən uzun string value-nu console-a çıxardın.

let valueArr = Object.values(human);

let max = valueArr[0];
valueArr.forEach((item) => {
    if (item.length > max.length) {
        max = item;
    }
})
console.log(max);



// ------------------------------

// TASK 4

const text = "Java is awesome. Java is fun.";

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun.

console.log(text.replaceAll("Java", "Javascript"));

// ---------------------

// TASK 5


// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {

    let len = string.length;

    for (let i = 0; i < len; i++) {
        if (len[i]===len[len-1-i]) {
            console.log("The word is palindrome");
        }
        
    }
}

isPalindrome("hello");


// ------------------

// TASK 6


// console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers


// ------------------

// TASK 7

const persons = [
    { name: "Akif", age: 25 },
    { name: "Aysu", age: 32 },
    { name: "Ali", age: 35 }
];

// find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }

// ------------------------------ part II

// tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)