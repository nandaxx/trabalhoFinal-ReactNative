import React, { useState, useEffect, useContext } from 'react';
import { StatusBar, View, TextInput, StyleSheet, Alert } from 'react-native';
import { Icon, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Axios from '../../api/axios';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { usePesquisar } from '../../context/PesquisaContext2';
import { ProdutoType } from '../../models/produtoType';
import { useNavigation } from '@react-navigation/native';
import { CarrinhoContext } from '../../context/carrinhoContext';

export default function BarraPesquisa(props) {
  const [pesquisa, setPesquisa] = useState('');
  const [produto, setProduto] = useState<ProdutoType[]>([]);
  const { usuario } = useContext(AutenticacaoContext);
  const pesquisar = usePesquisar();
  const navigation = useNavigation();

  const selecionaPesquisa = (produto: any) => {
    navigation.navigate("DetalhesDoProduto", { nome: produto.nomeProduto, imagem: produto.imagemProduto, preco: produto.precoProduto, descricao: produto.descricaoProduto, sku: produto.sku, id: produto.idProduto });
    setPesquisa("")
    console.log('Produto clicado', pesquisar.pesquisa);
  };
  useEffect(() => {
    getDadosProduto();
  }, []);
  const getDadosProduto = async () => {
    Axios.get(`/produto`, {
      headers: { Authorization: `Bearer ${usuario.token}` },
    })
      .then(result => {
        setProduto(result.data);
      })
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Input
          placeholder="Buscar"
          value={pesquisa}
          onChangeText={setPesquisa}
          inputContainerStyle={styles.inputs}
          placeholderTextColor={'#000000'}
        />
      </View>
      <ScrollView style={styles.cont_result}>
        {produto
          .filter(val => {
            if (pesquisa.length <= 1) {
              return;
            }
            else if
              (
              val.nomeProduto.toLowerCase().includes(pesquisa.toLowerCase())
            ) {
              return val;
            }
          })
          .map((produto, indice) => (
            <Text
              style={styles.search_result}
              onPress={e => selecionaPesquisa(produto)}
              key={indice}>
              {produto.nomeProduto}
            </Text>
          ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container2: {
    width: 390,
    backgroundColor: '#ffffff',
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    textAlign: 'center',
    borderBottomWidth: 0,
  },
  inputs: {
    color: 'white',
    borderBottomColor: 'white',
    padding: 5,
    marginTop: 30,
    flex: 1,
    borderBottomWidth: 0
  },
  cont_result: {
    width: '100%',
    marginTop: 5,
    position: 'absolute',
    zIndex: 1,
    top: 42,
    left: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  search_result: {
    width: 270,
    backgroundColor: 'white',
    padding: 12,
    paddingLeft: 13,
    borderBottomColor: 'white',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  container: {
    flex: 1,
    paddingLeft: 15,
    marginTop: 20,
    paddingRight: 15,
    alignItems: 'center',
  }
});