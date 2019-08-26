import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('https://4c163175.ngrok.io/todos')
      .then(res => {
        setLoading(false);
        setTodos(res.data);
      })
      .catch(console.error);
  }, []);

  function handleAddTodo(todo) {
    axios
      .post('https://4c163175.ngrok.io/todos', {
        todo: newTodo,
      })
      .then(res => {
        setTodos([...todos, res.data]);
        setNewTodo('');
      })
      .catch(console.error);
  }

  if (loading) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          onChangeText={newTodo => setNewTodo(newTodo)}
          value={newTodo}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddTodo} style={styles.add}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todos}>
        {todos.map((todo, idx) => (
          <Text key={idx} style={styles.todo}>
            {todo.todo}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,0,0,0.4)',
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  add: {
    flex: 0.3,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  todos: {
    paddingTop: 20,
  },
  todo: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
  },
});

export default Todo;
