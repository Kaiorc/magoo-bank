// Define o saldo inicial da conta
let saldo = 3000;

alert("Testando compilação do TS-")

// Obtém o elemento HTML que exibe o saldo e data atualiza seus valores
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

if(elementoDataAcesso != null) {
    const dataAcesso: Date = new Date()

    elementoDataAcesso.textContent = new Date().toLocaleDateString("pt-BR", { weekday: "long", day:"2-digit", month: "2-digit", year: "numeric" })
}