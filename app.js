"use strict";

// =============================================================
// Entregável Web – Arrays, DOM e Eventos – Semana 04
// Abra o index.html no navegador com o Console aberto (F12)
// =============================================================

const titulo = (texto) => console.log(`\n===== ${texto} =====`);

// =============================================================
// BLOCO 1 – ARRAYS E MÉTODOS
// =============================================================
titulo("BLOCO 1 – Arrays e Métodos");

// 1.1 forEach e map
const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach((nome) => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Maiúsculos:", nomesMaiusculos); // novo array
console.log("Original intacto:", nomes);

// 1.2 filter e reduce
const precos = [10, 25, 40, 5, 60];

const precosAcima20 = precos.filter((preco) => preco > 20);
console.log("Preços acima de 20:", precosAcima20); // [25, 40, 60]

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma dos preços:", somaPrecos); // 140

// 1.3 Array de objetos
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 3 },
  { nome: "Calculadora", preco: 45 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter((produto) => produto.preco < 50);
console.log("Produtos com preço < 50:", produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log("Soma dos preços dos produtos:", totalProdutos);

produtos.forEach((produto) => console.log(`${produto.nome}: R$ ${produto.preco}`));

// =============================================================
// BLOCO 2 – MANIPULAÇÃO DO DOM
// =============================================================
titulo("BLOCO 2 – DOM");

// 2.1 h1 com querySelector
const h1 = document.querySelector("#titulo");
h1.textContent = "Blog do Fernando";

// 2.2 Todos os parágrafos .texto
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((p) => console.log("Parágrafo:", p.textContent));

// 2.3 innerHTML para inserir 2 itens
// Uso += para preservar os 3 <li> que já existem no HTML
// (necessários para o exercício de Event Delegation).
const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Primeiro item</li><li>Segundo item</li>";

// 2.4 createElement + append
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

// 2.5 classList
terceiroItem.classList.add("destaque");
console.log('Contém "destaque"?', terceiroItem.classList.contains("destaque")); // true

// 2.6 Tarefas com forEach
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefa) => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.append(li);
});

lista.querySelector("li").classList.add("feito"); // primeiro <li> da lista
console.log("Total de itens na lista:", document.querySelectorAll("li").length);

// =============================================================
// BLOCO 3 – EVENTOS E EVENT DELEGATION
// =============================================================
titulo("BLOCO 3 – Eventos");

// 3.1 click no botão
const botao = document.querySelector("#botao");
botao.addEventListener("click", () => console.log("Clicou!"));

// 3.2 mouseover no botão
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

// 3.3 keyup no campo nome
const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => console.log(campoNome.value));

// 3.4 Event Delegation: UM único listener na #lista
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
  }
});

// Novo <li> criado via JS: o clique nele também funciona,
// pois o listener está no pai (#lista), não em cada <li>.
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado via JavaScript (clique em mim)";
lista.append(itemDinamico);

// 3.5 Formulário
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // evita o recarregamento da página

  const texto = campoTarefa.value.trim();
  if (texto === "") return; // campo vazio: não adiciona nada

  const li = document.createElement("li");
  li.textContent = texto;
  lista.append(li);

  campoTarefa.value = "";
});
