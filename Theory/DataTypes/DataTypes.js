//primitive(immutable)
    //1. String--->
    //2. NUmber--->
    //3. bool
    //4. null
    //big int
    //SYmmbol
    //undefined
//non-primitive





let price = 1000;
const discount = 0.1;
let quantity = 3;
let total = (price - (price*discount))*quantity;

console.log(total);


let string = "10";
let string1 = '3';
console.log(string*string1);

//3. Boolean


let b = false;

if(b){
    console.log("Success");
}
else{
console.log("fail");
}

//Undefined

let a = undefined;

//Null
//Symbol

//Symbol
let sym = Symbol("my symbol");
//console.log(sym);
//console.log(typeof sym);



let id = Symbol("user id");

const user = {
    [id] : 101,
    name : "Hello",
    age:30
}

console.log(user[id]);
console.log(Object.keys(user));




//BigInt

let bigInt = 123456789123456789123456789n;

//Non-pritive

//1. Object
// let name = "JS";
let users = {
    name: "Harini",
    age: 20,
    location: "HYD"
   

}
// users.SKill = "JS";


console.log(Object.keys(users));

//Array

let array = [[10,20],["[123]","HTML"],[true,false]];
console.log(array[1][0]);

let array1 = [];
array1[3]=30;
array1[5]=40;
array1[6]=50;
console.log(array1);







