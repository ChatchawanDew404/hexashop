let getLoadPage = document.querySelector('.loading')
window.addEventListener("load",()=>{
    getLoadPage.classList.replace("opacity-100","opacity-0")
    getLoadPage.classList.replace("visible","invisible")
})