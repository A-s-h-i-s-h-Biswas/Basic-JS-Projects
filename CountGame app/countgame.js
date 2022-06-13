let count=0;
const value=document.querySelector(".value");
const btns=document.querySelectorAll(".btn");
btns.forEach(function(ele){
    ele.addEventListener("click",function(e){
        const cls=e.currentTarget.classList;
        if(cls.contains("decrease"))count--;
        else if(cls.contains("increase"))count++;
        else count=0;
        value.textContent=count;
        if(count<0)value.style.color="red";
        if(count>0)value.style.color="green";
        if(count==0)value.style.color="black";
    })
})
