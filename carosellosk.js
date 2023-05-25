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

let buttonSx2 = document.querySelector("#prev2");
let buttonDx2 = document.querySelector("#next2");
let carosello2=document.querySelector("#caros2");
let scroll2= 0;

buttonDx2.addEventListener("click",function (e){
    e.preventDefault();

    
    carosello2.scroll({
        left : `${scroll2 += 1400}` ,
        behavior: "smooth",
      });
    
})

buttonSx2.addEventListener("click",function (e){
    e.preventDefault();

    carosello2.scroll({
        left:  `${scroll2 -= 1400}`,
        behavior: "smooth",
      });
    

})


