import axios from 'axios';
import { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import { Card } from '@rneui/themed';

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
            
            <ScrollView>
                <View style={{padding: 20}}>
                    <Card>
                        {users.map((user, index) => (
                            <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate("UserDetail", { user })}>
                                <View 
                                    style={{
                                        flexDirection: 'row', 
                                        alignItems: 'center', 
                                        marginBottom: 10, 
                                        borderBottomWidth: 1, 
                                        borderBottomColor: '#ccc', 
                                        paddingBottom: 10
                                    }}
                                >
                                    <Image
                                        style={{width: 30, height: 30, marginRight:15}}
                                        source={{uri: user.picture.thumbnail}}
                                    />

                                    <Text>{user.name.first} {user.name.last}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))}
                    </Card>
                </View>
            </ScrollView>
        </>
    )
}

export default UserList;

// <Button title="Ver detalhes" onPress={() => navigation.navigate("UserDetail")} />

/**
 * <Button 
        key={index} 
        title={`${user.name.first} ${user.name.last}`} 
        onPress={() => navigation.navigate("UserDetail", { user })}
    />
 */