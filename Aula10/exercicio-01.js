const nome = ["LUCAS", "GABRIEL", "LUIZ", "PEDRO", "GUILHERME"]

const buscar = "guilherme";

const verificador = nome.indexOf( buscar.toUpperCase() );

if (buscar === nome) {
  console.log(nome)
} else {
    console.log("O nome não existe no array")
}
