// === Effet d'animation sur le texte du Hero Section ===
document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector(".hero h2");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-20px)";

    setTimeout(() => {
        heroText.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 500);
});

// === Message interactif sur les projets ===
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener("mouseover", () => {
        project.style.transform = "scale(1.05)";
        project.style.transition = "transform 0.3s ease-in-out";
    });

    project.addEventListener("mouseleave", () => {
        project.style.transform = "scale(1)";
    });
});