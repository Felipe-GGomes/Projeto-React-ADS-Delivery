import { Link } from 'react-router-dom';
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-brand">
                <h3>Delivery Artesanal</h3>
                <p>Comida artesanal feita com carinho, direto na sua porta.</p>
            </div>

            <div className="footer-links">
                <Link to="/">Início</Link>
                <Link to="/cardapio">Cardápio</Link>
                <Link to="/pedidos">Meus Pedidos</Link>
            </div>

            <div className="footer-contact">
                <p>(46) 99999-9999</p>
                <p>Pato Branco, PR</p>
                <p>Todos os dias, das 11h às 23h</p>
            </div>

            <p className="footer-copy">© 2026 Delivery Artesanal. Todos os direitos reservados.</p>
        </footer>
    )
}