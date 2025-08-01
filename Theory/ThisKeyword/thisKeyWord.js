// let obj = {
//     name: "JAVA",
//     age: 35,
//     static : function(){
//         console.log(obj.name);
//     }
// }
// obj.static();

// console.log(obj.name);

var a = 10;
console.log(this);
console.log(window.a);
console.log(this.a);

function addddd(){
    console.log(a);
}
this.addddd()

let student1 = {
    name: "User1",
    age: 23,
    static : ()=>{
        console.log(`Hi I am ${student1.name}`);
    }
}

let student2 = {
    name: "User2",
    age: 25,
    static : student1.static
}
student1.static();
student2.static();
console.log(`Hi I am ${student1.name}`);


//1. call()
//2. Apply()
//3. Bind()

let obj1 = {
    name: "User1",
}
let obj2 = {
    name: "User2",
}
function methods(state,country){
    console.log(`Name: ${this.name}, State: ${state}, Country: ${country}`);
}
// methods("AP","India")
// function methods1(state,country){
//     console.log(`Name: ${obj2.name}, State: ${state}, Country: ${country}`);
// }
// methods1("AP","India")

// methods.call(obj name,arg1,arg2....argn)
//methods.call(obj1,"AP","India")
//methods.call(obj2,"TG","India")
// methods.apply(obj1,["AP","India"])
// methods.apply(obj2,["TG","India"])

let result = methods.bind()
// console.log(result);
result(obj1,"AP","India")

let result1 = function(parameter){
    console.log(parameter);
}

result1("hello")