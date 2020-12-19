import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { ProductosContext } from '../Context/ProductosContext';

const CarritoScreen = ({ route, navigation }) => {
  const {
    carro,
    lista,
    setCarrito,
    setLista,
    totalPagar,
    setTotalPagar,
  } = useContext(ProductosContext);


  const eliminar = (codigo, precio) => {
    const temporal = carro.filter((item) => {
      return item.codigo !== codigo;
    });

    totalPagar.total-=precio
    setCarrito(temporal);
  };

  const comprar = () => {
    alert('Gracias por tu compra');
    console.log(totalPagar)
    setCarrito({})
    setTotalPagar({})

  };

  return (
        <View style={styles.container}>
            <Header
                     centerComponent={{ text: 'Carrito de Compras', style: {color:'#000', fontSize:20}}}
                     leftComponent={{ icon: 'arrow-left', color: '#000', onPress:()=>{navigation.navigate('Productos')}}}
                     containerStyle={{backgroundColor:'yellow'}}
            />
        <ScrollView>
            {carro.length > 0 ? (
            carro.map((a, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>$ {a.precio}</ListItem.Subtitle>
                    </ListItem.Content>

                    <View style={styles.buttons}>
                        <Icon
                        name="minus"
                        size={25}
                        color="red"
                        onPress={() => eliminar(a.codigo, a.precio)}
                        />
                    </View>
                </ListItem>
            ))
            ) : (
            <Text> No tienes productos</Text>
            )}
        </ScrollView>

        {carro.length > 0 ? (
            <View>
            <Text style={{fontSize: 20, textAlign: 'center'}}>$ {totalPagar.total}</Text>
            <Button
                style={{Color:'yellow', margin: 20, elevation: 20, borderWidth: 1}}
                title="Comprar"
                onPress={() => comprar()}
            />
            </View>
        ) : (
            <Text></Text>
        )}
        </View>
    );
    };

export default CarritoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  buttons: {
    flex: 1,
    width: '50%',
    flexDirection: 'row',
    justifyContent: '',
  },
});
