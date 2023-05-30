// script scritte in alto per telefono
let btnTopLeftPhone = document.querySelector(".top_nav_left_btn");
let btnTopRightPhone = document.querySelector(".top_nav_right_btn");
let firstTextPhone = document.querySelector(".top_nav_center_el_first_text");
let secondTextPhone = document.querySelector(".top_nav_center_el_second_text");
let thirdTextPhone = document.querySelector(".top_nav_center_el_third_text");

let translateValuesPhone = ['0%', '-100%', '-200%'];
let currentIndexPhone = 0;

btnTopLeftPhone.addEventListener("click", function () {
    if (window.innerWidth <= 360) {
        currentIndexPhone--;
        if (currentIndexPhone < 0) {
            currentIndexPhone = translateValuesPhone.length - 1;
        }

        updateTransformPhone();
    }
});

btnTopRightPhone.addEventListener("click", function () {
    if (window.innerWidth <= 360) {
        currentIndexPhone++;
        if (currentIndexPhone >= translateValuesPhone.length) {
            currentIndexPhone = 0;
        }

        updateTransformPhone();
    }
});

function updateTransformPhone() {
    firstTextPhone.style.transform = `translateX(${translateValuesPhone[currentIndexPhone]})`;
    secondTextPhone.style.transform = `translateX(${translateValuesPhone[currentIndexPhone]})`;
    thirdTextPhone.style.transform = `translateX(${translateValuesPhone[currentIndexPhone]})`;
}


// bottone per chiudere la sezione in alto per telefono

let topNavCloserBtnPhone = document.querySelector(".top_nav_closer_btn");
let topNavPhone = document.querySelector(".top_nav_wrapper");
let hiddenCloserBtnPhone = document.querySelector(".hidden_closer_btn_tab");
let headerInfoPhone = document.querySelector(".header_info");

let topNavCloserBtnPhoneActive = false;

topNavCloserBtnPhone.addEventListener("click", function () {
    if (window.innerWidth <= 360) {
        if (!topNavCloserBtnPhoneActive) {
            topNavPhone.style.display = 'none';
            hiddenCloserBtnPhone.style.top = '1px';
            headerInfoPhone.style.top = '6.5%';
        }
    }
});


// script search bar telefono

let bottomNavSearchBtnPhone = document.querySelector(".bottom_nav_search_btn");
let hiddenSearchBarPhone = document.querySelector(".hidden_search_bar_wrapper");
let hiddenSearchBtnPhone = document.querySelector(".hidden_search_bar_search_btn");
let SearchBarCloserBtnPhone = document.querySelector(".hidden_search_bar_closer_btn");

let bottomNavSearchBtnPhoneActive = false;
let hiddenSearchBtnPhoneActive = false;
let SearchBarCloserBtnPhoneActive = false;

bottomNavSearchBtnPhone.addEventListener("click", function () {
    if (window.innerWidth <= 360) {
        if (!bottomNavSearchBtnPhoneActive) {
            bodyElement.style.overflow = 'hidden';
            hiddenSearchBarPhone.style.display = 'block';
        }
    }
    bottomNavSearchBtnPhoneActive = !bottomNavSearchBtnPhoneActive;
});

hiddenSearchBtnPhone.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.innerWidth <= 360) {
        if (!hiddenSearchBtnPhoneActive) {
            hiddenSearchBarPhone.style.display = 'none';
        }
    }
    hiddenSearchBtnPhoneActive = !hiddenSearchBtnPhoneActive;
});

SearchBarCloserBtnPhone.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.innerWidth <= 360) {
        if (!SearchBarCloserBtnPhoneActive) {
            hiddenSearchBarPhone.style.display = 'none';
        }
    }
    SearchBarCloserBtnPhoneActive = !SearchBarCloserBtnPhoneActive;
});


// script per sezione nascosta a sinistra per telefono

let closerBtnPhone = document.querySelector(".hidden_closer_btn_tab");
let menuBtnPhone = document.querySelector(".menu_btn");
let closeBtnPhone = document.querySelector(".close_btn");
let changeCloseBtnPhone = document.querySelector(".change_close_btn");
let closeBtnDivWrapperPhone = document.querySelector(".close_btn_div_wrapper");

let backgroundShadowPhone = document.querySelector(".background_shadow_tab");
let hiddenListPhone = document.querySelector(".hidden_list_tab");

let closeBtnPhoneActive = false;

let acquistaButtonPhone = document.querySelector(".acquista_btn_tab");
let sectionAcquistaPhone = document.querySelector(".hidden_section_acquista");
let menuSpanFrecciaPhone = document.querySelector(".menu_span_freccia");

let acquistaButtonPhoneActive = false;
let menuBtnPhoneActiveReturn = false;

let sptAcquistaSectionPhone = document.querySelector(".hidden_section_acquista_spt");
let sptButtonPhone = document.querySelector(".main_list_hidden_section_acquista_btn");
let sptPrevSectionBtnPhone = document.querySelector(".hidden_section_acquista_prev_section_btn");

let sptButtonPhoneActive = false;
let sptPrevSectionBtnPhoneActive = false;

let etaAcquistaSectionPhone = document.querySelector(".hidden_section_acquista_eta");
let etaButtonPhone = document.querySelector(".main_list_hidden_section_eta_btn");
let etaPrevSectionBtnPhone = document.querySelector(".hidden_section_acquista_prev_section_eta");

let etaButtonPhoneActive = false;
let etaPrevSectionBtnPhoneActive = false;

let prezziAcquistaSectionPhone = document.querySelector(".hidden_section_acquista_prezzi");
let prezziButtonPhone = document.querySelector(".main_list_hidden_section_prezzi_btn");
let prezziPrevSectionBtnPhone = document.querySelector(".hidden_section_acquista_prev_section_prezzi");

