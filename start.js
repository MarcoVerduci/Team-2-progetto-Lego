// script scritte in alto
let btnTopLeft = document.querySelector(".control_btn_left");
let btnTopRight = document.querySelector(".control_btn_right");
let firstText = document.querySelector(".first_text");
let secondText = document.querySelector(".second_text");

let btnTopLeftActive = false;
let btnTopRightActive = false;

btnTopLeft.addEventListener("click", function () {
    if (!btnTopLeftActive) {
        firstText.style.transform = 'translateX(-100%)';
        secondText.style.transform = 'translateX(-100%)';
    } else {
        firstText.style.transform = 'translateX(0%)';
        secondText.style.transform = 'translateX(0%)';
    }
    btnTopLeftActive = !btnTopLeftActive;
});

btnTopRight.addEventListener("click", function () {
    if (!btnTopRightActive) {
        firstText.style.transform = 'translateX(-100%)';
        secondText.style.transform = 'translateX(-100%)';
    } else {
        firstText.style.transform = 'translateX(0%)';
        secondText.style.transform = 'translateX(0%)';
    }
    btnTopRightActive = !btnTopRightActive;
});

//script sezione menù sinistra
let mainElement = document.querySelector("main");
let acquistaButton = document.querySelector(".acquista_btn");
let hiddenList = document.querySelector(".hidden_list");
let bodyElement = document.querySelector("body");
let buttonX = document.querySelector(".button_x");
let secondPartHs = document.querySelector(".second_part_hs");
let sptButton = document.querySelector(".spt_btn");
let spanSpt = document.querySelector(".span_spt");
let secondPartSpt = document.querySelector(".second_part_hs_wrapper_spt");
let etaButton = document.querySelector(".eta_btn");
let spanEta = document.querySelector(".span_eta");
let secondPartEta = document.querySelector(".second_part_hs_wrapper_eta");
let prezziButton = document.querySelector(".prezzi_btn");
let spanPrezzi = document.querySelector(".span_prezzi");
let secondPartPrezzi = document.querySelector(".second_part_hs_wrapper_prezzi");
let mlButton = document.querySelector(".ml_btn");
let spanMl = document.querySelector(".span_ml");
let secondPartMl = document.querySelector(".second_part_hs_wrapper_ml");
let intButton = document.querySelector(".int_btn");
let spanInt = document.querySelector(".span_int");
let secondPartInt = document.querySelector(".second_part_hs_wrapper_int");
let pabButton = document.querySelector(".pab_btn");
let spanPab = document.querySelector(".span_pab");
let secondPartPab = document.querySelector(".second_part_hs_wrapper_pab");
let acquistaButtonActive = false;
let buttonXActive = false;
let sptButtonActive = false;
let etaButtonActive = false;
let prezziButtonActive = false;
let mlButtonActive = false;
let intButtonActive = false;
let pabButtonActive = false;


let scopriButton = document.querySelector(".scopri_btn");
let hiddenSection = document.querySelector(".hidden_section");
let hiddenSection2 = document.querySelector(".hidden_section_2");
let nvButton = document.querySelector(".nv_btn");
let spanNv = document.querySelector(".span_nv");
let secondPart2Nv = document.querySelector(".second_part_hs_2_wrapper_nv");
let naButton = document.querySelector(".na_btn");
let spanNa = document.querySelector(".span_na");
let secondPart2Na = document.querySelector(".second_part_hs_2_wrapper_na");
let nrButton = document.querySelector(".nr_btn");
let spanNr = document.querySelector(".span_nr");
let secondPart2Nr = document.querySelector(".second_part_hs_2_wrapper_nr")

let scopriButtonActive = false;
let nvButtonActive = false;
let naButtonActive = false;
let nrButtonActive = false;


let aiutoButton = document.querySelector(".aiuto_btn");
let hiddenSection3 = document.querySelector(".hidden_section_3");

let aiutoButtonActive = false;



