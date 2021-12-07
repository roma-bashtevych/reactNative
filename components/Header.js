import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Список справ</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        height: 100,
        backgroundColor: '#ccc',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        fontStyle: 'italic'
    }

});
