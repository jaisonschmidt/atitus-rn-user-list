import axios from 'axios';
import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

function UserList({ navigation }) {
    // criar um estado local para armazenar os usuários
    const [users, setUsers] = useState([]);

    // quando carregar este componente (onLoad), acessar o endpoint (API) https://randomuser.me/api/?results=20 usando Axios
    // e trazer os dados dos usuários para a aplicação, vamos gravar em uma variável
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20&nat=br")
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
            
            <View style={{padding: 20}}>
                {users.map((user, index) => (
                    <Button 
                        key={index} 
                        title={`${user.name.first} ${user.name.last}`} 
                        onPress={() => navigation.navigate("UserDetail", { user })}
                    />
                ))}
            </View>
        </>
    )
}

export default UserList;

// <Button title="Ver detalhes" onPress={() => navigation.navigate("UserDetail")} />