import initAnimaNumeros from "./anima-numeros.js";

export default function animaisFetch() {
  async function fetchAnimais(url) {
    const animaisDados = await fetch(url);
    const responseAnimais = await animaisDados.json();
    const gridAnimal = document.querySelector(".numeros-grid");

    responseAnimais.forEach((itens) => {
      const divAnimal = createAnimal(itens);
      gridAnimal.appendChild(divAnimal);
    });
    initAnimaNumeros();
  }

  function createAnimal(animais) {
    const divAnimal = document.createElement("div");
    divAnimal.classList.add("numero-animal");
    divAnimal.innerHTML = `<h3>${animais.specie}</h3> <span>${animais.numero}</span>`;

    return divAnimal;
  }

  fetchAnimais("./animais.json");
}
