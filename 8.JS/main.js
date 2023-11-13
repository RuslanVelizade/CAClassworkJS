//TASK 1
// findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
// hərfini qaytarsın. Nəticə =====>> "e"
function findFirstNotRepeatedChar(str) {
    result = "";
    for (let i = 0; i < str.length; i++) {
        
       if (str.indexOf(str[i])===str.lastIndexOf(str[i])) {
           result = str[i];
           break;
        }
        
    }
    return result;
}
  

// console.log(count);
console.log(findFirstNotRepeatedChar('abacddbecz'));
//TASK 2


// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.

// Nəticə: 3
function charCount(first, second) {
    count = 0;
    for (let i = 0; i < first.length; i++) {
        if (first[i].toLocaleLowerCase()===second.toLocaleLowerCase()) {
            count++;
        }
    }
    return count;
}
console.log(charCount('w3rescource.com', 'c'));
//TASK 3
// makeId adlı function yaradın. Bu function qəbul etdiyi rəqəm uzunluğunda random ID verməlidir.
// Məsələn =====>> 4SGqCfrz

function makeID(num) {
    let str = "";
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < num; i++) {
    
        str += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    
    return str;
}
console.log(makeID(7));
//TASK 4
// console.log(uniqueChar("abccddee"));  ====>> abcde
function uniqueChar(unique) {
    result = "";
    for (let i = 0; i < unique.length; i++) {
        if (unique.indexOf(unique[i])===unique.lastIndexOf(unique[i])) {
            result = unique[i];
            break;
         }
        return result; 
    }
}
console.log(uniqueChar("abccddee")); 


