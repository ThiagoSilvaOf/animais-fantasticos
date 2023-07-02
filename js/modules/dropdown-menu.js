export default function dropdownMenu() {
  const sobre = document.querySelectorAll("[data-dropdown]");

  sobre.forEach((menu) => {
    menu.addEventListener("click", abrirDropDown);
    menu.addEventListener("toutchstart", abrirDropDown);
  });

  function abrirDropDown(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, () => {
      this.classList.remove("ativo");
    });
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener("click", fecharDropDownClick);
    function fecharDropDownClick(event) {
      if (!element.contains(event.target)) {
        callback();
      }
    }
  }
}
