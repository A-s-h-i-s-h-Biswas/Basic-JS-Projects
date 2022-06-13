const questions=document.querySelectorAll(".question");
// const ans=document.querySelectorAll(".btns");

questions.forEach(function(qsn){
    const btn=qsn.querySelector(".btns");
    const ans=qsn.querySelector(".ans");
    btn.addEventListener("click",function(){
        questions.forEach(function(cq){
           if(cq!=qsn){
            //    btn.classList.remove("show-cls");
            //    ans.classList.remove("show-ans");
            cq.classList.remove("show-cls");
            // cq.classList.remove("show-ans");
           } 
        })
        qsn.classList.toggle("show-cls");
        // qsn.classList.toggle("show-ans");
    })
    
})