// Context
import React, {createContext, useState,} from 'react';

export const ProductosContext = createContext();

const ProductosProvider = (props)=>{
    const [productos, setProductos] = useState([
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
        {codigo:7,descripcion:"Xiaomi Redmi Note 8s", precio:4989},
        {codigo:8,descripcion:"Mochila Targus", precio:999},
        {codigo:9,descripcion:"Teclado Logitech", precio:1489},
        ]);
    
    const [carro, setCarro] = useState([]);

    const [total, setTotal] = useState({total:0});

    agregar=(objeto)=>{
        this.setState({
          carrito:[...this.state.carrito,objeto]
        })
    }

    eliminar=(a,index)=>{
        const temporal = this.state.carrito.filter((a,i)=>i!==index)
    
        this.setState({
          carrito:temporal
        })
    }
    return(
        <ProductosContext.Provider
            value={{
                productos,
                carro,
                setProductos,
                setCarro,
                total,
                setTotal
            }}
        >
            {props.children}
            
        </ProductosContext.Provider>
    )


}
export default ProductosProvider;

//pagina listado

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons';

const ProductosScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'Productos', style: {color:'#fff', fontSize:20}}}
                rightComponent={{ icon: 'shopping-cart', color: '#fff', onPress:()=>{navigation.navigate('Carrito')}}}
                containerStyle={{backgroundColor:'blue'}}
            />
            <Text>Aquí deberían ir los pinches productos alv jaja ayuda</Text>

        </View>
    )
}

export default ProductosScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    buttons:{
        width:'25%',
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

//Carrito

  
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CarritoScreen = ({route,navigation}) => {

    return (
        <View style={styles.container}>
            <Text>Carrito de compras</Text>
        </View>
    )
}

export default CarritoScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});