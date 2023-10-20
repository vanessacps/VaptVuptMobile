import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { Login } from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
       
       <Stack.Screen name="Login" component={Login}options={ {headerShown: false} } />

       <Stack.Screen name="Cadastro" component={Cadastro}options={ {headerShown: false} } />

       <Stack.Screen name="Home" component={Home}options={ {headerShown: false} } />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;