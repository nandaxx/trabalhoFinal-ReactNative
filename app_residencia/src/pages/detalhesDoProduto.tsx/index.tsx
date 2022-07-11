import React, { useContext, useState, Component } from 'react';
import { View, StyleSheet, Alert, Image, ScrollView } from "react-native";
import { Text, Button, Input, Icon } from "react-native-elements";
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { TextInput } from 'react-native-gesture-handler';
import DetalhesDoProduto from '../../components/card/cardDetalhes';
import { Card } from 'react-native-paper';
import { CarrinhoContext } from '../../context/carrinhoContext';
import { TouchableOpacity } from 'react-native-ui-lib';



const DetalhesProduto = ({ route, navigation }) => {
    const [descricao, setDescricao] = useState('Adicione sua descrição:');
    const { usuario } = useContext(AutenticacaoContext);
    const { produto, adicionarProduto, adicionarFavorito } = useContext(CarrinhoContext);


    const handleAddProduto = () => {
        adicionarProduto(
            route.params?.id,
            route.params?.sku,
            route.params?.nome,
            route.params?.descricao,
            route.params?.preco,
            route.params?.imagem
        );
        Alert.alert('Carrinho', 'Produto adicionado ao carrinho', [
            { text: 'OK', onPress: () => console.log() },
        ]);
    };
    console.log(
        route.params?.id,
        route.params?.sku,
        route.params?.nome,
        route.params?.descricao,
        route.params?.preco,
        route.params?.imagem);

    const handleFav = () => {
        adicionarFavorito(
            route.params?.sku,
            route.params?.nome,
            route.params?.descricao,
            route.params?.preco,
            route.params?.imagem,
        );
        Alert.alert('Favoritos', 'Produto adicionado aos Favoritos', [
            { text: 'OK', onPress: () => console.log() },
        ]);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.topo}>
                    <Text style={styles.titulo}>Detalhes do Produto</Text>
                </View>
                <View style={styles.view_produto_todo}>
                    <View style={styles.view_foto}>
                        <Image style={styles.imagem} source={{ uri: route.params?.imagem }} />
                        <Text style={styles.dinheiro}>{route.params?.nome}</Text>
                        <Text style={styles.descricao}>         {route.params?.descricao}</Text>
                        <Text style={styles.preco}>R$:{route.params?.preco}</Text>
                    </View>
                </View>

                <View style={styles.botoes}>
                    <Button
                        title=' Favoritos'
                        onPressIn={() => handleFav()}
                        titleStyle={styles.favoritos}
                        buttonStyle={styles.div_fav}
                        icon={() => (
                            <Icon
                                name="heart" type='ant-design'
                                color={'red'}
                                size={22}
                            />
                        )}
                    />

                    <Button
                        title='Carrinho'
                        onPress={() => handleAddProduto()}
                        buttonStyle={styles.button_recuperar}
                        titleStyle={styles.buttons_text3}

                    />

                </View>



            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    topo: {
        marginTop: 50,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 10,

    },
    imagem: {
        width: 200,
        height: 260,

    },
    view_produto_todo: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 550,
        width: 400,
        backgroundColor: '#f1eded',
    },
    fotoProduto: {
        height: 194,
        width: 132,
    },
    view_foto: {
        height: 200,
        width: 260,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: '#AF7B85',
        marginBottom: 13,
    },
    codigo_limpo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'left',
        marginTop: 10,
    },
    dinheiro: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        marginTop: 20,
    },
    descricao: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        marginTop: 20,
    },
    preco: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        marginTop: 30,
    },

    div_viewfav: {
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

    },
    icone: {
        marginTop: 10,
    },
    favoritos: {
        fontSize: 18,
        color: '#000000',
    }, buttons_text3: {
        fontSize: 18,
        color: '#ffffff'
    },

    central_comprar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 400,
        height: 100


    },
    div_fav: {
        backgroundColor: '#f1eded',
        width: 150,
        height: 50,
        marginTop: 25,
        marginLeft: 40,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',


    },
    button_recuperar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginRight: 40,
        width: 150,
        height: 50,
        borderRadius: 9,
        backgroundColor: '#b41919',
    },

});

export default DetalhesProduto;