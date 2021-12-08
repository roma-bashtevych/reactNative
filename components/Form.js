import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {gStyle} from "../styles/styles";
import {Formik} from "formik";

export default function Form({addArticle}) {

    return (
        <View>
            <Formik
                initialValues={{
                    name: '',
                    anons: '',
                    full: '',
                    img: ''
                }}
                onSubmit={(values,action) => {
                    addArticle(values)
                    action.resetForm();
                }}>
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.name}
                            placeholder='Введіть назву'
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.anons}
                            multiline
                            placeholder='Введіть анонс'
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.full}
                            multiline
                            placeholder='Введіть текст статті'
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.img}
                            placeholder='Вкажіть фото'
                            onChangeText={props.handleChange('img')}
                        />
                        <Button title={'Додати'} onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );

};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 5
    },

});
