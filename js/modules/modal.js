export default class Modal{
  constructor(btnAbrir, btnFechar, containerModal){
  this.btnAbrir = document.querySelector(btnAbrir);
  this.btnFechar = document.querySelector(btnFechar);
  this.containerModal = document.querySelector(containerModal);

  //bind this ao callback para
  //fazer referência ao objeto
  //da class
  this.eventToggleModal = this.eventToggleModal.bind(this);
  this.clickForaModal = this.clickForaModal.bind(this);

  };
 
  //Utiliza o toggle para usar classe "ativo"
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }; 

  //Previne o evento padrão, e ativa meu metodo de toggle
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  };

  //Fechar o modal ao clicar fora
  clickForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }; 

  //Adicona os eventos ao modal e seus respectivos elememntos
  addEventModal(){
    this.btnAbrir.addEventListener("click",  this.eventToggleModal);
    this.btnFechar.addEventListener("click",  this.eventToggleModal);
    this.containerModal.addEventListener("click",  this.clickForaModal);
  };

  //Inicia meus metodos de eventos no modal, caso exite os 
  //paramêtros definidos do meu constructor
  init(){
    if (this.btnAbrir && this.btnFechar && this.containerModal){
      this.addEventModal();
    }  
    return this;
  };
};


