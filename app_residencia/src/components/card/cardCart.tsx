import * as React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { CarrinhoContext } from '../../context/carrinhoContext';


const CardCart = ({ dados, navigation, refresh, setRefresh }) => {
    const dadosProduto = dados;
    console.log(dadosProduto);
    const { removerItemProduto, LimparCarrinho, adicionarProduto, diminuirProduto } = React.useContext(CarrinhoContext)

    const removerItem = () => {
        removerItemProduto(dadosProduto.id_produto);
        setRefresh(!refresh);
    }

    const adicionarItem = () => {
        adicionarProduto(
            dadosProduto.id_produto,
            dadosProduto.sku,
            dadosProduto.nome_produto,
            dadosProduto.descricao_produto,
            dadosProduto.preco_produto,
            dadosProduto.imagem_produto
        );
        setRefresh(!refresh);
    }


    const diminuiItem = () => {
        diminuirProduto(
            dadosProduto.id_produto,
            dadosProduto.preco_produto,
        );
        setRefresh(!refresh);
    }

    function currencyFormat(num) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, 'R$1,')
    }

    return (

        <View style={styles.card}>
            <Image style={styles.imagem} source={{ uri: dados.imagem_produto }} />
            <View style={styles.direita}>
                <Text numberOfLines={5} style={{ width: 180, marginLeft: 10, fontWeight: 'bold', fontSize: 17, textAlign: 'center' }}>
                    {dados.nome_produto}
                </Text>

                <Text style={styles.preco}> {dados.preco_produto} x {dados.quantidade} = {currencyFormat(dados.total)} </Text>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.primeiro}
                        onPress={() => adicionarItem()}>
                        <Icon
                            name="plus" type='ant-design'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => diminuiItem()}>
                        <Icon
                            name="minus" type='ant-design'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.terceiro}
                        onPress={() => removerItem()}
                    >
                        <Icon
                            name="delete" type='ant-design'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 120,
        height: 180,

    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 380,
        height: 230,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#161616',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        elevation: 10,
        padding: 20,
        marginTop: 10,
    },
    direita: {
        flexDirection: 'column',
        padding: 12,
        alignItems: 'center',
        width: 200,


    },
    preco: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
    botoes: {
        flexDirection: 'row',
        marginTop: 20,

    },
    primeiro: {

        paddingRight: 15,

    },
    terceiro: {

        paddingLeft: 15,

    },
});

export default CardCart;