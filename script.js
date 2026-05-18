// FAQ аккордеон
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    const answer = button.nextElementSibling;

    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      answer.classList.add("open");
    } else {
      button.setAttribute("aria-expanded", "false");
      answer.classList.remove("open");
    }
  });
});

// Мобильное меню (hamburger)
const hamburger = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.contains("open");

    if (!isOpen) {
      hamburger.classList.add("open");
      if (navLinks) navLinks.style.display = "flex";
      if (navActions) navActions.style.display = "flex";
      document.body.style.overflow = "hidden";
    } else {
      hamburger.classList.remove("open");
      if (navLinks) navLinks.style.display = "";
      if (navActions) navActions.style.display = "";
      document.body.style.overflow = "";
    }
  });
}

// Плавная прокрутка для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#" || href === "") return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();

      // Закрываем мобильное меню если открыто
      if (hamburger && hamburger.classList.contains("open")) {
        hamburger.click();
      }

      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Анимация появления элементов при скролле (опционально)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Добавляем классы для анимации к секциям
document
  .querySelectorAll(".components, .features, .products, .faq, .order")
  .forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

// Стили для анимации
const style = document.createElement("style");
style.textContent = `
  .fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// Обработка отправки формы
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    );
    form.reset();
  });
}
