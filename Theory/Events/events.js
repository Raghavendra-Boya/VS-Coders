/* 


why EVents?

1. User Interactins
2. Improve UX
3. Improve Performance
4. Behaviour 

Wys to applu EVents:

1. Inline EVents
<button onclick="function()">BUtton</button>

disadv:
1. performance down
2. code duplication
3. hard to maintain
4. hard to debug

2. Event Listeners Handling

let btn = DOM;
btn.addEventListener('click', function(){

}


Why AddEvent 
1. Easy maintanance
2. Easy debug
3. Easy to add or remove event listeners
4. Easy to handle multiple event listeners
5. kepps HTML and JS Seperate

3. Event Properties

btn.onclick = ()=>{
    
    }

    1. only one handler at a time
    2. overwrites previous handler
    3. performance low


*/



// let btn = document.getElementById('btn');
// btn.addEventListener("click",()=>{
//     console.log("clicked once");
// })

// btn.addEventListener("click",()=>{
//     console.log("clicked twice");
// })

// btn.onclick = ()=>{
//     console.log("Event Properies-1");
// }
// btn.onclick = ()=>{
//     console.log("Event Properies-2");
// }


//Type of EVents
//1. Mouse Events
    //1. CLick

    let btn = document.getElementById('btn');
btn.addEventListener("click",()=>{
    console.log("clicked once");
})

    //2. dblClick

    btn.addEventListener("dblclick",()=>{
        console.log("double clicked");
    })

    //3. mouseover

    let hover = document.getElementById('mouseOver');
    hover.addEventListener("mouseover",()=>{
        // console.log("Mouse Over");
        hover.style.background = "red";
        })
    //4. mouseout
        hover.addEventListener("mouseout",()=>{
            hover.style.background = "white";
            })
//2. Keyboard EVents:
//1. keydown

let input = document.getElementById('textInput');
input.addEventListener("keydown",()=>{
    console.log("key down");
    })
    //2. keyup
    input.addEventListener("keyup",()=>{
        console.log("key up");

    })

    //3. FOrm Events:
    //1. submit
    //2. reset
    //3. change
    //4. focus
    //5. blur

    
    let form = document.getElementById('form');
    input.addEventListener("focus",()=>{
        input.style.border = "2px solid red";
    })
    input.addEventListener("blur",()=>{
        input.style.border = "";
    })

    //window Event
    //1. load
    window.addEventListener("load",()=>{
        console.log("window loaded");
    })
    //resize
    // window.addEventListener("resize",()=>{
    //     console.log(`Window Resized to ${window.innerWidth}X${window.innerHeight}`);
    //     })

        //Scroll
        // window.addEventListener("scroll",()=>{
        //     console.log(`Window Scrolled to ${window.scrollY}`);
        //     })

        document.querySelector(".parent").addEventListener("click",()=>{
            console.log("Parent clicked");

        },true)
         document.querySelector(".child-1").addEventListener("click",(e)=>{
            e.stopPropagation();
            console.log("Child-1 clicked");
            
        },true)
         document.querySelector(".child-2").addEventListener("click",()=>{
            console.log("child-2 clicked");
        },true)

