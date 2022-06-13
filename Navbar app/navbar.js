const btn=document.querySelector(".toggle");
const links=document.querySelector(".links");
const icons=document.querySelector(".icons");
btn.addEventListener("click",function(){
    if(links.classList.contains("open-links")){
        links.classList.remove("open-links");
        icons.classList.remove("open-icons");
    }
    else{
        links.classList.add("open-links");
        icons.classList.add("open-icons");
    }
});