acquistaButton.addEventListener("click", function () {
    if (window.innerWidth >= 821) {
        if (!acquistaButtonActive) {



            acquistaButton.style.borderBottom = '3px solid rgb(0, 0, 0)';
            scopriButton.style.borderBottom = 'none';
            aiutoButton.style.borderBottom = 'none';

            hiddenList.setAttribute('id', 'hidden_list_active');
            let hiddenListActive = document.getElementById('hidden_list_active');
            hiddenListActive.classList.add('active');
            hiddenList.classList.remove('hidden_list');

            bodyElement.style.overflow = 'hidden';

            hiddenSection.style.display = 'flex';
            hiddenSection2.style.display = 'none';
            hiddenSection3.style.display = 'none';

            hiddenListActive.style.width = '47.7%';

            secondPartSpt.removeAttribute('id');
            secondPartSpt.classList.add('second_part_hs_wrapper_spt');
            spanSpt.style.borderBottom = '1px solid transparent';
            secondPartEta.removeAttribute('id');
            secondPartEta.classList.add('second_part_hs_wrapper_eta');
            spanEta.style.borderBottom = '1px solid transparent';
            secondPartPrezzi.removeAttribute('id');
            secondPartPrezzi.classList.add('second_part_hs_wrapper_prezzi');
            spanPrezzi.style.borderBottom = '1px solid transparent';
            secondPartMl.removeAttribute('id');
            secondPartMl.classList.add('second_part_hs_wrapper_ml');
            spanMl.style.borderBottom = '1px solid transparent';
            secondPartInt.removeAttribute('id');
            secondPartInt.classList.add('second_part_hs_wrapper_int');
            spanInt.style.borderBottom = '1px solid transparent';
            secondPartPab.removeAttribute('id');
            secondPartPab.classList.add('second_part_hs_wrapper_pab');
            spanPab.style.borderBottom = '1px solid transparent';

            buttonX.addEventListener("click", function () {
                if (!buttonXActive) {
                    hiddenList.classList.add('hidden_list');
                    hiddenList.removeAttribute('id');
                    hiddenList.classList.remove('active');
                    bodyElement.style.overflow = '';
                    hiddenListActive.style.width = '';
                }
                else {
                    hiddenListActive.classList.add('active');
                    hiddenList.classList.remove('hidden_list');
                }
            })


            sptButton.addEventListener("click", function () {
                if (!sptButtonActive) {
                    hiddenListActive.style.width = '70%';
                    secondPartSpt.setAttribute('id', 'second_part_hs_wrapper_spt_active');
                    secondPartSpt.classList.remove('second_part_hs_wrapper_spt');
                    spanSpt.style.borderBottom = '1px solid black';
                    secondPartEta.removeAttribute('id');
                    secondPartEta.classList.add('second_part_hs_wrapper_eta');
                    spanEta.style.borderBottom = '1px solid transparent';
                    secondPartPrezzi.removeAttribute('id');
                    secondPartPrezzi.classList.add('second_part_hs_wrapper_prezzi');
                    spanPrezzi.style.borderBottom = '1px solid transparent';
                    secondPartMl.removeAttribute('id');
                    secondPartMl.classList.add('second_part_hs_wrapper_ml');
                    spanMl.style.borderBottom = '1px solid transparent';
                    secondPartInt.removeAttribute('id');
                    secondPartInt.classList.add('second_part_hs_wrapper_int');
                    spanInt.style.borderBottom = '1px solid transparent';
                    secondPartPab.removeAttribute('id');
                    secondPartPab.classList.add('second_part_hs_wrapper_pab');
                    spanPab.style.borderBottom = '1px solid transparent';
                } else {
                    hiddenListActive.style.width = '';
                    secondPartSpt.removeAttribute('id');
                    secondPartSpt.classList.add('second_part_hs_wrapper_spt');
                    spanSpt.style.borderBottom = '1px solid transparent';
                }
                sptButtonActive = !sptButtonActive;
            })

            etaButton.addEventListener("click", function () {
                if (!etaButtonActive) {
                    hiddenListActive.style.width = '47%';
                    secondPartEta.setAttribute('id', 'second_part_hs_wrapper_eta_active');
                    secondPartEta.classList.remove('second_part_hs_wrapper_eta');
                    spanEta.style.borderBottom = '1px solid black';
                    secondPartSpt.removeAttribute('id');
                    secondPartSpt.classList.add('second_part_hs_wrapper_spt');
                    spanSpt.style.borderBottom = '1px solid transparent';
                    secondPartPrezzi.removeAttribute('id');
                    secondPartPrezzi.classList.add('second_part_hs_wrapper_prezzi');
                    spanPrezzi.style.borderBottom = '1px solid transparent';
                    secondPartMl.removeAttribute('id');
                    secondPartMl.classList.add('second_part_hs_wrapper_ml');
                    spanMl.style.borderBottom = '1px solid transparent';
                    secondPartInt.removeAttribute('id');
                    secondPartInt.classList.add('second_part_hs_wrapper_int');
                    spanInt.style.borderBottom = '1px solid transparent';
                    secondPartPab.removeAttribute('id');
                    secondPartPab.classList.add('second_part_hs_wrapper_pab');
                    spanPab.style.borderBottom = '1px solid transparent';
                } else {
                    hiddenListActive.style.width = '';
                    secondPartEta.removeAttribute('id');
                    secondPartEta.classList.add('second_part_hs_wrapper_eta');
                    spanEta.style.borderBottom = '1px solid transparent';
                }
                etaButtonActive = !etaButtonActive;
            })

            prezziButton.addEventListener("click", function () {
                if (!prezziButtonActive) {
                    hiddenListActive.style.width = '47%';
                    secondPartPrezzi.setAttribute('id', 'second_part_hs_wrapper_prezzi_active');
                    secondPartPrezzi.classList.remove('second_part_hs_wrapper_prezzi');
                    spanPrezzi.style.borderBottom = '1px solid black';
                    secondPartSpt.removeAttribute('id');
                    secondPartSpt.classList.add('second_part_hs_wrapper_spt');
                    spanSpt.style.borderBottom = '1px solid transparent';
                    secondPartEta.removeAttribute('id');
                    secondPartEta.classList.add('second_part_hs_wrapper_eta');
                    spanEta.style.borderBottom = '1px solid transparent';
                    secondPartMl.removeAttribute('id');
                    secondPartMl.classList.add('second_part_hs_wrapper_ml');
                    spanMl.style.borderBottom = '1px solid transparent';
                    secondPartInt.removeAttribute('id');
                    secondPartInt.classList.add('second_part_hs_wrapper_int');
                    spanInt.style.borderBottom = '1px solid transparent';
                    secondPartPab.removeAttribute('id');
                    secondPartPab.classList.add('second_part_hs_wrapper_pab');
                    spanPab.style.borderBottom = '1px solid transparent';
                } else {
                    hiddenListActive.style.width = '';
                    secondPartPrezzi.removeAttribute('id');
                    secondPartPrezzi.classList.add('second_part_hs_wrapper_prezzi');
                    spanPrezzi.style.borderBottom = '1px solid transparent';
                }
                prezziButtonActive = !prezziButtonActive;
            })

            mlButton.addEventListener("click", function () {
                if (!mlButtonActive) {
                    hiddenListActive.style.width = '47%';
                    secondPartMl.setAttribute('id', 'second_part_hs_wrapper_ml_active');
                    secondPartMl.classList.remove('second_part_hs_wrapper_ml');
                    spanMl.style.borderBottom = '1px solid black';
                    secondPartSpt.removeAttribute('id');
                    secondPartSpt.classList.add('second_part_hs_wrapper_spt');
                    spanSpt.style.borderBottom = '1px solid transparent';
                    secondPartEta.removeAttribute('id');
                    secondPartEta.classList.add('second_part_hs_wrapper_eta');
                    spanEta.style.borderBottom = '1px solid transparent';
                    secondPartPrezzi.removeAttribute('id');
                    secondPartPrezzi.classList.add('second_part_hs_wrapper_prezzi');
                    spanPrezzi.style.borderBottom = '1px solid transparent';
                    secondPartInt.removeAttribute('id');
                    secondPartInt.classList.add('second_part_hs_wrapper_int');
                    spanInt.style.borderBottom = '1px solid transparent';
                    secondPartPab.removeAttribute('id');
                    secondPartPab.classList.add('second_part_hs_wrapper_pab');
                    spanPab.style.borderBottom = '1px solid transparent';
                } else {
                    hiddenListActive.style.width = '';
                    secondPartMl.removeAttribute('id');
                    secondPartMl.classList.add('second_part_hs_wrapper_ml');
                    spanMl.style.borderBottom = '1px solid transparent';
                }
                mlButtonActive = !mlButtonActive;
            })

            intButton.addEventListener("click", function () {
                if (!intButtonActive) {
                    hiddenListActive.style.width = '58.5%';
                    secondPartInt.setAttribute('id', 'second_part_hs_wrapper_int_active');
                    secondPartInt.classList.remove('second_part_hs_wrapper_int');
                    spanInt.style.borderBottom = '1px solid black';
                    secondPartSpt.removeAttribute('id');
                    secondPartSpt.classList.add('second_part_hs_wrapper_spt');
                    spanSpt.style.borderBottom = '1px solid transparent';
                    secondPartEta.removeAttribute('id');
                    secondPartEta.classList.add('second_part_hs_wrapper_eta');
                    spanEta.style.borderBottom = '1px solid transparent';
                    secondPartPrezzi.removeAttribute('id');
                    secondPartPrezzi.classList.add('second_part_hs_wrapper_prezzi');
                    spanPrezzi.style.borderBottom = '1px solid transparent';
                    secondPartMl.removeAttribute('id');
                    secondPartMl.classList.add('second_part_hs_wrapper_ml');
                    spanMl.style.borderBottom = '1px solid transparent';
                    secondPartPab.removeAttribute('id');
                    secondPartPab.classList.add('second_part_hs_wrapper_pab');
                    spanPab.style.borderBottom = '1px solid transparent';
                } else {
                    hiddenListActive.style.width = '';
                    secondPartInt.removeAttribute('id');
                    secondPartInt.classList.add('second_part_hs_wrapper_int');
                    spanInt.style.borderBottom = '1px solid transparent';
                }
                intButtonActive = !intButtonActive;
            })

            pabButton.addEventListener("click", function () {
                if (!pabButtonActive) {
                    hiddenListActive.style.width = '47%';
                    secondPartPab.setAttribute('id', 'second_part_hs_wrapper_pab_active');
                    secondPartPab.classList.remove('second_part_hs_wrapper_pab');
                    spanPab.style.borderBottom = '1px solid black';
                    secondPartSpt.removeAttribute('id');
                    secondPartSpt.classList.add('second_part_hs_wrapper_spt');
                    spanSpt.style.borderBottom = '1px solid transparent';
                    secondPartEta.removeAttribute('id');
                    secondPartEta.classList.add('second_part_hs_wrapper_eta');
                    spanEta.style.borderBottom = '1px solid transparent';
                    secondPartPrezzi.removeAttribute('id');
                    secondPartPrezzi.classList.add('second_part_hs_wrapper_prezzi');
                    spanPrezzi.style.borderBottom = '1px solid transparent';
                    secondPartMl.removeAttribute('id');
                    secondPartMl.classList.add('second_part_hs_wrapper_ml');
                    spanMl.style.borderBottom = '1px solid transparent';
                    secondPartInt.removeAttribute('id');
                    secondPartInt.classList.add('second_part_hs_wrapper_int');
                    spanInt.style.borderBottom = '1px solid transparent';
                } else {
                    hiddenListActive.style.width = '';
                    secondPartPab.removeAttribute('id');
                    secondPartPab.classList.add('second_part_hs_wrapper_pab');
                    spanPab.style.borderBottom = '1px solid transparent';
                }
                pabButtonActive = !pabButtonActive;
            })

        } else {

            hiddenList.classList.add('hidden_list');
            hiddenList.removeAttribute('id');

            bodyElement.style.overflow = '';

        }
        acquistaButtonActive = !acquistaButtonActive;
    }
});