let prezziButtonPhoneActive = false;
let prezziPrevSectionBtnPhoneActive = false;

let mlAcquistaSectionPhone = document.querySelector(".hidden_section_acquista_ml");
let mlButtonPhone = document.querySelector(".main_list_hidden_section_ml_btn");
let mlPrevSectionBtnPhone = document.querySelector(".hidden_section_acquista_prev_section_ml");

let mlButtonPhoneActive = false;
let mlPrevSectionBtnPhoneActive = false;

let intAcquistaSectionPhone = document.querySelector(".hidden_section_acquista_int");
let intButtonPhone = document.querySelector(".main_list_hidden_section_int_btn");
let intPrevSectionBtnPhone = document.querySelector(".hidden_section_acquista_prev_section_int");

let intButtonPhoneActive = false;
let intPrevSectionBtnPhoneActive = false;

let pabAcquistaSectionPhone = document.querySelector(".hidden_section_acquista_pab");
let pabButtonPhone = document.querySelector(".main_list_hidden_section_pab_btn");
let pabPrevSectionBtnPhone = document.querySelector(".hidden_section_acquista_prev_section_pab");

let pabButtonPhoneActive = false;
let pabPrevSectionBtnPhoneActive = false;

let scopriButtonPhone = document.querySelector(".scopri_btn_tab");
let sectionScopriPhone = document.querySelector(".hidden_section_scopri");

let scopriButtonPhoneActive = false;

let nvScopriSectionPhone = document.querySelector(".hidden_section_scopri_nv");
let nvButtonPhone = document.querySelector(".main_list_hidden_section_scopri_btn_nv");
let nvPrevSectionBtnPhone = document.querySelector(".hidden_section_scopri_prev_section_nv");

let nvButtonPhoneActive = false;
let nvPrevSectionBtnPhoneActive = false;

let naScopriSectionPhone = document.querySelector(".hidden_section_scopri_na");
let naButtonPhone = document.querySelector(".main_list_hidden_section_scopri_btn_na");
let naPrevSectionBtnPhone = document.querySelector(".hidden_section_scopri_prev_section_na");

let naButtonPhoneActive = false;
let naPrevSectionBtnPhoneActive = false;

let nrScopriSectionPhone = document.querySelector(".hidden_section_scopri_nr");
let nrButtonPhone = document.querySelector(".main_list_hidden_section_scopri_btn_nr");
let nrPrevSectionBtnPhone = document.querySelector(".hidden_section_scopri_prev_section_nr");

let nrButtonPhoneActive = false;
let nrPrevSectionBtnPhoneActive = false;

let aiutoButtonPhone = document.querySelector(".aiuto_btn_tab");
let sectionAiutoPhone = document.querySelector(".hidden_section_aiuto");

let aiutoButtonPhoneActive = false;


