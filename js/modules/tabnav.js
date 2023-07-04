export default class TabNav {
  constructor(Menu, Content) {
    this.tabMenu = document.querySelectorAll(Menu);
    this.tabContent = document.querySelectorAll(Content);
    this.activeClass = "ativo";
  }

  //Ativa a tab de acordo com o index
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  //Adiciona os eventos nas tabs
  addEventTab() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addEventTab();
    }
  }
}
