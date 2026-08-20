// ===============================
// Année automatique du footer
// ===============================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ===============================
// Effet machine à écrire
// ===============================

const text = "Bonjour, je suis Babaniang, développeur web passionné.";

const typingElement = document.getElementById("typed-line");

if (typingElement) {
  let index = 0;

  function typing() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);

      index++;

      setTimeout(typing, 45);
    }
  }

  typing();
}

// ===============================
// Animation des sections
// ===============================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((section) => {
  revealObserver.observe(section);
});

// ===============================
// Barre de navigation active
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    const height = section.offsetHeight;

    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") == "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Navbar au scroll
// ===============================

const navbar = document.querySelector(".navbar-custom");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.padding = "10px 0";

    navbar.style.background = "#0f172a";

    navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
  } else {
    navbar.style.padding = "18px 0";

    navbar.style.background = "rgba(15,23,42,.95)";

    navbar.style.boxShadow = "none";
  }
});

// ===============================
// Animation des cartes
// ===============================

const cards = document.querySelectorAll(
  ".project-card,.skill-card,.formation-card,.about-card",
);

cards.forEach((card, index) => {
  card.style.animationDelay = index * 0.1 + "s";
});

// ===============================
// Bouton Retour en haut
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "backToTop";

document.body.appendChild(topButton);

topButton.style.cssText = `

position:fixed;
bottom:25px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#2563eb;
color:white;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 10px 25px rgba(0,0,0,.25);
transition:.3s;

`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// ===============================
// Validation du formulaire
// ===============================

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        valid = false;

        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ced4da";
      }
    });

    if (valid) {
      alert("Merci ! Votre message est prêt à être envoyé.");

      form.reset();
    }
  });
}

// ===============================
// Animation des liens du menu
// ===============================

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-2px)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});

// ===============================
// Préchargement des images
// ===============================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ===============================
// Console
// ===============================

console.log(
  "%cPortfolio chargé avec succès !",
  "color:#2563eb;font-size:16px;font-weight:bold;",
);
