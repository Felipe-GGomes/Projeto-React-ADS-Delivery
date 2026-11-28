const CHAVE_PEDIDOS = "pedidos";

export function loadPedidos() {
    try {
        const raw = localStorage.getItem(CHAVE_PEDIDOS);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

export function salvarPedido(pedido) {
    const pedidos = loadPedidos();
    localStorage.setItem(CHAVE_PEDIDOS, JSON.stringify([...pedidos, pedido]));
}