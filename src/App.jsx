import './App.css'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import { CartPage } from './pages/CartPage';
import { ResumoPage } from './pages/ResumoPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/resumo" element={<ResumoPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App