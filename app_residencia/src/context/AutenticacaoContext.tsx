import React, { createContext, useState } from "react";
import { UsuarioType } from "../models/usuarioType";
import { LoginService } from "../services/loginService";

// aqui está um exemplo de contexto de autentificação feito pelo professor
// podemos usá-lo ou podemos alterar para o melhor uso no nosso trabalho


export const AutenticacaoContext = createContext({});

export const AutenticacaoProvider = ({ children }) => {
    const [usuario, setUsuario] = useState<UsuarioType>();

    const login = async (email: string, senha: string) => {
        const respostaServiceLogin = await LoginService(email, senha);
        if (!respostaServiceLogin) {
            return false;
        } else {
            setUsuario({
                id: respostaServiceLogin?.id,
                name: respostaServiceLogin?.name,
                email: respostaServiceLogin?.email,
                token: respostaServiceLogin?.token,
            });
            return true;
        }
    };

    return (
        <AutenticacaoContext.Provider value={{
            login,
            usuario
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}
