import React, { useContext, useEffect, useState } from "react";
import Axios from "../../api/axios";
import MySearch from '../../components/search';
import { StyleSheet } from "react-native";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { View } from "react-native-ui-lib";
import { FlatList, RefreshControl } from "react-native";
import CardCategories from "../../components/card/cardCategories";


const Categories = ({ route, navigation }) => {
    const numColumns = 2;
    const [loading, setLoading] = useState(false);
    const { usuario } = useContext(AutenticacaoContext);
    const [categorias, setCategoria] = useState<any[]>([]);

    useEffect(() => {
        getDadosCategoria();
    }, []);


    const getDadosCategoria = async () => {
        Axios.get(
            '/categoria',
            { headers: { "Authorization": `Bearer ${usuario.token}` } }

        ).then(result => {
            console.log("dados das categorias" + JSON.stringify(result.data));
            setCategoria(result.data)
        }).catch((error) => {
            console.log("Erro ao carregar " + JSON.stringify(error));

        });
    }



    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <MySearch />

                <FlatList

                    data={categorias}
                    keyExtractor={item => item.idCategoria}
                    numColumns={numColumns}
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={getDadosCategoria}
                            tintColor={'#EEE'}

                        />
                    }
                    renderItem={({ item }) =>
                        <CardCategories
                            dados={item}
                            navigation={navigation}
                        />
                    }
                />

                {/*EXEMPLO DE CONSUMO, FAVOR NAO MEXER*/}
                {/* 
            <View style={styles.view} >
                {categorias.map((categoria, indice) => (
                    <MyCard
                        key={indice}
                        dados={categoria}
                    />))}
            </View> */}

            </View>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        backgroundColor: '#ffffff',
        padding: 12,
    },
    container2: {

    },
    view: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Categories;