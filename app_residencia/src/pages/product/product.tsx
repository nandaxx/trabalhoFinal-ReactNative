import React from 'react'
import { View, StyleSheet, Alert, ActivityIndicator, Image } from "react-native";
import { Button, Text, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const DetalhesDoProduto = () => {

    function comprar() {
        Alert.alert('Comprar');
        console.log('Comprar');
    }

    function adicionarFavorito() {
        Alert.alert('adicionar favorito');
        console.log('adicionar favorito');
    }

    return (
        <View style={styles.container}>
            <View style={styles.view_produto_todo}>
                <View style={styles.view_foto}>
                    <Image style={styles.fotoProduto} source={{ uri: 'https://cdn.discordapp.com/attachments/983115650119663617/987771904528093294/Scrum_Personalizado.jpg', }} />
                </View>
                <Text style={styles.codigo_limpo}>CÃ³digo Limpo</Text>
                <Text style={styles.dinheiro}>R$: 70,50</Text>
            </View>


            <Button
                title=' Favoritos'
                onPressIn={adicionarFavorito}
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



            <View style={styles.central_comprar}>
                <Button
                    title='Comprar'
                    onPress={comprar}
                    buttonStyle={styles.button_recuperar}
                    titleStyle={styles.buttons_text3}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    view_produto_todo: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        width: '100%',
        backgroundColor: '#A2717C',
    },
    fotoProduto: {
        height: 194,
        width: 132,
    },
    view_foto: {
        height: 194,
        width: 132,
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
        color: '#FFF',
        textAlign: 'left',
        marginTop: 10,
    },
    div_fav: {
        backgroundColor: '#ddd2d2',
        width: '30%',
        height: '28%',
        marginLeft: 140,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',


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
    },
    button_recuperar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        borderRadius: 9,
        backgroundColor: '#854553',
    },
    central_comprar: {
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default DetalhesDoProduto;