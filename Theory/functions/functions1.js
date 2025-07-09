//Recursive Function?

function functionName(n){
    if(n<=1) return 1;
    return n*functionName(n-1);//5*4*3*2*1*1
}
console.log(functionName(5));


//Arrow Function

function add(a,b){
    console.log(a+b);
}
add(2,3)

// const result = (a,b)=> {

// };
// console.log(result(2,4));;

// () => value ;
// x => x*2

function showName() {
      const name = document.getElementById('username').value;
      console.log("User entered name:", name);
    }
