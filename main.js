//toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//According
function toggleAccordion(id) {
  const content = document.getElementById(`${id}-content`);
  const icon = document.getElementById(`${id}-icon`);

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.textContent = "-";
  } else {
    content.classList.add("hidden");
    icon.textContent = "+";
  }
}


