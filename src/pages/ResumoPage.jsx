import { Link, useLocation } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

export function ResumoPage() {
    const { state } = useLocation();
    const pedido = state?.pedido;

    if (!pedido) {
        return (
            <main className="cart-page">
                <h1>Nenhum pedido encontrado</h1>
                <Link to="/">Voltar ao início</Link>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <h1>Pedido confirmado!</h1>
            <p>Número do pedido: <strong>#{pedido.numero}</strong></p>
            <p>Forma de recebimento: {pedido.tipo}</p>
            <p>Total: {formatCurrency(pedido.total)}</p>
            <Link to="/">Voltar ao início</Link>
        </main>
    );
}