let navExpanded = false;

//toggles whether the mobile view nav bar is expanded or not
const toggleMobileNav = evt => {
    if(navExpanded) {
        closeMobileNav();
    }
    else {
        openMobileNav();
    }
}

const closeMobileNav = () => {
    let nav = document.getElementById("sourcesList");
    nav.style.height = "0";
    navExpanded = false;
}

const openMobileNav = () => {
    let nav = document.getElementById("sourcesList");
    nav.style.height = "100%";
    setTimeout(() => {navExpanded = true;}, 10);
}


window.addEventListener("resize", () => {
    if(window.innerWidth > 700) {
        openMobileNav();
    }
    else {
        closeMobileNav();
    }
})

setTimeout(() => {
    document.getElementById("navIcon").addEventListener("click", toggleMobileNav);
    let sources = document.getElementsByClassName("sourceBtn");
    for(let source of sources) {
        source.addEventListener("click", () => {
            if(window.innerWidth <= 700) {
                closeMobileNav();
            }
        })
    }
}, 100);
    
