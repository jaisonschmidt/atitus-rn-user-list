import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { Card } from '@rneui/themed';
import { Image, Text, View } from "react-native";

function UserDetail({ route }) {
  const { user } = route.params;

  return (
    <Card>
      <Card.Title>{user.name.first} {user.name.last}</Card.Title>
      <CardDivider />
      <View style={{alignItems: 'center'}}>
        <Image
            style={{width: 65, height: 64, marginBottom: 20}}
            source={{uri: user.picture.large}}
        />
        <Text style={{fontSize: 11}}>{user.location.country} / {user.location.state} / {user.location.city}</Text>
        <Text>{user.email}</Text>
      </View>
    </Card>
  );
}

export default UserDetail;