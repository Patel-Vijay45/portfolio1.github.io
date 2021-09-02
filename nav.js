const navbox = document.querySelector("#nav-btn");
const phonenav = document.querySelector("#phone_nav");
const navlinks = document.querySelector("#nav_links");
const links = document.querySelectorAll("a");
let titlecnd = 0;
/**
 * Show phone navigation bar when you lick a btn
 */
navbox.addEventListener("click", () => {
    navbox.classList.toggle("activebtn");
    phonenav.classList.toggle("phone_nav");
    if (phonenav.classList == "phone_nav") {
        navlinks.style.display = "flex";
    } else {
        navlinks.style.display = "none";
    }
})

/**
 * Call this function when width is less than or Equal to 900 
 * This function for remove screen when you click on link
 */
var width = window.innerWidth;
if (width <= 900) {
    console.log("less");
    document.onclick = function(e) {
        if (e.target.classList == 'navlink') {
            navbox.classList.remove("activebtn");
            document.querySelector("#phone_nav").classList.remove("phone_nav");
            document.querySelector("#nav_links").style.display = "none";
        }
    }
}

/**
 * Change color of title (PORTFOLIO.io)
 */
const title = document.querySelector("#title");
title.addEventListener("click", () => {
    if (titlecnd == 0) {
        title.style.backgroundImage = "linear-gradient(90deg, red, blue)";
        title.style.color = "transparent";
        titlecnd = 1;
    } else if (titlecnd == 1) {
        title.style.backgroundImage = "linear-gradient(90deg, orange, black)";
        titlecnd = 2;
    } else if (titlecnd == 2) {
        title.style.backgroundImage = "none";
        title.style.color = "black";
        titlecnd = 0;
    }
})

/*
 * if phone width is greater than 900
 * Change navigation on scroll (action after leaving home page) by kevin powell
 */
if (width > 900) {

    const navigation = document.querySelector("nav");
    var navheight = navigation.offsetHeight;
    const sectionOne = document.querySelector("#home");
    const about = document.querySelector("#about");
    // about.style.marginTop = navheight / 2 + "px";




    const sectionOneoptions = {};
    const sectionOneobserver = new IntersectionObserver(function(
        entries,
        sectionOneoptions
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navigation.style.backgroundImage = "none";
                for (var i = 0; i < 5; i++) {
                    links[i].classList.add("removespace");
                    links[i].classList.remove("navlink");
                }
                title.classList.add("removespace");

            } else {
                navigation.style.backgroundImage = "linear-gradient(90deg, #18b2e0, #f09,#f09)";
                for (var i = 0; i < 5; i++) {
                    links[i].classList.remove("removespace");
                    links[i].classList.add("navlink");
                }
                title.classList.remove("removespace");
            }
        });
    }, sectionOneoptions);

    sectionOneobserver.observe(sectionOne);

    /**
     * link About and remove space
     */
    // const aabout = document.querySelector("#two");
    // aabout.addEventListener('click', () => {
    //     aabout.classList.add("removespace");
    //     aabout.classList.remove("navlink");
    // })
}