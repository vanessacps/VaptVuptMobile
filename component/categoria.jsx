import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Categoria({ navigation }) {   
   
    return (
        <View style={styles.slide}>

            <View style={styles.colum1}>
                <Image style={styles.lojaImage} source={require('../icons/categoria.png')}
                
                 />
                 
            </View>
            </View>
        
    );
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        justifyContent: 'space-between',
    },
    colum1: {
        flex: 1.2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 20,
    },
    colum2: {
        flex: 2.5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    colum3: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    iconWrapper: {
        padding: 10,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#ABABAB',
    },
    text: {
        color: '#7C7C8A',
        fontSize: 12,
        fontWeight: '400',
    },
    lojaImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginVertical: 10,
        marginRight: 7,
    },
    nomeItem: {
        color: '#0D0D0D',
        fontSize: 15,
        fontWeight: '600',
    },
});
