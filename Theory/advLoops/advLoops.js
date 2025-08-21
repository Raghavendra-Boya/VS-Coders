/*


advLoops:
1. for in

loopps through keys od an object / array(optional)

returns the keys

Syntax:
for(let key in object){

//block code
}




*/ 

let student = {
    name: "John",
    age: 20,
    gender: "male",
}

for(let key in student){
    console.log(key);
    console.log(`${key}: ${student[key]}`);
}

let numbers = [100,200,300,400,500]
for(let number in numbers){
    console.log(number);
    console.log(numbers[number]);
}


//For of

for(let number of numbers){
    console.log(number);
}

//for each
/*what:
ARray method wioll runc the call back function, returns the elemnets in an array

syntax:
array.forEach(callbackfunction(currentElement, index, array){})
//code
}
*/

numbers.forEach((number,index)=>{
    console.log(number);
    console.log(index);
    console.log(`${index} : ${number}`);
})


/*
map()


1. it returns the new array by applying function to each elemnet
2. it does not change the original array



*/

 let result = 0;

let newArray = numbers.map(number=>result+=number)
console.log(newArray);

/*filter()
1. new array will be created bases on a condition
2. it does not change the original array

syntax:

let newArray = array.filter((value,index)=>{
    return condition;
    })




*/

let filterResult  = numbers.filter((number)=>{
    return number>300
}) 
console.log(filterResult);

/*
reduce()
1. it applies a function against an accumulator and each element in the array (from left to right
2. it returns the value of the accumulator after going through all elements in the array
3. it does not change the original array

syntax:array.reduce((accumulator,currentValue)=>{
    return 
    
    })

    loops           Works on        returns         modified        use cases
    for in          Objects/arrays  keys/indexes    No              iterate keys
    for of          Arrays          values          No              iterate values
    forEach        Arrays          values          No              iterate values
    map            Arrays          new array       No              transform values
    filter         Arrays          new array       No              filter values
    reduce         Arrays/objects  accumulator     No              aggregate values


*/


let reduceResult = numbers.reduce((total,number)=>{
    return total+number;
})
console.log(reduceResult);