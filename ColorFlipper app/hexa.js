const colors=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const btn=document.querySelector(".btn");
const colorName=document.querySelector(".colorName");
btn.addEventListener("click",function(){
    let hexa="#";
    for(let i=0;i<6;i++){
        hexa+=colors[getNum()];
    }
    document.body.style.backgroundColor=hexa;
    colorName.textContent=hexa;
});
 function getNum(){
     return Math.floor(Math.random()*colors.length);
 } 