import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";
import Axios from "../../api/axios";

import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
const Register = ({ route, navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);


    const handleRegister = async (name: string, email: string, senha: String) => {
        console.log(name, email, senha);

        const data = {

            nomeUsuario: name,
            email: email,
            senha: senha,
        };
        try {
            const formData = new FormData();
            formData.append('usuario', JSON.stringify(data));
            formData.append('file', {
                uri: imageUser,
                type: 'image/jpeg',
                name: "imagename.jpg",
            });
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            }
            await Axios.post("/autenticacao/registro", formData, config);
            setShow(true);
            setSuccess(true);
            setName("");
            setEmail("");
            setSenha("");
            navigation.navigate('Login')
            Alert.alert("Parabéns , cadastro realizado com sucesso !!")
        } catch (err) {
            Alert.alert(`${err}`)
            setShow(true);
            setSuccess(false);
        }
    };


    const handleImage = () => {

        Alert.alert("Selecione", "informe onde deseja pegar a foto", [
            {

                text: "Galeria",
                onPress: () => pickImageFromGalery(),
                style: 'default'

            },
            {

                text: "Câmera",
                onPress: () => pickImageFromCamera(),
                style: 'default'

            },
            {
                // cancelable: true,
                // onDismiss: () => console.log('arrumar depois ...')


            }
        ]
        );


    };

    const [imageUser, setImageUser] = useState('https://thumbs.dreamstime.com/b/%C3%ADcone-de-usu%C3%A1rio-m%C3%ADdia-social-vetor-imagem-perfil-do-avatar-padr%C3%A3o-retrato-182347582.jpg');
    const pickImageFromGalery = async () => {

        const options: ImageLibraryOptions = {
            mediaType: 'photo',
        }
        const result = await launchImageLibrary(options);
        console.log(result);

        //Método para passar a foto para o banco de dados
        if (result?.assets) {
            setImageUser(result.assets[0].uri!)
        }

    }


    const pickImageFromCamera = async () => {

        const options: CameraOptions = {
            mediaType: 'photo',
            saveToPhotos: false,
            cameraType: 'front',
            quality: 1,
        }
        const result = await launchCamera(options);
        console.log(result);

        //Método para passar a foto para o banco de dados
        // if (result?.assets) {
        //     setImageUser(result.assets[0].uri!)
        // }

    }







    /* const handleRegister = async (name: string, email: string, senha: string) => {
         console.log(`Nome: ${name} - Email : ${email} - Senha : ${senha}`);*/
    console.log("Imagem", imageUser);

    return (
        <View style={styles.container}>
            {/* <Image style={styles.logo} source={require('../../assets/register.png')} /> */}


            <TouchableOpacity
                onPress={handleImage}
            >
                <Image style={styles.logo} source={{ uri: imageUser }} />
                <Icon name={"edit"} size={30} />

            </TouchableOpacity>


            <Text style={styles.texto_entrada}>{'Cadastro'}</Text>

            <Input inputContainerStyle={styles.inputContainer}
                placeholder='Nome de usuario'
                onChangeText={setName}
                value={name}
                leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
                placeholderTextColor={'black'}
            />

            <Input inputContainerStyle={styles.inputContainer}
                placeholder='E-mail'
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon name='email' color='#000' type='Entypo' size={24} />}
                placeholderTextColor={'black'}
            />
            <Input inputContainerStyle={styles.inputContainer}
                //ternario isFocused ? styles_1 : styles_2
                //onFocus={}
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
                leftIcon={<Icon name="vpn-key" color="#000000" type="MaterialIcons" size={24} />}
                placeholderTextColor={'black'}
                secureTextEntry

            />
            <TouchableOpacity

            >

            </TouchableOpacity>
            <Button
                title='Registrar'
                onPress={() => handleRegister(name, email, senha)}

                titleStyle={styles.buttons_text}
                buttonStyle={styles.buttons}
            />

            <Button
                title="Voltar"
                onPress={() => navigation.navigate('Login')}
                titleStyle={styles.buttons_text2}
                buttonStyle={styles.back_button}

            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto_entrada: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        marginTop: 13,
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100

    },
    inputContainer: {
        backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 10,
        borderColor: '#000000'
    },
    buttons: {
        width: 360,
        marginLeft: 10,
        backgroundColor: '#562637',
        padding: 15,
        borderRadius: 10,
    },
    buttons_text: {
        fontSize: 20,
    },
    buttons_text2: {
        fontSize: 18,
        color: '#000'
    },
    container_buttons: {
        width: 380,
        marginTop: 10,
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
    },
    back_button: {
        marginTop: 12,
        marginLeft: 12,
        width: 110,
        padding: 4,

        backgroundColor: '#ffffff',
        borderRadius: 9,
    },


})
export default Register;