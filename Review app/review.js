const info=[
    {img:"i1.jpg", name:" Arpan Modak", job:"UI Designer", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minusvoluptas necessitatibus dolores. Repudiandae magni vitae eiusconsequatur assumenda, deserunt eum error id nihil harum a, aliquid ipsa voluptas placeat?"},
    {img:"i2.jpg", name:" Rupa Modak", job:"Software Engineer", bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, molestiae, molestias explicabo aut corrupti enim, voluptates libero adipisci similique minus porro! Quisquam ratione officia quo! Similique possimus doloremque molestiae voluptate."},
    {img:"i3.jpg", name:" Kanika Modak", job:"frontend Designer", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis fugiat nisi laborum itaque suscipit, rem architecto ipsum, eaque dolor ut, labore accusamus mollitia distinctio. Quibusdam quia ex explicabo commodi?"},
    {img:"i4.jpg", name:"Suditpa Biswas", job:"Backend Programmer", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, nulla unde, atque culpa quae veritatis iure consequatur ab inventore, dolorem ducimus. Non ducimus, ea perferendis rerum temporibus quaerat vel!"},
    {img:"i5.jpg", name:"Ashima Biswas", job:"Data Enginner", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe aperiam soluta ut facilis, perspiciatis eaque fugiat libero quisquam unde accusantium debitis qui aspernatur maiores excepturi reprehenderit cumque iusto! Esse."}
];
let count=0;
const img=document.querySelector(".img");
const Name=document.querySelector(".name");
const job=document.querySelector(".job");
const bio=document.querySelector(".bio");
const btns=document.querySelectorAll(".btn");

        // img.src=info[2].img;
        // Name.textContent=info[1].name;
        // job.textContent=info[3].job;
        // bio.textContent=info[1].bio;




btns.forEach(function(ele){
    ele.addEventListener("click",function(e){
        const cl=e.currentTarget.classList;
        if(cl.contains("left"))count--;
        else if(cl.contains("right"))count++;
        else count=getRandom();
        if(count<0)count=info.length-1;
        if(count>info.length)count=0;
        const item=info[count];
        img.src=item.img;
        Name.textContent=item.name;
        job.textContent=item.job;
        bio.textContent=item.bio;
    });
});
function getRandom(){
    return Math.floor(Math.random()*info.length);
}