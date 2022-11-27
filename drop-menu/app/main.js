function makeDropMenu() {
  const links = document.querySelector("#links");

  links.addEventListener("mouseenter", () => toggleDropMeu(links));
  links.addEventListener("mouseleave", () => toggleDropMeu(links));
}

function toggleDropMeu(links) {
  links.classList.toggle("vanish");
}

makeDropMenu();
