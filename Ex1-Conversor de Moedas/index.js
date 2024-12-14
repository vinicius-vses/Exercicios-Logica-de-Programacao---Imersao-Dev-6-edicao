//Feito durante a aula

var valorEmDolar = 10;
var cotacaoDoDolar = 5.06;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("R$" + valorEmReal);

//DESAFIOS!
//Desafio do Guilherme Lima: 
//Converter a moeda para uma criptomoeda.

var cotacaoBitCoin =  0.000042;

var bitCoinEmDolar = valorEmDolar * cotacaoBitCoin;
bitCoinEmDolar = bitCoinEmDolar.toFixed(9);
alert("US$" + bitCoinEmDolar);

//Desafio da Rafaella Ballerini:
//Adicionar o nome da pessoa que pediu a conversão.
var nome = "Vinicius";
alert("Olá, " +  nome + ". R$" + valorEmReal);

//Desafio do Paulo Silveira:
//Converter anos-luz em metros.
var anoLuz = 94605284000000000000000;
var metro = 5;

var anoLuzEmMetro = anoLuz * metro;
anoLuzEmMetro = anoLuzEmMetro.toFixed(20);

alert("Ano-Luz em metros: " + anoLuzEmMetro);

/* Desafios desta aula!
Adicionar outras moedas para converter;
Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra;
Conversor de temperaturas entre fahrenheit, kelvin e celsius;
Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin. */

/* Resulução do Gui Lima 
Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra

Para resolver esse desafio, usarei 2 estrelas:

Sigma Octantis: é a estrela mais ao sul do Polo Sul celeste e é considerada a estrela mais distante visível da Terra.

Alpha Centauri A e B: são as estrelas mais próximas do Sol e estão localizadas a 4,37 anos-luz da Terra.

const velocidadeDaLuz = 299792; // km/s

const distanciaParaSigmaOctantis = 1930000; // km
const distanciaParaAlphaCentauri = 4.37 * Math.pow(10, 12); // km

const distanciaEmAnosLuz = distanciaParaAlphaCentauri / Math.pow(velocidadeDaLuz, 2);
const distanciaEmQuilometros = distanciaParaAlphaCentauri / 1000;

alert(`A distância de Sigma Octantis até Alpha Centauri é de ${distanciaEmAnosLuz} anos-luz.`);
alert(`A distância de Sigma Octantis até Alpha Centauri é de ${distanciaEmQuilometros} quilômetros.`);
(No entanto, lembre-se de que o tempo de viagem para uma estrela 
não pode ser calculado apenas pela distância. 
A velocidade da nave, a massa da estrela e outros fatores 
precisam ser considerados para calcular o tempo de viagem.) */

