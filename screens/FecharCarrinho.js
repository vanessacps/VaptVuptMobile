import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

export default function FecharCarrinho({ navigation }) {

    const [checked, setChecked] = React.useState(true);
     const toggleCheckbox = () => setChecked(!checked);

    return (
        <View style={styles.container}>

            <View style={styles.headerContent}>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconWrapper}>
                    <Image style={styles.icon} source={{ uri: 'https://api.iconify.design/material-symbols:arrow-back-ios-new-rounded.svg' }} />
                </TouchableOpacity>

                <Text style={styles.title}>RESUMO DE PEDIDO</Text>

                <TouchableOpacity >
                    <Text style={styles.limpar}>Limpar</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.enderecoTitle}>Valor Pedido</Text><br />

            <View style={styles.resumo}>
                <Text>Subtotal</Text> <Text>R$ 59,80</Text>
            </View>

            <View style={styles.resumo}>
                <Text>Taxa de entrega</Text> <Text>R$ 5,00</Text>
            </View>

            <View style={styles.resumo}>
                <Text><strong>Total</strong></Text> <Text><strong>R$ 64,80</strong></Text>
            </View><br />

            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
            </View>

            <Text style={styles.enderecoTitle}>Opção de pagamento : </Text>

            <CheckBox
            title="Cartão de débito"
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
         />
         <CheckBox
            title="Cartão de crédito"
            checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-blank-outline"
           uncheckedIcon={'checkbox-outline'}
         />
        <CheckBox
            title="Pix"
            checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-blank-outline"
           uncheckedIcon={'checkbox-outline'}
         />
        <CheckBox
            title="Na entrega"
            checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-blank-outline"
           uncheckedIcon={'checkbox-outline'}
         />

           

            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
            </View>

            <Text style={styles.enderecoTitle}>Endereço de entrega</Text>

            <View style={styles.endereco}>
                <Image style={styles.menuIcon} source={{ uri: 'https://api.iconify.design/ic:outline-delivery-dining.svg', }} />

                <Text style={styles.enderecoText}><span style={styles.span}>Tempo de entrega</span><br /> 40 - 50 min
                </Text>

            </View>

            <View style={styles.endereco}>
                <Image style={styles.menuIcon} source={{ uri: 'https://api.iconify.design/material-symbols:location-on-rounded.svg', }} />

                <Text style={styles.enderecoText}>Rodovia PE-007, Gleba 1A, s/n° <br />– Engenho Bulhões – Jaboatão dos Guararapes – PE.
                </Text>

            </View>

            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
            </View>



            <View style={styles.footerContainer}>

                <View style={styles.footer2}>

                    <TouchableOpacity style={styles.footerLink}>Alterar pedido</TouchableOpacity>

                </View>

                <Button
                    buttonStyle={styles.button}
                    title="Finalizar pagamento"
                    onPress={() => navigation.navigate('FinalPedido')}
                />

            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        // justifyContent: 'space-between',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        paddingHorizontal: 20
    },
    enderecoText: {
        fontSize: 10,
        justifyContent: 'space-between',
    },
    enderecoTitle: {
        fontWeight: 500,
        paddingTop: 20,
        paddingHorizontal: 20,
        fontSize: 15,
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
        marginVertical: 20,
        marginHorizontal: 15,
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    button: {
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#FF3131',
        height: 30,
        width: 300,
        borderRadius: 5
    },
    span: {
        fontSize: 13
    },
    logoCartao: {
        width: 50,
        height: 30,
        marginVertical: 20,
        marginHorizontal: 15,
    },
    resumo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,

    },
    footerLink: {
        color: '#FF3131',
        alignSelf: 'center'
    }
});