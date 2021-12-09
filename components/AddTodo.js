import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";

export const AddTodo = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const pressHandler = () => {
        if(value.trim()){
        addTodo(value);
        setValue('');
        } else {
            Alert.alert('Назва справи не можу бути пустим');
        }
    }
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Введіть нову справу...'
                autoCorrect={false}
                autoCapitalize={"none"}
            />
            <Button title={'Додати'} onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '75%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#3949ab',
        padding: 10
    }
})
