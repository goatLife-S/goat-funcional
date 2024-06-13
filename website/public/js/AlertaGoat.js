function AlertaTemperatura(temperaturas, Alerta) {
  // prgando os valores do banco
  let TamanhoDoArray = temperaturas.length

  const TemperaturaMuitoAlta = 36;
  const TemperaturaAlta = 35;
  const TemperaturaBaixa = 20;
  const TemperaturaMuitoBaixa = 10;
  

  let Sinal = {
    MuitoAlta: false,
    Alta: false,
    Ideal: false,
    Baixa: false,
    MuitoBaixa: false
  }

  for (let i = 0; i <= TamanhoDoArray; i++) {
    let posicaoAtual = temperaturas[i]
    //Validação para ver se não e nulo o valor 
    if (posicaoAtual == undefined || posicaoAtual == NaN) {
      console.log("fala Programador! De boas? /n Então eu tenho uma noticia ruim, o seu código deu B.O.")
      
      
      } else if (posicaoAtual > TemperaturaMuitoAlta) {
        console.log("temperatura sendo captada, mas acima do normal")
        AlertaTempera.innerHTML = `<div class="AlertaAtualTemperatura1"><h1>Temperatura do capril muito alta</div>`

      Sinal.MuitoAlta = true


    } else if (posicaoAtual > TemperaturaAlta) {
      console.log("Temperatura sendo captada, mas está alta")
      Sinal.Alta = true


    } else if (posicaoAtual < TemperaturaAlta && posicaoAtual < TemperaturaBaixa) {
      console.log("Temperatura sendo captada, e está dentro do limite esperado")
      Sinal.Ideal = true


    } else if (posicaoAtual < TemperaturaBaixa) {
      console.log("Temperatura sendo captada, mas esta baixa")
      Sinal.Baixa = true


    } else if (posicaoAtual < TemperaturaMuitoBaixa) {
      console.log("Temperatura sendo captada, mas está muito abaixo do esperado")
      Sinal.MuitoBaixa = true


    }


  }
}


