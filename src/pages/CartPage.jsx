import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { CartItem } from "../components/CartItem/CartItem";
import { CheckoutForm } from "../components/CheckoutForm/CheckoutForm";
import "./CartPage.css";

export function CartPage() {
    const { carrinho, limpar } = useCart();

    if (carrinho.length === 0) {
        return (
            <main className="cart-page">
                <h1>Seu carrinho está vazio</h1>
                <Link to="/">Voltar para o início</Link>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <nav className="cart-breadcrumb" aria-label="Você está em">
                <Link to="/">Cardápio</Link> / <span>Finalizar Pedido</span>
            </nav>

            <div className="cart-layout">
                <section className="cart-left">
                    <h1>Meu Pedido</h1>

                    <ul className="cart-list">
                        {carrinho.map((linha) => (
                            <CartItem key={linha.linhaId} linha={linha} />
                        ))}
                    </ul>

                    <div className="cart-actions">
                        <Link to="/">← Continuar pedindo</Link>
                        <button type="button" className="cart-clear" onClick={limpar}>
                            Esvaziar carrinho
                        </button>
                    </div>
                </section>

                <aside className="cart-right">
                    <CheckoutForm />
                </aside>
            </div>
        </main>
    );
}