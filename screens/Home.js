import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Categoria from '../component/categoria';
import Footer from '../component/footer';
import Loja from '../component/loja';


export default function Home({ navigation }) {

  const listagemLojas = [1, 2, 3, 4, 5];
  const listagemEtiquetas = [1, 2, 3, 4 , 5];

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Menu')} >
        <Image style={[styles.menuIcon, { width: 20, height: 20 }]} source={{ uri: 'https://api.iconify.design/material-symbols:location-on-rounded.svg', }} />
        <Text style={styles.endereco}>Jaboatão, PE</Text>
        <Image style={styles.menuIcon} source={{ uri: 'https://api.iconify.design/material-symbols:keyboard-arrow-down-rounded.svg', }} />
      </TouchableOpacity>

     

      <ScrollView>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselContainer} style={[styles.carousel, { marginLeft: 17 }]}>
          {[1, 2 , 3].map((index) =>
            <View key={index} style={styles.arena}>
              <Image style={styles.anuncioImage}
              source={require(`../icons/arena${index}.png`)}  /> 
            </View>
            
          )}
        </ScrollView>

        

        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselContainer} style={styles.carousel}>
        
          {listagemEtiquetas.map((index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Categoria />
              </TouchableOpacity>
            </View>
          
            ))}
</ScrollView>

<ScrollView>
  <br></br>
<View style={styles.containerSearch}>
          <View style={styles.search}>
            <TextInput style={styles.input} placeholder="Procure aqui por seu prato ou restaurante preferida..." />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image style={[styles.icon, { marginRight: 10, tintColor: '#FF3131', }]} source={{ uri: 'https://api.iconify.design/material-symbols:search-rounded.svg', }} />
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>

        <Text style={styles.title2}>Restaurantes</Text>
        <View style={styles.cards}>
          {listagemLojas.map((index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => navigation.navigate('HomeLoja')}>
                <Loja />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  menuIcon: {
    width: 25,
    height: 25,
    tintColor: '#FF3131',
    marginVertical: 30,
    marginHorizontal: 15,
  },
  logo: {
    width: '30%',
    height: '75%',
  },
  endereco: {
    color: '#0D0D0D',
    fontSize: 17,
    fontWeight: '600',
  },
  anuncioImage: {
    width: 300,
    height: 300,
    marginBottom: 25,
    borderRadius: 10,
    marginRight: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  containerSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  search: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: 'transparent',
    borderColor: '#E6E6E6',
    borderWidth: 1.4,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    placeholderTextColor: '#7C7C8A',
    color: '#7C7C8A',
  },
  etiqueta: {
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 50,
    borderColor: '#FF9431',
    borderWidth: 1.4,
    marginLeft: 7,
    marginTop: 20,
  },
  textoEtiqueta: {
    color: '#0D0D0D',
    fontWeight: '600',
    padding: 1,
  },
  logoLoja: {
    width: 50,
    height: 50,
    marginRight: 20,
    marginLeft: 10,
  },
  infoLoja: {
    flexDirection: 'row',
    marginTop: 7,
  },
  infoLojaTime: {
    color: '#E1E1E6',
    fontSize: 14,
    fontWeight: '350',
  },
  infoLojaStatus: {
    color: '#82F3FF',
    fontSize: 14,
    fontWeight: '450',
  },
  nomeLoja: {
    color: '#E1E1E6',
    fontSize: 14,
    fontWeight: '350',
  },
  title2: {
    color: '#000000',
    fontSize: 25,
    letterSpacing: 1.2,
    fontWeight: '450',
    marginLeft: 30,
    marginBottom: 15,
    marginTop: 30,
    fontWeight: '650',
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  carousel: {
    marginLeft: 10,
  },
});
