import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {
  return props.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} toggleComplete={props.toggleComplete} />
  ));
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
