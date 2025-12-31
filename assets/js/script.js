// DOM Elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const body = document.body;

// Open Modal
function openLook(imageSrc, title, description) {
    modal.style.display = "block";
    // Trigger reflow to enable transition
    void modal.offsetWidth;
    modal.classList.add('show');

    modalImg.src = imageSrc;
    modalTitle.innerText = title;
    modalDesc.innerText = description;

    // Disable background scroll
    body.style.overflow = "hidden";
}

// Close Modal
function closeLook() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }, 300); // Match CSS transition duration
}

// Close on outside click
window.onclick = function (event) {
    if (event.target == modal) {
        closeLook();
    }
}

// Close on Esc key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeLook();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
