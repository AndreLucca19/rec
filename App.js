import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Perfil from './pages/Perfil';

const Stack = createStackNavigator();

export default function App() {
return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Filme" 
        component={Filme} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
    </NavigationContainer>
);
}