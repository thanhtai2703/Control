
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, InputAccessoryView, StyleSheet, Text, TextInput, View } from 'react-native';

interface ITtodo{
  id:number;
  name: string
}
export default function App() {
  const [todo,setTodo] = useState("")
  const [listTodo,SetlistTodo] = useState<ITtodo[]>([])
  function RandomInteger(min:number,max:number){
    return Math.floor(Math.random()*(max - min + 1) + min)
  }
  const handleAddTodo = () => {
    if(!todo) return;
    SetlistTodo([...listTodo,{id:RandomInteger(1,1000),name:todo}
    ])
    setTodo('')
  } 
  return (
    <View style={styles.container}>
      <Text style ={styles.header}>Hello world</Text>
    <View style ={{marginBottom : 10}}>
      <TextInput style ={styles.todo}
      value= {todo}
      onChangeText={(value) => setTodo(value)}
      />
        <Button title='Add'
        onPress={handleAddTodo}
        
        />
    </View>
    <View>
      <FlatList
      data={listTodo}
      renderItem={({item})=>{
        return <Text style ={styles.todoItem}>{item.name}</Text>
      }}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 20
  },
  header:{
    backgroundColor : "blue",
    textAlign: 'center',
    fontSize: 20

  },
  todo :{
    borderWidth: 1,
    borderColor: 'green',
    marginTop : 10,
    marginBottom: 15
  },
  todoItem:{
    fontSize: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
  }
});