scopriButton.addEventListener("click", function () {
    if (window.innerWidth >= 821) {
        if (!scopriButtonActive) {

            acquistaButton.style.borderBottom = 'none';

            scopriButton.style.borderBottom = '3px solid rgb(0, 0, 0)';

            aiutoButton.style.borderBottom = 'none';

            hiddenList.setAttribute('id', 'hidden_list_active');
            let hiddenListActive = document.getElementById('hidden_list_active');
            hiddenListActive.classList.add('active');
            hiddenList.classList.remove('hidden_list');

            hiddenSection.style.display = 'none';
            hiddenSection2.style.display = 'flex';
            hiddenSection3.style.display = 'none';

            hiddenListActive.style.width = '47.7%';

            hiddenSection2.setAttribute('id', 'hidden_section_2_active');
            hiddenSection2.classList.remove('hidden_section_2');

            bodyElement.style.overflow = 'hidden';

            secondPart2Nv.removeAttribute('id');
            secondPart2Nv.classList.add('second_part_hs_2_wrapper_nv');
            spanNv.style.borderBottom = '1px solid transparent';
            secondPart2Na.removeAttribute('id');
            secondPart2Na.classList.add('second_part_hs_2_wrapper_na');
            spanNa.style.borderBottom = '1px solid transparent';
            secondPart2Nr.removeAttribute('id');
            secondPart2Nr.classList.add('second_part_hs_2_wrapper_nr');
            spanNr.style.borderBottom = '1px solid transparent';

            buttonX.addEventListener("click", function () {
                if (!buttonXActive) {
                    hiddenList.classList.add('hidden_list');
                    hiddenList.removeAttribute('id');
                    hiddenList.classList.remove('active');
                    bodyElement.style.overflow = '';
                    hiddenListActive.style.width = '';
                } else {
                    hiddenListActive.classList.add('active');
                    hiddenList.classList.remove('hidden_list');
                }
            })

            nvButton.addEventListener("click", function () {
                if (!nvButtonActive) {
                    spanNv.style.borderBottom = '1px solid black';
                    hiddenListActive.style.width = '47%';
                    secondPart2Nv.setAttribute('id', 'second_part_hs_2_wrapper_nv_active');
                    secondPart2Nv.classList.remove('second_part_hs_2_wrapper_nv');
                    secondPart2Na.removeAttribute('id');
                    secondPart2Na.classList.add('second_part_hs_2_wrapper_na');
                    spanNa.style.borderBottom = '1px solid transparent';
                    secondPart2Nr.removeAttribute('id');
                    secondPart2Nr.classList.add('second_part_hs_2_wrapper_nr');
                    spanNr.style.borderBottom = '1px solid transparent';

                } else {
                    hiddenListActive.style.width = '';
                    secondPart2Nv.removeAttribute('id');
                    secondPart2Nv.classList.add('second_part_hs_2_wrapper_nv');
                    spanNv.style.borderBottom = '1px solid transparent';
                }
                nvButtonActive = !nvButtonActive;
            })

            naButton.addEventListener("click", function () {
                if (!naButtonActive) {
                    spanNa.style.borderBottom = '1px solid black';
                    hiddenListActive.style.width = '47%';
                    secondPart2Na.setAttribute('id', 'second_part_hs_2_wrapper_na_active');
                    secondPart2Na.classList.remove('second_part_hs_2_wrapper_na');
                    secondPart2Nv.removeAttribute('id');
                    secondPart2Nv.classList.add('second_part_hs_2_wrapper_nv');
                    spanNv.style.borderBottom = '1px solid transparent';
                    secondPart2Nr.removeAttribute('id');
                    secondPart2Nr.classList.add('second_part_hs_2_wrapper_nr');
                    spanNr.style.borderBottom = '1px solid transparent';

                } else {
                    hiddenListActive.style.width = '';
                    secondPart2Na.removeAttribute('id');
                    secondPart2Na.classList.add('second_part_hs_2_wrapper_na');
                    spanNa.style.borderBottom = '1px solid transparent';
                }
                naButtonActive = !naButtonActive;
            });

            nrButton.addEventListener("click", function () {
                if (!nrButtonActive) {
                    spanNr.style.borderBottom = '1px solid black';
                    hiddenListActive.style.width = '47%';
                    secondPart2Nr.setAttribute('id', 'second_part_hs_2_wrapper_nr_active');
                    secondPart2Nr.classList.remove('second_part_hs_2_wrapper_nr');
                    secondPart2Nv.removeAttribute('id');
                    secondPart2Nv.classList.add('second_part_hs_2_wrapper_nv');
                    spanNv.style.borderBottom = '1px solid transparent';
                    secondPart2Na.removeAttribute('id');
                    secondPart2Na.classList.add('second_part_hs_2_wrapper_na');
                    spanNa.style.borderBottom = '1px solid transparent';

                } else {
                    hiddenListActive.style.width = '';
                    secondPart2Nr.removeAttribute('id');
                    secondPart2Nr.classList.add('second_part_hs_2_wrapper_nr');
                    spanNr.style.borderBottom = '1px solid transparent';
                }
                nrButtonActive = !nrButtonActive;
            })

        } else {

            hiddenList.classList.add('hidden_list');
            hiddenList.removeAttribute('id');

            bodyElement.style.overflow = '';
        }
    }
    scopriButtonActive = !scopriButtonActive;
})


