// Contact form functionality
const openContactForm = document.getElementById("openContactForm");
const contactFormContainer = document.getElementById("contactFormContainer");
const closeForm = document.getElementById("closeForm");
const floatingContact = document.getElementById("floatingContact");

function toggleContactForm() {
  contactFormContainer.classList.toggle("visible");
}

if (openContactForm) openContactForm.addEventListener("click", toggleContactForm);
if (floatingContact) floatingContact.addEventListener("click", toggleContactForm);
if (closeForm) closeForm.addEventListener("click", toggleContactForm);

if (contactFormContainer) {
  contactFormContainer.addEventListener("click", (e) => {
    if (e.target === contactFormContainer) {
      toggleContactForm();
    }
  });
}

// Handle form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    console.log("Form submitted:", Object.fromEntries(formData));
    toggleContactForm();
    contactForm.reset();
  });
}

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 60;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Animate skill bars and fade-in sections
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function handleAnimations() {
  const skillLevels = document.querySelectorAll(".skill-level");
  skillLevels.forEach((skill) => {
    if (isInViewport(skill.parentElement)) {
      const level = skill.getAttribute("data-level");
      skill.style.width = `${level}%`;
    }
  });

  const fadeSections = document.querySelectorAll(".fade-in");
  fadeSections.forEach((section) => {
    if (isInViewport(section) && !section.hasAttribute("data-animated")) {
      section.classList.add("visible");
      section.setAttribute("data-animated", "true");
    }
  });

  const achievementSection = document.querySelector(".achievements");
  if (achievementSection && isInViewport(achievementSection)) {
    const achievementItems = document.querySelectorAll(
      ".achievement-item, .certifications li"
    );
    achievementItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 200);
    });
  }
}

window.addEventListener("scroll", handleAnimations);
window.addEventListener("load", handleAnimations);

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",
      document.documentElement.classList.contains("dark-mode")
    );
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark-mode");
  }
}

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTop");
if (scrollToTopBtn) {
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
}
