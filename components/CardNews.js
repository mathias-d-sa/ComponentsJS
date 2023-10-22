class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const noticiaTitle = document.createElement("h1");
    noticiaTitle.textContent = this.getAttribute("title");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content")

    cardLeft.appendChild(autor);
    cardLeft.appendChild(noticiaTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const newsImg = document.createElement("img");
    newsImg.src = "components/homer.jpeg";

    cardRight.appendChild(newsImg);


    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: 75%;
      box-shadow: 8px 9px 16px 1px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 8px 9px 16px 1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 8px 9px 16px 1px rgba(0, 0, 0, 0.75);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    
    .card_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }
    
    .card_left>span {
      font-weight: 500;
    }
    
    .card_left>h1 {
      margin-top: 15px;
      font-size: 25px;
    }
    `

    return style;
  }
}

customElements.define("card-news", CardNews);