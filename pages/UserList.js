import axios from 'axios';
import { useEffect, useState } from "react";
import { Text } from "react-native";

function UserList({ navigation }) {
    // criar um estado local para armazenar os usuários
    const [users, setUsers] = useState([]);

    // quando carregar este componente (onLoad), acessar o endpoint (API) https://randomuser.me/api/?results=20 usando Axios
    // e trazer os dados dos usuários para a aplicação, vamos gravar em uma variável
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20")
            .then((response) => {
                console.log(response.data.results);
                setUsers(response.data.results);
            })
            .catch((error) => {
                console.error(error);
                // limpar a variavel users
                setUsers([]);
            });
    }, []);

    return (
        <>
            {users.length === 0 && <Text>Carregando usuários...</Text>}
            
            {users.length > 0 && users.map((user, index) => (
                <Text key={index}>{user.name.first} {user.name.last}</Text>
            ))}
        </>
    )
}

export default UserList;

// <Button title="Ver detalhes" onPress={() => navigation.navigate("UserDetail")} />