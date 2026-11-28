import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { validarCheckout } from "../../utils/validation";
import { salvarPedido } from "../../services/pedidoService";
import { TAXA_ENTREGA, PEDIDO_MINIMO } from "../../utils/constants";
import "./CheckoutForm.css";

const DADOS_INICIAIS = {
    nome: "", email: "", telefone: "",
    cep: "", rua: "", numero: "", bairro: "", complemento: "",
    pagamento: "", troco: "",
};

const PAGAMENTOS = [
    { valor: "Pix", texto: "Pix" },
    { valor: "Cartao", texto: "Cartão de Crédito / Débito" },
    { valor: "Dinheiro", texto: "Dinheiro em Espécie" },
];

function Campo({ label, name, type = "text", value, onChange, erro }) {
    return (
        <div className="campo">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} value={value} onChange={onChange} aria-invalid={!!erro} />
            {erro && <span className="erro" role="alert">{erro}</span>}
        </div>
    );
}

export function CheckoutForm() {
    const { carrinho, total, tipoEntrega, setTipoEntrega, limpar } = useCart();
    const [dados, setDados] = useState(DADOS_INICIAIS);
    const [erros, setErros] = useState({});
    const navigate = useNavigate();

    const taxa = tipoEntrega === "Entrega" ? TAXA_ENTREGA : 0;
    const totalFinal = total + taxa;
    const abaixoDoMinimo = total < PEDIDO_MINIMO;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados((atual) => ({ ...atual, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const novosErros = validarCheckout(dados, tipoEntrega, totalFinal);
        setErros(novosErros);
        if (Object.keys(novosErros).length > 0 || abaixoDoMinimo) return;

        const pedido = {
            numero: Date.now(),
            data: new Date().toISOString(),
            itens: carrinho,
            tipo: tipoEntrega,
            cliente: { nome: dados.nome, email: dados.email, telefone: dados.telefone },
            endereco: tipoEntrega === "Entrega"
                ? { cep: dados.cep, rua: dados.rua, numero: dados.numero, bairro: dados.bairro, complemento: dados.complemento }
                : null,
            pagamento: dados.pagamento,
            troco: dados.pagamento === "Dinheiro" ? Number(dados.troco) : null,
            total: totalFinal,
            status: "Recebido",
        };

        salvarPedido(pedido);
        navigate("/resumo", { state: { pedido } });
        limpar();
    };

    return (
        <form className="checkout" onSubmit={handleSubmit} noValidate>
            <fieldset>
                <legend>Como deseja receber?</legend>
                <div className="toggle">
                    {["Entrega", "Retirada"].map((opcao) => (
                        <button
                            key={opcao}
                            type="button"
                            className={tipoEntrega === opcao ? "ativo" : ""}
                            aria-pressed={tipoEntrega === opcao}
                            onClick={() => setTipoEntrega(opcao)}
                        >
                            {opcao}
                        </button>
                    ))}
                </div>
            </fieldset>

            <fieldset>
                <legend>Seus Dados</legend>
                <Campo label="Nome Completo *" name="nome" value={dados.nome} onChange={handleChange} erro={erros.nome} />
                <div className="campos-linha">
                    <Campo label="E-mail *" name="email" type="email" value={dados.email} onChange={handleChange} erro={erros.email} />
                    <Campo label="WhatsApp / Telefone *" name="telefone" type="tel" value={dados.telefone} onChange={handleChange} erro={erros.telefone} />
                </div>
            </fieldset>

            {tipoEntrega === "Entrega" && (
                <fieldset>
                    <legend>Endereço de Entrega</legend>
                    <div className="campos-linha">
                        <Campo label="CEP *" name="cep" value={dados.cep} onChange={handleChange} erro={erros.cep} />
                        <Campo label="Rua / Logradouro *" name="rua" value={dados.rua} onChange={handleChange} erro={erros.rua} />
                    </div>
                    <div className="campos-linha">
                        <Campo label="Número *" name="numero" value={dados.numero} onChange={handleChange} erro={erros.numero} />
                        <Campo label="Bairro *" name="bairro" value={dados.bairro} onChange={handleChange} erro={erros.bairro} />
                    </div>
                    <Campo label="Complemento" name="complemento" value={dados.complemento} onChange={handleChange} />
                </fieldset>
            )}

            <fieldset>
                <legend>Formas de Pagamento</legend>
                {PAGAMENTOS.map((p) => (
                    <label key={p.valor} className="radio">
                        <input
                            type="radio"
                            name="pagamento"
                            value={p.valor}
                            checked={dados.pagamento === p.valor}
                            onChange={handleChange}
                        />
                        {p.texto}
                    </label>
                ))}
                {erros.pagamento && <span className="erro" role="alert">{erros.pagamento}</span>}

                {dados.pagamento === "Dinheiro" && (
                    <Campo label="Troco para quanto?" name="troco" type="number" value={dados.troco} onChange={handleChange} erro={erros.troco} />
                )}
            </fieldset>

            <div className="checkout-resumo">
                <p><span>Subtotal dos itens</span><span>{formatCurrency(total)}</span></p>
                <p><span>Taxa de Entrega</span><span>{taxa ? formatCurrency(taxa) : "Grátis"}</span></p>
                <p className="checkout-total"><span>TOTAL A PAGAR</span><span>{formatCurrency(totalFinal)}</span></p>
                {abaixoDoMinimo && (
                    <span className="erro">Pedido mínimo de {formatCurrency(PEDIDO_MINIMO)} em itens.</span>
                )}
                <button type="submit" className="checkout-btn" disabled={abaixoDoMinimo}>
                    Confirmar pedido
                </button>
            </div>
        </form>
    );
}