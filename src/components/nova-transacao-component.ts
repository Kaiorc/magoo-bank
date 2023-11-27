import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import Conta from "../types/conta.js";
import SaldoComponent from "./saldo-component.js";

// Obtém o formulário de transação e adiciona um listener de evento para quando o formulário for enviado
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de ser enviado
    if (!elementoFormulario.checkValidity()) { // Verifica se todos os campos do formulário foram preenchidos corretamente
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    // Obtém os valores dos campos do formulário
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    // Converte os valores dos campos para os tipos corretos
    // No tipoTransacao, o valor é convertido para o tipo TipoTransacao, ".value" retorna uma string,
    // então é necessário fazer um cast para o tipo TipoTransacao, de forma que explicitamos que o valor
    // de inputTipoTransacao.value deve ser um dos valores do enum TipoTransacao
    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    // Cria um objeto com os valores da transação e exibe-o no console
    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    // Redefine o formulário para que o usuário possa fazer outra transação
    elementoFormulario.reset();
});