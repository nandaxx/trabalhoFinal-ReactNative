import 'react-native-gesture-handler';
import Routes from './routes';
import React from 'react';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { CarrinhoProvider } from './context/carrinhoContext';
export default () => {

    return (
        <CarrinhoProvider>
            <AutenticacaoProvider>
                <Routes />
            </AutenticacaoProvider>
        </CarrinhoProvider>
    );
};