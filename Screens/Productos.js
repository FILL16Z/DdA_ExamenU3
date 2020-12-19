
import React, { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProductosContext } from '../Context/ProductosContext';

const ProductosScreen = ({ navigation }) => {
  const { carro, lista, setCarrito, setLista, totalPagar, setTotalPagar  } = useContext(ProductosContext);


  const agregarCompra =(producto, precio)=> {

    setCarrito([...carro,producto])
    
    //Precio a pagar aumenta
    totalPagar.total+=precio

    console.log(totalPagar)

  }

  return (
    <View style={styles.container}>
            <Header
                centerComponent={{ text: 'Mercado Libre', style: {color:'#000', fontSize:20}}}
                rightComponent={{ icon: 'shopping-cart', color: '#000', onPress:()=>{navigation.navigate('Carrito')}}}
                containerStyle={{backgroundColor:'yellow'}}
            />


            <ScrollView>
                {lista.length > 0 ? (
                lista.map((a, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{a.descripcion}</ListItem.Title>
                            <ListItem.Subtitle>$ {a.precio}</ListItem.Subtitle>
                        </ListItem.Content>

                        <View style={styles.buttons}>
                            <Icon
                            name="plus"
                            size={25}
                            color="black"
                            onPress={() => agregarCompra(a, a.precio)}
                            />
                        </View>
                    </ListItem>
                ))
                ) : (
                <Text> Aquí deberían ir los productos, si no se muestran es que algo está mal</Text>
                )}
            </ScrollView>
        </View>
  );
};

export default ProductosScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  buttons: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
