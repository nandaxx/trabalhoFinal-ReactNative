import React, { useContext, useState, Component, useEffect } from 'react';
import { View, StyleSheet, Alert, Image } from "react-native";
import { Text, Button, Input, Icon } from "react-native-elements";
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import CardFavorites from '../../components/card/cardFavorites';
import { CarrinhoContext } from '../../context/carrinhoContext';
import { FlatList } from 'react-native';

const Favorites = ({ route, navigation }) => {

    const [descricao, setDescricao] = useState('Adicione sua descrição:');
    const { usuario } = useContext(AutenticacaoContext);
    const { listarFavoritos, isFetching } = React.useContext(CarrinhoContext)
   
    const [refresh, setRefresh] = useState(false);
    const [carrinho, setCarrinho] = useState([]);
    
    
    const getDadosCarrinho = () => {
        setCarrinho(listarFavoritos());
    };
    useEffect(() => {
        getDadosCarrinho();
    }, [refresh]);




    console.log(listarFavoritos);


    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.titulo}>Favoritos</Text>
            </View>
            <FlatList
                data={carrinho}
                keyExtractor={(item, index) => index.toString()}
                refreshing={isFetching}
                extraData={carrinho}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <CardFavorites dados={item}
                                refresh={refresh}
                                setRefresh={setRefresh}

                                navigation={navigation}
                            />
                        </View>
                    );
                }}
            />






        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    topo: {
        marginTop: 50,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 28,

    },
    titulo2: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff',
        padding: 7.5,
    },

});

export default Favorites;