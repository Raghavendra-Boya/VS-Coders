let cart = ["Shoes","T-shirt"];
// console.log(cart[-1]);

cart.push("cap","bottle","bottle");
console.log(cart);

cart.pop();

console.log(cart);

///unshift
//add items to the starting position

cart.unshift("glasses");
console.log(cart);

//shift
cart.shift();
console.log(cart);

//concat


let cart1 = [1,2,3]
console.log(cart.concat(cart1));;
console.log(cart1);

console.log(cart.slice(2,4));
cart.push(1);
console.log(cart);
console.log(cart.slice(2,4));

cart.splice(2,1,"cap1","cap2")
console.log(cart);

console.log(cart.indexOf(2));



console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("End");