aiutoButton.addEventListener("click", function () {
    if (window.innerWidth >= 821) {
        if (!aiutoButtonActive) {

            acquistaButton.style.borderBottom = 'none';
            scopriButton.style.borderBottom = 'none';

            aiutoButton.style.borderBottom = '3px solid rgb(0, 0, 0)';

            hiddenList.setAttribute('id', 'hidden_list_active');
            let hiddenListActive = document.getElementById('hidden_list_active');
            hiddenListActive.classList.add('active');
            hiddenList.classList.remove('hidden_list');

            hiddenSection.style.display = 'none';
            hiddenSection2.style.display = 'none';
            hiddenSection3.style.display = 'block';

            hiddenListActive.style.width = '47.7%';

            hiddenSection3.setAttribute('id', 'hidden_section_3_active');
            hiddenSection3.classList.remove('hidden_section_3');

            bodyElement.style.overflow = 'hidden';

            buttonX.addEventListener("click", function () {
                if (!buttonXActive) {
                    hiddenList.classList.add('hidden_list');
                    hiddenList.removeAttribute('id');
                    hiddenList.classList.remove('active');
                    bodyElement.style.overflow = '';
                    hiddenListActive.style.display = 'hidden';
                } else {
                    hiddenListActive.classList.add('active');
                    hiddenList.classList.remove('hidden_list');
                }
            })

        } else {

            hiddenList.classList.add('hidden_list');
            hiddenList.removeAttribute('id');

            bodyElement.style.overflow = '';

            hiddenList.classList.add('hidden_list');
            hiddenList.removeAttribute('id');
        }
    }
    aiutoButtonActive = !aiutoButtonActive;
})

