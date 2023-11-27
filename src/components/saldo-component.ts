import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

// Define o saldo inicial da conta
let saldo = 3000;

alert("Testando compilação do TS-")

// Obtém o elemento HTML que exibe o saldo e data atualiza seus valores
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementoDataAcesso != null) {
    const dataAcesso: Date = new Date()

    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}

export function getSaldo(): number {
    return saldo;
}

atualizarSaldo(saldo)

export function atualizarSaldo(novoSaldo: number): void {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}