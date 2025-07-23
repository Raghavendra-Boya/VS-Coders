//DOM: 

///1. DOM Selectors

    //document.getElementByID("ID Name");


    document.getElementById("example").style.color = "Red";


    //CLass

    
    //document.getElementsByClassName("Class Name");

    let para = document.getElementsByClassName("para");

    para[1].style.fontWeight = "bold";

    //document.getElementsByTagName("tag Name");

    let div = document.getElementsByTagName("div");
    div[1].style.backgroundColor = "gray";

    //querySelector

    //Returns the First match of a CSS Selector

    let querySelector1 = document.querySelectorAll(".para");

   for(i=0;i<querySelector1.length;i++){
    querySelector1[i].style.textDecoration = "underline"
   }


   //2. DOM Manipulation

    //1 Create ELement

let result = document.createElement("div");
result.textContent = "Hello I am Div from JS File";
document.body.appendChild(result);

//2. Remove()


// let remove1 = document.getElementsByClassName("para");
// remove1.remove();

//innerText
//innerHTML

//attribute Manipulations

//getAttribute("src")
//setAttribute("src","value");
//hasAtttribute("src")//boolean


//3. ClassList
//1.add("className");
//2. remove("className")
//3. toggle("toggleCLass")

    
// let div1 = document.getElementById("classList");
// div1.classList.add("active");

 let div1 = document.getElementById("classList");
    div1.classList.add("active");
    //  div1.classList.remove("active");
     div1.classList.add("active");
    

// let css = document.getElementsByClassName("active");
// css[0].style.color= "green"
