export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menulist = document.querySelector('[data-menu="list"]');

  function openMenu(event) {
    menulist.classList.toggle("active");
    menuButton.classList.toggle("active");
  }

  menuButton.addEventListener("click", openMenu);
}
