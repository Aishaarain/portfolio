let cross=document.querySelector(".cross");
let sidebar=document.querySelector(".side-bar");
let hamburger=document.querySelector(".hamburger");
let ham=document.querySelector(".ham");

cross.style.display='none';
hamburger.addEventListener("click",()=>{
    sidebar.classList.toggle("sidebargo");
if(sidebar.classList.contains("sidebargo")){
    setTimeout(()=>{ ham.style.display='inline';
},300)
    cross.style.display='none';
}
else{
    ham.style.display='none';
    setTimeout(()=>{
    cross.style.display='inline';
    },400)
}
});
