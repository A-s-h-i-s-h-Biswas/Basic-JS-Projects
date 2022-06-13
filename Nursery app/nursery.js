const time=document.getElementById("time");
time.innerHTML=new Date().getFullYear();
const home=document.querySelector("#Home");
const homeh=home.getBoundingClientRect().height;
const scroll_link=document.querySelector(".scroll-link");
const color=document.querySelectorAll(".color");
const toggle=document.querySelector(".toggle");
const linkContainer=document.querySelector(".links-container");

window.addEventListener("scroll",function(){
    let srlh=window.pageYOffset;
    if(srlh>homeh){
        home.classList.add("fixhome"); 
        color.forEach(function(c){
            c.style.color="grey";
        });                                    
    }
    else{
        home.classList.remove("fixhome");
        color.forEach(function(c){
            c.style.color="white";
        });
    }
    if(srlh>500) {
        scroll_link.classList.add("open-scl");
    }
    else{
        scroll_link.classList.remove("open-scl");
    }
    if(linkContainer.classList.contains("open-links")){
        linkContainer.classList.remove("open-links");
    }
});
toggle.addEventListener("click",function(){
    linkContainer.classList.toggle("open-links");
    
    if(linkContainer.classList.contains("open-links")){
        home.classList.add("fixhome");
        color.forEach(function(c){
            c.style.color="grey";
        });
    }
    else{
        home.classList.remove("fixhome");
    }
});

const movePlace=document.querySelectorAll(".target");
movePlace.forEach(function(lnk){
    lnk.addEventListener("click",function(e){
        e.preventDefault();
        const id= e.currentTarget.getAttribute("href").slice(1);
        const idselect=document.getElementById(id);
        

        // const homeh=home.getBoundingClientRect().height;
        const lch=linkContainer.getBoundingClientRect().height;
        const bln=home.classList.contains("fixhome");
        let position=idselect.offsetTop - homeh;
        if(!bln){
            position =position-homeh;
        }
        // if (homeh > 80) {
        //     position = position + lch;
        //   }
        window.scrollTo({
            left:0,
            top:position,
        });
        // linkContainer.style.height=0;
    });
});