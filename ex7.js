class carros {
  marca
  cor
  gastoMedioKm

  constructor(marca, cor, gastoMedioKm) {
    this.marca = marca
    this.cor = cor
    this.gastoMedioKm = gastoMedioKm
  }

  calcularGastoPercurso(distanciaKM, valorGasolina) {
    return distanciaKM * this.gastoMedioKm * valorGasolina
  }
}
const camaro = new carros("camaro", "amarelo", 1 / 12)
console.log(camaro.calcularGastoPercurso(70, 5))