// script barra di ricerca
let searchButton = document.querySelector(".search_btn");
let hiddenSrcBtnWrapper = document.querySelector(".hidden_search_btn_wrapper");
let closeButton = document.querySelector(".second_btn");
let secondSrcBtn = document.querySelector(".first_btn");

let searchButtonActive = false;
let closeButtonActive = false;
let secondSrcBtnActive = false;

searchButton.addEventListener("click", function () {
    if (!searchButtonActive) {
        hiddenSrcBtnWrapper.setAttribute('id', 'hidden_search_btn_wrapper_active');
        hiddenSrcBtnWrapper.classList.remove('hidden_search_btn_wrapper');

        searchButton.style.display = 'none';
    }
    closeButton.addEventListener("click", function () {
        if (!closeButtonActive) {
            hiddenSrcBtnWrapper.classList.add('hidden_search_btn_wrapper');
            hiddenSrcBtnWrapper.removeAttribute('id');

            searchButton.style.display = 'flex';
        }
    })
    secondSrcBtn.addEventListener("click", function () {
        if (!secondSrcBtnActive) {
            hiddenSrcBtnWrapper.classList.add('hidden_search_btn_wrapper');
            hiddenSrcBtnWrapper.removeAttribute('id');

            searchButton.style.display = 'flex';
        }
    })

})


