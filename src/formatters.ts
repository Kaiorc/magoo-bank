function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

// Se não for informado um formato específico, ele vai aplicar o formato padrão
function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {

    if(formato == FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-BR", { weekday: "long", day:"2-digit", month: "2-digit", year: "numeric" })
    } else if(formato == FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", {day: "2-digit", month: "2-digit"});
    }
}