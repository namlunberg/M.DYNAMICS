document.addEventListener("DOMContentLoaded", () => {

    function preloaderInit() {
        const preloaderContainer = document.querySelector(".preloader-container");
        const preloaderRocket = document.querySelector(".preloader-wrap-progress__rocket");
        const preloaderProgressLine = document.querySelector(".preloader-wrap-progress__line");

        let width = 1;
        let interval = setInterval(progressStatus, 0);
        function progressStatus() {
            while (width < 100) {
                preloaderProgressLine.style.width = width + '%';
                preloaderRocket.style.left = (width - 15) + '%';
                preloaderProgressLine.style.width = width + '%';
                width += 1;
                if (width === 100 && document.readyState == 'complete') {
                    clearInterval(interval);
                    preloaderContainer.style.display = "none";
                }
                return;
            }
        }
    }
    preloaderInit();
});