closeBtnPhone.addEventListener("click", function () {
    if (window.innerWidth <= 360) {
        if (!closeBtnActive) {

            bodyElement.style.overflow = 'hidden';

            backgroundShadowPhone.style.display = 'block';
            backgroundShadowPhone.style.opacity = '0.5';
            hiddenListPhone.style.transform = 'translateX(0%) translateY(0px)';
            hiddenListPhone.style.visibility = 'visible';

            closerBtnPhone.setAttribute('id', 'hidden_closer_btn_tab_active')
            closerBtnPhone.classList.remove('hidden_closer_btn_tab');

            menuBtnPhone.setAttribute('id', 'menu_btn_active');
            let menuBtnPhoneActive = document.getElementById("menu_btn_active");
            menuBtnPhone.classList.remove('menu_btn');

            closeBtnPhone.setAttribute('id', 'close_btn_active');
            closeBtnPhone.classList.remove('close_btn');

            closeBtnDivWrapperPhone.setAttribute('id', 'close_btn_div_wrapper_active');
            closeBtnDivWrapperPhone.classList.remove('close_btn_div_wrapper');

            changeCloseBtnPhone.classList.toggle('active');

            sectionAcquistaPhone.removeAttribute('id');
            sectionAcquistaPhone.classList.add('hidden_section_acquista');

            sectionAcquistaPhone.removeAttribute('id');
            sectionAcquistaPhone.classList.add('hidden_section_acquista');

            sptAcquistaSectionPhone.removeAttribute('id');
            sptAcquistaSectionPhone.classList.add('hidden_section_acquista_spt');

            etaAcquistaSectionPhone.removeAttribute('id');
            etaAcquistaSectionPhone.classList.add('hidden_section_acquista_eta');

            prezziAcquistaSectionPhone.removeAttribute('id');
            prezziAcquistaSectionPhone.classList.add('hidden_section_acquista_prezzi');

            mlAcquistaSectionPhone.removeAttribute('id');
            mlAcquistaSectionPhone.classList.add('hidden_section_acquista_ml');

            intAcquistaSectionPhone.removeAttribute('id');
            intAcquistaSectionPhone.classList.add('hidden_section_acquista_int');

            pabAcquistaSectionPhone.removeAttribute('id');
            pabAcquistaSectionPhone.classList.add('hidden_section_acquista_pab');

            sectionScopriPhone.removeAttribute('id', 'hidden_section_scopri_active');
            sectionScopriPhone.classList.add('hidden_section_scopri');

            sectionAiutoPhone.removeAttribute('id');
            sectionAiutoPhone.classList.add('hidden_section_aiuto');

            acquistaButtonPhone.addEventListener("click", function () {
                if (window.innerWidth <= 360) {
                    if (!acquistaButtonPhoneActive) {

                        menuBtnPhoneActive.style.pointerEvents = 'auto';

                        menuSpanFrecciaPhone.style.display = 'flex';

                        sectionAcquistaPhone.setAttribute('id', 'hidden_section_acquista_active');
                        sectionAcquistaPhone.classList.remove('hidden_section_acquista');

                        menuBtnPhoneActive.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!menuBtnPhoneActiveReturn) {

                                    menuBtnPhoneActive.style.pointerEvents = 'none';
                                    menuSpanFrecciaPhone.style.display = 'none';

                                    hiddenListPhone.style.transform = 'translateX(0%) translateY(0px)';

                                    sectionAcquistaPhone.removeAttribute('id');
                                    sectionAcquistaPhone.classList.add('hidden_section_acquista');

                                    sectionAcquistaPhone.removeAttribute('id');
                                    sectionAcquistaPhone.classList.add('hidden_section_acquista');

                                    sptAcquistaSectionPhone.removeAttribute('id');
                                    sptAcquistaSectionPhone.classList.add('hidden_section_acquista_spt');

                                    etaAcquistaSectionPhone.removeAttribute('id');
                                    etaAcquistaSectionPhone.classList.add('hidden_section_acquista_eta');

                                    prezziAcquistaSectionPhone.removeAttribute('id');
                                    prezziAcquistaSectionPhone.classList.add('hidden_section_acquista_prezzi');

                                    mlAcquistaSectionPhone.removeAttribute('id');
                                    mlAcquistaSectionPhone.classList.add('hidden_section_acquista_ml');

                                    intAcquistaSectionPhone.removeAttribute('id');
                                    intAcquistaSectionPhone.classList.add('hidden_section_acquista_int');

                                    pabAcquistaSectionPhone.removeAttribute('id');
                                    pabAcquistaSectionPhone.classList.add('hidden_section_acquista_pab');
                                }
                            }
                        })

                        sptButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!sptButtonPhoneActive) {
                                    sptAcquistaSectionPhone.setAttribute('id', 'hidden_section_acquista_spt_active');
                                    sptAcquistaSectionPhone.classList.remove('hidden_section_acquista_spt');

                                    sptPrevSectionBtnPhone.addEventListener("click", function () {
                                        sptAcquistaSectionPhone.removeAttribute('id');
                                        sptAcquistaSectionPhone.classList.add('hidden_section_acquista_spt');

                                        sectionAcquistaPhone.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaPhone.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        etaButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!etaButtonPhoneActive) {
                                    etaAcquistaSectionPhone.setAttribute('id', 'hidden_section_acquista_eta_active');
                                    etaAcquistaSectionPhone.classList.remove('hidden_section_acquista_eta');

                                    etaPrevSectionBtnPhone.addEventListener("click", function () {
                                        etaAcquistaSectionPhone.removeAttribute('id');
                                        etaAcquistaSectionPhone.classList.add('hidden_section_acquista_eta');

                                        sectionAcquistaPhone.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaPhone.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        prezziButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!prezziButtonPhoneActive) {
                                    prezziAcquistaSectionPhone.setAttribute('id', 'hidden_section_acquista_prezzi_active');
                                    prezziAcquistaSectionPhone.classList.remove('hidden_section_acquista_prezzi');

                                    prezziPrevSectionBtnPhone.addEventListener("click", function () {
                                        prezziAcquistaSectionPhone.removeAttribute('id');
                                        prezziAcquistaSectionPhone.classList.add('hidden_section_acquista_prezzi');

                                        sectionAcquistaPhone.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaPhone.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        mlButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!mlButtonPhoneActive) {
                                    mlAcquistaSectionPhone.setAttribute('id', 'hidden_section_acquista_ml_active');
                                    mlAcquistaSectionPhone.classList.remove('hidden_section_acquista_ml');

                                    mlPrevSectionBtnPhone.addEventListener("click", function () {
                                        mlAcquistaSectionPhone.removeAttribute('id');
                                        mlAcquistaSectionPhone.classList.add('hidden_section_acquista_ml');

                                        sectionAcquistaPhone.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaPhone.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        intButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!intButtonPhoneActive) {
                                    intAcquistaSectionPhone.setAttribute('id', 'hidden_section_acquista_int_active');
                                    intAcquistaSectionPhone.classList.remove('hidden_section_acquista_int');

                                    intPrevSectionBtnPhone.addEventListener("click", function () {
                                        intAcquistaSectionPhone.removeAttribute('id');
                                        intAcquistaSectionPhone.classList.add('hidden_section_acquista_int');

                                        sectionAcquistaPhone.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaPhone.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        pabButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!intButtonPhoneActive) {
                                    pabAcquistaSectionPhone.setAttribute('id', 'hidden_section_acquista_pab_active');
                                    pabAcquistaSectionPhone.classList.remove('hidden_section_acquista_pab');

                                    pabPrevSectionBtnPhone.addEventListener("click", function () {
                                        pabAcquistaSectionPhone.removeAttribute('id');
                                        pabAcquistaSectionPhone.classList.add('hidden_section_acquista_pab');

                                        sectionAcquistaPhone.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaPhone.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });

                    } else {
                        menuBtnPhoneActive.style.pointerEvents = 'none';
                        menuSpanFrecciaPhone.style.display = 'none';

                        sectionAcquistaPhone.removeAttribute('id');
                        sectionAcquistaPhone.classList.add('hidden_section_acquista');
                    }
                    acquistaButtonPhoneActive = !acquistaButtonPhoneActive;
                }
            });

            scopriButtonPhone.addEventListener("click", function () {
                if (window.innerWidth <= 360) {
                    if (!scopriButtonPhoneActive) {

                        menuBtnPhoneActive.style.pointerEvents = 'auto';

                        menuSpanFrecciaPhone.style.display = 'flex';

                        sectionScopriPhone.setAttribute('id', 'hidden_section_scopri_active');
                        sectionScopriPhone.classList.remove('hidden_section_scopri');

                        menuBtnPhoneActive.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!menuBtnPhoneActiveReturn) {

                                    menuBtnPhoneActive.style.pointerEvents = 'none';
                                    menuSpanFrecciaPhone.style.display = 'none';

                                    hiddenListPhone.style.transform = 'translateX(0%) translateY(0px)';

                                    sectionScopriPhone.removeAttribute('id', 'hidden_section_scopri_active');
                                    sectionScopriPhone.classList.add('hidden_section_scopri');

                                    nvScopriSectionPhone.removeAttribute('id');
                                    nvScopriSectionPhone.classList.add('hidden_section_scopri_nv');

                                    naScopriSectionPhone.removeAttribute('id');
                                    naScopriSectionPhone.classList.add('hidden_section_scopri_na');

                                    nrScopriSectionPhone.removeAttribute('id');
                                    nrScopriSectionPhone.classList.add('hidden_section_scopri_nr');
                                }
                            }
                        })

                        nvButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!nvButtonPhoneActive) {
                                    nvScopriSectionPhone.setAttribute('id', 'hidden_section_scopri_nv_active');
                                    nvScopriSectionPhone.classList.remove('hidden_section_scopri_nv');

                                    nvPrevSectionBtnPhone.addEventListener("click", function () {
                                        nvScopriSectionPhone.removeAttribute('id');
                                        nvScopriSectionPhone.classList.add('hidden_section_scopri_nv');

                                        sectionScopriPhone.setAttribute('id', 'hidden_section_scopri_active');
                                        sectionScopriPhone.classList.remove('hidden_section_scopri');
                                    })
                                }
                            }
                        });
                        naButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!naButtonPhoneActive) {
                                    naScopriSectionPhone.setAttribute('id', 'hidden_section_scopri_na_active');
                                    naScopriSectionPhone.classList.remove('hidden_section_scopri_na');

                                    naPrevSectionBtnPhone.addEventListener("click", function () {
                                        naScopriSectionPhone.removeAttribute('id');
                                        naScopriSectionPhone.classList.add('hidden_section_scopri_na');

                                        sectionScopriPhone.setAttribute('id', 'hidden_section_scopri_active');
                                        sectionScopriPhone.classList.remove('hidden_section_scopri');
                                    })
                                }
                            }
                        });
                        nrButtonPhone.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!nrButtonPhoneActive) {
                                    nrScopriSectionPhone.setAttribute('id', 'hidden_section_scopri_nr_active');
                                    nrScopriSectionPhone.classList.remove('hidden_section_scopri_nr');

                                    nrPrevSectionBtnPhone.addEventListener("click", function () {
                                        nrScopriSectionPhone.removeAttribute('id');
                                        nrScopriSectionPhone.classList.add('hidden_section_scopri_nr');

                                        sectionScopriPhone.setAttribute('id', 'hidden_section_scopri_active');
                                        sectionScopriPhone.classList.remove('hidden_section_scopri');
                                    })
                                }
                            }
                        });

                    } else {
                        menuBtnPhoneActive.style.pointerEvents = 'none';
                        menuSpanFrecciaPhone.style.display = 'none';

                        sectionScopriPhone.removeAttribute('id');
                        sectionScopriPhone.classList.add('hidden_section_scopri');
                    }
                    scopriButtonPhoneActive = !scopriButtonPhoneActive;
                }
            });

            aiutoButtonPhone.addEventListener("click", function () {
                if (window.innerWidth <= 360) {
                    if (!aiutoButtonPhoneActive) {

                        menuBtnPhoneActive.style.pointerEvents = 'auto';

                        menuSpanFrecciaPhone.style.display = 'flex';

                        sectionAiutoPhone.setAttribute('id', 'hidden_section_aiuto_active');
                        sectionAiutoPhone.classList.remove('hidden_section_aiuto');

                        menuBtnPhoneActive.addEventListener("click", function () {
                            if (window.innerWidth <= 360) {
                                if (!menuBtnPhoneActiveReturn) {

                                    menuBtnPhoneActive.style.pointerEvents = 'none';
                                    menuSpanFrecciaPhone.style.display = 'none';

                                    hiddenListPhone.style.transform = 'translateX(0%) translateY(0px)';

                                    sectionAiutoPhone.removeAttribute('id');
                                    sectionAiutoPhone.classList.add('hidden_section_aiuto');
                                }
                            }
                        })

                    } else {
                        menuBtnPhoneActive.style.pointerEvents = 'none';
                        menuSpanFrecciaPhone.style.display = 'none';

                        sectionAiutoPhone.removeAttribute('id');
                        sectionAiutoPhone.classList.add('hidden_section_aiuto');
                    }
                    aiutoButtonPhoneActive = !aiutoButtonPhoneActive;
                }
            })

        } else {

            bodyElement.style.overflow = '';

            backgroundShadowPhone.style.display = 'none';
            backgroundShadowPhone.style.opacity = '0';
            hiddenListPhone.style.transform = 'translateX(-100%) translateY(0px)';
            hiddenListPhone.style.visibility = 'hidden';

            closerBtnPhone.removeAttribute('id');
            closerBtnPhone.classList.add('hidden_closer_btn_tab');

            menuBtnPhone.removeAttribute('id');
            menuBtnPhone.classList.add('menu_btn');

            closeBtnPhone.removeAttribute('id');
            closeBtnPhone.classList.add('close_btn');

            closeBtnDivWrapperPhone.removeAttribute('id');
            closeBtnDivWrapperPhone.classList.add('close_btn_div_wrapper');

            changeCloseBtnPhone.classList.remove('active');

            menuSpanFrecciaPhone.style.display = 'none';
        }
    }
    closeBtnPhoneActive = !closeBtnPhoneActive;
});



