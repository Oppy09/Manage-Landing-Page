let hamburger = document.querySelector("img.menu");
let close = document.querySelector("img.close");
let ul = document.querySelector(".linkNav");

hamburger.addEventListener("click", ()=> {
    setTimeout(function() {   
        // ul.classList.remove("invisible");
        ul.classList.add("opacity-100");
        hamburger.classList.add("hidden");
        close.classList.remove("invisible");
    }, 100);
});

close.addEventListener("click", ()=> {
    setTimeout(()=> {
        ul.classList.remove("opacity-100");
        close.classList.add("invisible");
        hamburger.classList.remove("hidden");
    }, 100);
});

document.querySelectorAll(".links").forEach(n => n.addEventListener("click", ()=> {
    setTimeout(()=> {
        close.classList.add("invisible");
        hamburger.classList.remove("hidden");
        ul.classList.remove("opacity-100");
    }, 100);
}));