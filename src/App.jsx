import './App.css'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App