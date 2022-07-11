import * as React from 'react';
import { Searchbar } from 'react-native-paper';

//Deixei aqui um exemplo de barra de pesquisa, ela ainda não está funcional
// aqui voce pode ter uma ideia de como receber os icons etc, qualquer dúvida perguntar


const MySearch = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (

        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};

export default MySearch;