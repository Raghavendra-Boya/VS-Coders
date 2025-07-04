// // document.write(`Step-1: cut potato`)
// // document.write(`Step-2: add oil and jeera & onion`)
// // document.write(`Step-3: add potato`)
// // document.write(`Step-4: cook for 20min and add salt and chilli powder`)
// // document.write(`Step-5: put in plate and eat`)


// // document.write(`Step-1: cut panner`)
// // document.write(`Step-2: add oil and jeera & onion`)
// // document.write(`Step-3: add panner`)
// // document.write(`Step-4: cook for 20min and add salt and chilli powder`)
// // document.write(`Step-5: put in plate and eat`)

// // document.write(`Step-1: cut potato<br>
// //             Step-2: add oil and jeera & onion<br>
// //             Step-3: add potato<br>
// //             Step-4: cook for 20min and add salt and chilli powder<br>
// //             Step-5: put in plate and eat`)

// //             document.write(`Step-1: cut panner<br>
// //             Step-2: add oil and jeera & onion<br>
// //             Step-3: add panner<br>
// //             Step-4: cook for 20min and add salt and chilli powder<br>
// //             Step-5: put in plate and eat`)


// //function functionName(){
//                 //block code
// //}

// // function order(item){
// //     document.write(`Step-1: cut ${item}<br>
// //             Step-2: add oil and jeera & onion<br>
// //             Step-3: add ${item}<br>
// //             Step-4: cook for 20min and add salt and chilli powder<br>
// //             Step-5: put in plate and eat<br>`)
// // }

// // order("panner")

// //What is function?
// //A function is a block of code that can be called multiple times from your program. It is
// //a reusable block of code that can be used to perform a specific task.
// //Why we need Function
// //We need function because it helps us to write reusable code. It helps us to avoid code
// // duplication. It makes our code more readable and easier to maintain.
// //How to define a function
// //A function is defined using the function keyword followed by the name of the function
// //and a pair of parentheses. The code that needs to be executed when the function is
// //called is written inside the function body.
// //function functionName(){
// //    //block code
// //}
// //How to call a function
// //A function can be called using its name followed by a pair of parentheses.
// //functionName();
// //Example
// //function add(a,b){
// //    return a+b;
// //}
// //console.log(add(5,6)); //output 11


// //Types of Functions


// /* 
// WHat is Function?

// why we have to Use the FUnction?
// 1. Reusability
// 2. Modificatio is easy
// 3. maintability is easy
// 4. Clean code
// 5. Debugging Easy



// */

// document.write(`Step-1: add oil <br>`)
// document.write(`Step-2: add ingredients<br>`)
// document.write(`Step-3: add Potato<br>`)
// document.write(`Step-4: cook for 20min<br>`)

// debugger

// document.write(`Step-1: add oil <br>`)
// document.write(`Step-2: add ingredients<br>`)
// document.write(`Step-3: add Panner<br>`)
// document.write(`Step-4: cook for 20min<br>------`)


// document.write(`Step-1: add oil <br>Step-2: add ingredients<br>Step-3: add Potato<br>Step-4: cook for 20min<br>`)
// document.write(`Step-1: add oil <br>Step-2: add ingredients<br>Step-3: add Potato<br>Step-4: cook for 20min<br>`)

// function curries(item){
// document.write(`---Step-1: add oil <br>Step-2: add ingredients<br>Step-3: add ${item}<br>Step-4: cook for 20min<br>`)

// }
// curries("potato");
// curries("panner");


// function name(){
//     document.write("Hello");
// }

// name()


// function showReciepe(item1){
//     document.getElementById("output").innerHTML = `Step-1: add oil<br> 
// Step-2: add ingredients<br>
// Step-3: add ${item1}<br>
// Step-4: cook for 20min`
// }

let reciepe = [
    {
        name:"potato",
        img : "https://cdn1.foodviva.com/static-content/food-images/curry-recipes/jeera-aloo-recipe/jeera-aloo-recipe.jpg",
        price: 200,
        discount: 10,
        isAvailable: false
    },
    {
        name:"Panner",
        img : "https://tse2.mm.bing.net/th?id=OIP.Xk8ct2Ye-acFhqtnj_QU_wHaFA&pid=Api&P=0&h=180",
        price: 300,
        discount: 15,
        isAvailable: true
    }


];


function curry(ingredient){
   
document.getElementById("steps").innerText =  `

you ordered ${ingredient} Curry
Step-1: add oil<br> 
Step-2: add ingredients<br>
Step-3: add ${ingredient}<br>
Step-4: cook for 20min`
}



let cardHTML = "";

for(let i =0;i<reciepe.length;i++){
    let reciepeData = reciepe[i];
    let payable = reciepeData.price - (reciepeData.price*reciepeData.discount*0.01);
    let availabilityText = reciepeData.isAvailable ? "Available" : "Out Of Stock";
    let textColor = reciepeData.isAvailable ? "text-green-600" : "text-red-600";
    let disabled = reciepeData.isAvailable ? "":"disabled"



    cardHTML += `
    <div class="w-80 bg-gray-500 rounded-2xl overflow-hidden">
    <img class="w-full h-50 object-covered rounded" src="${reciepeData.img}" alt="${reciepeData.name} >
    <div class="p-4 ">
    <h3 class="text-white text-xl font-semibold">${reciepeData.name}</h3>
    <p>Price: ${reciepeData.price}</p>
    <p>Discount: ${reciepeData.discount}%</p>
    <p>Final Price: ${payable}</p>
    <p class="${textColor} font-bold">${availabilityText}</p>
    
    <button class="mt-4 w-full bg-blue-600 mb-2 py-2 rounded-2xl" onClick="curry(${reciepeData.name})" ${disabled}>Order Now</button>
    </div>
    
    </div>

    `
}


document.getElementById("cardContainer").innerHTML = cardHTML;



//FUnction with out parameter and with return statement

function name2(){
    return "Hello"    
}
let result = name2();
console.log(result);


//Use cases

//1. Mathemetical Calculations
//2. Current date of system
//tax calculation
//tandom motivation 

function getAppVersion(){
    return "V1.0.2";
}

console.log(getAppVersion());

function getCurrentTime(){
    return new Date().toLocaleTimeString();
}
console.log(getCurrentTime());

function getRandQuotes(){
    const q = ["A","B","C","D"];

    return q[Math.floor(Math.random()*q.length)]
}

console.log(getRandQuotes());

// console.log(Math.random()*4);


//Function with parameter and return

// function Syntax(parametr){
//     return result;
// }

//math calculations
//eligibility 
//bill

function isEligible(age,prime){
    if(age>=60 || prime){
        return true;
    }
    return false;
}

console.log(isEligible(50,false));

function bill(price,disc,tax){
    return (price-(price*disc))+(price*tax)
}

console.log(bill(200,0.1,0.5));

//FUnction with Default parameter

function discount(price,disc = 0.05){
    return price-price*disc;
}

console.log(discount(500));//
console.log(discount(1000,0.1));
