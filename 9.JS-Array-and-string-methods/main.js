//TASK 1
// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun
const text = "Java is awesome. Java is fun.";
console.log(text.replaceAll("Java", "JavaScript"));
//TASK 2
// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.
function mixUp(a, b) {
    console.log(b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2));
    
}



mixUp("val", "pur"); //'pul var'
mixUp("donce", "gevlet"); //'gence dovlet'
//TASK 3
// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.
function verbing(feil) {
    if (feil.length<3) {
        result = feil;
    } else if (!feil.endsWith('ing')){
        result = feil + 'ing'
    } else {
        result = feil + 'ly'
    }
    return result;
}
console.log(verbing('go')); // go
console.log(verbing('swim')); //swiming
console.log(verbing('swiming')); //swimingly
//TASK 4
// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
    string == string.split("").reverse().join("")
    if (string == string.split("").reverse().join("")) {
        console.log('${string} palindromdur');
    } else {
        console.log('${string} palindrom deyil');
    }
}

isPalindrome("hello")
//TASK 5
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;

function splitIntoChunk(arr, length) {
let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(arr.slice(1, i = length));
        
    }
    return array;
}



console.log(splitIntoChunk(array, length)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
//TASK 6
function longestWord(prog) {
    for (let i = 0; i < prog.length; i++) {
        
        
    }
}
console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers
