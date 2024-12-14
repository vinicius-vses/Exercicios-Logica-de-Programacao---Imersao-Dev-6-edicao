var paulo = {
    nome: "Paulo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var rafa = {
    nome: "Rafa",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var gui = {
    nome: "Gui",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var renato = {
    nome: "Renato",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  
  function exibirNaTela() {
    elementoTabela.innerHTML = `
        <tr>
            <td>${paulo.nome}</td>
            <td>${paulo.vitoria}</td>
            <td>${paulo.empate}</td>
            <td>${paulo.derrota}</td>
            <td>${paulo.pontos}</td>
            <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
            <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
        </tr>
    `;
  }
  
  function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
  }
  
  function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
  }
  
  function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
  }

//DESAFIOS!
//Desafio do Paulo Silveira:
//Add outros jogadores, usando listas de jogadores e iterar-lás.

//Desafio da Rafaella Ballerini:
//Personalizar a tabela, add mais colunas e botões.

//Desafio do Guilherme Lima:
//Compartilhar os projetos.

/* Desafios desta aula!
Fazer a lógica de quando houver um empate, obrigatoriamente deveria já ajustar como empate para os demais jogadores;
Validar se todos os pontos estão fazendo sentido, tanto o número de empates, derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo);
Adicionar a imagem de cada jogador;
Criar um botão para zerar todos os pontos;
Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados;
Utilizar seu jogo preferido para se basear na pontuação da sua tabela de classificação. */

/*
var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

//elementoTabela.addEventListener("onload", exibirNaTela());

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
          </tr>
    `;
  });
}

function criarJogador() {
  //verificar se player ja existe ou não
  var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
  listaDeJogadores.push({
    nome: nomeNovoJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("campoNomeJogador").value = "";
  exibirNaTela();
}

function adicionarVitoria(index) {
  listaDeJogadores[index].vitoria++;
  listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(index) {
  listaDeJogadores[index].empate++;
  listaDeJogadores[index].pontos++;
  exibirNaTela();
}

function adicionarDerrota(index) {
  listaDeJogadores[index].derrota++;
  exibirNaTela();
}

function limparPontuacaoJogador(index) {
  listaDeJogadores[index].vitoria = 0;
  listaDeJogadores[index].empate = 0;
  listaDeJogadores[index].derrota = 0;
  listaDeJogadores[index].pontos = 0;
  exibirNaTela();
}

function removerJogador(index) {
  listaDeJogadores.splice(index, 1);
  exibirNaTela();
}

function apagarJogadores() {
  listaDeJogadores = [];
  exibirNaTela();
}
*/