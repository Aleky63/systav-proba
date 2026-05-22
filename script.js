// =========================================
// FAQ — один обработчик на весь список
// =========================================
document.querySelector(".faq-list")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".faq-question");
  if (!btn) return;
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!expanded));
  btn.nextElementSibling.classList.toggle("open", !expanded);
});

// =========================================
// Мобильное меню
// =========================================
const hamburger = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");

hamburger?.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("open");
  if (navLinks) navLinks.style.display = isOpen ? "flex" : "";
  if (navActions) navActions.style.display = isOpen ? "flex" : "";
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// =========================================
// Плавная прокрутка
// =========================================
document.addEventListener("click", (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const id = anchor.getAttribute("href");
  if (id === "#") return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  if (hamburger?.classList.contains("open")) hamburger.click();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// =========================================
// Форма
// =========================================
document
  .querySelector(".order-form-wrap form")
  ?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    );
    e.target.reset();
  });
