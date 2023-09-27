// Define o saldo inicial da conta
let saldo = 3000;
alert("Testando compalação do TS-");
// Obtém o elemento HTML que exibe o saldo e atualiza seu valor
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
// Obtém o formulário de transação e adiciona um listener de evento para quando o formulário for enviado
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de ser enviado
    if (!elementoFormulario.checkValidity()) { // Verifica se todos os campos do formulário foram preenchidos corretamente
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    // Obtém os valores dos campos do formulário
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    // Converte os valores dos campos para os tipos corretos
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    // Atualiza o saldo dependendo do tipo de transação selecionado
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é inválido!");
        return;
    }
    // Atualiza o elemento HTML que exibe o saldo com o novo valor do saldo
    elementoSaldo.textContent = saldo.toString();
    // Cria um objeto com os valores da transação e exibe-o no console
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    // Redefine o formulário para que o usuário possa fazer outra transação
    elementoFormulario.reset();
});