// script scritte in alto per tablet
let btnTopLeftTab = document.querySelector(".top_nav_left_btn");
let btnTopRightTab = document.querySelector(".top_nav_right_btn");
let firstTextTab = document.querySelector(".top_nav_center_el_first_text");
let secondTextTab = document.querySelector(".top_nav_center_el_second_text");
let thirdTextTab = document.querySelector(".top_nav_center_el_third_text");

let translateValuesTab = ['0%', '-100%', '-200%'];
let currentIndexTab = 0;

btnTopLeftTab.addEventListener("click", function () {
    if (window.innerWidth >= 361 && window.innerWidth <= 820) {
        currentIndexTab--;
        if (currentIndexTab < 0) {
            currentIndexTab = translateValuesTab.length - 1;
        }

        updateTransformTab();
    }
});

btnTopRightTab.addEventListener("click", function () {
    if (window.innerWidth >= 361 && window.innerWidth <= 820) {
        currentIndexTab++;
        if (currentIndexTab >= translateValuesTab.length) {
            currentIndexTab = 0;
        }

        updateTransformTab();
    }
});

function updateTransformTab() {
    firstTextTab.style.transform = `translateX(${translateValuesTab[currentIndexTab]})`;
    secondTextTab.style.transform = `translateX(${translateValuesTab[currentIndexTab]})`;
    thirdTextTab.style.transform = `translateX(${translateValuesTab[currentIndexTab]})`;
}


