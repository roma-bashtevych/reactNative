import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Button} from 'react-native';

export default function Form({addHandler}) {

    const [text, setText] = useState('')

    const onChange = (value) => {
        setText(value)
    };
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Напишіть що зробити...'/>
           <View  style={styles.button}>
               <Button title={'Додати справу'} onPress={() => addHandler(text)}/>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 20,
        marginHorizontal: '20%',
        width: '60%'
    },
    button: {
        width: '40%',
        marginLeft: '30%'
    }
});
