import React, { useContext, useState, Component } from 'react';
import { View, StyleSheet, Alert, Image } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { TextInput } from 'react-native-gesture-handler';


const Profile = ({ route, navigation }) => {

    const [descricao, setDescricao] = useState('Adicione sua descrição:');
    const { usuario } = useContext(AutenticacaoContext);

    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <Text style={styles.linha} numberOfLines={1}>
                    _____________________________________________________
                </Text>

                <View style={styles.fileira}>
                    <Text style={styles.avatar}>Avatar</Text>
                    <Image style={styles.fotoPerfil} source={require('../../assets/bookland.png')} />
                </View>

                <Text style={styles.linha} numberOfLines={1}>
                    _____________________________________________________
                </Text>

                <View style={styles.fileira}>
                    <Text style={styles.avatar}>E-mail</Text>
                    <Text style={styles.avatar}>{usuario.email}</Text>
                </View>

                <Text style={styles.linha} numberOfLines={1}>
                    _____________________________________________________
                </Text>

                <View style={styles.fileira}>
                    <Text style={styles.avatar}>Nome de Usuário</Text>
                    <Text style={styles.avatar}>{usuario.name}</Text>
                </View>

                <Text style={styles.linha} numberOfLines={1}>
                    _____________________________________________________
                </Text>

                <View style={styles.fileira}>
                    <Text style={styles.avatar}>Senha</Text>
                    <Text style={styles.avatar}>*******</Text>
                </View>

                <Text style={styles.linha} numberOfLines={1}>
                    _____________________________________________________
                </Text>

                <Button
                    title='Alterar senha'
                    onPress={() => navigation.navigate('Alterar senha')}
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
        backgroundColor: '#f8f6f6',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'

    },
    card: {
        backgroundColor: '#ffffff',
        padding: 16,
        width: 350,
        height: 400,
        alignItems: 'center',
        borderRadius: 10,

        shadowColor: '#161616',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        elevation: 5,

    },
    fileira: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    fotoPerfil: {
        borderRadius: 150,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#333',
    },
    avatar: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    linha: {
        width: 352,
        color: '#f8f6f6',
    },
    buttons_text3: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',

    },
    button_recuperar: {
        marginTop: 25,
        paddingRight: 10,
        backgroundColor: '#ffffff',
        border: 1,
        borderColor: '#000000',

    },

});

export default Profile;