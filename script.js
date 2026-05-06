// MENU OPEN / CLOSE
const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".ham");
const menu = document.querySelector(".menu");


// OPEN MENU
openBtn.addEventListener("click", () => {
    menu.classList.add("show");
});


// CLOSE MENU
closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
});


// CLOSE MENU AFTER CLICKING LINKS
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});