const situacaoEstoque = "OK";

const conferirEstoque = estoque => {
  if (estoque === "ok") {
    return "status do estoque: ok ";
  } else if (estoque === "baixo") {
    return "status do estoque: baixo. é nessesario repor o estoque.";
  } else if (estoque === "medio") {
    return "status do estoque: medio. alerte para repor o estoque.";
  } else {
    return "status invalido";
  }
};

console.log(conferirEstoque( "ok"));
