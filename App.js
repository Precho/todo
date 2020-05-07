import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard}  from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import Addtodo from './components/addtodo';
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'zadanko 1', key: '1' },
    { text: 'lorem ipsu', key: '2' },
    { text: 'play the game', key: '3' }
  ]);
  
  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const sumbitHandler = (text)=> {
    if(text.length > 3){
      setTodos((prevTodos)=>{
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ]
         })
    } else {
        Alert.alert('ups','zadanko musi być dłuższe niz 3 znaki',[
          {
          text: 'ok',
          onPress: ()=> console.log('alert closed') 
          }
        ])
    }

  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dissmiss keyboard')
    } }>
        <View style={styles.container}>
        
        <Header/>
        <View style={styles.content}> 
        <Addtodo sumbitHandler={sumbitHandler}/>
        
        <View style={styles.list}>
            <FlatList
                data={todos}
                renderItem={({item})=> (
                  <TodoItem item={item} pressHandler={pressHandler}/>
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
    
    
  },
  content: {
    padding:40,
    flex:1

  },
  list: {
    marginTop:20,
    flex:1,
    
  }

});
