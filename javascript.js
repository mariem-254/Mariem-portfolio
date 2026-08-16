document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".block");
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    window.addEventListener("scroll", () => {
        let current = "";
        
        blocks.forEach((block) => {
            const blockTop = block.offsetTop;
            const blockHeight = block.clientHeight;
            if (window.scrollY >= blockTop - blockHeight / 3) {
                current = block.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});