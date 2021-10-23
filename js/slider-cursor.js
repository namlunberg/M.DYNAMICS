// this.container = e,
//     this.slides = e.querySelectorAll(".slide"),
//     this.sliderTrack = e.querySelector(".slider__track"),
//     this.pagination = e.querySelector(".pagination"),
//     this.paginationNumbers = [],
//     this.currentSlideIndex = null,
//     this.arrowPrev = e.querySelector(".arrow--prev"),
//     this.arrowNext = e.querySelector(".arrow--next"),
//     this.addArrowsAction(),
//     this.renderPagination(),
//     window.innerWidth >= 1050) {
//     var r = e.querySelector(".circle");
//     e.querySelectorAll("a, .pagination li").forEach((function (t) {
//         t.addEventListener("mouseover", (function () {
//             r.classList.add("pointer"),
//                 i.hovered = !0
//         }
//         )),
//             t.addEventListener("mouseleave", (function () {
//                 r.classList.remove("pointer"),
//                     i.hovered = !1
//             }
//             ))
//     }
//     )),
//         e.addEventListener("mousemove", (function (t) {
//             var s = e.getBoundingClientRect()
//                 , a = t.clientX - s.left
//                 , n = t.clientY - s.top;
//             r.style.transform = "translate3d(".concat(a - 40, "px,").concat(n - 40, "px,0)"),
//                 a >= s.width / 2 ? (i.arrowDirection = !0,
//                     r.classList.add("right"),
//                     i.currentSlideIndex + 1 > i.slides.length - 1 ? r.classList.add("disabled") : r.classList.remove("disabled")) : (i.arrowDirection = !1,
//                         r.classList.remove("right"),
//                         i.currentSlideIndex - 1 < 0 ? r.classList.add("disabled") : r.classList.remove("disabled"))
//         }
//         )),
//         e.addEventListener("click", (function () {
//             i.hovered || (i.arrowDirection && i.currentSlideIndex + 1 <= i.slides.length - 1 ? i.setCurrentSlide(i.currentSlideIndex + 1) : !i.arrowDirection && i.currentSlideIndex - 1 >= 0 && i.setCurrentSlide(i.currentSlideIndex - 1))
//         }
//         ))
// }
window.onload = function() {

    const container = document.querySelector(".examples");
    const cursor = document.querySelector(".cursor");
    posX = 0;
    posY = 0;

    let buttons = [...container.querySelectorAll(".owl-dot")]
    console.log(buttons);
    buttons.forEach(function (i) {
        i.addEventListener("mouseover", function () {
            cursor.classList.add("point");
        })
        i.addEventListener("mouseout", function () {
            cursor.classList.remove("point");
        })

    })
    
    container.addEventListener("mousemove", function (e) {
        let clientRect = container.getBoundingClientRect()
        let posX = e.clientX - clientRect.left;
        let posY = e.clientY - clientRect.top;
        cursor.style.transform = `translate3d(${(posX-45)}px, ${(posY-210)}px, 0)`;
        
    })

};
