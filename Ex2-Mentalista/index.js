//Feito durante a aula

var numeroSecreto = Math.floor(Math.random() * 1000) + 1;
var qtdDeChutes = 0;

while (chute != numeroSecreto) {
  qtdDeChutes++;
  var chute = prompt("Digite um número entre 0 e 1000");
  var tentativaRestante = 10 - qtdDeChutes;
  if (qtdDeChutes < 10) {
    if (chute == numeroSecreto) {
      alert("Acertou! \nVocê tentou " + qtdDeChutes);
      break;
    } else if (chute > numeroSecreto) {
      alert(
        "Errou! O número secreto é menor que " + chute + " ! \nVocê tem " +
          tentativaRestante +
          " tentativas restantes!"
      );
    } else if (chute < numeroSecreto) {
      alert(
        "Errou! O número secreto é maior " + chute + " ! \nVocê tem " +
          tentativaRestante +
          " tentativas restantes!"
      );
    }
  } else {
    alert(
      "Seu número de tentativas acabou! \nO número secreto era: " +
        numeroSecreto
    );
    break;
  }
}

//DESAFIOS!
//Desafio do Paulo Silveira:
//Contar o número de tentativas.

//Desafio do Guilherme Lima:
//Colocar um número entre 1 e 1000, sem o 0

//Desafio da Rafaella Ballerini:
//Qual o número máximo de tentativas que você tem para acertar, quantas tentativas até acertar?

/* Desafios desta aula!
Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final;
Quando a pessoa errar, deixe na mensagem se o número chutado é maior ou menor que o número secreto;
Pesquisar e aprender a diferença entre == e ===. */

/* Resulução do Gui Lima 
Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final
Para controlar as tentativas, criarei uma variável de controle de tentativas chamada tentativasRestantes e farei a comparação apenas com ==, sem levar em conta seu tipo.

let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let tentativasRestantes = 3;

while (tentativasRestantes > 0) {
  let chute = prompt(`Tente adivinhar o número entre 1 e 1000. Você ainda tem ${tentativasRestantes} tentativas.`);
  
  if (chute == numeroAleatorio) {
    alert(`Você acertou o número em ${6 - tentativasRestantes} tentativas! Parabéns!`);
    break;
  } else if (chute < numeroAleatorio) {
    alert("O número secreto é maior está abaixo do número correto.");
  } else {
    alert("O número secreto é menor do número correto.");
  }
  
  tentativasRestantes--;
}

if (tentativasRestantes === 0) {
  alert(`Você perdeu. O número correto era ${numeroAleatorio}.`);
}*/