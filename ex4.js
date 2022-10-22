function escreverNome(nome){
  return "meu nome é " + nome;
}

function MaiordeIdade(idade){
  if(idade >= 18){
    console.log("Meu nome é"+ escreverNome("Rauane ") + "e sou maior de idade");
  } else{
    console.log("menor de idade");
  }
};

MaiordeIdade(19);