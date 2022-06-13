const opn_btn=document.querySelector(".open");
const cls_btn=document.querySelector(".close");
const o_btn=document.querySelector(".o-content");
const i_btn=document.querySelector(".i-content");

opn_btn.addEventListener("click",function(){
    o_btn.classList.add("close-oc");
    i_btn.classList.add("open-ic");
});
cls_btn.addEventListener("click",function(){
    o_btn.classList.remove("close-oc");
    i_btn.classList.remove("open-ic");
});