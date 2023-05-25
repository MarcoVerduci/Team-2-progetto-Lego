let buttonSx = document.querySelector("#prev");
let buttonDx = document.querySelector("#next");
let carosello=document.querySelector("#caros");
let scroll= 0;

buttonDx.addEventListener("click",function (e){
    e.preventDefault();

    
    carosello.scroll({
        left : `${scroll += 1400}` ,
        behavior: "smooth",
      });
    
})

buttonSx.addEventListener("click",function (e){
    e.preventDefault();

    carosello.scroll({
        left:  `${scroll -= 1400}`,
        behavior: "smooth",
      });
    

})

