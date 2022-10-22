class animais {
  gato;
  idade;
  vacina;

  constructor(gato, idade, vacina) {
    this.gato = gato;
    this.idade = idade;
    this.vacina = vacina;
  }

  descrever() {
    console.log(
      `Meu gato ${this.gato} tem ${this.idade} e tomou suas vacinas ${this.vacina}`
    )
  }
}

const tom = new animais()
tom.gato = "tom"
tom.idade = 18
tom.vacina = "sim"

const jerry = new animais()
jerry.gato = "jerry"
jerry.idade = 10
jerry.vacina = "não"

tom.descrever()
jerry.descrever()


