export default class Tooltip{
  constructor(tooltips){
     this.tooltips = document.querySelectorAll(tooltips);

     this.onMouseMove = this.onMouseMove.bind(this);
     this.onMouseleave = this.onMouseleave.bind(this);
     this.onMouseover = this.onMouseover.bind(this);
  };

  //Move a tooltip com base em seus estilos
  //de acordo com a posição do mouse
  onMouseMove(event){
    this.tooltipBox.style.top = event.pageY + 20 + "px";

    if(event.pageX + 240 > window.innerWidth){
    this.tooltipBox.style.left = event.pageX - 180 + "px";
    }else{
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
   
  } 
 
  //Remove os eventos mouseleave e mouseover da tooltip
  onMouseleave(){
    this.tooltipBox.remove();
    this.tooltipBox.removeEventListener("mouseleave", this.onMouseleave);
    this.tooltipBox.removeEventListener("mousemove", this.onMouseMove);
  }

  //Cria a toltip box e coloca no body
  criarBoxTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //Cria a tooltip e adiciona os eventos de mouseleave e mousemove ao target
  onMouseover(event) {
    //Cria a tooltipbox e coloca em uma propriedade
    this.criarBoxTooltip(event.currentTarget);

    event.currentTarget.addEventListener("mouseleave", this.onMouseleave);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  //Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent(){
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseover);
    });
  }
  
  init(){
    if(this.tooltips.length){
      this.addTooltipsEvent();
    }
    return this;
  }
  
}
