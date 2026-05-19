// FAQ аккордеон
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);
    const answer = button.nextElementSibling;
    if (!expanded) {
      answer.classList.add("open");
    } else {
      answer.classList.remove("open");
    }
  });
});

// Мобильное меню
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

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      if (hamburger && hamburger.classList.contains("open")) hamburger.click();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Отправка формы
const form = document.querySelector(".order-form-wrap form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    );
    form.reset();
  });
}
