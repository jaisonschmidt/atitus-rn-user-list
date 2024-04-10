import { Text } from "react-native";

function UserDetail({ route }) {
  const { user } = route.params;

  return (
    <Text>{user.name.first}</Text>
  );
}

export default UserDetail;