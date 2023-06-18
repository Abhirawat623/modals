const mainBtn = document.querySelector(".btn");
const modalContainer = document.querySelector('.container');
const closeBtn =document.querySelector(".close");
const saveBtn =document.querySelector(".save");

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
