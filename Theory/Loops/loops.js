//What is loops

//Why do you use Loops
//Loops are used to execute a block of code repeatedly for a specified number of times.

//Where we can use
//1. creating dynamic datain Document
//2. creating dynamic data in Array
//3. creating dynamic data in Object
//4.form validations
//5. creating dynamic table


// 1. for
//Syntax
//for(initialization;condition;increment/decrement){
//code
//}

for(let i = 1;i<=5;i++){
    console.log(i);
}

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

for(let i = 1;i<=31;i++){
    day.innerHTML += `<option>${i}</option>`;
}

let months = ["Jan","Feb","march","Apr","may","jun","July","Aug","Sept","oct","nov","dec"];

for(let i = 0;i<months.length;i++){
    month.innerHTML += `<option>${months[i]}</option>`;
}

for(let i = 1950;i<=2025;i++){
    year.innerHTML += `<option>${i}</option>`;
}

//While
//while(condition){
//code
//i++;
//}

let i = 0;

while(i<5){
     i++;
    console.log(i);
   
}
 let count=0;
function increment(){
    let i = 0;
   
    while(i<3){
        count++;//1,2,3
        i++;//1,2,3
    }
   document.getElementById('para').innerText = count;
    // let result = document.getElementById('para');
    // result.innerText = count

}


function decrement(){
    let i = 0;
    while(i<1){
        count--;
        i++;
    }
    document.getElementById('para').innerText = count;
}


//do-while

// do{
//     console.log('Hello');
// }while(condition)

let attempts = 0;
let result;
let input;
do{
    // input = prompt("Emetr Yes to finsh the loop");
    attempts++;
    result += `<p>Attempts: ${attempts} and you typed: ${input}`
}while(input !== "Yes" && attempts<3)

    if(input === "Yes"){
        document.write(`Welcome too the dashboard and after ${attempts} you succesfully loggedin`);
    }
    else{
        document.write(`You failed to login after ${attempts} attempts`);
    }

//Q-1
    let i1 = 0;
for (console.log("hello"); i1 < 3; console.log("hi")) {
  i1++;
}

//hello
//hi
//hi
//hi-----

//hello
//1
//2
//3
//hi

//Q-2
// let a=0;
// for (;;a++) {
//   console.log("hello");
// }
 //Q-3
// for (let i = 0; i < 3; i++)
//     // let b = 10;
//   console.log("hello");
//   console.log("HELLO");

//     

// //Q-4

// for (let i = 0; true; i++) {
//   console.log("hello");
// }
// console.log("hi"); 

//Q-5

// for (let i = 0; false; i++) {
//   console.log("hello"); 
// }
// console.log("hi");

let a = 10, b = 20;
for (let i = 0; a < b; i++) {
  console.log("hello");
}
console.log("hi"); 








