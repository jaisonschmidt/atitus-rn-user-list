import { Text, Button } from "react-native";

function UserList({ navigation }) {
    return (
        <>
            <Text>Lista de usuários</Text>
            <Button title="Ver detalhes" onPress={() => navigation.navigate("UserDetail")} />
        </>
    )
}

export default UserList;