// bottone per chiudere la sezione in alto per tablet

let topNavCloserBtn = document.querySelector(".top_nav_closer_btn");
let topNav = document.querySelector(".top_nav_wrapper");
let hiddenCloserBtn = document.querySelector(".hidden_closer_btn_tab");
let headerInfo = document.querySelector(".header_info");

let topNavCloserBtnActive = false;

topNavCloserBtn.addEventListener("click", function () {
    if (window.innerWidth >= 361 && window.innerWidth <= 820) {
        if (!topNavCloserBtnActive) {
            topNav.style.display = 'none';
            hiddenCloserBtn.style.top = '1px';
            headerInfo.style.top = '6.5%';
        }
    }
});


// script search bar tablet

let bottomNavSearchBtn = document.querySelector(".bottom_nav_search_btn");
let hiddenSearchBar = document.querySelector(".hidden_search_bar_wrapper");
let hiddenSearchBtn = document.querySelector(".hidden_search_bar_search_btn");
let SearchBarCloserBtn = document.querySelector(".hidden_search_bar_closer_btn");

let bottomNavSearchBtnActive = false;
let hiddenSearchBtnActive = false;
let SearchBarCloserBtnActive = false;

bottomNavSearchBtn.addEventListener("click", function () {
    if (window.innerWidth >= 361 && window.innerWidth <= 820) {
        if (!bottomNavSearchBtnActive) {
            bodyElement.style.overflow = 'hidden';
            hiddenSearchBar.style.display = 'block';
        }
    }
    bottomNavSearchBtnActive = !bottomNavSearchBtnActive;
});

hiddenSearchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.innerWidth >= 361 && window.innerWidth <= 820) {
        if (!hiddenSearchBtnActive) {
            hiddenSearchBar.style.display = 'none';
        }
    }
    hiddenSearchBtnActive = !hiddenSearchBtnActive;
});

SearchBarCloserBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.innerWidth >= 361 && window.innerWidth <= 820) {
        if (!SearchBarCloserBtnActive) {
            hiddenSearchBar.style.display = 'none';
        }
    }
    SearchBarCloserBtnActive = !SearchBarCloserBtnActive;
});


// script per sezione nascosta a sinistra per tablet

let closerBtnTab = document.querySelector(".hidden_closer_btn_tab");
let menuBtn = document.querySelector(".menu_btn");
let closeBtn = document.querySelector(".close_btn");
let changeCloseBtn = document.querySelector(".change_close_btn");
let closeBtnDivWrapper = document.querySelector(".close_btn_div_wrapper");

let backgroundShadowTab = document.querySelector(".background_shadow_tab");
let hiddenListTab = document.querySelector(".hidden_list_tab");

let closeBtnActive = false;

let acquistaButtonTab = document.querySelector(".acquista_btn_tab");
let sectionAcquistaTab = document.querySelector(".hidden_section_acquista");
let menuSpanFreccia = document.querySelector(".menu_span_freccia");

let acquistaButtonTabActive = false;
let menuBtnActiveReturn = false;

let sptAcquistaSection = document.querySelector(".hidden_section_acquista_spt");
let sptButtonTab = document.querySelector(".main_list_hidden_section_acquista_btn");
let sptPrevSectionBtn = document.querySelector(".hidden_section_acquista_prev_section_btn");

let sptButtonTabActive = false;
let sptPrevSectionBtnActive = false;

let etaAcquistaSection = document.querySelector(".hidden_section_acquista_eta");
let etaButtonTab = document.querySelector(".main_list_hidden_section_eta_btn");
let etaPrevSectionBtn = document.querySelector(".hidden_section_acquista_prev_section_eta");

let etaButtonTabActive = false;
let etaPrevSectionBtnActive = false;

let prezziAcquistaSection = document.querySelector(".hidden_section_acquista_prezzi");
let prezziButtonTab = document.querySelector(".main_list_hidden_section_prezzi_btn");
let prezziPrevSectionBtn = document.querySelector(".hidden_section_acquista_prev_section_prezzi");

let prezziButtonTabActive = false;
let prezziPrevSectionBtnActive = false;

let mlAcquistaSection = document.querySelector(".hidden_section_acquista_ml");
let mlButtonTab = document.querySelector(".main_list_hidden_section_ml_btn");
let mlPrevSectionBtn = document.querySelector(".hidden_section_acquista_prev_section_ml");

let mlButtonTabActive = false;
let mlPrevSectionBtnActive = false;

let intAcquistaSection = document.querySelector(".hidden_section_acquista_int");
let intButtonTab = document.querySelector(".main_list_hidden_section_int_btn");
let intPrevSectionBtn = document.querySelector(".hidden_section_acquista_prev_section_int");

