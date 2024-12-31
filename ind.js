const buttons=document.body.querySelectorAll(".button")
// console.log(buttons)

const bodys=document.querySelector("body")

buttons.forEach(e => {
//    console.log(e)
e.addEventListener("click",function(x){
    // console.log(x)
    // console.log(x.target)

    if(x.target.id=="grey")
    {
       bodys.style.backgroundColor="grey"
    }

    if(x.target.id=="white")
    {
       bodys.style.backgroundColor="white"
    }
    
    if(x.target.id=="blue")
    {
       bodys.style.backgroundColor="blue"
    }

    if(x.target.id=="yellow")
    {
       bodys.style.backgroundColor="yellow"
    }

})

});