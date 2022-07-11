import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert, ActivityIndicator, Image, TouchableOpacity, ScrollView } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";

//FAVOR NÃO MEXER NA PAG DE LOGIN, JA ESTÁ SENDO FEITA PELA FERNANDA


const Login = ({ navigation }: any) => {
    const [focus, SetFocus] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { login } = useContext(AutenticacaoContext);
    const [isLoading, setLoading] = useState(false);

    const handleLogin = async (email: string, senha: string) => {
        console.log("Email : ", email, "Senha :", senha);

        const respostaLogin = await login(email, senha);
        setLoading(false);
        if (!respostaLogin) {
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "Ok" },
                    { text: "Não foi possivel fazer o login" }
                ]

            );
        } else {
            navigation.navigate('HomeScreen');
        }
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/bookland.png')} />
                <Text style={styles.texto_entrada}>{'Login'}</Text>
                <Input inputContainerStyle={styles.inputContainer}
                    placeholder='E-mail'
                    //ternario isFocused ? styles_1 : styles_2

                    onChangeText={setEmail}
                    value={email}
                    leftIcon={<Icon name='email' color='#000' type='Entypo' size={24} />}
                    placeholderTextColor={'black'}
                />
                <Input inputContainerStyle={styles.inputContainer}
                    placeholder='Senha'
                    onChangeText={setSenha}
                    value={senha}
                    leftIcon={<Icon name="vpn-key" color="#000000" type="MaterialIcons" size={24} />}
                    placeholderTextColor={'black'}
                    secureTextEntry


                />

                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Recuperar senha')}><Text style={styles.texttouch}>Esqueci minha senha</Text></TouchableOpacity>

                {isLoading === false ?
                    <Button
                        title='Entrar'
                        onPress={() => { handleLogin(email, senha); setLoading(true) }}
                        titleStyle={styles.buttons_text}
                        buttonStyle={styles.buttons}
                    /> : <ActivityIndicator size="large" color="#d81b1b" />}

                <View style={styles.cont}><Text style={styles.texttouch1}>Ainda não é cadastrado?</Text><TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.touch1}><Text style={styles.texttouch2}>Registre-se</Text></TouchableOpacity></View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto_entrada: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 370,
        height: 250,

    },
    inputContainer1: {

        backgroundColor1: '#ffffff',
        marginTop: 10,
        padding: 5,
        borderColor: '#854553',
        borderStyle: "solid",
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderRadius: 20,
    },
    inputContainer: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        padding: 5,
        borderRadius: 10,
    },
    buttons: {
        width: 360,
        marginLeft: 10,
        backgroundColor: '#562637',
        padding: 15,
        borderRadius: 10,
        marginTop: 10
    },
    buttons_text: {
        fontSize: 19,
    },
    buttons_text2: {
        fontSize: 18,
    },
    buttons_text3: {
        fontSize: 18,
    },
    container_buttons: {
        width: 380,
        marginTop: 10,
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
    },
    button_cadastro: {
        marginTop: 10,
        width: 140,
        padding: 13,
        backgroundColor: '#562637',
        borderRadius: 9,
    },
    button_recuperar: {
        marginTop: 10,
        width: 180,
        padding: 13,
        borderRadius: 9,
        backgroundColor: '#562637',
    },
    touch: {
        height: 50,
    },
    texttouch: {

        color: '#0023eb',
        fontSize: 17
    },
    texttouch2: {
        marginTop: 10,
        color: '#0023eb',
        fontSize: 17,
        marginLeft: 10
    },
    touch1: {
        height: 50,


    },
    texttouch1: {

        marginTop: 10,
        fontSize: 17
    },
    cont: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

});
export default Login;