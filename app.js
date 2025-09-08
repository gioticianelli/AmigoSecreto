let NomesListas = []; //irá armazenar os nomes, é um array

// Função para normalizar o nome (primeira letra maiúscula e o resto minúscula)
function normalizarNome(nome) { //(nome) irá verificar o nome
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    // chartAT(0) -> Irá pegar a posição 0 do nome e converte para letra maisculo usando o toUpperCase()
    //nome.slice(1) -> irá pegar a partir do segundo caracter do nome até o final e deixa em letra minuscula utilizando o toLowerCase() 
}

// Função para adicionar amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); //const valor não altera.
    const nome = normalizarNome(inputAmigo.value.trim());// inputAmigo.value vai pegar o nome que foi digitado. .trim() remove os espaços do começo e do fim do nome. normalizarNome padroniza o nome
    
    if (nome) { //verifica se é valido
        const nomeJaExiste = NomesListas.some(nomeExistente => 
            normalizarNome(nomeExistente) === nome
        );
        
        if (nomeJaExiste) { // se o nome já foi adicionado
            alert('Este nome já foi adicionado!');
        } else {
            NomesListas.push(nome); //push vai adicionar o nome no array
            inputAmigo.value = ''; //limpa o campo do input
            atualizarListaAmigos(); //atualiza a lista na tela com os nomes
        }
    } else {
        alert('Por favor, digite um nome válido.'); //Caso o nome inserido for vazio
    }
}

// Função para atualizar a lista visual
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    NomesListas.forEach((nome, index) => { //forEach → Para cada item do array NomesListas. nome - valor index - posição
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (NomesListas.length < 2) { //verifica se a lista contém pelo menos 2 nomes
        alert('É necessário pelo menos 2 participantes para sortear!');
        return;
    }

    // Embaralha a lista
    const listaEmbaralhada = [...NomesListas].sort(() => Math.random() - 0.5); //math.. mistura os nomes aleatoriamente
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; //apaga os resultados anteriores, casos onde corre o sorteio mais de 1 vez
    
    // Cria os pares (cada pessoa tira outra)
    for (let i = 0; i < listaEmbaralhada.length; i++) {
        const sorteado = listaEmbaralhada[(i + 1) % listaEmbaralhada.length];
        
        const li = document.createElement('li');
        li.textContent = `${listaEmbaralhada[i]} tirou ${sorteado}`;
        resultado.appendChild(li);
    }
}

// Inicia o programa quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    iniciarComPrompt();
});

// Adiciona funcionalidade de pressionar Enter no input
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});