//TASK 1
//1.employees object-nin sadece key-lerini console-a cixardin.
const person = {
    firstName: 'Ruslan',
    lastName: 'Velizade',
    age: 20,
    status: 'Telebe',
    uni: 'GDU'
}
person.city = 'Ganja';
console.log(Object.keys(person));
//TASK 2
//2.employees object-nin sadece value-larini console-a cixardin.
console.log(Object.values(person));
// 3
const person1 = {
    firstName: 'Michael',
    lastName: 'Pam',
    age: 26,
    city: 'Poland'
}
// person1.key1 = person1.firstName
// person1.key2 = person1.lastName
// person1.key3 = person1.age
// person1.key4 = person1.city
//let key = Object.keys(person1.firstName);
// let [key1, key2, key3, key4] = person1;

// console.log(key1, key2, key3, key4);
// person1[0] = new Array()
// person1[1] = new Array(1)
// person1[2] = new Array(2)
// person1[3] = new Array(3)
console.log(person1);
//4.object-in age propertysini silin.
delete person1.age;
console.log(person1);
//5. Ən uzun string value-nu console-a çıxardın.
let arr = Object.values(person1);
let max = arr[0];
arr.forEach(elem => {
    
    if (elem.length>max.length) {
        max = elem; 
    }
});
console.log(max);
//TASK 2
// "library" adlı array yaradın. İçərisində title, author və readingStatus adlı key-ləri olan objectlər yaradın.
// Əgər readingStatus true olarsa console-a "Already read 'title' by author' Əgər false
// olarsa "You still need to read 'title' by author' yazsın

// Nəticə ====>>
// Already read 'The Road Ahead' by Bill Gates.
// Already read 'Walter Isaacson' by Steve Jobs.
// You still need to read 'Suzanne Collins' by Mockingjay: The Final Book.
var library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      readingStatus: true,
    },
    {
      title: "Walter Isaacson",
      author: "Steve Jobs",
      readingStatus: true,
    },
    {
      title: "Suzanne Collins",
      author: "Mockingjay: The Final Book",
      readingStatus: true,
    },
  ];
library.forEach(elem => {
    let read = elem.readingStatus[0];
    if (elem.readingStatus === true) {
        result = "Already read" + "by " + elem.author
    } else (elem.readingStatus === false); {
        result = "You still need to read " + elem.title + " by " + elem.author
    }
      return result;
  });
console.log(result);

//TASK 2
// "employee" adlı object yaradın. Object-in name, jobTitle, salary və promote adında key-ləri var.
// promote bir anonim function-dır, 2 parametr qəbul edir. jobTitle-in value-ı ilk dəfə "Software Developer" salary isə 75000.
// Ən sonda employee.promote-a bir yeni vəzifə və yeni maaş göndərin.

// employee.promote('Senior Software Engineer', 90000);

// Nəticə: Promotion: Alice is now Senior Software Engineer with a salary of $90000

// let employee = {
//     name: '',
//     jobTitle: '',
//     salary: ,
//     promote: function(p1, p2) {

//     }
//   };

  