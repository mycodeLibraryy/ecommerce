document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function toggleReadMore() {
    var extraText = document.getElementById("extraText");
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
    } else {
        extraText.style.display = "none";
    }
}
