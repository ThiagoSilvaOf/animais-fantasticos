export default function initAnimaNumeros() {
  function animaNumero() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      let cont = Math.floor(total / 4);

      const timer = setInterval(() => {
        cont++;
        numero.innerText = cont;
        
        if (cont > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 3);
    });
  }

  function observador(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observe.disconnect();
      animaNumero();
    }
  }

  const observeTarget = document.querySelector(".numeros");

  const observe = new MutationObserver(observador);

  observe.observe(observeTarget, { attributes: true });
}
