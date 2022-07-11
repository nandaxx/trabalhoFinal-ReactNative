import React, { useContext } from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';


const MyCard = ({ navigation }: any) => {


    return (
        <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.botao_categoria}
                onPress={() => { navigation.navigate({ name: 'Categorias' }) }}>
                <Card style={styles.categoria}>
                    <Card.Content>
                        <Text style={styles.categoria_nome}> Ir para categorias </Text>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        </ScrollView>


    );

}; const styles = StyleSheet.create({

    categoria: {
        flexGrow: 0,
        width: 390,
        height: 55,
        backgroundColor: '#C9A7AE'
    },
    botao_categoria: {
        alignItems: 'center',
        padding: 10,

    },
    categoria_nome: {
        color: '#fff',
        fontSize: 19,

    }
})

export default MyCard;