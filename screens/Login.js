import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import * as Animatable from 'react-native-animatable';


export  function Login({navigation}){
    
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation='flipInY' 
                    source={require('../icons/logoPng.png')}
                    style={{ width: '70%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite um email..." style={styles.input} />

                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Sua senha" style={styles.input} />

                <View style={{ marginTop: 70}}>
                    <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Home') }>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Cadastro') }>
                        <Text style={styles.buttonText}>Criar uma conta</Text>
                    </TouchableOpacity>
                    

                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    containerLogo: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerForm: {
        flex: 3,
        backgroundColor: '#FF3131',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        
    },

    text: {
        color: '#fff',
    },

    button: {
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
   

    buttonText: {
        fontSize: 18,
        color: '#FF3131',
        fontWeight: 'bold',
    },

    title:{
        color: '#FFF',
        fontSize: 20,
        marginTop: 28,
        marginBottom: 8,
    },
   
    input: {
        backgroundColor: '#FFF',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderRadius: 14,
        paddingHorizontal: 8,
    },
})