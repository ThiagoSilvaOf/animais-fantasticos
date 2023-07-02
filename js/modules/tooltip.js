export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseover);
  });

  function onMouseover(event) {
    const tooltipBox = criarBoxTooltip(this);
    onMouseMove.tooltipBox = tooltipBox;
    function onMouseleave(event) {
      tooltipBox.remove("tooltip");
    }

    function onMouseMove(event) {
      tooltipBox.style.top = event.pageY + 20 + "px";
      tooltipBox.style.left = event.pageX + 20 + "px";
    }

    this.addEventListener("mouseleave", onMouseleave);
    this.addEventListener("mousemove", onMouseMove);
  }

  function criarBoxTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
