import { Link } from 'react-router-dom';
import { useCart } from "../hooks/useCart";
import { CartItem } from "../components/CartItem/CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import "./CartPage.css";

export function CartPage(){
    const { carrinho, total, limpar } = useCart();

    if(carrinho.length === 0){
        return (
            <main className="cart-page">
                <h1>Seu Carrinho está Vazio</h1>
                <Link to="/">Voltar para o início</Link>
            </main>
        );
    }

    return(
        <main className="cart-page">
            <h1>Meu carrinho</h1>

            <ul className="cart-list">
                {carrinho.map((linha) => (
                    <CartItem key={linha.linhaId} linha={linha} />
                ))}
            </ul>

            <p className="cart-total">Total: {formatCurrency(total)}</p>
                Esvaziar carrinho

            <button type="button" onClick={limpar}>
                Esvaziar carrinho
            </button>
        </main>
    );

}