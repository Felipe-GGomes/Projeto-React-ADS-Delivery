import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import './Header.css'

export function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                
                <Link className="navbar-brand navbar-logo" to="/">
                    <img src={logo} 
                        alt="Logo"
                        width="70"
                        className="logo_img"
                    />
                    <h1 className="logo_text">Delivery Artesanal</h1>
                 </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-options collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto gap-4">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Cardápio</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/">Meus Pedidos</Link>
                        </li>
                    </ul>
                    <form className="nav-search d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                        <i className="nav-search-item fa-solid fa-magnifying-glass position-absolute ms-3"></i>
                        
                        <input 
                            className="form-control me-4"  
                            type="search" placeholder="Buscar pratos" 
                            aria-label="Search"
                        />
                        
                    </form>
                    <div className="user-info">
                        <Link to="/"><i className="user-bag fa-solid fa-bag-shopping me-3"></i></Link>
                        <Link to="/" ><i className="user-perfil fa-solid fa-circle-user fa-2xl"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

