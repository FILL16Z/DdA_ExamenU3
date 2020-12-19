import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductosScreen from '../Screens/Productos';
import CarritoScreen from '../Screens/Carrito';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Productos" 
                component={ProductosScreen}
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Carrito" 
                component={CarritoScreen}
                options={{headerShown:false}}
                containerStyle={{backgroundColor:'yellow'}}

            />
        </Stack.Navigator>

    )
}