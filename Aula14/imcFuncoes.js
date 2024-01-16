let p = 60;
let h =1.70;

const calcularIMC = (p, h) => p / (h *h);
const IMC = calcularIMC(p, h);

const verificarPeso = IMC => {
    if (IMC <= 18.5) {
        return  "abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        return  "peso normal;"
    } else if (IMC >= 25 && IMC <= 29.9) {
        return  "sobrepeso;"
    } else if (IMC >= 30 && IMC <= 34.9) {
        return  "obesidade grau 1;"
    } else if (IMC >= 35 && IMC <= 39.9) {
        return  "obesidade grau 2;"
    } else {
        return "obesidade grau 3;"
    }
}
 console.log(verificarPeso(IMC));









