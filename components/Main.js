import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import {gStyle} from "../styles/styles";
import { Ionicons } from '@expo/vector-icons';
import Form from "./Form";

export default function Main({ navigation }) {

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString()
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false)
    }


    const [news, setNews] = useState([
        {
            name: 'Google',
            anons: 'Google do new search',
            full: 'Google is cool!!!',
            key: '1',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2abd662597191.5a9589b09ddf5.jpg'
        },
        {
            name: 'Apple',
            anons: 'Apple do new search',
            full: 'Apple is cool!!!',
            key: '2',
            img: 'https://w7.pngwing.com/pngs/1022/185/png-transparent-apple-logo-symbol-computer-software-apple-logo-company-heart-computer.png'
        },
        {
            name: 'Facebook',
            anons: 'Facebook do new search',
            full: 'Facebook is cool!!!',
            key: '3',
            img: 'https://pic.clubic.com/v1/images/1931764/raw?fit=smartCrop&height=675&width=1200&hash=a04b6a1ad40364f91320d7669badf97fa045b88c'
        }
    ])

    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow}>
                <View style={gStyle.main}>
                <Ionicons name="close-circle" size={24} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
                    <Text style={gStyle.title}>Форма додавання статті</Text>
                    <Form addArticle={addArticle}/>
                </View>
            </Modal>
            <Ionicons name="add-circle-sharp" size={34} color="blue" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
            <Text style={[gStyle.title, styles.header]}>Головна сторінка</Text>
            <FlatList data={news} renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                        navigation.navigate('FullInfo', item)
                    }
                    }>
                    <Image style={styles.img} source={{uri: item.img}}/>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )}/>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    name: {
        fontFamily: 'mt-medium',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    },
    img: {
        width: '100%',
        height: 200
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 20
    },
    iconClose: {
        marginBottom: 20
    }
});
