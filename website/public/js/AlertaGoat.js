let Ligado = true;
function AlertaTemperatura(temperaturas, AlertaVisao) {
  // Pegando os valores do banco
  let TamanhoDoArray = temperaturas.length;

  const TemperaturaMuitoAlta = 35;
  const TemperaturaAlta = 31.5;
  const TemperaturaBaixa = 20;
  const TemperaturaMuitoBaixa = 15;
  let UltimoValor = 0;

  if(Ligado){
    document.getElementById("AlertaTempera").innerHTML = ``;
      document.getElementById("AlertaTempera").style.display = "flex";
  }
  for (let i = 0; i < TamanhoDoArray; i++) {
    let posicaoAtual = temperaturas[i];
    UltimoValor = posicaoAtual;
  }
    // Validação para ver se não é nulo o valor 
    if (UltimoValor === undefined || isNaN(UltimoValor)) {
      console.log("fala Programador! De boas? Então eu tenho uma noticia ruim, o seu código deu B.O.");
    } 
    else if (UltimoValor > TemperaturaMuitoAlta) {
      console.log("Temperatura sendo captada, mas acima do normal");
      AlertaVisao.innerHTML += `
       <div class="AlertaAtualTemperatura1">
                        <h1>Temperatura do capril muito alta</h1>
                      <img class="imageTemp" src="./assets/siren.png" alt="">
                        <button class="btn-alerta" onclick="Fechar()">x</button>
                    </div>
      `;
    } 
    else if (UltimoValor > TemperaturaAlta) {
      console.log("Temperatura sendo captada, mas está alta");
      AlertaVisao.innerHTML += `
        <div class="AlertaAtualTemperatura2">
                        <h1>Temperatura do capril alta</h1>
                      <img class="imageTemp" src="./assets/siren.png" alt="">
                        <button class="btn-alerta" onclick="Fechar()">x</button>

                    </div>
      `;
    }
     else if (UltimoValor < TemperaturaBaixa && UltimoValor >= TemperaturaMuitoBaixa) {
      console.log("Temperatura sendo captada, mas está baixa");
      AlertaVisao.innerHTML += `
       <div class="AlertaAtualTemperatura4">
                        <h1>Temperatura do capril baixa</h1>
                      <img class="imageTemp" src="./assets/siren.png" alt="">
                        <button class="btn-alerta" onclick="Fechar()">x</button>

                    </div>
      `;
    } 
    else if (UltimoValor < TemperaturaMuitoBaixa) {
      console.log("Temperatura sendo captada, mas está muito abaixo do esperado");
      AlertaVisao.innerHTML += ` 
      <div class="AlertaAtualTemperatura5">
                        <h1>Temperatura do capril Muito baixa</h1>
                      <img class="imageTemp" src="./assets/siren.png" alt="">
                        <button class="btn-alerta" onclick="Fechar()">x</button>
                    </div>`;
    }
  }


  function Fechar() {
    document.getElementById("AlertaTempera").style.display = "none";
  }

  function AlertaUmidade(umidades, AlertaVisao) {
    // Pegando os valores do banco
    let TamanhoDoArray = umidades.length;
  
    const umidadeMuitoAlta = 35;
    const umidadeAlta = 31.5;
    const umidadeBaixa = 20;
    const umidadeMuitoBaixa = 15;
    let UltimoValor = 0;
    for (let i = 0; i < TamanhoDoArray; i++) {
      let posicaoAtual = umidades[i];
      UltimoValor = posicaoAtual;

    }
      // Validação para ver se não é nulo o valor 
      if (UltimoValor === undefined || isNaN(UltimoValor)) {
        console.log("fala Programador! De boas? Então eu tenho uma noticia ruim, o seu código deu B.O.");
      } 
      else if (UltimoValor > umidadeMuitoAlta) {
        console.log("umidade sendo captada, mas acima do normal");
        AlertaVisao.innerHTML += `
         <div class="AlertaAtualumidade1">
                          <h1>umidade do capril muito alta</h1>
                          <img class="imageTemp" src="./assets/siren.png" alt="">
                            <button class="btn-alerta" onclick="Fechar()">x</button>
                      </div>
        `;
      } 
      else if (UltimoValor > umidadeAlta) {
        console.log("umidade sendo captada, mas está alta");
        AlertaVisao.innerHTML += `
          <div class="AlertaAtualumidade2">
                          <h1>umidade do capril alta</h1>
                        <img class="imageTemp" src="./assets/siren.png" alt="">
                        <button class="btn-alerta" onclick="Fechar()">x</button>
                          </div>
        `;
      }
       else if (UltimoValor < umidadeBaixa && UltimoValor >= umidadeMuitoBaixa) {
        console.log("umidade sendo captada, mas está baixa");
        AlertaVisao.innerHTML += `
         <div class="AlertaAtualumidade4">
                          <h1>umidade do capril baixa</h1>
                        <img class="imageTemp" src="./assets/siren.png" alt="">
                          <button class="btn-alerta" onclick="Fechar()">x</button>
                          </div>
        `;
      } 
      else if (UltimoValor < umidadeMuitoBaixa) {
        console.log("umidade sendo captada, mas está muito abaixo do esperado");
        AlertaVisao.innerHTML += ` 
        <div class="AlertaAtualumidade5">
                          <h1>umidade do capril Muito baixa</h1>
                          <img class="imageTemp" src="./assets/siren.png" alt="">
                          <button class="btn-alerta" onclick="Fechar()">x</button>
                      </div>`;
      }
    }
  
  

    function Fechar() {
      Ligado = false;
      document.getElementById("AlertaTempera").innerHTML = ``;
      document.getElementById("AlertaTempera").style.display = "none";
    }