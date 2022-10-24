class pessoas{
  nome;
  peso;
  altura;

  constructor(nome, peso, altura){
    this.nome = nome
    this.peso = peso
    this.altura = altura
  }

  calcularImc(){
    return this.peso / (this.altura * this.altura)
  }

}

const josé = new pessoas("José", 70, 1.75)
console.log(josé.calcularImc())