let intButtonTabActive = false;
let intPrevSectionBtnActive = false;

let pabAcquistaSection = document.querySelector(".hidden_section_acquista_pab");
let pabButtonTab = document.querySelector(".main_list_hidden_section_pab_btn");
let pabPrevSectionBtn = document.querySelector(".hidden_section_acquista_prev_section_pab");

let pabButtonTabActive = false;
let pabPrevSectionBtnActive = false;

let scopriButtonTab = document.querySelector(".scopri_btn_tab");
let sectionScopriTab = document.querySelector(".hidden_section_scopri");

let scopriButtonTabActive = false;

let nvScopriSection = document.querySelector(".hidden_section_scopri_nv");
let nvButtonTab = document.querySelector(".main_list_hidden_section_scopri_btn_nv");
let nvPrevSectionBtn = document.querySelector(".hidden_section_scopri_prev_section_nv");

let nvButtonTabActive = false;
let nvPrevSectionBtnActive = false;

let naScopriSection = document.querySelector(".hidden_section_scopri_na");
let naButtonTab = document.querySelector(".main_list_hidden_section_scopri_btn_na");
let naPrevSectionBtn = document.querySelector(".hidden_section_scopri_prev_section_na");

let naButtonTabActive = false;
let naPrevSectionBtnActive = false;

let nrScopriSection = document.querySelector(".hidden_section_scopri_nr");
let nrButtonTab = document.querySelector(".main_list_hidden_section_scopri_btn_nr");
let nrPrevSectionBtn = document.querySelector(".hidden_section_scopri_prev_section_nr");

let nrButtonTabActive = false;
let nrPrevSectionBtnActive = false;

let aiutoButtonTab = document.querySelector(".aiuto_btn_tab");
let sectionAiutoTab = document.querySelector(".hidden_section_aiuto");

let aiutoButtonTabActive = false;


