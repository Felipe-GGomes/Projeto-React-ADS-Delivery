import { useState, useEffect } from "react";
import { loadCarrinho, saveCarrinho } from "../services/carrinhoService";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
    const [carrinho, setCarrinho] = useState(() => loadCarrinho());

    useEffect(() => {
        saveCarrinho(carrinho);
    }, [carrinho]);

    const adicionar = (item) => {
        setCarrinho((atual) => {
            const existente = atual.find((linha) => linha.linhaId === item.linhaId);

            if (existente) {
                return atual.map((linha) =>
                    linha.linhaId === item.linhaId
                        ? { ...linha, quantidade: linha.quantidade + 1 }
                        : linha
                );
            }

            return [...atual, { ...item, quantidade: 1 }];
        });
    };

    const remover = (linhaId) => {
        setCarrinho((atual) => atual.filter((linha) => linha.linhaId !== linhaId));
    };

    const alterarQuantidade = (linhaId, quantidade) => {
        if (quantidade < 1) {
            remover(linhaId);
            return;
        };

        setCarrinho((atual) =>
            atual.map((linha) =>
                linha.linhaId === linhaId ? { ...linha, quantidade } : linha
            )
        );
    }

    const limpar = () => {
        setCarrinho([]);
    };

    const total = carrinho.reduce(
        (soma, linha) => soma + linha.precoUnitario * linha.quantidade,
        0
    );

    const quantidadeTotal = carrinho.reduce(
        (soma, linha) => soma + linha.quantidade,
        0
    );

    return (
        <CartContext.Provider value={{ carrinho, adicionar, remover, alterarQuantidade, limpar, total, quantidadeTotal }}>
            {children}
        </CartContext.Provider>
    );
}