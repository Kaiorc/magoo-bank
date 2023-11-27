import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/conta.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

alert("Testando compilação do TS-")

// Obtém o elemento HTML que exibe o saldo e data atualiza seus valores
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}

renderizarSaldo()

// Busca os dados do "conta.ts" e atualiza o saldo na tela
function renderizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

// A única coisa que estará disponível para uso do componente de saldo é o objeto 
// SaldoComponent, que irá representar todo o componente, com o método atualizar() 
// que chama a função interna renderizarSaldo().
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}

export default SaldoComponent;