closeBtn.addEventListener("click", function () {
    if (window.innerWidth >= 361 && window.innerWidth <= 820) {
        if (!closeBtnActive) {

            bodyElement.style.overflow = 'hidden';

            backgroundShadowTab.style.display = 'block';
            backgroundShadowTab.style.opacity = '0.5';
            hiddenListTab.style.transform = 'translateX(0%) translateY(0px)';
            hiddenListTab.style.visibility = 'visible';

            closerBtnTab.setAttribute('id', 'hidden_closer_btn_tab_active')
            closerBtnTab.classList.remove('hidden_closer_btn_tab');

            menuBtn.setAttribute('id', 'menu_btn_active');
            let menuBtnActive = document.getElementById("menu_btn_active");
            menuBtn.classList.remove('menu_btn');

            closeBtn.setAttribute('id', 'close_btn_active');
            closeBtn.classList.remove('close_btn');

            closeBtnDivWrapper.setAttribute('id', 'close_btn_div_wrapper_active');
            closeBtnDivWrapper.classList.remove('close_btn_div_wrapper');

            changeCloseBtn.classList.toggle('active');

            sectionAcquistaTab.removeAttribute('id');
            sectionAcquistaTab.classList.add('hidden_section_acquista');

            sectionAcquistaTab.removeAttribute('id');
            sectionAcquistaTab.classList.add('hidden_section_acquista');

            sptAcquistaSection.removeAttribute('id');
            sptAcquistaSection.classList.add('hidden_section_acquista_spt');

            etaAcquistaSection.removeAttribute('id');
            etaAcquistaSection.classList.add('hidden_section_acquista_eta');

            prezziAcquistaSection.removeAttribute('id');
            prezziAcquistaSection.classList.add('hidden_section_acquista_prezzi');

            mlAcquistaSection.removeAttribute('id');
            mlAcquistaSection.classList.add('hidden_section_acquista_ml');

            intAcquistaSection.removeAttribute('id');
            intAcquistaSection.classList.add('hidden_section_acquista_int');

            pabAcquistaSection.removeAttribute('id');
            pabAcquistaSection.classList.add('hidden_section_acquista_pab');

            sectionScopriTab.removeAttribute('id', 'hidden_section_scopri_active');
            sectionScopriTab.classList.add('hidden_section_scopri');

            sectionAiutoTab.removeAttribute('id');
            sectionAiutoTab.classList.add('hidden_section_aiuto');

            acquistaButtonTab.addEventListener("click", function () {
                if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                    if (!acquistaButtonTabActive) {

                        menuBtnActive.style.pointerEvents = 'auto';

                        menuSpanFreccia.style.display = 'flex';

                        sectionAcquistaTab.setAttribute('id', 'hidden_section_acquista_active');
                        sectionAcquistaTab.classList.remove('hidden_section_acquista');

                        menuBtnActive.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!menuBtnActiveReturn) {

                                    menuBtnActive.style.pointerEvents = 'none';
                                    menuSpanFreccia.style.display = 'none';

                                    hiddenListTab.style.transform = 'translateX(0%) translateY(0px)';

                                    sectionAcquistaTab.removeAttribute('id');
                                    sectionAcquistaTab.classList.add('hidden_section_acquista');

                                    sectionAcquistaTab.removeAttribute('id');
                                    sectionAcquistaTab.classList.add('hidden_section_acquista');

                                    sptAcquistaSection.removeAttribute('id');
                                    sptAcquistaSection.classList.add('hidden_section_acquista_spt');

                                    etaAcquistaSection.removeAttribute('id');
                                    etaAcquistaSection.classList.add('hidden_section_acquista_eta');

                                    prezziAcquistaSection.removeAttribute('id');
                                    prezziAcquistaSection.classList.add('hidden_section_acquista_prezzi');

                                    mlAcquistaSection.removeAttribute('id');
                                    mlAcquistaSection.classList.add('hidden_section_acquista_ml');

                                    intAcquistaSection.removeAttribute('id');
                                    intAcquistaSection.classList.add('hidden_section_acquista_int');

                                    pabAcquistaSection.removeAttribute('id');
                                    pabAcquistaSection.classList.add('hidden_section_acquista_pab');
                                }
                            }
                        })

                        sptButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!sptButtonTabActive) {
                                    sptAcquistaSection.setAttribute('id', 'hidden_section_acquista_spt_active');
                                    sptAcquistaSection.classList.remove('hidden_section_acquista_spt');

                                    sptPrevSectionBtn.addEventListener("click", function () {
                                        sptAcquistaSection.removeAttribute('id');
                                        sptAcquistaSection.classList.add('hidden_section_acquista_spt');

                                        sectionAcquistaTab.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaTab.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        etaButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!etaButtonTabActive) {
                                    etaAcquistaSection.setAttribute('id', 'hidden_section_acquista_eta_active');
                                    etaAcquistaSection.classList.remove('hidden_section_acquista_eta');

                                    etaPrevSectionBtn.addEventListener("click", function () {
                                        etaAcquistaSection.removeAttribute('id');
                                        etaAcquistaSection.classList.add('hidden_section_acquista_eta');

                                        sectionAcquistaTab.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaTab.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        prezziButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!prezziButtonTabActive) {
                                    prezziAcquistaSection.setAttribute('id', 'hidden_section_acquista_prezzi_active');
                                    prezziAcquistaSection.classList.remove('hidden_section_acquista_prezzi');

                                    prezziPrevSectionBtn.addEventListener("click", function () {
                                        prezziAcquistaSection.removeAttribute('id');
                                        prezziAcquistaSection.classList.add('hidden_section_acquista_prezzi');

                                        sectionAcquistaTab.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaTab.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        mlButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!mlButtonTabActive) {
                                    mlAcquistaSection.setAttribute('id', 'hidden_section_acquista_ml_active');
                                    mlAcquistaSection.classList.remove('hidden_section_acquista_ml');

                                    mlPrevSectionBtn.addEventListener("click", function () {
                                        mlAcquistaSection.removeAttribute('id');
                                        mlAcquistaSection.classList.add('hidden_section_acquista_ml');

                                        sectionAcquistaTab.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaTab.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        intButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!intButtonTabActive) {
                                    intAcquistaSection.setAttribute('id', 'hidden_section_acquista_int_active');
                                    intAcquistaSection.classList.remove('hidden_section_acquista_int');

                                    intPrevSectionBtn.addEventListener("click", function () {
                                        intAcquistaSection.removeAttribute('id');
                                        intAcquistaSection.classList.add('hidden_section_acquista_int');

                                        sectionAcquistaTab.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaTab.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });
                        pabButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!intButtonTabActive) {
                                    pabAcquistaSection.setAttribute('id', 'hidden_section_acquista_pab_active');
                                    pabAcquistaSection.classList.remove('hidden_section_acquista_pab');

                                    pabPrevSectionBtn.addEventListener("click", function () {
                                        pabAcquistaSection.removeAttribute('id');
                                        pabAcquistaSection.classList.add('hidden_section_acquista_pab');

                                        sectionAcquistaTab.setAttribute('id', 'hidden_section_acquista_active');
                                        sectionAcquistaTab.classList.remove('hidden_section_acquista');
                                    })
                                }
                            }
                        });

                    } else {
                        menuBtnActive.style.pointerEvents = 'none';
                        menuSpanFreccia.style.display = 'none';

                        sectionAcquistaTab.removeAttribute('id');
                        sectionAcquistaTab.classList.add('hidden_section_acquista');
                    }
                    acquistaButtonTabActive = !acquistaButtonTabActive;
                }
            });

            scopriButtonTab.addEventListener("click", function () {
                if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                    if (!scopriButtonTabActive) {

                        menuBtnActive.style.pointerEvents = 'auto';

                        menuSpanFreccia.style.display = 'flex';

                        sectionScopriTab.setAttribute('id', 'hidden_section_scopri_active');
                        sectionScopriTab.classList.remove('hidden_section_scopri');

                        menuBtnActive.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!menuBtnActiveReturn) {

                                    menuBtnActive.style.pointerEvents = 'none';
                                    menuSpanFreccia.style.display = 'none';

                                    hiddenListTab.style.transform = 'translateX(0%) translateY(0px)';

                                    sectionScopriTab.removeAttribute('id', 'hidden_section_scopri_active');
                                    sectionScopriTab.classList.add('hidden_section_scopri');

                                    nvScopriSection.removeAttribute('id');
                                    nvScopriSection.classList.add('hidden_section_scopri_nv');

                                    naScopriSection.removeAttribute('id');
                                    naScopriSection.classList.add('hidden_section_scopri_na');

                                    nrScopriSection.removeAttribute('id');
                                    nrScopriSection.classList.add('hidden_section_scopri_nr');
                                }
                            }
                        })

                        nvButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!nvButtonTabActive) {
                                    nvScopriSection.setAttribute('id', 'hidden_section_scopri_nv_active');
                                    nvScopriSection.classList.remove('hidden_section_scopri_nv');

                                    nvPrevSectionBtn.addEventListener("click", function () {
                                        nvScopriSection.removeAttribute('id');
                                        nvScopriSection.classList.add('hidden_section_scopri_nv');

                                        sectionScopriTab.setAttribute('id', 'hidden_section_scopri_active');
                                        sectionScopriTab.classList.remove('hidden_section_scopri');
                                    })
                                }
                            }
                        });
                        naButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!naButtonTabActive) {
                                    naScopriSection.setAttribute('id', 'hidden_section_scopri_na_active');
                                    naScopriSection.classList.remove('hidden_section_scopri_na');

                                    naPrevSectionBtn.addEventListener("click", function () {
                                        naScopriSection.removeAttribute('id');
                                        naScopriSection.classList.add('hidden_section_scopri_na');

                                        sectionScopriTab.setAttribute('id', 'hidden_section_scopri_active');
                                        sectionScopriTab.classList.remove('hidden_section_scopri');
                                    })
                                }
                            }
                        });
                        nrButtonTab.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!nrButtonTabActive) {
                                    nrScopriSection.setAttribute('id', 'hidden_section_scopri_nr_active');
                                    nrScopriSection.classList.remove('hidden_section_scopri_nr');

                                    nrPrevSectionBtn.addEventListener("click", function () {
                                        nrScopriSection.removeAttribute('id');
                                        nrScopriSection.classList.add('hidden_section_scopri_nr');

                                        sectionScopriTab.setAttribute('id', 'hidden_section_scopri_active');
                                        sectionScopriTab.classList.remove('hidden_section_scopri');
                                    })
                                }
                            }
                        });

                    } else {
                        menuBtnActive.style.pointerEvents = 'none';
                        menuSpanFreccia.style.display = 'none';

                        sectionScopriTab.removeAttribute('id');
                        sectionScopriTab.classList.add('hidden_section_scopri');
                    }
                    scopriButtonTabActive = !scopriButtonTabActive;
                }
            });

            aiutoButtonTab.addEventListener("click", function () {
                if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                    if (!aiutoButtonTabActive) {

                        menuBtnActive.style.pointerEvents = 'auto';

                        menuSpanFreccia.style.display = 'flex';

                        sectionAiutoTab.setAttribute('id', 'hidden_section_aiuto_active');
                        sectionAiutoTab.classList.remove('hidden_section_aiuto');

                        menuBtnActive.addEventListener("click", function () {
                            if (window.innerWidth >= 361 && window.innerWidth <= 820) {
                                if (!menuBtnActiveReturn) {

                                    menuBtnActive.style.pointerEvents = 'none';
                                    menuSpanFreccia.style.display = 'none';

                                    hiddenListTab.style.transform = 'translateX(0%) translateY(0px)';

                                    sectionAiutoTab.removeAttribute('id');
                                    sectionAiutoTab.classList.add('hidden_section_aiuto');
                                }
                            }
                        })

                    } else {
                        menuBtnActive.style.pointerEvents = 'none';
                        menuSpanFreccia.style.display = 'none';

                        sectionAiutoTab.removeAttribute('id');
                        sectionAiutoTab.classList.add('hidden_section_aiuto');
                    }
                    aiutoButtonTabActive = !aiutoButtonTabActive;
                }
            })

        } else {

            bodyElement.style.overflow = '';

            backgroundShadowTab.style.display = 'none';
            backgroundShadowTab.style.opacity = '0';
            hiddenListTab.style.transform = 'translateX(-100%) translateY(0px)';
            hiddenListTab.style.visibility = 'hidden';

            closerBtnTab.removeAttribute('id');
            closerBtnTab.classList.add('hidden_closer_btn_tab');

            menuBtn.removeAttribute('id');
            menuBtn.classList.add('menu_btn');

            closeBtn.removeAttribute('id');
            closeBtn.classList.add('close_btn');

            closeBtnDivWrapper.removeAttribute('id');
            closeBtnDivWrapper.classList.add('close_btn_div_wrapper');

            changeCloseBtn.classList.remove('active');

            menuSpanFreccia.style.display = 'none';
        }
    }
    closeBtnActive = !closeBtnActive;
});


