//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista de amigos
let amigos = [];

// Função chamada pelo botão "Adicionar"
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        input.focus();
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

// Atualiza a lista de nomes na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função chamada pelo botão "Sortear amigo"
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos.splice(indice, 1)[0]; // remove da lista

    const resultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = sorteado;
    resultado.appendChild(li);

    atualizarLista();
}

