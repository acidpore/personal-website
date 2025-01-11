// Contact form functionality
const openContactForm = document.getElementById("openContactForm");
const contactFormContainer = document.getElementById("contactFormContainer");
const closeForm = document.getElementById("closeForm");
const floatingContact = document.getElementById("floatingContact");

function toggleContactForm() {
  contactFormContainer.classList.toggle("visible");
}

openContactForm.addEventListener("click", toggleContactForm);
floatingContact.addEventListener("click", toggleContactForm);
closeForm.addEventListener("click", toggleContactForm);

// Close the form when clicking outside of it
contactFormContainer.addEventListener("click", (e) => {
  if (e.target === contactFormContainer) {
    toggleContactForm();
  }
});

// Handle form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Here you would typically send the form data to a server
  // For now, we'll just log it to the console and close the form
  console.log("Form submitted:", new FormData(contactForm));
  toggleContactForm();
  contactForm.reset();
});
// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const headerOffset = 60;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// Animate skill bars and fade-in sections
function animateElements() {
  const skillLevels = document.querySelectorAll(".skill-level");
  const fadeSections = document.querySelectorAll(".fade-in");

  skillLevels.forEach((skill) => {
    const level = skill.getAttribute("data-level");
    skill.style.width = `${level}%`;
  });

  fadeSections.forEach((section) => {
    if (isInViewport(section) && !section.hasAttribute("data-animated")) {
      section.classList.add("visible");
      section.setAttribute("data-animated", "true");
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.documentElement.classList.contains("dark-mode")
  );
});

// Check for saved dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.documentElement.classList.add("dark-mode");
}

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

scrollToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/// Run animations on load and scroll
window.addEventListener("load", animateElements);
window.addEventListener("scroll", animateElements);
