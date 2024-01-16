//⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
let peso = 60;
let altura = 1.7;
let imc = peso / (altura * altura);
let result = "";

if (imc < 18.5) {
  result = "ABAIXO DO PESO";
} else if (imc > 18.5 && imc <= 24.9) {
  result = "PESO NORMAL";
} else if (imc > 25 && imc <= 29.9) {
  result = "SOBREPESO";
} else if (imc > 30 && imc <= 34.9) {
  result = "OBESIDADE 1";
} else if (imc > 35 && imc <= 39.9) {
  result = "OBESIDADE 2";
} else {
  result = "";
}

//⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

// ESTA VARIÁVEL A BAIXO EXIBE QUALQUER COISA QUE VOCÊ COLOQUE NELA
// NÃO MUDE JAMAIS O NOME DA VARIAVEL RESPOSTA
// MUDE SOMENTE O QUE TEM DEPOIS DO SINAL " = "
const resposta = result;
