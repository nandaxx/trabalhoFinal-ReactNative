import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Image, Text, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { CarrinhoContext } from '../../context/carrinhoContext';
import { useNavigation } from '@react-navigation/native';
import { ProdutoType } from '../../models/produtoType';
import Axios from '../../api/axios';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';


const CardProduct = ({ dados, navigation }) => {

    const navigation2 = useNavigation();
    const [produto, setProduto] = useState<ProdutoType[]>([]);
    const { usuario } = useContext(AutenticacaoContext);

    const direcionaPesquisa = (produto: any) => {
        navigation2.navigate("DetalhesDoProduto", { nome: dadosProduto.nomeProduto, imagem: dadosProduto.imagemProduto, preco: dadosProduto.precoProduto, descricao: dadosProduto.descricaoProduto });
        console.log('Produto clicado');
    };
    const dadosProduto = dados;
    // console.log(dadosProduto);

    const handleAddProduto = () => {
        adicionarProduto(
            dadosProduto.idProduto,
            dadosProduto.sku,
            dadosProduto.nomeProduto,
            dadosProduto.descricaoProduto,
            dadosProduto.precoProduto,
            dadosProduto.imagemProduto,
        );
        Alert.alert('Carrinho', 'Produto adicionado ao carrinho', [
            { text: 'OK', onPress: () => console.log() },
        ]);
    };

    const handleFav = () => {
        adicionarFavorito(
            dadosProduto.sku,
            dadosProduto.nomeProduto,
            dadosProduto.descricaoProduto,
            dadosProduto.precoProduto,
            dadosProduto.imagemProduto,
        );
        Alert.alert('Favoritos', 'Produto adicionado aos Favoritos', [
            { text: 'OK', onPress: () => console.log() },
        ]);
    };

    const { adicionarProduto, adicionarFavorito } = useContext(CarrinhoContext)

    return (

        <View style={styles.container}>
            <Card style={styles.container1}>
                <TouchableOpacity onPressIn={() => direcionaPesquisa(dadosProduto)}>
                    <Image source={{ uri: dadosProduto.imagemProduto }} style={styles.imagem} />
                </TouchableOpacity>

                <Card.Title
                    title={dadosProduto.nomeProduto}
                    titleStyle={{ flexWrap: 'wrap', flexDirection: 'row', fontSize: 15 }} />

                <View style={styles.icones}>
                    <Text style={{ color: "black", marginLeft: 10 }}>R$ {dadosProduto.precoProduto}</Text>

                    <TouchableOpacity onPress={() => handleAddProduto()}>
                        <Icon style={{ marginLeft: 50, }}
                            name="shopping-cart"
                            color={"black"}
                            size={22}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleFav()}>
                        <Icon style={{ marginLeft: 8, }}
                            name="heart" type='ant-design'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 7,
        width: 190,
        maxHeight: 330,
        justifyContent: 'center'
    },
    container1: {
        Width: 190,
        height: 300,
    },
    imagem: {
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 12,
        width: 150,
        height: 200,
    },
    icones: {
        display: 'flex',
        flexDirection: 'row',
    }

});

export default CardProduct;