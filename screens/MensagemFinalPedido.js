import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../component/footer';

export default function MensagemFinalPedido({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconWrapper}>
                    <Image style={styles.icon} source={{ uri: 'https://api.iconify.design/material-symbols:arrow-back-ios-new-rounded.svg' }} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <Image style={styles.iconMessage} source={require('../icons/LogoPng.png')} />
                <Text style={styles.title1}>Pedido feito!! <br></br>Obrigado pela preferência!! <br></br>Acompanhe seu pedido na tela de pedidos</Text>
                
            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
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
    iconMessage: {
        width: 180,
        height: 170,
        marginBottom: 70,
        marginTop: 80,
    },
    title1: {
        color: '#FF3131',
        fontSize: 18,
        letterSpacing: 1.2,
        fontWeight: 'bold',
    },
    title2: {
        color: '#0D0D0D',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 15,
        marginTop: 5,
    },
})