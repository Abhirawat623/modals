const mainBtn = document.querySelector(".btn");
const modalContainer = document.querySelector('.container');
const closeBtn =document.querySelector(".close");
const saveBtn =document.querySelector(".save");
const darkBtn = document.querySelector(".dark-btn");
const textContainer = document.querySelector(".modals-container");
const darkBody =document.querySelector("body");

mainBtn.addEventListener("click", ()=>{  //for button to hide
    modalContainer.classList.remove("hide")}); 

    //for button to close

    closeBtn.addEventListener("click", ()=>{
        modalContainer.classList.add("hide")
    })

    //for button to save

    saveBtn.addEventListener("click", ()=>{
        alert("text saved !");
    })

    //for button to dark

    darkBtn.addEventListener("click", ()=>{
        if(darkBtn.innerText==="Dark Mode"){
            darkBtn.innerText="Light Mode";
           }
           else{
            darkBtn.innerText="Dark Mode";
           }
       textContainer.classList.toggle("dark");
       darkBody.classList.toggle("dark");
       
    })