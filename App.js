import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Cadastro from './screens/Cadastro';
import Carrinho from './screens/Carrinho';
import Home from './screens/Home';
import { Login } from './screens/Login';
import Produto from './screens/Produto';
import Restaurante from './screens/Restaurante';
import FecharCarrinho from './screens/FecharCarrinho';
import MensagemFinalPedido from './screens/MensagemFinalPedido';
import FormEndereco from './screens/FormEndereco';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
       
       <Stack.Screen name="Login" component={Login}options={ {headerShown: false} } />

       <Stack.Screen name="Cadastro" component={Cadastro}options={ {headerShown: false} } />

       <Stack.Screen name="Home" component={Home}options={ {headerShown: false} } />

       <Stack.Screen name="Restaurante" component={Restaurante}options={ {headerShown: false} } />

       <Stack.Screen name="Produto" component={Produto}options={ {headerShown: false} } />

       <Stack.Screen name="FecharCarrinho" component={FecharCarrinho}options={ {headerShown: false} } />

       <Stack.Screen name="Carrinho" component={Carrinho}options={ {headerShown: false} } />

       <Stack.Screen name="FinalPedido" component={MensagemFinalPedido}options={ {headerShown: false} } />

       
       <Stack.Screen name="FormEndereco" component={FormEndereco}options={ {headerShown: false} } />



        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;