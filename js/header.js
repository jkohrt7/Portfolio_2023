// Collapsable navbar menu for mobile.
const hamburgerElement = document.querySelectorAll(".hamburger__bar");
const headerList = document.querySelector(".header__list");
let isMobile = false;
let menuOpen = false;

// Hide header contents if window begins in mobile view
if(window.innerWidth <= 768) {
    isMobile = true;

    [...hamburgerElement].map((elem) => {
        elem.setAttribute("hidden", true);
        headerList.setAttribute("hidden", true);
    })
}

// ...and adjust that hidden state whenever window is resized.
window.addEventListener("resize", () => {
    if(window.innerWidth <= 768) {
        isMobile = true;
        [...hamburgerElement].map((elem) => {
            elem.setAttribute("hidden", true);
            headerList.setAttribute("hidden", true);
        })
    }
    else if (isMobile = true) {
        isMobile = false;
        [...hamburgerElement].map((elem) => {
            elem.setAttribute("hidden", false);
            headerList.setAttribute("hidden", false);
        })
    }
})

document.querySelector(".hamburger").addEventListener("click", ()=> {
    if(menuOpen) {
        [...hamburgerElement].map((elem) => {
            handleMenuClose(elem);
        });
        handleMenuClose(headerList);
    }
    else {
        [...hamburgerElement].map((elem) => {
            handleMenuOpen(elem);
        });
        handleMenuOpen(headerList);
    }
});

function handleMenuClose(elem) {
    menuOpen = false;
    elem.classList.remove("active");
    elem.setAttribute("hidden", true);
}

function handleMenuOpen(elem) {
    menuOpen = true;
    elem.classList.add("active");
    elem.setAttribute("hidden", false);
}

//close menu when anything's clicked
