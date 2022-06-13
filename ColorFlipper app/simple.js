const color=["red", "green", "blue", "yellow", "rgba(10,20,30,50)", "#fff","#ff7200"];
// const btncls=document.getElementsByClassName("simple");
const btn=document.querySelector(".btn");
const colorName=document.querySelector(".colorName");
btn.addEventListener("click",function(){
    const num=getNum();
    // console.log(num);
    document.body.style.backgroundColor=color[num];
    colorName.textContent=color[num];
});
function getNum(){
    return Math.floor(Math.random()*color.length);
}