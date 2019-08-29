import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  getTodos,
  getTodosSuccess,
  getTodosFailure,
  postTodos,
  postTodosSuccess,
  postTodosFailure,
} from '../actions/todo';

const Todo = props => {
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.getTodos();
    axios('https://4897c71f.ngrok.io/todos')
      .then(res => {
        setLoading(false);
        props.getTodosSuccess(res.data);
      })
      .catch(() => props.getTodosFailure());
  }, []);

  function handleAddTodo(todo) {
    props.postTodos();
    axios
      .post('https://4897c71f.ngrok.io/todos', {
        todo: newTodo,
      })
      .then(res => {
        props.postTodosSuccess(res.data);
        setNewTodo('');
      })
      .catch(() => props.postTodosFailure());
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
          onChangeText={todo => setNewTodo(todo)}
          value={newTodo}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddTodo} style={styles.add}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todos}>
        {props.todos.todos.map((todo, idx) => (
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

const mapStateToProps = ({todos}) => ({
  todos,
});

const mapActionToProps = dispatch =>
  bindActionCreators(
    {
      getTodos,
      getTodosSuccess,
      getTodosFailure,
      postTodos,
      postTodosSuccess,
      postTodosFailure,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapActionToProps,
)(Todo);
