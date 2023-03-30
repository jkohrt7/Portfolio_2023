/**
 *  JS controlling the hamburger menu.
 *  When the screen is in Mobile view, the header links are 
 *  "aria-hidden" BUT NOT ".active" unless the button has been clicked.
 * 
 *  When the screen is in desktop view, the header links are 
 *  NEVER "aria-hidden" or ".active". 
 */
const hamburgerButton = document.querySelector(".hamburger")
const hamburgerElements = document.querySelectorAll(".hamburger__bar");
const headerList = document.querySelector(".header__list");
const headerLinks = document.querySelectorAll(".header__item a");
let isMobile = false;
let menuOpen = false;

// Initial check for mobile/desktop styles
if(window.innerWidth <= 768) {
    isMobile = true;

    [...hamburgerElements].map((elem) => {
        setInactive(elem);
    })
    setInactive(headerList);
    setInactive(hamburgerButton);
}
else {
    headerList.style.display = "flex";
}

// Adjust the aria-hidden and active states whenever window is resized. 
window.addEventListener("resize", () => {
    if(window.innerWidth <= 768) {
        isMobile = true;
        [...hamburgerElements].map((elem) => {
            elem.setAttribute("aria-hidden", true);
        })
        setInactive(headerList);
        headerList.style.display ="none";
        setInactive(hamburgerButton);
    }
    else if (isMobile = true) {
        isMobile = false;
        [...hamburgerElements].map((elem) => {
            elem.setAttribute("aria-hidden", false);
        })
        setActive(headerList);
        headerList.style.display ="flex";
        setActive(hamburgerButton);
    }
})

// Handle active and aria-hidden states when button is pressed.
document.querySelector(".hamburger").addEventListener("click", ()=> {
    if(menuOpen) {
        [...hamburgerElements].map((elem) => {
            elem.classList.remove("active");
        });
        setInactive(headerList);
        menuOpen = false;

        // Let the closing animation play, then make it keyboard inaccessible
        hamburgerButton.disabled = true;
        setTimeout(() => {
            headerList.style.display = "none";
            hamburgerButton.disabled = false;
        }, "800");
    }
    else {
        headerList.style.display = "flex";
        [...hamburgerElements].map((elem) => {
            elem.classList.add("active");
        });
        setActive(headerList);
        menuOpen = true;
    }
});

// Close menu when any of the links are clicked
[...headerLinks].map((elem) => {
    elem.addEventListener("click", () => {
        [...hamburgerElements].map((elem) => {
            elem.classList.remove("active");
        });
        setInactive(headerList);
        menuOpen = false;

        // Let the closing animation play, then make it keyboard inaccessible
        hamburgerButton.disabled = true;
        setTimeout(() => {
            headerList.style.display = "none";
            hamburgerButton.disabled = false;
        }, "800");
    })
});

function setInactive(elem) {
    elem.classList.remove("active");
    elem.setAttribute("aria-hidden", true);
}

function setActive(elem) {
    elem.classList.add("active");
    elem.setAttribute("aria-hidden", false);
}
