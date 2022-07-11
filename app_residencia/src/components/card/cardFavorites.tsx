import * as React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { StyleSheet, Alert } from 'react-native';
import { View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { CarrinhoContext } from '../../context/carrinhoContext';

const CardFavorites = ({ dados, refresh, setRefresh }) => {

    const dadosProduto = dados;
    const { listarFavoritos, removerItemFavoritos, adicionarProduto } = React.useContext(CarrinhoContext)

    const removerItem = () => {
        console.log(dadosProduto.id_produto);

        removerItemFavoritos(dadosProduto.id_produto);
        setRefresh(!refresh);
        remover()

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
        adicionar()
    }





    function adicionar() {
        Alert.alert('Adicionado ao Carrinho');
        console.log('Adicionado ao carrinho');
    }

    function remover() {
        Alert.alert('Removido dos Favoritos');
        console.log('Removido do carrinho');
    }

    return (

        <View style={styles.card}>

            <Image style={styles.imagem} source={{ uri: dadosProduto.imagem_produto }} />
            <View style={styles.direita}>
                <Text numberOfLines={5} style={{ width: 180, marginLeft: 10, fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 10, color: '#000' }}>
                    {dadosProduto.nome_produto}
                </Text>
                <Text style={styles.preco}>R$ {dadosProduto.preco_produto}</Text>

                <View style={styles.botoes}>

                    <Button
                        title="Adicionar ao Carrinho"
                        onPress={() => adicionarItem()}
                        buttonStyle={styles.button_finalizar}
                        titleStyle={styles.buttons_textFinalizar}
                    />
                    <TouchableOpacity style={styles.terceiro} onPress={() => removerItem()}>
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
        shadowColor: '#b11111',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        elevation: 10,
        padding: 20,
        marginTop: 15,

    },
    direita: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 200,


    },
    preco: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#000',
    },
    botoes: {
        flexDirection: 'row',
        marginTop: 20,

    },
    primeiro: {

        paddingRight: 15,

    },
    terceiro: {
        marginTop: 10,
        paddingLeft: 15,
        marginLeft: 2,

    },
    button_finalizar: {
        backgroundColor: '#b41919',
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,

    },
    buttons_textFinalizar: {
        fontSize: 12,

    },
});

export default CardFavorites;