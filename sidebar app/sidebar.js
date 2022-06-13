const btn=document.querySelector(".toggle");
const cl_btn=document.querySelector(".close-btn");
const sidebar=document.querySelector(".sidebar");
const cl_hdr=document.querySelector(".hdr");
btn.addEventListener("click",function(){
    sidebar.classList.toggle("open-sidebar");
    cl_hdr.classList.add("close-hdr");
});
cl_btn.addEventListener("click",function(){
    sidebar.classList.remove("open-sidebar");
    cl_hdr.classList.remove("close-hdr");
})