var listaFilmesFavoritos = [];
var listaTrailersFilmesFavoritos = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var trailerFilmeFavorito = document.getElementById("trailer").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");

  if (filmeFavorito.endsWith("jpg") || filmeFavorito.endsWith("jpeg")) {
    document.getElementById("mensagemDeErro").innerHTML = "";
    listaFilmesFavoritos.push(filmeFavorito);
    listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);

    var item = document.createElement("div");
    item.classList.add("card-filme");
    var imagem = document.createElement("img");
    
    var botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-remover-filme");
    
    imagem.src = filmeFavorito;
    imagem.addEventListener("click", removerFilme);
    botaoRemover.innerHTML = "Remover";
    botaoRemover.addEventListener("click", removerFilme);
    
    item.appendChild(imagem);
    item.appendChild(botaoRemover);
    elementoListaFilmes.appendChild(item);

    recarregarFilmes();
    limpaCampos();
  } else {
    document.getElementById("mensagemDeErro").innerHTML =
      "Endereço de imagem inválido, tente novamente";
      limpaCampos();
    }    
  }
  
  function recarregarFilmes() {
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = "";
    for (i = 0; i < listaFilmesFavoritos.length; i++) {
      elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} ">
      <img src=" ${listaFilmesFavoritos[i]} "></a>`
    }
  }
  
  function limpaCampos() {
  document.getElementById("filme").value = "";
  document.getElementById("trailer").value = "";
}

function removerFilme(event) {
  event.target.parentElement.remove();
}

//DESAFIOS!
//Desafio do Paulo Silveira:
//Criar lista de filmes adicionados, usar o push guardando no array e dar o document.write
//em cada um deles.

//Desafio da Rafaella Ballerini:
//Assim que o usuário clicar no banner do filme, deve haver um redirecionamento para o trailer do filme.

//Desafio do Guilherme Lima:
//O que acontecerá se for adicionado uma string que não seja o endereço de uma imagem?
//Criar condicional que aceite somente imagens .jpg.

/* Criar um botão para remover um filme na tela;
Além de colocar a imagem do filme, também adicionar o nome por meio de outro input;
Guardar todos os filmes adicionados em uma lista/array e 
percorrer essa lista toda vez que quiser imprimir ou remover o filme. */

/* Resulução do Gui Lima Criar um botão para remover um filme na tela;
Para este desafio, vou compartilhar o código HTML, CSS e JavaScript.

JS
function removerFilme(event) {
  event.target.parentElement.remove();
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var item = document.createElement("div");
  item.classList.add("card-filme");
  var imagem = document.createElement("img");
  var botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-remover-filme")

  imagem.src = filmeFavorito;
  imagem.addEventListener("click", removerFilme);
  botaoRemover.innerHTML = "Remover";
  botaoRemover.addEventListener("click", removerFilme);

  item.appendChild(imagem);
  item.appendChild(botaoRemover);
  elementoListaFilmes.appendChild(item);

  document.getElementById("filme").value = "";
}*/

/*html
<html>

<head>
<title>
Imersão Dev
</title>
</head>

<body>
<div class="container">
    <h1 class="page-title">
      Aluraflix
    </h1>
    <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" class="page-logo" alt="">
    <p class="page-subtitle">
      Qual seu filme favorito?
    </p>
    <div class="form-wrapper">
      <input type="text" id="filme" name="filme" placeholder="Insira endereço de imagem">
      <button onClick="adicionarFilme()">Adicionar Filme</button>
    </div>
  </div>
  <div id="listaFilmes"></div>
  <a href="https://alura.com.br/" target="_blank">
    <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
  </a>
</body>

</html>

CSS
body {
  font-family: "Roboto Mono", monospace;
  text-align: center;
  background-image: url("https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-04-aluraflix-e-filmes.png");
  background-color: #000000;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.container {
  text-align: center;
  padding: 20px;
}

.page-title {
  color: #ffffff;
  margin: 0 0 5px;
}

.page-subtitle {
  color: #ffffff;
  margin-top: 5px;
}

.page-logo {
  width: 200px;
}

.alura-logo {
  width: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
}

#listaFilmes {
  display:flex;
}

#listaFilmes img {
  margin: 10px;
  max-height: 250px;
}

.form-wrapper {
  margin: 0 0 15px;
}

.form-wrapper input {
  display: block;
  margin: 0 auto;
  padding: 10px 15px;
}

.form-wrapper button {
  border: 0;
  color: #ffffff;
  background: #da1e26;
  font-weight: bold;
  padding: 15px 20px;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.form-wrapper button:hover {
  opacity: 0.8;
}

.card-filme {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  height:250px;
  width:180px;
  margin-bottom: 50px;
}

.botao-remover-filme {
  width:80px;
  color:white;
  background: #da1e26;
  cursor: pointer;
}
*/