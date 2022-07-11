import React, { useContext, useState, Component, useEffect } from 'react';
import { View, StyleSheet, Alert, Image, FlatList } from "react-native";
import { Text, Button, Input, Icon } from "react-native-elements";
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { TextInput } from 'react-native-gesture-handler';
import CardCart from '../../components/card/cardCart';
import { Card } from 'react-native-paper';
import { CarrinhoContext } from '../../context/carrinhoContext';
import { TouchableOpacity } from 'react-native-ui-lib';


const Cart = ({ route, navigation }) => {



    const [descricao, setDescricao] = useState('Adicione sua descrição:');
    const { usuario } = useContext(AutenticacaoContext);
    const [refresh, setRefresh] = useState(false);


    function comprar() {
        Alert.alert('Comprar');
        console.log('Comprar');
    }
    const { listarProdutos, isFetching, setIsFetchin, somarTotalCarrinho, contarQtdProdutos, LimparCarrinho } = useContext(CarrinhoContext)
    // console.log(listarProdutos());

    const [carrinho, setCarrinho] = useState([]);
    const getDadosCarrinho = () => {
        setCarrinho(listarProdutos());
    };
    function currencyFormat(num) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, 'R$1,')
    }

    const finalizar = () => {
        LimparCarrinho();
        Alert.alert("Compra realizada com sucesso")
        navigation.navigate('Home')
    }
    const limpar = () => {
        LimparCarrinho();
        Alert.alert("Carrinho limpo com sucesso")

    }


    useEffect(() => {
        getDadosCarrinho();
    }, [refresh]);



    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.titulo}>Carrinho de Compras</Text>
            </View>
            <View style={{ height: 350, marginTop: 0 }}>
                <FlatList
                    data={carrinho}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={isFetching}
                    extraData={carrinho}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <CardCart dados={item}
                                    refresh={refresh}
                                    setRefresh={setRefresh}

                                    navigation={navigation}
                                />
                            </View>
                        );
                    }}
                />
            </View>

            <View style={styles.rodape}>

                <Text style={styles.titulo2}>{`QUANTIDADE DE PRODUTOS: ${contarQtdProdutos()}`} </Text>
                <Text style={styles.titulo2}>VALOR TOTAL:{currencyFormat(somarTotalCarrinho())}
                </Text>

                <View style={styles.botoes}>
                    <Button
                        title='Finalizar Compra'
                        onPress={() => finalizar()}
                        buttonStyle={styles.button_finalizar}
                        titleStyle={styles.buttons_textFinalizar}
                    />
                    <Button
                        title='Limpar Carrinho'
                        onPress={() => limpar()}
                        buttonStyle={styles.button_finalizar}
                        titleStyle={styles.buttons_textFinalizar}
                    />

                </View>

            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',


    },
    topo: {
        marginTop: 20,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    titulo2: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000000',
        padding: 7.5,
    },
    rodape: {
        backgroundColor: '#ffffff',
        width: 400,
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#161616',
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 100,
        elevation: -5,
    },
    buttons_textFinalizar: {
        fontSize: 18,
        color: '#ffffff',
    },
    button_finalizar: {
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

        borderRadius: 9,
        backgroundColor: '#562637',
    },
    botoes: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        marginRight: 6,

    }
});

export default Cart;

