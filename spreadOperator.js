//...(Rest OPerator)
let users = ["sai","Srinath","Harini"]
function showNames(name1,name2,name3){
    console.log(name1,name2,name3);
}
showNames("sai","Srinath","Harini")

function showNames1(name1,name2,name3){
    // console.log(name);
}
showNames1(...users)




function add(...numbers){
    console.log(numbers[0]+numbers[1]);
}
add(2,3)


let array = [1,2,3];
let array1 = [4,5,6];//[1,2,3,4,5,6]
let newArray = [...array,...array1]
console.log(newArray);
console.log(array);
console.log(...array);


let obj1 = {a:1,b:2};
let obj2 = {c:3,d:4};
let newObj = {...obj1,...obj2};
console.log(newObj);

let word = "Hello";
console.log(...word);


const user = {id:1,name:"Harini",city:"HYD"}

const updatedUser = {...user,city:"Bnglr"}
console.log(updatedUser);



let numbers1 = [10];
// let a = numbers1[2];

// console.log(a);
let [a=100,b=200] = numbers1;

console.log(a,b);

let a1 = 5, b1 =10;
// 



[a1,b1] = [b1,a1];
console.log(a1,b1);


const person = {
    id:101,
    profile :  {
name1:"Manasa",
    age1: 24,
    city1:"new York"
    }
    
}


let {id,profile:{name1,age1,city1}} = person;

console.log(name1,age1,city1);



// console.log(person.age);
// console.log(person.name);
// console.log(person.city);

// const {name,age:age2,city} = person;
// console.log(name,age,city);