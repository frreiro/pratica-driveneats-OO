import Pedido from "./Pedido.js";
import Bebida from "./Bebida.js";
import Prato from "./Prato.js"
import Sobremesa from "./Sobremesa.js";

import Frango from "../img/frango_yin_yang.png"
import Coca from "../img/coquinha_gelada.png"
import Pudim from "../img/pudim.png"




const pratos = [
	{
		nome: "Estrombelete de Frango",
		imagem: Frango,
		descricao: "Um pouco de batata, um pouco de salada",
		preco: 14.9,
	},
	{
		nome: "Asa de Boi",
		imagem: Frango,
		descricao: "Com molho shoyu",
		preco: 14.9,
	},
	{
		nome: "Carne de Monstro",
		imagem: Frango,
		descricao: "Com batata assada e farofa",
		preco: 14.9,
	},
];

const bebidas = [
	{
		nome: "Coquinha gelada",
		imagem: Coca,
		descricao: "Lata 350ml",
		preco: 4.9,
	},
	{
		nome: "Caldo de Cana",
		imagem: Coca,
		descricao: "Copo 600ml",
		preco: 4.9,
	},
	{
		nome: "Corote Gelado",
		imagem: Coca,
		descricao: "Garrafa 400ml",
		preco: 4.9,
	},
];

const sobremesas = [
	{
		nome: "Pudim",
		imagem: Pudim,
		descricao: "Gosto de doce de leite",
		preco: 7.9,
	},
	{
		nome: "Flam",
		imagem: Pudim,
		descricao: "Gosto de chocolate",
		preco: 7.9,
	},
	{
		nome: "Brigadeiro",
		imagem: Pudim,
		descricao: "3 unidades",
		preco: 7.9,
	},
];


const pedido = new Pedido(pratos, bebidas, sobremesas);

const pratosContainer = document.querySelector(".opcoes.prato");
pratos.forEach((prato) => new Prato(prato, pratosContainer, pedido));
const bebidasContainer = document.querySelector(".opcoes.bebida");
bebidas.forEach((bebida) => new Bebida(bebida, bebidasContainer, pedido));
const sobremesasContainer = document.querySelector(".opcoes.sobremesa");
sobremesas.forEach((sobremesa) => new Sobremesa(sobremesa, sobremesasContainer, pedido)
);

