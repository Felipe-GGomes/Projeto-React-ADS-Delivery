import { Link } from 'react-router-dom';
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-brand">
                <h3>Nome do Restaurante</h3>
                <p>Sabor que chega até você.</p>
            </div>

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/cardapio">Cardápio</Link>
                <Link to="/carrinho">Carrinho</Link>
            </div>

            <div className="footer-contact">
                <p>(46) 99999-9999</p>
                <p>Pato Branco, PR</p>
            </div>

            <p className="footer-copy">© 2026 Nome do Restaurante</p>
        </footer>
    )
}