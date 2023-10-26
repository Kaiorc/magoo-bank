// Define o saldo inicial da conta
let saldo = 3000;
alert("Testando compilação do TS-");
// Obtém o elemento HTML que exibe o saldo e data atualiza seus valores
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
