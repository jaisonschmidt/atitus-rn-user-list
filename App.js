import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';

const Stack = createNativeStackNavigator();

export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen 
          name="UserList" 
          component={UserList}  
          options={{ title: 'Usuários cadastrados' }} 
        />
        <Stack.Screen 
          name="UserDetail" 
          component={UserDetail} 
          options={{ title: 'Detalhe do usuário' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
