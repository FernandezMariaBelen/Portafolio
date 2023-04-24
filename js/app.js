const header = document.querySelector("header");


const links = document.querySelectorAll(".nav-link");


const toggle_btn = document.querySelector(".toggl-btn")


window.addEventListener("scroll", () => {
    skillsCounter();
})


//STICKY NAVBAR//

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0)
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar)

window.addEventListener("scroll", () => {
    activeLink()
})



// ANIMACION INICIO

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px"
});

sr.reveal(".showcase-info", { delay: 600 })
sr.reveal(".showcase-image", { origin: "top", delay: 700 })
sr.reveal(".showcase-area", { delay: 600 })


//CHANGE ACTIVE LINK EN SCROLL

function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections)
        .map((sct, i) => {
            return {
                y: sct.getBoundingClientRect().top - header.offsetHeight,
                id: i,
            }
        }).filter(sct => sct.y <= 0);

    let currSectionID = passedSections.at(-1).id;

    links.forEach(l => l.classList.remove("active"));
links[currSectionID].classList.add("active");
}








