let buttonSx = document.querySelector("#prev");
let buttonDx = document.querySelector("#next");
let carosello=document.querySelector("#caros");
let scrolll= 0;
let x = window.matchMedia("(max-width: 820px)")

buttonDx.addEventListener("click",function (e){
    e.preventDefault();
    if (x.matches){
      carosello.scroll({
        left:  `${scrolll += 750}`,
        behavior: "smooth",
      });
  
    } else
    
    carosello.scroll({
        left : `${scrolll += 1400}` ,
        behavior: "smooth",
      });
    
})

buttonSx.addEventListener("click",function (e){
    e.preventDefault();
  if (x.matches){
    carosello.scroll({
      left:  `${scrolll -= 750}`,
      behavior: "smooth",
    });

  } else
    carosello.scroll({
        left:  `${scrolll -= 1400}`,
        behavior: "smooth",
      });

      
    

})

let buttonSx2 = document.querySelector("#prev2");
let buttonDx2 = document.querySelector("#next2");
let carosello2=document.querySelector("#caros2");
let scroll2= 0;

buttonDx2.addEventListener("click",function (e){
    e.preventDefault();
    if (x.matches){
      carosello2.scroll({
        left:  `${scroll2 += 750}`,
        behavior: "smooth",
      });
  
    } else
    
    carosello2.scroll({
        left : `${scroll2 += 1400}` ,
        behavior: "smooth",
      });
    
})

buttonSx2.addEventListener("click",function (e){
    e.preventDefault();
    if (x.matches){
      carosello2.scroll({
        left:  `${scroll2 -= 750}`,
        behavior: "smooth",
      });
  
    } else
    carosello2.scroll({
        left:  `${scroll2 -= 1400}`,
        behavior: "smooth",
      });
    

})





function scrollTablet (mediaquery) {
  if (mediaquery.matches && scrolll >3500) {
      buttonDx.style.visibility="hidden"
  } else if (mediaquery.matches && scrolll <=3000){
    buttonDx.style.visibility="visible"
  }
}

function hidedx (mediaquery){
  if (mediaquery.matches && scrolll == 0){
    buttonSx.style.visibility="hidden"
  } else if (mediaquery.matches && scrolll > 0){
    buttonSx.style.visibility="visible"
  }
}

function scrollTablet2 (mediaquery) {
  if (mediaquery.matches && scroll2 >=3500) {
      buttonDx2.style.visibility="hidden"
  } else if (mediaquery.matches && scroll2 <=3000){
    buttonDx2.style.visibility="visible"
  }
}

function hidedx2 (mediaquery){
  if (mediaquery.matches && scroll2 == 0){
    buttonSx2.style.visibility="hidden"
  } else if (mediaquery.matches && scroll2 > 0){
    buttonSx2.style.visibility="visible"
  }
}



console.log (x)

setInterval(() => {
  hidedx(x)
  scrollTablet(x);
  hidedx2(x);
  scrollTablet2(x);
  // console.log (scrolll)
}, 500);
