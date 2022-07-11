import React, { createContext, useState } from 'react';
import Realm from 'realm';

export const CarrinhoContext = createContext({});

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
    name: 'Produto',
    properties: {
        id_produto: { type: 'int', default: 0 },
        id_externa: 'int',
        sku: 'string',
        nome_produto: 'string',
        descricao_produto: 'string',
        preco_produto: 'double',
        imagem_produto: 'string',
        total: 'double',
        quantidade: { type: 'int', default: 1 }
    },

};

class FavoritosSchema extends Realm.Object { }
FavoritosSchema.schema = {
    name: 'Favoritos',
    properties: {
        id_produto: { type: 'int', default: 0 },
        sku: 'string',
        nome_produto: 'string',
        descricao_produto: 'string',
        preco_produto: 'double',
        imagem_produto: 'string',

    },
};

let realm_carrinho = new Realm({
    schema: [ProdutoSchema, FavoritosSchema],
    schemaVersion: 2,
    deleteRealmIfMigrationNeeded: true,
});

const [isFetching, setIsFetching] = useState(false);

export function CarrinhoProvider({ children }) {
    const listarProdutos = () => {
        return realm_carrinho.objects('Produto');
    };

    const listarFavoritos = () => {
        return realm_carrinho.objects('Favoritos');
    };

    const contarQtdProdutos = () => {
        return realm_carrinho.objects('Produto').reduce(function (acc, obj) {
            return acc + obj.quantidade;
        }, 0);
    };
    const somarTotalCarrinho = () => {
        return realm_carrinho.objects('Produto').reduce(function (acc, obj) {
            return acc + obj.total;
        }, 0);
    };

    const contarQtdFavoritos = () => {
        return realm_carrinho.objects('Favoritos').length;
    };

    const diminuirProduto = (_id: number, _preco: number) => {
        const produtoExisteBase = realm_carrinho
            .objects('Produto')
            .filtered(`id_externa = ${_id} `)[0];

        if (produtoExisteBase) {
            if (produtoExisteBase.quantidade === 1) return
            realm_carrinho.write(() => {
                produtoExisteBase.quantidade -= 1;
                produtoExisteBase.preco_produto = _preco
                produtoExisteBase.total = produtoExisteBase.preco_produto * produtoExisteBase.quantidade
            });
        }
    };

    const adicionarProduto = (
        _id: number,
        _sku: string,
        _nome: string,
        _descricao: string,
        _preco: number,
        _imagem: string
    ) => {
        console.log(_id);

        const produtoExisteBase = realm_carrinho
            .objects('Produto')
            .filtered(`id_externa = ${_id} `)[0];


        if (produtoExisteBase) {
            console.log(produtoExisteBase);
            realm_carrinho.write(() => {
                produtoExisteBase.quantidade += 1;
                produtoExisteBase.preco_produto = _preco
                produtoExisteBase.total = produtoExisteBase.preco_produto * produtoExisteBase.quantidade
            });
            return;
        }

        const ultimoProdutoCadastrado = realm_carrinho
            .objects('Produto')
            .sorted('id_produto', true)[0];

        const ultimoIdCadastrado =
            ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
        const proximoId = ultimoIdCadastrado == null ? 1 : ultimoIdCadastrado + 1;

        console.log(_nome);
        realm_carrinho.write(() => {
            const produto = realm_carrinho.create('Produto', {
                id_produto: proximoId,
                id_externa: _id,
                sku: _sku,
                nome_produto: _nome,
                descricao_produto: _descricao,
                preco_produto: _preco,
                imagem_produto: _imagem,
                total: _preco,
                quantidade: 1
            });
        });
    };
    const adicionarFavorito = (
        _sku: string,
        _nome: string,
        _descricao: string,
        _preco: number,
        _imagem: string,
    ) => {
        console.log(_nome);
        const ultimoProdutoCadastrado = realm_carrinho
            .objects('Favoritos')
            .sorted('id_produto', true)[0];
        const ultimoIdCadastrado =
            ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
        const proximoId = ultimoIdCadastrado == null ? 1 : ultimoIdCadastrado + 1;

        realm_carrinho.write(() => {
            const produto = realm_carrinho.create('Favoritos', {
                id_produto: proximoId,
                sku: _sku,
                nome_produto: _nome,
                descricao_produto: _descricao,
                preco_produto: _preco,
                imagem_produto: _imagem,
            });
        });
        // console.log(_nome)
        setIsFetching(true);
        // console.log('favoritos' + JSON.stringify(listarFavoritos()));
    };

    const removerProduto = produto => {
        console.log(produto);
        realm_carrinho.write(() => {
            realm_carrinho.delete(produto);
        });
        setIsFetching(true);
        // console.log(JSON.stringify(listarProdutos()));
    };

    const removerItemProduto = _id => {
        console.log('dadada' + _id);
        realm_carrinho.write(() => {
            realm_carrinho.delete(
                realm_carrinho
                    .objects('Produto')
                    .filter(produto => produto.id_produto === _id),
            );
        });
        setIsFetching(true);
        listarProdutos();


    };
    const removerItemFavoritos = _id => {
        console.log(_id);
        realm_carrinho.write(() => {
            realm_carrinho.delete(
                realm_carrinho
                    .objects('Favoritos')
                    .filter(produto => produto.id_produto === _id),
            );
        });
        setIsFetching(true);
        listarFavoritos();

    };

    const LimparCarrinho = () => {
        var i = 1;
        while (realm_carrinho.objects('Produto').length > 0) {
            realm_carrinho.write(() => {
                realm_carrinho.delete(
                    realm_carrinho
                        .objects('Produto')
                        .filter(produto => produto.id_produto == i),
                );
            });
            i++;
        }
        setIsFetching(true);
    };

    const LimparFavoritos = () => {
        var i = 1;
        while (realm_carrinho.objects('Favoritos').length > 0) {
            realm_carrinho.write(() => {
                realm_carrinho.delete(
                    realm_carrinho
                        .objects('Favoritos')
                        .filter(produto => produto.id_produto == i),
                );
            });
            i++;
        }
        setIsFetching(true);
    };
    const ValorTotalCarrinho = () => {
        var i = 1;
        var soma = 0;
        var produto;
        // while (realm_carrinho.objects('Produto').length <= i) {
        produto = realm_carrinho
            .objects('Produto')
            .filter(produto => produto.id_produto === 1);
        console.log('tentativa soma' + produto.preco_produto);
        // produto.preco_produto
        i++;
        // }
        // setIsFetching(true);
    };

    return (
        <CarrinhoContext.Provider
            value={{
                listarProdutos,
                contarQtdProdutos,
                adicionarProduto,
                removerItemProduto,
                removerProduto,
                adicionarFavorito,
                // removerItemCarrinho,
                LimparCarrinho,
                isFetching,
                setIsFetching,
                listarFavoritos,
                LimparFavoritos,
                contarQtdFavoritos,
                removerItemFavoritos,
                ValorTotalCarrinho,
                somarTotalCarrinho,
                diminuirProduto
            }}>
            {children}
        </CarrinhoContext.Provider>
    );
}