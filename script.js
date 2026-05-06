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

// SEARCH FUNCTIONALITY
const searchInput = document.getElementById("input");

const items = document.querySelectorAll(".items");

const noProduct = document.getElementById("noProduct");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    let found = false;

    // AUTO scroll to products
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

    items.forEach(item => {
        const name = item.querySelector(".name").textContent.toLowerCase();

        if (name.includes(value)) {
            item.style.display = "block";
            found = true;
        }
        else {
            item.style.display = "none";
        }
    });

    // show / hide "no product found"
    if (!found && value !== "") {
        noProduct.style.display = "block";
    }
    else {
        noProduct.style.display = "none";
    }
});