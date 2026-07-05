

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// Mobile Flip Cards

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("click", function () {

        if (window.innerWidth <= 768) {

            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove("flip");
                }
            });

            card.classList.toggle("flip");

        }

    });

});
