import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, Alert} from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        { text: 'Buy milk', key: '1' },
        { text: 'Learn English', key: '2' },
        { text: 'Buy two eggs', key: '3' },
        { text: 'Become a millionaire', key: '4' }
    ])
    const addHandler = (value) => {
        if (value !== '') {
            setListOfItems((list) => {
                return [
                    { text: value, key: Math.random().toString(36).substring(7) },
                    ...list
                ]
            })
        } else {
            Alert.alert('Попередження!', 'Будь ласка введіть що маєте зробити')
        }
    }

    const deleteHandler = (key) => {
        setListOfItems((list) => {
            return list.filter(item => item.key !== key)
        })
    }
    return (
        <View>
            <Header/>
            <Form addHandler={addHandler}/>
            <View>
                <FlatList data={listOfItems} renderItem={({ item }) => (
                    <ListItem item={item} deteteHandler={deleteHandler}/>
                )}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},

});
