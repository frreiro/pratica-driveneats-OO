
export default class Pedido {
	constructor() {

		this.pratoSelecionado = null;
		this.bebidaSelecionada = null;
		this.sobremesaSelecionada = null;

		this.pedidoActions();
	}

	pedidoActions() {
		const btnConfirmar = document.querySelector(".confirmar");
		const btnCancelar = document.querySelector(".cancelar");
		const btnPedir = document.querySelector(".fazer-pedido");


		btnConfirmar.addEventListener("click", () => {
			this.enviarZap();
		});

		btnCancelar.addEventListener("click", () => {
			this.cancelarPedido();
		});

		btnPedir.addEventListener("click", () => {
			this.confirmarPedido();
		});
	}

	getPrecoTotal() {
		return (
			this.pratoSelecionado.preco +
			this.bebidaSelecionada.preco +
			this.sobremesaSelecionada.preco
		);
	}


	cancelarPedido() {
		const modal = document.querySelector(".overlay");
		modal.classList.add("escondido");
	}

	verificarPedido() {
		console.log("passei")
		console.log(this.pratoSelecionado,
			this.bebidaSelecionada,
			this.sobremesaSelecionada,
		)

		const btnPedir = document.querySelector(".fazer-pedido");
		if (this.pratoSelecionado && this.bebidaSelecionada && this.sobremesaSelecionada) {
			btnPedir.classList.add("ativo");
			btnPedir.disabled = false;
			btnPedir.innerHTML = "Fazer pedido";
		}
	}


	confirmarPedido() {
		const modal = document.querySelector(".overlay");
		modal.classList.remove("escondido");

		document.querySelector(".confirmar-pedido .prato .nome").innerHTML =
			this.pratoSelecionado.nome;
		document.querySelector(".confirmar-pedido .prato .preco").innerHTML =
			this.pratoSelecionado.preco.toFixed(2);

		document.querySelector(".confirmar-pedido .bebida .nome").innerHTML =
			this.bebidaSelecionada.nome;
		document.querySelector(".confirmar-pedido .bebida .preco").innerHTML =
			this.bebidaSelecionada.preco.toFixed(2);

		document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML =
			this.sobremesaSelecionada.nome;
		document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML =
			this.sobremesaSelecionada.preco.toFixed(2);

		document.querySelector(".confirmar-pedido .total .preco").innerHTML =
			this.getPrecoTotal().toFixed(2);
	}

	enviarZap() {
		const telefoneRestaurante = 553299999999;
		const encodedText = encodeURIComponent(
			`Olá, gostaria de fazer o pedido: \n- Prato: ${this.pratoSelecionado.nome
			} \n- Bebida: ${this.bebidaSelecionada.nome} \n- Sobremesa: ${this.sobremesaSelecionada.nome
			} \nTotal: R$ ${this.getPrecoTotal().toFixed(2)}`
		);

		const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
		window.open(urlWhatsapp);
	}


}