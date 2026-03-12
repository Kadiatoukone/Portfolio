// --- Animation du titre avec l'effet de machine à écrire ---
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text-animation');
    const text = "Développeuse web";
    let index = 0;
    let typingSpeed = 100;
    let isDeleting = false;

    function type() {
        const currentText = isDeleting ? text.substring(0, index--) : text.substring(0, index++);
        textElement.textContent = currentText;

        if (!isDeleting && index === text.length + 1) {
            typingSpeed = 1000;
            isDeleting = true;
        } else if (isDeleting && index === -1) {
            isDeleting = false;
            typingSpeed = 100;
            index = 0;
        }

        setTimeout(type, isDeleting ? 50 : typingSpeed);
    }
    type();
});

// --- Animations au défilement et barre de navigation active ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        } else {
            // sec.classList.remove('show-animate'); // Décommentez pour désanimer au défilement
        }
    });
});

// --- Modale pour les projets ---
const projectRows = document.querySelectorAll('.row');
const modal = document.createElement('div');
modal.classList.add('project-modal');
document.body.appendChild(modal);

projectRows.forEach(row => {
    row.addEventListener('click', () => {
        const title = row.querySelector('.layer h5').textContent;
        const description = row.querySelector('.layer p').textContent;
        const imageUrl = row.querySelector('img').src;

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <img src="${imageUrl}" alt="${title}">
                <h3>${title}</h3>
                <p>${description}</p>
                </div>
        `;
        modal.style.display = 'block';

        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
card.addEventListener("mouseover", () => {
card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
});

card.addEventListener("mouseout", () => {
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
});
});