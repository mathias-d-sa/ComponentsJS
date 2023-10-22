class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //base do componente -> <h1>Mathias</h1>
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = 'Mathias';

    const componentRoot2 = document.createElement("h1");
    componentRoot2.textContent = this.getAttribute("titulo");

    //estilo do componente,
    const style = document.createElement("style");
    style.textContent = `
      h1{
        color: red;
      }
    `;

    // enviar para o shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(componentRoot2);
    shadow.appendChild(style);
  }
}

customElements.define('titulo-dinamico', TituloDinamico);
