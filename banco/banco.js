(function () {
  const pagina = window.location.pathname;

  let passos = [];

  if (pagina.includes("boleto")) {
    passos = [
      "Passo 1: Abra o aplicativo do seu banco",
      "Passo 2: Clique em pagamentos",
      "Passo 3: Clique em boleto",
      "Passo 4: Escaneie o código de barras ou digite",
      "Passo 5: Confirme o pagamento"
    ];
  }

  if (pagina.includes("pix")) {
    passos = [
      "Passo 1: Abra o aplicativo do seu banco",
      "Passo 2: Clique na opção Pix",
      "Passo 3: Escolha enviar dinheiro",
      "Passo 4: Digite a chave Pix ou escaneie o QR Code",
      "Passo 5: Confira os dados e confirme o pagamento"
    ];
  }
  if (pagina.includes("saldo")) {
    passos = [
      "Passo 1: Abra o aplicativo do seu banco",
      "Passo 2: Clique na opção de saldo ou extrato",
      "Passo 3: O saldo disponível será exibido na tela"
    ];
  }

  let passoAtual = 0;

  function atualizarTexto() {
    document.getElementById("texto").innerText = passos[passoAtual];
  }

  window.proximo = function () {
    if (passoAtual < passos.length - 1) {
      passoAtual++;
      atualizarTexto();
    }
  };

  window.falar = function () {
    const msg = new SpeechSynthesisUtterance(passos[passoAtual]);
    msg.lang = "pt-BR";
    speechSynthesis.speak(msg);
  };

  window.onload = atualizarTexto;
})();