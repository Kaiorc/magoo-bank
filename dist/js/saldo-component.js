// Define o saldo inicial da conta
let saldo = 3000;
alert("Testando compalação do TS-");
// Obtém o elemento HTML que exibe o saldo e atualiza seu valor
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
