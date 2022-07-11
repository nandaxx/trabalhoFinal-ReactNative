import React, { useState } from 'react';
import { View, StyleSheet, Alert, TextInput, Image } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
import Axios from '../../api/axios';



const ChangePassword = ({ navigation }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleVoltar = async () => {
        navigation.navigate('Profile');
    }

    const handleRegister = async (id: string, name: string, email: string, senha: String) => {
        console.log(name, email, senha);
        const count = parseInt(id, 10)
        const data = {
            // idUsuario: count,
            // nomeUsuario: name,
            email: email,
            senha: senha,
        };

        try {
            await Axios.post("/autenticacao/recuperar-senha", data);
            setShow(true);
            setSuccess(true);
            setName("");
            setEmail("");
            setSenha("");
            setSenha2("");
            navigation.navigate('Profile')
            Alert.alert("Parabéns , Senha redefinida com sucesso !!")
        } catch (err) {
            Alert.alert(`${err}`)
            setShow(true);
            setSuccess(false);
        }
    };






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

        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.imagem} resizeMode='stretch' source={{ uri: 'https://media.discordapp.net/attachments/989667114665267250/992642226259771422/Autenticacao-imagem-sem_fundo.png' }} />

                <View><Text style={styles.texto_entrada}>Alterar senha</Text></View>

                {/* <Input inputContainerStyle={styles.inputContainer}
                    placeholder='ID do usuario'
                    onChangeText={setId}
                    value={id}
                    leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
                    placeholderTextColor={'black'}
                /> */}
                {/* <Input inputContainerStyle={styles.inputContainer}
                    placeholder='Nome de usuario'
                    onChangeText={setName}
                    value={name}
                    leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
                    placeholderTextColor={'black'}
                /> */}
                <Input inputContainerStyle={styles.inputContainer}
                    placeholder='Email do usuario'
                    onChangeText={setEmail}
                    value={email}
                    leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
                    placeholderTextColor={'black'}
                />
                <Input inputContainerStyle={styles.inputContainer}
                    placeholder='Nova senha'
                    onChangeText={setSenha}
                    value={senha}
                    leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
                    placeholderTextColor={'black'}
                />
                <Input inputContainerStyle={styles.inputContainer}
                    placeholder='Confirmar senha'
                    onChangeText={setSenha2}
                    value={senha2}
                    leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
                    placeholderTextColor={'black'}
                />

                <Button
                    title='Alterar'
                    onPress={() => handleRegister(id, name, email, senha)}
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
        </ScrollView>
    );
};
export default ChangePassword;

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
        marginBottom: 30,
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
        borderRadius: 5,
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
        width: '40%',
        height: 50,
        paddingTop: 10,
        fontSize: 11,
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
    },
    inputContainer: {
        backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 10,
    }

});