let guardarNomes = [];
let nomesSorteados = [];


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function textoIncial() {
    exibirTextoNaTela('h1', 'Bem-Vindo ao jogo do amigo secreto!');
    exibirTextoNaTela('p', 'Digite o nome dos participantes e clique em adicionar.');
}

textoIncial();

function limparCampo() {
    let limpar = document.querySelector('input');
    limpar.value = '';
}

function adicionarNome() {
    let nome = document.querySelector('input').value;
    guardarNomes.push(nome);
    exibirTextoNaTela('p', `Participantes: ${guardarNomes.join(', ')}`);
    limparCampo();
}

function sortearAmigo() {
    let numeroParticipantes = guardarNomes.length;
    let nomeSorteado = parseInt(Math.random() * numeroParticipantes);
    let nomeAmigoSecreto = guardarNomes[nomeSorteado];

    if (nomesSorteados.length === numeroParticipantes) {
        exibirTextoNaTela('p', `Todos os participantes foram sorteados!`);
        nomesSorteados = []; 
        return;
    }

    if (nomesSorteados.includes(nomeAmigoSecreto)) {
        return sortearAmigo();
    } else {
        nomesSorteados.push(nomeAmigoSecreto);
        console.log(nomesSorteados);
        return exibirTextoNaTela('h1', `O nome do seu amigo secreto é: ${nomeAmigoSecreto}`);
    }
}


