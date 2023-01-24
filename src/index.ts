import axios from "axios"
import clipboard from 'clipboardy'
import { stat } from "fs";
import { v4 as uuid } from 'uuid'

async function getToken() {
    const data = JSON.stringify({
        "usuario": "admin",
        "senha": "123456"
    });

    const config = {
        method: 'post',
        url: 'https://de48-177-103-247-210.sa.ngrok.io/autenticacao/obter-token',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': '38'
        },
        data: data
    };

    const token = await axios(config)
    return token.data

}

function geraUUID() {
    const id = uuid()
    clipboard.writeSync('localhost:8888/pedido/' + id)
    return id
}

async function gerarRomaneioLink() {
    const web_id = geraUUID()
    const token = await getToken()

    const data = JSON.stringify({
        "loja": 2,
        "emissao": null,
        "indicadorPagamento": null,
        "situacao": "EM_ABERTO",
        "operacaoCodigo": 1,
        "operacaoDescricao": "VENDA",
        "cadastroCodigo": 5,
        "cadastroLoja": 2,
        "clienteNome": "O HOMEM DO POST",
        "cadastroVeiculoNewCodigo": null,
        "produtoVeiculoCodigo": null,
        "compradorNome": "",
        "vendedorCodigo": 1,
        "vendedorNome": "GERALDO",
        "terceiroCodigo": null,
        "terceiroLoja": null,
        "terceiroNome": "",
        "terceiroComissaoPorcentagem": 0,
        "terceiroComissaoValor": 0,
        "enderecoEntregaCodigo": 13461,
        "enderecoEntregaLoja": 2,
        "entrega": true,
        "modoPgtoCodigo": 1,
        "modoPgtoDescricao": "A VISTA",
        "descontoTipo": "PORCENTAGEM",
        "descontoSobre": "VALOR_TOTAL",
        "modoPgtoValor": 25.03,
        "valorFrete": 0,
        "freteConta": "SEM_FRETE",
        "valorProdutos": 25.03,
        "valorTotal": 25.03,
        "descontoValor": 0.0024999999999977263,
        "custoTotal": 9.149272,
        "descontoPorcentagem": 0,
        "dinheiro": 0,
        "troco": 0,
        "comissaoValor": 0.60072,
        "acumuloCodigo": null,
        "acumuloLoja": null,
        "obs": "T",
        "destinoTipo": null,
        "destinoCodigo": null,
        "destinoLoja": null,
        "destinoTipo2": null,
        "destinoLoja2": null,
        "destinoCodigo2": null,
        "origemTipo": null,
        "origemCodigo": null,
        "origemLoja": null,
        "devolucaoLoja": null,
        "devolucaoCodigo": null,
        "caixaCodigo": 0,
        "caixaLoja": 0,
        "cadastro": null,
        "criadoPor": "andre.carvalho",
        "alterado": null,
        "alteradoPor": "andre.carvalho",
        "telefoneSMS": "",
        "itens": [
            {
                "loja": 0,
                "item": 1,
                "itemBanco": 0,
                "quantidade": 1,
                "quantidadeGarantia": 0,
                "produtoCodigo": 1797,
                "codigoX": 969,
                "codigoSequencia": "A",
                "codigoFabricante": "RCLF00021",
                "grupoCodigo": 1298,
                "descricao": "FLUIDO FREIO 500ML DOT 3",
                "marca": "constGA",
                "unidade": "FR",
                "codigoBarras": "7897483400020",
                "valorFrete": 0,
                "valorUnidade": 25.03,
                "valorTotal": 25.03,
                "custoUnidade": 9.149272,
                "valorBase": 26.35,
                "cadastro": null,
                "alterado": null,
                "estoqueCodigo": 8982,
                "codigoXPis": 0,
                "codigoSequenciaPis": "",
                "quantidadeControle": 2156,
                "movimentaFracao": false,
                "custoPonderado": 9.149272,
                "descontoTipo": "PORCENTAGEM",
                "descontoPorcentagem": 0,
                "descontoValor": 0,
                "acrescimo": -0.05,
                "entregarProduto": null,
                "montador": null,
                "localMontagem": null,
                "prazoEntrega": 0,
                "comissaoPorcentagem": 0.024,
                "pedidoClienteNumero": null,
                "pedidoClienteItem": 0,
                "pedidoCompraCodigo": 0,
                "pedidoCompraLoja": 0,
                "pedidoCompraItem": 0,
                "conferido": false,
                "comProblema": false,
                "romaneio": 0,
                "fornecedor": 0,
                "locacao": "FH-0002",
                "locacaoExcesso": "",
                "quantidadeEstoque": 9999,
                "quantidadeDisponivel": 1,
                "imagemUrl": null,
                "tipoAlteracao": null,
                "produtosCodigos": [],
                "produtoEstoque": null,
                "divergenteEstoque": null
            }
        ],
        "pagamentos": [
            {
                "loja": 1,
                "pagamento": 0,
                "modoPgtoCodigo": 1,
                "valor": 25.03,
                "numDocFinanceiro": "",
                "numAutoCliente": "",
                "rgCliente": "",
                "maquinaCartao": null,
                "caixaCodigo": null,
                "caixaLoja": null,
                "cadastro": null,
                "alterado": null,
                "contaCodigo": null,
                "contaLoja": null,
                "intencaoVenda": 0,
                "statusPagamento": null,
                "parcelas": [],
                "idReferenciaPgto": null,
                "jsonRede": null,
                "romaneio": 0
            }
        ],
        "pedidosDeCompra": [],
        "romaneio": 0,
        "limite": 0,
        "faturado": 0,
        "bloqueado": false,
        "clienteObs": "SOMENTE A VISTA*****************",
        "transportadoraCodigo": null,
        "transportadora": null,
        "transportadoraLoja": null,
        "transportadoraNome": "",
        "tipo": "CF",
        "modoPgtoAcrescimo": -5,
        "vendaCanal": "__",
        "obsInterno": "",
        "estoquistaCodigo": null,
        "inicioSeparacao": null,
        "terminoSeparacao": null,
        "status": "EM_ABERTO",
        "ocorrencia": null,
        "solucao": null,
        "compraPedidoCodigo": null,
        "compraPedidoLoja": null,
        "protocoloEntrega": "",
        "horarioEntrega": null,
        "pontoReferencia": "",
        "horarioEntregaInicio": "",
        "horarioEntregaFim": "",
        "horarioAlmocoInicio": "",
        "horarioAlmocoFim": "",
        "ordemCompraNumero": "",
        "outros": "",
        "lanceEscada": false,
        "lanceEscadaQuantidade": 0,
        "elevador": false,
        "despacho1": "",
        "despacho2": "",
        "contatoCadastroCompraCodigo": 0,
        "contatoCadastroCompraLoja": 0,
        "contatoCadastroRecebedorCodigo": 0,
        "contatoCadastroRecebedorLoja": 0,
        "contatoCadastroContasReceberCodigo": 0,
        "contatoCadastroContasReceberLoja": 0,
        "cotacao1": "",
        "cotacao2": "",
        "transportadoraCodigo2": 0,
        "transportadoraNome2": "",
        "modoPagamento": null,
        "vendedor": null,
        "redistribuicao": false,
        "orcamento": null,
        "pedidoCliente": null,
        "transferencia": null,
        "cadastroModel": null,
        "autoAtendimento": false,
        "clienteRetira": false,
        "agendada": false,
        "dataAgendada": null,
        "horarioAgendadaInicial": null,
        "horarioAgendadaFinal": null,
        "emEntrega": false,
        "prontoParaEntrega": false,
        "vendaNivelSuficiente": false,
        "enderecoEntrega": null,
        "mapaProperties": {
            "vendaBloqueioFaturadoMaiorlimite": true,
            "vendaValidaPermissaoModoPagamentoParaDestinatario": true,
            "validaPagamentosRomaneio": false,
            "vendaCalculaComissaoIteracao": true,
            "vendaExigeNomeComprador": true,
            "vendaCalculaComissaoTotal": false,
            "vendaValidaPermissaoOperacaoParaDestinatario": true,
            "codigoOperacaoConsignado": 50,
            "codigoModoPagamentoReceberNoLocal": 89,
            "descricaoOperacaoConsignado": "REMESSA EM CONSIGNACAO",
            "bloqueiaConsignadoClienteFatura": true,
            "vendaValidarCpfCnpj": false,
            "vendaExigeCpfCnpj": false,
            "validaEnderecoVenda": true
        },
        "cidadeNome": null,
        "logradouro": null,
        "numeroLogradouro": null,
        "bairro": null,
        "movimentoOperacao": null,
        "romaneiosTransferencia": null,
        "nomeEstoquista": "",
        "itensRomaneioOrigem": null,
        "webId": web_id,
        "versao": 0
    });

    const config = {
        method: 'post',
        url: 'https://de48-177-103-247-210.sa.ngrok.io/api/romaneio',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    const response = await axios(config)
    return response.status

}

gerarRomaneioLink()
    .then(status => {
        const mensagem = status === 200 ? 'Link cadastrado e copiado para a área de transferência!' : 'Erro ao cadastrar o Link de Pagamento'
        console.log(mensagem)
    })