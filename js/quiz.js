document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.getElementsByClassName("tab");
    const popupOpen = [...document.querySelectorAll(".popup-open")];
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const quizPopup = document.querySelector(".quiz-popup-container");
    const popupClose = document.querySelector(".quiz-popup__close");
    const quizRocket = document.querySelector(".quiz-popup-footer-progress__rocket");
    const quizProgressLine = document.querySelector(".quiz-popup-footer-progress-bar__line");

    const tabsEnd = tabs.length - 1;

    let currentTab = 0;

    showTab(currentTab);

    function showTab(currentTab) {
        tabs[currentTab].classList.add("show");
        if (currentTab === (tabsEnd)) {
            nextBtn.innerHTML = "Отлично!";
            document.getElementsByClassName("quiz-popup__title")[0].innerHTML = "Заявка отправлена <br /> <b>совсем скоро мы с вами свяжемся!</b>";
            nextBtn.style.marginBottom = "55px";
            prevBtn.style.display = "none";
        } else if (currentTab === (tabsEnd - 1)) {
            nextBtn.innerHTML = "Отправить";
        } else {
            nextBtn.innerHTML = "Далее";
        }
        rocketMove(currentTab);
    }

    nextBtn.addEventListener("click", () => {
        if (currentTab < tabsEnd) {
            tabs[currentTab].classList.remove("show");
            currentTab += 1;
            showTab(currentTab);
        } else if (currentTab === tabsEnd) {
            return;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentTab > 0) {
            tabs[currentTab].classList.remove("show");
            currentTab -= 1;
            showTab(currentTab);
        } else if (currentTab === 0) {
            return;
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.matches('.popup-open')) {
            quizPopup.style.display = "flex";
        }
    });

    popupClose.addEventListener("click", () => {
        quizPopup.style.display = "none";
    });

    function rocketMove(currentTab) {
        switch (currentTab) {
            case 0:
                quizRocket.style.transform = "translateX(0px)";
                quizProgressLine.style.transform = "translateX(-100%)";
                break;
            case 1:
                quizRocket.style.transform = "translateX(112px)";
                quizProgressLine.style.transform = "translateX(-85%)";
                break;
            case 2:
                quizRocket.style.transform = "translateX(244px)";
                quizProgressLine.style.transform = "translateX(-67%)";
                break;
            case 3:
                quizRocket.style.transform = "translateX(370px)";
                quizProgressLine.style.transform = "translateX(-50%)";
                break;
            case 4:
                quizRocket.style.transform = "translateX(500px)";
                quizProgressLine.style.transform = "translateX(-32%)";
                break;
            case 5:
                quizRocket.style.transform = "translateX(627px)";
                quizProgressLine.style.transform = "translateX(-14%)";
                break;
            case 6:
                quizRocket.style.transform = "translateX(730px)";
                quizProgressLine.style.transform = "translateX(0%)";
                break;

            default:
                break;
        }
    }


    // function buttonClick() {
    //     tabs[currentTab].addEventListener("click", (e) => {
    //         let test = tabs[currentTab].querySelectorAll(".quiz-btn");
    //         console.log(test);
    //         // if(e.target === $('.quiz-btn')){
    //         //     console.log(`Ты нажал на ${currentTab} таб`);
    //         // }

    //     });
    // };




});

