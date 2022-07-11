import React from "react";
import Axios from "../api/axios";
import jwt_decode from 'jwt-decode';

//EXEMPLO FEITO PELO PROFESSOR, FAVOR NAO MEXER NESTA PÁGINA !!!!


const LoginService = async (email: string, senha: string) => {

    console.log("email :", email, "Senha", senha);
    var tokenDecodificado: any = null;
    try {
        const resposta = await Axios.post('autenticacao', {
            email,
            senha
        });
        if (resposta.status === 200) {
            console.log('Resposta do LoginService' + JSON.stringify(resposta.data));
            tokenDecodificado = jwt_decode(resposta.data.token);
            tokenDecodificado['token'] = resposta.data.token;
            return tokenDecodificado;
        } else {
            return false;
        }
    }
    catch (error) {
        console.log('Erro ao realizar login' + JSON.stringify(error));

    }

}
export { LoginService };