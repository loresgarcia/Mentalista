var numeroGerado = parseInt(Math.random() * 11);
var tentativas = 3;
var maiorOuMenor;

function Chutar() {
  var numeroDigitado = parseInt(document.getElementById("valor").value);
  if (tentativas > 0) {
    if (numeroDigitado > 10 || numeroDigitado < 0 || isNaN(numeroDigitado)) {
      resultado.innerHTML = "Digite um número de 0 a 10.";
    } else if (numeroDigitado === numeroGerado) {
      resultado.innerHTML =
        "Parabéns!!! Você acertou, a magia está presente em você!";
      tentativas = 0;
    } else {
      tentativas--;
      if (tentativas === 0) {
        resultado.innerHTML =
          "Poxa, você errou!<br>Suas tentativas acabaram.<br>O número secreto era: " +
          numeroGerado;
      } else {
        if (numeroGerado > numeroDigitado) {
          maiorOuMenor = "maior";
        } else {
          maiorOuMenor = "menor";
        }
        resultado.innerHTML =
          "Poxa, você errou! <br>O número secreto é " +
          maiorOuMenor +
          "!<br>" +
          tentativas +
          "  Tentativas restantes hein!";
      }
    }
  } else {
    resultado.innerHTML = "Recarregue a página para jogar novamente!";
  }
}