// cambio della risorsa del video
const videoSource = document.getElementById('videoSource');

let sourceLarge = 'https://www.lego.com/cdn/cs/set/assets/bltb61a9205c8d48d11/1823-TitanPhase1-202305-Homepage-Hero-Standard-Large-Motion.mp4';
let sourceMedium = 'https://www.lego.com/cdn/cs/set/assets/blte2aad8c096e33c71/1823-TitanPhase1-202305-Homepage-Hero-Standard-Medium-Motion.mp4';
let sourceSmall = 'https://www.lego.com/cdn/cs/set/assets/bltda9f167c36efdd40/1823-TitanPhase1-202305-Homepage-Hero-Standard-Small-Motion.mp4';

function updateVideoSource() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 821) {
        videoSource.src = sourceLarge;
    } else if (screenWidth >= 361 && screenWidth <= 820) {
        videoSource.src = sourceMedium;
    } else if (screenWidth <= 360) {
        videoSource.src = sourceSmall;
    }
    document.getElementById('videoPlayer').load();
}

window.addEventListener('load', updateVideoSource);
window.addEventListener('resize', updateVideoSource);

// script pausa e play del video per telefono
const videoPlayerPhone = document.getElementById('videoPlayerPhone');
const videoButtonPhone = document.getElementById('videoButtonPhone');
const playIconPhone = document.getElementById('playIconPhone');
const playPauseTextPhone = document.getElementById('playPauseTextPhone');

