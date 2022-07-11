import React, { useContext, useEffect, useState } from "react";
import MyCard from "../../components/card/card";
import { View, FlatList, ScrollView, StyleSheet, RefreshControl, Text } from "react-native";
import { Title } from "react-native-paper";
import Axios from "../../api/axios";
import CarouselHome from "../../components/carousel";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import MySearch from '../../components/search';
import CardProduct from "../../components/card/cardProduct";
import BarraPesquisa from '../../components/search/index2';
import CardCategorias from '../../components/card/cardCategories';

type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}

const Home = ({ route, navigation }) => {

    const numColumns = 2;

    const [loading, setLoading] = useState(false);
    const { usuario } = useContext(AutenticacaoContext);
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);

    const [produtos, setProduto] = useState<any[]>([]);

    useEffect(() => {
        getDadosProduto();
    }, []);

    const getDadosProduto = async () => {

        Axios.get(
            '/produto',
            { headers: { "Authorization": `Bearer ${usuario.token}` } }

        ).then(result => {
            console.log("dados das categorias" + JSON.stringify(result.data));
            setProduto(result.data)
        }).catch((error) => {
            console.log("Erro ao carregar " + JSON.stringify(error));

        });
    }

    const getDadosCategoria = async () => {
        Axios.get(
            `/categoria`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            console.log('Dados das categorias' + JSON.stringify(result.data));
            setCategoria(result.data);
        }).catch((error) => {
            console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));

        });
    }

    useEffect(() => {
        getDadosCategoria();
    }, []);

    console.log('Token' + usuario.token);

    return (
        <ScrollView style={styles.container}>

            <View style={styles.box}>
                {/* <MyHeader /> */}
                <BarraPesquisa navigation={navigation} />
                <CarouselHome />


                <FlatList
                    data={produtos}
                    keyExtractor={item => item.idProduto}
                    numColumns={numColumns}
                    renderItem={({ item }) =>
                        <CardProduct
                            dados={item}
                            navigation={navigation}
                        />
                    }
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    categorias: {
        fontSize: 22,
        color: '#000000',
        fontWeight: 'bold',
        marginTop: 10,
    },
})

export default Home;