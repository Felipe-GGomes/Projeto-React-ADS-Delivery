import { formatCurrency } from "./formatCurrency";

export function validarCheckout(dados, tipoEntrega, totalFinal) {
    const erros = {};

    if (!dados.nome.trim()) erros.nome = "Informe seu nome.";
    if (!/^\S+@\S+\.\S+$/.test(dados.email)) erros.email = "E-mail inválido.";

    const telefone = dados.telefone.replace(/\D/g, "");
    if (telefone.length < 10 || telefone.length > 11) {
        erros.telefone = "Telefone com DDD (10 ou 11 dígitos).";
    }

    if (tipoEntrega === "Entrega") {
        if (dados.cep.replace(/\D/g, "").length !== 8) erros.cep = "CEP com 8 dígitos.";
        if (!dados.rua.trim()) erros.rua = "Informe a rua.";
        if (!dados.numero.trim()) erros.numero = "Informe o número.";
        if (!dados.bairro.trim()) erros.bairro = "Informe o bairro.";
    }

    if (!dados.pagamento) erros.pagamento = "Escolha a forma de pagamento.";

    if (dados.pagamento === "Dinheiro") {
        if (!dados.troco || Number(dados.troco) < totalFinal) {
            erros.troco = `O troco deve ser no mínimo ${formatCurrency(totalFinal)}.`;
        }
    }

    return erros;
}