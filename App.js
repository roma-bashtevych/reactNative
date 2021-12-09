import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {NavBar} from "./components/NavBar";
import {AddTodo} from "./components/AddTodo";
import {Todo} from "./components/Todo";

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos((prevTodos) => {
            return [
                {
                    id: Date.now().toString(),
                    title: title
                },
                ...prevTodos
            ]
        })
    }

    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)
        )
    }

    return (
        <View>
            <NavBar title='Список справ'/>
            <View style={styles.container}>
                <AddTodo addTodo={addTodo}/>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({ item }) => <Todo todo={item} removeTodo={removeTodo}/>}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },

});
