import React, { useContext } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { StyleSheet, Alert } from 'react-native';
import { View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { CarrinhoContext } from '../../context/carrinhoContext';

const DetalhesDoProduto = () => {

    const { produto } = useContext(CarrinhoContext);

    function comprar(){
        Alert.alert('Comprar');
        console.log('Comprar');
    }

    function adicionarFavorito(){
        Alert.alert('adicionar favorito');
        console.log('adicionar favorito');
    }

return(

   <View style={styles.container}>
      <View style={styles.view_produto_todo}>
        <View style={styles.view_foto}>
        <Image style={styles.imagem}  source={{ uri: 'https://media.discordapp.net/attachments/983838532844015708/994379981457199154/declinio.jpg?width=371&height=559'}}/>
        <Text style={styles.dinheiro}>{produto.nome_produto}</Text>
        <Text style={styles.dinheiro2}>{produto.preco_produto}</Text>
        </View>
      </View>
       
       <View style={styles.botoes}>
        <Button
                    title=' Favoritos'
                    onPressIn={adicionarFavorito}
                    titleStyle={styles.favoritos}
                    buttonStyle={styles.div_fav}
                    icon={() => (
                        <Icon
                            name="heart" type='ant-design'
                            color={'red'}
                            size={22}
                        />
                    )}
                />

        <Button
                title='Adicionar ao Carrinho'
                onPress={comprar}
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
        
    
    },
    imagem: {
        width: 200,
        height: 260,

    },
    view_produto_todo:{
        marginTop:20,
        alignItems:'center',
        justifyContent: 'center',
        height: 550,
        width: 400,
        backgroundColor: '#f1eded',
    },
    fotoProduto:{
     height: 194,
     width: 132,
    },
    view_foto:{
     height: 200,
     width: 260,
     alignItems:'center',
     justifyContent: 'center',
    },
    box: {
        backgroundColor: '#AF7B85',
        marginBottom: 13,
    },
    codigo_limpo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'left',
        marginTop: 10,
    },
    dinheiro:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        marginTop: 20,
    },
    dinheiro2:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        marginTop: 30,
    },
    
    div_viewfav:{
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent: 'center',
        
    },
    icone:{
        marginTop:10,
    },
    favoritos:{
       fontSize: 18,
       color:'#000000',
    },buttons_text3: {
        fontSize: 18,
        color:'#ffffff'
    },
   
    central_comprar:{
        alignItems:'center',
        justifyContent:'center',  
        marginTop: 100,     
    },
    botoes:{
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    div_fav:{
        backgroundColor:'#f1eded',
        width: 150,
        height: 100,
        marginTop: 25,
        marginLeft: 40,
        borderRadius: 9,
        alignItems:'center',
        justifyContent: 'center',
        
        
    },
    button_recuperar: {
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 25,
        marginRight: 40,
        width: 150,
        height: 100,
        borderRadius: 9,
        backgroundColor: '#b41919',
    },
});
export default DetalhesDoProduto;