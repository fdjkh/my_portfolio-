const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

const updateActiveLink = () => {
    let current = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
};

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

document.getElementById("year").textContent = new Date().getFullYear();


// MY PROJECTS - CLICK TO OPEN/CLOSE
function toggleProject(card) {
    card.classList.toggle("open");
}

// Open and close project details
function toggleProject(card) {
    card.classList.toggle("open");
}


// Open project image
function openImage(image) {
    const viewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");

    viewerImage.src = image.src;
    viewerImage.alt = image.alt;

    viewer.classList.add("open");
}


// Close project image
function closeImage() {
    document.getElementById("imageViewer").classList.remove("open");
}