function toggleVideoPhone() {
    if (videoPlayerPhone.paused) {
        videoPlayerPhone.play();
        playIconPhone.innerHTML = '<path stroke="#FFF" d="M35 0C15.671 0 0 15.671 0 35s15.671 35 35 35 35-15.671 35-35S54.329 0 35 0z" opacity=".6"></path><path fill="#E0E0E0" d="M50 48.716c0 .71-.565 1.284-1.252 1.284h-8.49A1.269 1.269 0 0139 48.716V22.279c0-.71.56-1.279 1.257-1.279h8.49c.69 0 1.253.57 1.253 1.279v26.437zm-18 0c0 .71-.56 1.284-1.257 1.284h-8.488C21.563 50 21 49.426 21 48.716V22.279c0-.71.563-1.279 1.255-1.279h8.488c.697 0 1.257.57 1.257 1.279v26.437z"></path>';
        playPauseTextPhone.textContent = 'Pause video';
    } else {
        videoPlayerPhone.pause();
        playIconPhone.innerHTML = '<path stroke="#fff" stroke-opacity=".404" d="M35 0C15.671 0 0 15.671 0 35s15.671 35 35 35 35-15.671 35-35S54.329 0 35 0z" opacity=".6"></path><path fill="#E0E0E0" d="M27.708 49.93c-.239 0-.475-.058-.69-.178a1.445 1.445 0 01-.768-1.28V21.528c0-.537.295-1.033.767-1.278a1.447 1.447 0 011.493.065l20.417 13.472a1.455 1.455 0 010 2.433L28.51 49.69a1.45 1.45 0 01-.802.24z"></path>';
        playPauseTextPhone.textContent = 'Play video';
    }
}

videoButtonPhone.addEventListener('click', toggleVideoPhone);

// script pausa e play del video per tablet e desktop
const videoPlayer = document.getElementById('videoPlayer');
const videoButton = document.getElementById('videoButton');
const playIcon = document.getElementById('playIcon');
const playPauseText = document.getElementById('playPauseText');

function toggleVideo() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playIcon.innerHTML = '<path stroke="#FFF" d="M35 0C15.671 0 0 15.671 0 35s15.671 35 35 35 35-15.671 35-35S54.329 0 35 0z" opacity=".6"></path><path fill="#E0E0E0" d="M50 48.716c0 .71-.565 1.284-1.252 1.284h-8.49A1.269 1.269 0 0139 48.716V22.279c0-.71.56-1.279 1.257-1.279h8.49c.69 0 1.253.57 1.253 1.279v26.437zm-18 0c0 .71-.56 1.284-1.257 1.284h-8.488C21.563 50 21 49.426 21 48.716V22.279c0-.71.563-1.279 1.255-1.279h8.488c.697 0 1.257.57 1.257 1.279v26.437z"></path>';
        playPauseText.textContent = 'Pause video';
    } else {
        videoPlayer.pause();
        playIcon.innerHTML = '<path stroke="#fff" stroke-opacity=".404" d="M35 0C15.671 0 0 15.671 0 35s15.671 35 35 35 35-15.671 35-35S54.329 0 35 0z" opacity=".6"></path><path fill="#E0E0E0" d="M27.708 49.93c-.239 0-.475-.058-.69-.178a1.445 1.445 0 01-.768-1.28V21.528c0-.537.295-1.033.767-1.278a1.447 1.447 0 011.493.065l20.417 13.472a1.455 1.455 0 010 2.433L28.51 49.69a1.45 1.45 0 01-.802.24z"></path>';
        playPauseText.textContent = 'Play video';
    }
}

videoButton.addEventListener('click', toggleVideo);