// script scritte in alto desk
let btnTopLeft = document.querySelector(".control_btn_left");
let btnTopRight = document.querySelector(".control_btn_right");
let firstText = document.querySelector(".first_text");
let secondText = document.querySelector(".second_text");
let thirdText = document.querySelector(".third_text");

let translateValues = ['0%', '-100%', '-200%'];
let currentIndex = 0;

btnTopLeft.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = translateValues.length - 1;
    }

    updateTransform();
});

btnTopRight.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= translateValues.length) {
        currentIndex = 0;
    }

    updateTransform();
});

function updateTransform() {
    firstText.style.transform = `translateX(${translateValues[currentIndex]})`;
    secondText.style.transform = `translateX(${translateValues[currentIndex]})`;
    thirdText.style.transform = `translateX(${translateValues[currentIndex]})`;
}

//script sezione menù sinistra per desk
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

let shadowBack = document.querySelector(".shadow_background_desk");



acquistaButton.addEventListener("click", function () {
    if (window.innerWidth >= 821) {
        if (!acquistaButtonActive) {

            shadowBack.style.display = 'block';

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
                    shadowBack.style.display = 'none';
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

            shadowBack.style.display = 'none';

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

            shadowBack.style.display = 'block';

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
                    shadowBack.style.display = 'none';
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

            shadowBack.style.display = 'none';

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

            shadowBack.style.display = 'block';

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
                    shadowBack.style.display = 'none';
                } else {
                    hiddenListActive.classList.add('active');
                    hiddenList.classList.remove('hidden_list');
                }
            })

        } else {

            shadowBack.style.display = 'none';

            hiddenList.classList.add('hidden_list');
            hiddenList.removeAttribute('id');

            bodyElement.style.overflow = '';

            hiddenList.classList.add('hidden_list');
            hiddenList.removeAttribute('id');
        }
    }
    aiutoButtonActive = !aiutoButtonActive;
})

// script barra di ricerca per desk
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
    closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (!closeButtonActive) {
            hiddenSrcBtnWrapper.classList.add('hidden_search_btn_wrapper');
            hiddenSrcBtnWrapper.removeAttribute('id');

            searchButton.style.display = 'flex';
        }
    })
    secondSrcBtn.addEventListener("click", function (event) {
        event.preventDefault();
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