//let pattern = //
//let pattern = new RegExp("methods")

//1. Dot(.)--matches the any one charectes, except new line


let pattern = /a.b/;
console.log(pattern.test("abc"));//true
console.log(pattern.test("acb"));//true
console.log(pattern.test("ab"));//false

//2. ^ (caret)--->must start with the given pattern

let pattern1 = /^Hello/;
console.log(pattern1.test("Hello World"));//true
console.log(pattern1.test("world Hello"));//false
console.log(pattern1.test("hello world"));//false

//3. $--must ends with given pattern
let pattern2 = /World$/;
console.log(pattern2.test("Hello World"));//true
console.log(pattern2.test("world Hello"));//false
console.log(pattern2.test("hello world"));//false

//4. * ---0 or more ocuurences

let pattern3 = /go*gle/;
console.log(pattern3.test("dggle"));//true
console.log(pattern3.test("gogle"));//true
console.log(pattern3.test("gole"));

//5. + -->matches 1 or more ocuurences

let plus = /go+gle/;
console.log(plus.test("goooooogle"));//true

//6. ? -->matches 0 or 1 time 

let Question = /go?gle/
console.log(Question.test("google"));
console.log(Question.test("gogle"));
console.log(Question.test("ggle"));

//7. \d --->matches any digit[0-9]

let digit = /\d/;
console.log(digit.test("123"));
console.log(digit.test("abc"));
console.log(digit.test("year2025"));
console.log(digit.test("A2C4D"));
//8. \D --->matches any non digit
let nonDigit = /\D/;
console.log(nonDigit.test("123"));
console.log(nonDigit.test("abc"));
console.log(nonDigit.test("year2025"));
//9. \w --->matches any word character (a-z, A-Z, 0-9)
let word = /\w/;
console.log(word.test("123"));
console.log(word.test("abc"));
console.log(word.test("year2025"));
console.log(word.test("@#$1%%^$"));
//10. \W --->matches any non word character
let nonWord = /\W/;
console.log(nonWord.test("123"));
console.log(nonWord.test("abc"));
console.log(nonWord.test("year2025"));
console.log(word.test("year202$"));
console.log(word.test("@#$1%%^$"));

//11.\s -->matches any spaces charecter
let space = /\s/;
console.log(space.test("hello world"));
console.log(space.test("helloworld"));
console.log(space.test(" helloworld"));
console.log(space.test("helloworld "));
console.log(space.test("hello    world"));

//12. [aeiou]--->cahrecter set
let vowel = /[aeiou]/;
console.log(vowel.test("hello"));
console.log(vowel.test("world"));
console.log(vowel.test("wqrld"));

//13. [^aeiou]--->negated set(match ant 1 charecter is not a vovel)
let nonVowel = /[^aeiou]/;
console.log(nonVowel.test("hell"));
console.log(nonVowel.test("wqrld"));
console.log(nonVowel.test("a"));

//14. {n}--->Exact no odf ocuurences
let exact = /^\d{4}$/;
console.log(exact.test("1"));
console.log(exact.test("1234"));
console.log(exact.test("123Year"));
console.log(exact.test("Year123"));
console.log(exact.test("23Year12"));

//15. {min,}--->minimum no od times
let min = /^\d{1,}$/;
console.log(min.test("1"));
console.log(min.test("1234"));
console.log(min.test("123Year"));
console.log(min.test("Year123"));

//16 {min,max}
let minmax = /^\d{1,4}$/;
console.log(minmax.test("1"));
console.log(minmax.test("1234"));
console.log(minmax.test("123"));
console.log(minmax.test("A"));

//17. OR(|)

let or = /cat|dog/;
console.log(or.test("cat cat"));
console.log(or.test("dog"));
console.log(or.test("bird"));

//18. grouping (abd)
let group = /(ha)/;
console.log(group.test("ah"));
console.log(group.test("hiahia"));
console.log(group.test("hahaa"));
console.log(group.test("hahaah"));
console.log(group.test("hahahaha"));


let email = /^[a-zA-Z0-9.*-_]+@[a-z0-9]+\.[a-z]{2,}$/;

let userEmail = "AB@cgmail.com";
console.log(email.test(userEmail));
























