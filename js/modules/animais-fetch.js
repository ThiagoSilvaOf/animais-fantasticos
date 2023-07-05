import AnimaNumeros from "./anima-numeros.js";

export default function animaisFetch() {
  //Cria a div contendo o total de animais
  function createAnimal(animais) {
    const divAnimal = document.createElement("div");
    divAnimal.classList.add("numero-animal");
    divAnimal.innerHTML = `<h3>${animais.specie}</h3> <span>${animais.numero}</span>`;

    return divAnimal;
  }

  //Puxa os dados dos animais através do JSON
  //e cria cada animal utilizando o createAnimal
  async function fetchAnimais(url) {
    try {
      const animaisDados = await fetch(url);
      const responseAnimais = await animaisDados.json();
      const gridAnimal = document.querySelector(".numeros-grid");

      responseAnimais.forEach((itens) => {
        const divAnimal = createAnimal(itens);
        gridAnimal.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
    
  }
  fetchAnimais("./animais.json");
}
