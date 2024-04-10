import axios from 'axios';
import { useEffect } from "react";
import { Text } from "react-native";

function UserList({ navigation }) {
    // quando carregar este componente (onLoad), acessar o endpoint (API) https://randomuser.me/api/?results=20 usando Axios
    // e trazer os dados dos usuários para a aplicação, vamos gravar em uma variável
    
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20")
            .then((response) => {
                console.log(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <Text>Lista de usuários</Text>
        </>
    )
}

export default UserList;

// <Button title="Ver detalhes" onPress={() => navigation.navigate("UserDetail")} />