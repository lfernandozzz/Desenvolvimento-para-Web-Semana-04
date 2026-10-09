# Semana 04 – Arrays, DOM e Eventos

Projeto da disciplina de Desenvolvimento Web. Reúne exercícios de **arrays**, **manipulação do DOM** e **eventos** em JavaScript, executados no navegador.

## Como executar

1. Baixe ou clone o repositório.
2. Abra o `index.html` no navegador.
3. Abra o Console (`F12`) para ver os resultados.

## Estrutura

- `index.html`: estrutura da página (título, parágrafos, botão, campo de nome, lista e formulário).
- `app.js`: toda a lógica, dividida em três blocos.
- `README.md`: esta documentação.

## Bloco 1 – Métodos de array

| Método | Função | Retorno |
| --- | --- | --- |
| `forEach` | Percorre cada elemento executando uma ação (ex.: imprimir). | `undefined` |
| `map` | Transforma cada elemento e devolve um **novo array** do mesmo tamanho (ex.: nomes em maiúsculas). | Novo array |
| `filter` | Mantém apenas os elementos que passam em uma condição (ex.: preços acima de 20). | Novo array (pode ser menor) |
| `reduce` | Acumula todos os elementos em **um único valor** (ex.: soma dos preços). | Valor único |

`map` e `filter` não alteram o array original.

## Bloco 2 – Manipulação do DOM

- `querySelector` / `querySelectorAll` selecionam um elemento ou todos os que correspondem a um seletor CSS.
- `textContent` altera o texto de forma segura; `innerHTML` interpreta tags HTML e deve ser usado com cuidado.
- `createElement` cria elementos novos, e `append` os insere na página.
- `classList.add`, `classList.contains` e `classList.toggle` gerenciam classes CSS sem mexer no atributo inteiro.

Observação: o `innerHTML` foi usado com `+=` para não apagar os `<li>` que já estavam no HTML.

## Bloco 3 – Eventos e Event Delegation

Foram usados os eventos `click`, `mouseover`, `keyup` e `submit` com `addEventListener`. No formulário, `e.preventDefault()` impede o recarregamento da página, e `.trim()` evita adicionar tarefas vazias.

### Por que Event Delegation?

Em vez de um listener em cada `<li>`, há **um único listener na `#lista`**. Como os eventos "borbulham" (bubbling) até o elemento pai, `e.target` indica qual item foi clicado, e o código só age se for um `LI`.

- **Performance:** um listener em vez de dezenas ocupa menos memória e é mais simples de gerenciar.
- **Elementos dinâmicos:** itens criados depois via JavaScript (como as tarefas do formulário) funcionam sem registrar nada de novo, pois o listener já está no pai.
