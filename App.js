import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Filme from './pages/Filme';

const Stack = createStackNavigator();

export default function App() {
return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Filme" component={Filme} />
    </Stack.Navigator>
    </NavigationContainer>
);
}