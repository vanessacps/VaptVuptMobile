import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import Item from '../component/itemSacola';

export default function Carrinho({ navigation }) {

    const listagemProdutos = [1, 2];

    return (
        <View style={styles.container}>

            <View style={styles.headerContent}>
            
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconWrapper}>
                    <Image style={styles.icon} source={{ uri: 'https://api.iconify.design/material-symbols:arrow-back-ios-new-rounded.svg' }} />
                </TouchableOpacity>

                <Text style={styles.title}>CARRINHO</Text>

                <TouchableOpacity >
                    <Text style={styles.limpar}>Limpar</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('FormEndereco')}>
                <Text style={styles.enderecoTitle}>Endereço para entrega :</Text>

                <View style={styles.endereco}>
                    <Image style={styles.menuIcon} source={{ uri: 'https://api.iconify.design/material-symbols:location-on-rounded.svg', }} />

                    <Text style={styles.enderecoText}>Rodovia PE-007, Gleba 1A, s/n° <br />– Engenho Bulhões – Jaboatão dos Guararapes – PE.
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('FormEndereco')}>
                        <Text style={styles.limpar}>Alterar</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.enderecoTitle}>Itens do carrinho :</Text><br></br>

                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                </View>

                
            </TouchableOpacity>
           

            {listagemProdutos.map((index) => (
                <View key={index}>
                    <TouchableOpacity>
                        <Item/>
                    </TouchableOpacity>
                </View>
            ))}

            <Text style={{ paddingHorizontal: 20, fontWeight: 600, marginVertical: 20 }}>Entrega: R$ 5,00</Text>

            <br />

            <View style={styles.footerContainer}>

                <View style={styles.footer2}>

                    <Text style={styles.footerText}>Total:</Text>

                    <Text style={styles.preco}>R$ 64,80</Text>

                </View>

                <Button
                    buttonStyle={styles.button}
                    title="Pagar"
                    onPress={() => navigation.navigate('FecharCarrinho')}
                />
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
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
        width: 30,
        height: 30,
        tintColor: '#FF3131',
    },
    title: {
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 15,
    },
    limpar: {
        paddingHorizontal: 20,
        color: '#FF3131'
    },
    endereco: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    enderecoText: {
        marginStart: 5,
        fontSize: 10,
        justifyContent: 'space-between',
    },
    enderecoTitle: {
        fontWeight: 500,
        paddingTop: 20,
        paddingHorizontal: 20,
        fontSize: 20,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#dbdbe7',
    },
    menuIcon: {
        width: 20,
        height: 20,
        tintColor: '#FF3131',
        marginVertical: 30,
        marginHorizontal: 15,
    },
    footerContainer: {
        justifyContent:'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        height: 60,
    },
    footer2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    footerText: {
        fontWeight: 500,
        fontSize: 20,
        paddingRight:25
    },
    preco: {
        fontWeight: 'bold',
    },
    button: {
        alignSelf:'center',
        marginTop: 20,
        backgroundColor: '#FF3131',
        height: 30,
        width: 300,
        borderRadius: 5
    },
});