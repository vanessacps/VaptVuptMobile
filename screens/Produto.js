import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';


export default function Produto({ navigation }) {
    
  const [quantity, setQuantity] = useState(1);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function formatarMoeda(dataParam) {
    return dataParam ? dataParam.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '';
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../icons/almoco.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Restaurante')} style={styles.iconWrapper}>
            <View style={styles.iconBackground}>
              <Image style={styles.icon} source={{ uri: 'https://api.iconify.design/material-symbols:arrow-back-ios-new-rounded.svg' }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent1}>
          <Text style={[styles.title1, { marginTop: 30 }]}>Almoço Social</Text>
          <Text style={styles.descricao}>Arroz,Feijão,Salda e frango grelhado.</Text>
          <Text style={[styles.title2, { color: '#FF3131' }]}>{formatarMoeda(29.90)}</Text>
        </View>

       
        <View style={styles.divider}></View>

        <View style={styles.bodyContent3}>
          <View style={styles.headerBodyContent3}>
            <Image style={[styles.iconP, { tintColor: '#4D585E' }]} source={{ uri: 'https://api.iconify.design/material-symbols:edit-outline-sharp.svg' }} />
            <Text style={[styles.title3, { color: '#FF3131' }]}>Observação?</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Ex: Ponto do frango, tipo de salada entre outros"
            placeholderTextColor="#999"
            multiline={true}
          />
        </View>

        <View style={[styles.line4, { marginTop: 10 }]}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
            <Image style={[styles.icon, { width: 30, tintColor: '#FF3131' }]} source={{ uri: 'https://api.iconify.design/material-symbols:remove-rounded.svg' }} />
          </TouchableOpacity>
          <Text style={[styles.title2, { color: '#FF3131', margin: 20 }]}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
            <Image style={[styles.icon, { width: 30, tintColor: '#FF3131' }]} source={{ uri: 'https://api.iconify.design/material-symbols:add-rounded.svg' }} />
          </TouchableOpacity>
          <Button
            style={styles.buttonContainer}
            title="Adicionar"
            buttonStyle={styles.addButton}
            titleStyle={styles.addButtonTitle}
            onPress={() => navigation.navigate('Carrinho')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 220,
    position: 'relative',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#FF3131',
  },
  iconP: {
    width: 15,
    height: 15,
    tintColor: '#0D0D0D',
  },
  iconBackground: {
    backgroundColor: 'rgba(255, 250, 241, 0.9)',
    borderRadius: 999,
    padding: 5,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContent1: {
    paddingHorizontal: 40,
  },
  bodyContent2: {
    height: 70,
    width: '90%',
    borderRadius: 5,
    borderColor: '#E6E6E6',
    borderWidth: 1.4,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingTop: 10,
    marginTop: 20,
  },
  bodyContent3: {
    height: 100,
    width: '90%',
  },
  headerBodyContent3: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 7,
  },
  box: {
    height: '40%',
    width: '90%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    margin: 20,
  },
  title1: {
    color: '#0D0D0D',
    fontSize: 22,
    letterSpacing: 1.2,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title2: {
    color: '#0D0D0D',
    fontSize: 18,
    letterSpacing: 1.2,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 30,
  },
  title3: {
    color: '#0D0D0D',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  descricao: {
    color: '#7C7C8A',
    fontSize: 16,
    fontWeight: '400',
  },
  text: {
    color: '#7C7C8A',
    fontSize: 12,
    fontWeight: '400',
    padding: 10,
    letterSpacing: 1.2,
  },
  input: {
    height: 120,
    paddingHorizontal: 10,
    placeholderTextColor: '#ABABAB',
    color: '#ABABAB',
    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 5,
  },
  line4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    color:'#FF3131',
  },
  addButton: {
    backgroundColor: '#FF3131',
    width: 180,
    height: 30,
    marginLeft: 10,
  },
  addButtonTitle: {
    color: 'white',
    fontSize: 15,
  },
});
