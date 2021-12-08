import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {gStyle} from "../styles/styles";

export default function FullInfo({ route }) {
    // const loadScene = () => {
    //     navigation.goBack()
    // }

    return (
        <View style={gStyle.main}>
            <Image style={styles.img} source={{ uri: route.params.img }}/>
            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        marginTop: 25
    },
    full: {
        fontFamily: 'mt-medium',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#f55151'
    },
    img: {
        width: '50%',
        height: 100
    }
});
