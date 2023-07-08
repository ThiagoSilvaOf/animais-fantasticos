export default class MenuMobile {
  constructor(menuButton, menulist) {
    this.menuButton = document.querySelector(menuButton);
    this.menulist = document.querySelector(menulist);

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    this.menulist.classList.toggle("active");
    this.menuButton.classList.toggle("active");
  }

  menuMobileEvent() {
    this.menuButton.addEventListener("click", this.openMenu);
  }

  init() {
    if (this.menuButton && this.menulist) {
      this.menuMobileEvent();
    }
    return this;
  }
}


