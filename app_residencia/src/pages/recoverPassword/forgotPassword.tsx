import React, { useState } from 'react';
import { View, StyleSheet, Alert, TextInput, Image } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleVoltar = async () => {
        navigation.navigate('Login');
    }



    function Recover() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (email === '') {
            Alert.alert('Erro', 'E-mail em branco');
        } else if (!regex.test(email)) {
            Alert.alert('Formato e email inválido');
        } else {
            Alert.alert('Recuperação enviada para o email: ' + email + ' ');
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} resizeMode='stretch' source={{ uri: 'https://media.discordapp.net/attachments/989667114665267250/992642226259771422/Autenticacao-imagem-sem_fundo.png' }} />
            <Text style={styles.texto_entrada}>Recuperar senha</Text>
            <Input
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor={'black'}
                onChangeText={(t) => setEmail(t)}

            />
            <Button
                title='Recuperar'
                onPress={Recover}
                titleStyle={styles.buttons}
                buttonStyle={styles.buttons}
                containerStyle={styles.buttonsContainerStyle}
            />
            <Button
                title='Voltar'
                onPress={handleVoltar}
                titleStyle={styles.buttons2}
                buttonStyle={styles.buttons2}
                containerStyle={styles.buttonsContainerStyle2}
            />
        </View>
    );
};
export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    texto_entrada: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: 'bold',
        fontSize: 35,
        color: '#000000',

    },
    input: {
        width: '85%',
        height: 70,
        backgroundColor: '#ffffff',
        fontSize: 16,
        marginTop: 40,
        borderRadius: 35,
        textAlign: 'center',
        color: '#000000'
    },
    title_Button: {
        fontSize: 30,
        color: '#000',
    },
    buttonsContainerStyle: {
        width: '85%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    buttonsContainerStyle2: {
        width: '65%',
        height: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginRight: 250,
    },
    buttons2: {
        backgroundColor: '#FFFF',
        color: '#000000',

        borderRadius: 5,
        width: 50,
        height: 50,
        paddingTop: 10,
        fontSize: 13,
        marginTop: 5,
    },
    buttons: {
        color: '#ffffff',
        backgroundColor: '#562637',
        borderRadius: 5,
        width: '70%',
        height: 50,
        paddingTop: 10,
    },
    containerStyle: {
        textAlign: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        textAlign: 'center',
        alignItems: 'center',
    },
    imagem: {
        marginBottom: 50,
        width: 400,
        height: 300,
    }

});