const amNord=document.querySelector("#f-content-1")
const amSud=document.querySelector("#f-content-2")
const eu=document.querySelector("#f-content-3")
const asia=document.querySelector("#f-content-4")
const mOriente=document.querySelector("#f-content-5")

const BamNord=document.querySelector("#f-content-1b")
const BamSud=document.querySelector("#f-content-2b")
const Beu=document.querySelector("#f-content-3b")
const Basia=document.querySelector("#f-content-4b")
const BmOriente=document.querySelector("#f-content-5b")





BamNord.addEventListener("click",function (ev) {
    ev.preventDefault()
    BamNord.style.borderBottom="2px solid black";
    BamSud.style.borderBottom="none";
    Beu.style.borderBottom="none";
    Basia.style.borderBottom="none";
    BmOriente.style.borderBottom="none";
    
    
    amNord.style.display="flex";
    amSud.style.display="none";
    eu.style.display="none";
    asia.style.display="none";
    mOriente.style.display="none";
})

BamSud.addEventListener("click",function (ev) {
    ev.preventDefault()

    BamNord.style.borderBottom="none";
    BamSud.style.borderBottom="2px solid black";
    Beu.style.borderBottom="none";
    Basia.style.borderBottom="none";
    BmOriente.style.borderBottom="none";

    amNord.style.display="none";
    amSud.style.display="flex";
    eu.style.display="none";
    asia.style.display="none";
    mOriente.style.display="none";
})

Beu.addEventListener("click",function (ev) {
    ev.preventDefault()

    BamNord.style.borderBottom="none";
    BamSud.style.borderBottom="none";
    Beu.style.borderBottom="2px solid black";
    Basia.style.borderBottom="none";
    BmOriente.style.borderBottom="none";

    amNord.style.display="none";
    amSud.style.display="none";
    eu.style.display="flex";
    asia.style.display="none";
    mOriente.style.display="none";
})

Basia.addEventListener("click",function (ev) {
    ev.preventDefault()

    BamNord.style.borderBottom="none";
    BamSud.style.borderBottom="none";
    Beu.style.borderBottom="none";
    Basia.style.borderBottom="2px solid black";
    BmOriente.style.borderBottom="none";

    amNord.style.display="none";
    amSud.style.display="none";
    eu.style.display="none";
    asia.style.display="flex";
    mOriente.style.display="none";
})

BmOriente.addEventListener("click",function (ev) {
    ev.preventDefault()

    BamNord.style.borderBottom="none";
    BamSud.style.borderBottom="none";
    Beu.style.borderBottom="none";
    Basia.style.borderBottom="none";
    BmOriente.style.borderBottom="2px solid black";

    amNord.style.display="none";
    amSud.style.display="none";
    eu.style.display="none";
    asia.style.display="none";
    mOriente.style.display="flex";
})

const globLanguage = document.querySelector(".globalLanguage")
const langButton = document.querySelector(".vaicoltango")

langButton.addEventListener("click",function (ev) {
    ev.preventDefault()
   
        globLanguage.style.display ="flex"
   
        
    
    
})

const closeButt =document.querySelector(".close")

closeButt.addEventListener("click",function (ev) {
    ev.preventDefault()
    
    globLanguage.style.display="none"
        
    
    
})
