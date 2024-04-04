import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';

export default function App() {
  const [view, setView] = useState('list'); // list ou detail
  
  return (
    <View style={styles.container}>
      {view === 'list' && <UserList />}

      {view === 'detail' && <UserDetail />}

      <Button title="Clique aqui" 
        onPress={() => view === 'list' ? setView('detail') : setView('list')} 
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
