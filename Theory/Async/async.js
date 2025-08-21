// console.log("This is First Line");
// getSTudent(1,students)

// const { reject } = require("async");

// function students(student){
//     console.log(student);
//     getSubjects(1,subject)
// }
// function subject(subjects){
// console.log(subjects);
// }


// // console.log(student);
// console.log("This is Last Line");

// function getSTudent(id,callback){
//     setTimeout(()=>{
//     console.log("Getting Data from DB");
//     callback({name:"Bob", id : id})
// } ,2000)
// }

// function getSubjects(id,callback){
//    setTimeout(()=>{
//      console.log("Getting STudent Details"+ id);
//     callback(["HTML","JAVA","JS"])
// },2000)
// }

//callback

// function JS(student){
//     console.log(student);
// }

// callback = jsx;


//Promises

//SYntax
// let promise = new Promise(function(resolve,reject))

let promise = new Promise((resolve,reject)=>{
    console.log("Getting Data from DB");
    setTimeout(() => {
        let data = {name:"Bob", id : 1};
        // resolve(data);
        reject(new Error("data not found"));
        }, 2000);
})

promise
.then((result)=>console.log(result))

.catch((e)=>console.log(e.message))




// let promise1 = getStudent(1);
// promise1.then((student)=>getSubjects(student.id))
// .then((subjects)=>getMarks(subjects[0]))
// .then((mark)=>console.log(mark))
// .catch((e)=>{
//     console.log(e.message)
// })

async function result(){
    try{
        let student = await getStudent(1);
    let subjects = await getSubjects(student.id);
    let mark = await getMarks(subjects[0]);
    console.log(mark);
    }
    catch(e){
        console.log(e);
        }
    
}

result()
function getStudent(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // let data = {name:"Bob", id : id};
            console.log("getting data from DB");
            resolve({name:"Bob", id : id})
            reject(new Error("Student data not found"))
            }, 2000);
            })
}

function getSubjects(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("getting subjects from DB" + id);
            resolve(["HTML","CSS","JAVA"])
             reject(new Error("Subject data not found"))
            }, 2000);
    })
}

function   getMarks(subjects){
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("getting Marks from DB" + subjects);
            // resolve(80)
             reject(new Error("marks data not found"))
            }, 2000);
    })
}

//Async and Awiat

async function displyData(){

}



