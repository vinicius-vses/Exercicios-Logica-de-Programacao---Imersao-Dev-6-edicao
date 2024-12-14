var listaFilmes = [
  "https://m.media-amazon.com/images/I/81aA7hEEykL.jpg",
  "https://m.media-amazon.com/images/I/91eOgodm4nL.jpg",
  "https://m.media-amazon.com/images/I/81g8vEs4ixL.jpg",
];

var nomeFilmes = [
  "Star Wars: Uma Nova Esperança ",
  "Star Wars: O Império Contra-Ataca ",
  "Star Wars: Retorno do Jedi",
];

var i = 0;
while (i < listaFilmes.length && i < nomeFilmes.length) {
  const extension = listaFilmes[i].split(".").pop();
  if (extension == "jpg") {
    document.write("<img src=" + listaFilmes[i] + ">");
    document.write("<p>" + nomeFilmes[i] + "</p>");
    i++;
  }
}

for (var i = 0; i < listaFilmes.length; i++) {
  const extension = listaFilmes[i].split(".").pop();
  if (extension == "jpg") {
    document.write("<img src=" + listaFilmes[i] + ">");
    document.write("<p>" + nomeFilmes[i] + "</p>");
  } else {
    document.write(
      "<p> A imagem " +
        i +
        " não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>"
    );
  }
  i++;
}
document.write("</div>");

//DESAFIOS!
//Desafio do Paulo Silveira:
//Transformar o "for" em "while".

//Desafio da Rafaella Ballerini:
//Garantir que a imagem tenha a extensão .jpg.

//Desafio do Guilherme Lima:
//Criar uma segunda lista para guardar os nomes dos filmes e exibi-los abaixo da imagem do filme.

/* Desafios desta aula!
Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ 's, cursos, capas de jogos, entre outros;
Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while;
Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente;
Criar um campo e botão para adicionar a imagem pela tela, e não direto no código. */

/* Resulução do Gui Lima 
Implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while para exibir a lista de filmes na tela
Para este desafio, vou mostrar o código feito com for, foreach e while.

For
var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
  "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
  "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

// listaFilmes[0] =
//   "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg";
// listaFilmes[1] =
//   "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg";
// listaFilmes[2] =
//   "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg";

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
Foreach
O método forEach() executa uma dada função em cada elemento de um array. Caso queira ver mais exemplos, segue o link.

var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
  "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
  "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

listaFilmes.forEach(function(filme) {
  document.write("<img src=" + filme + ">");
});

while
var listaFilmes = [
"https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
"https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
"https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
"https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
"https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

var i = 0;
while (i < listaFilmes.length) {
document.write("<img src=" + listaFilmes[i] + ">");
i++;
}*/
