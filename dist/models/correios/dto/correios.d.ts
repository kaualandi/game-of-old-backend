interface TextReturn {
    _text: string;
}
export interface ReturnPriceDeadlineXMLConverted {
    _declaration: {
        _attributes: {
            version: string;
            encoding: string;
        };
    };
    Servicos: {
        cServico: {
            Codigo: TextReturn;
            Valor: TextReturn;
            PrazoEntrega: TextReturn;
            ValorSemAdicionais: TextReturn;
            ValorMaoPropria: TextReturn;
            ValorAvisoRecebimento: TextReturn;
            ValorValorDeclarado: TextReturn;
            EntregaDomiciliar: TextReturn;
            EntregaSabado: TextReturn;
            obsFim: TextReturn;
            Erro: TextReturn;
            MsgErro: TextReturn;
        };
    };
}
export {};
