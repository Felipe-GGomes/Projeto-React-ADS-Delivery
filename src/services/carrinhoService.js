const CHAVE_CARRINHO = 'carrinho'

export function loadCarrinho() {
    const carrinho = localStorage.getItem(CHAVE_CARRINHO);
    if (carrinho) {
        try{
            return JSON.parse(carrinho);
        }
        catch (error) {
            console.error('Erro ao analisar o carrinho do localStorage:', error);
        }
    }
    return [];
}

export function saveCarrinho(carrinho) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
}

export function limparCarrinho() {
    localStorage.removeItem(CHAVE_CARRINHO);
}
