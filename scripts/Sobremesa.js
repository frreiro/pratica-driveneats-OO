export default class Sobremesa {
	constructor(sobremesa, parentElement, pedido) {
		const { nome, imagem, descricao, preco } = sobremesa
		this.title = nome;
		this.image = imagem;
		this.description = descricao;
		this.price = preco;
		this.element = null;
		this.parentElement = parentElement;
		this.pedido = pedido;
		this.getSobremesaView();
	}

	getSobremesaView() {
		this.element = document.createElement("div");
		this.element.classList.add("opcao");
		this.element.addEventListener("click", () => {
			this.selecionarSobremesa(this.title, this.price);
		});
		this.element.innerHTML = `
			  <img src="${this.image}" />
			  <div class="titulo">${this.title}</div>
			  <div class="descricao">${this.description}</div>
			  <div class="fundo">
				  <div class="preco">R$ ${this.price.toFixed(2)}</div>
				  <div class="check">
					  <ion-icon name="checkmark-circle"></ion-icon>
				  </div>
			  </div>
		  `;

		this.parentElement.appendChild(this.element);
	}

	selecionarSobremesa() {
		const selecionado = document.querySelector(".sobremesa .selecionado");
		if (selecionado !== null) {
			selecionado.classList.remove("selecionado");
		}
		this.element.classList.add("selecionado");

		this.pedido.sobremesaSelecionada = { nome: this.title, preco: this.price }

		this.pedido.verificarPedido();
	}
}
