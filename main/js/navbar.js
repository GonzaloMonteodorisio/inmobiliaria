const d = document;
const w = window;
const scrollBtn = d.querySelector("nav");
window.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 40) {
        scrollBtn.style.height="60px"
        scrollBtn.style.transition="all 0.3s ease-out"
        scrollBtn.style.backgroundColor="#fff"
    }else if (scrollTop <= 40) {
        scrollBtn.style.height="100px";
        scrollBtn.style.transition="all 0.1s ease-out"
        scrollBtn.style.backgroundColor="rgba(255, 255, 255, 0.35)"
    }
})
