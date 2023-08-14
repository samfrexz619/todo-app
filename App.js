
import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import { uid } from 'uid';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'buy coffee',
      id: uid(4),
    },
    {
      text: 'create an app',
      id: uid(4),
    },
    {
      text: 'learn react native',
      id: uid(4),
    }
  ])

  const pressHandler =(id)=> {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id !== id)
    })
  }

  const [inputVal, setInputVal] = useState('')

  const changeHandler =(val)=> {
    setInputVal(val)
  }

  const submitHandler =(newText)=> {
    if(newText.length > 3) {
      setTodos(prevTodos => {
        return [
          {text: newText, id: uid(4)},
          ...prevTodos
        ]
      }) 
    } else { 
      Alert.alert('oops!', 'todos must be over 3 chars long', [
        {text: 'you dig', onPress: ()=> console.log('alert closed')}
      ])
    }
    setInputVal('')
  }


  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
          <Header  />
        <View style={styles.content}>
            <AddTodo 
              addItem={submitHandler} 
              changeHandler={changeHandler}
              inputVal={inputVal}
              setInputVal={setInputVal}
            />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item)=> item.id}
              data={todos}
              renderItem={({item}) => (
                <TodoItem todo={item} deleteTodo={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    // paddingHorizontal: 20
  },
  content: {
    marginTop: 20,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: 'red'
  },
  
});
