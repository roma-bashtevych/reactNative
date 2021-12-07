import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function ListItem({ item, deteteHandler }) {
    return (
        <TouchableOpacity onPress={() => deteteHandler(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: 'pink',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%'
    },

});
