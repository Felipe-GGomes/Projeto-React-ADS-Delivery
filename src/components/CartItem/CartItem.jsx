import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/formatCurrency';
import './CartItem.css';

export function CartItem({ linha }) {
    const { alterarQuantidade, remover } = useCart();

    return (
        <li className="cart-item">
            <div className="cart-item-info">
                <h3>{linha.nome}</h3>
                {linha.tamanho && <p>Tamanho: {linha.tamanho}</p>}
                {linha.adicionais.length > 0 && (
                    <p>Adicionais: {linha.adicionais.map((a) => a.nome).join(", ")}</p>
                )}
                {linha.observacoes && <p>Obs: {linha.observacao}</p>}
            </div>

            <div className="cart-item-qtd">
                <button
                    type="button"
                    aria-label={`Diminuir ${linha.nome}`}
                    onClick={() => alterarQuantidade(linha.linhaId, linha.quantidade - 1)}
                >
                    -
                </button>

                <span>{linha.quantidade}</span>

                <button
                    type="button"
                    aria-label={`Aumentar ${linha.nome}`}
                    onClick={() => alterarQuantidade(linha.linhaId, linha.quantidade + 1)}
                >
                    +
                </button>
            </div>

            <p>{formatCurrency(linha.precoUnitario * linha.quantidade)}</p>

            <button
                type="button"
                aria-label={`Remover ${linha.nome}`}
                onClick={() => remover(linha.linhaId)}
            >
                Remover
            </button>
        </li>
    )
}