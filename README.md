# Managing Global States with Redux
## Introduction

This guide aims to provide an understanding of managing global states in React applications using Redux and Redux Toolkit. We'll explore the concepts of immutability, the benefits of using Redux for state management, and how to utilize React-Redux hooks for efficient coding practices.

## Getting Started with Redux

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

### Old Way of Creating States

Initially, Redux required several boilerplate codes, such as defining action types, action creators, and reducers manually.

```
// Action Types
const ADD_TODO = 'ADD_TODO';

// Action Creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

// Reducer
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text }];
    default:
      return state;
  }
}
```

### Setting Up Redux

1. Install Redux: npm install redux
2. Create a store: Use createStore from Redux.

## Transitioning to Redux Toolkit

Redux Toolkit simplifies Redux application development. It includes utilities to configure stores, create reducers, perform immutable updates, and more.

```
import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload });
    },
  },
});

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export const { addTodo } = todosSlice.actions;
```

## Understanding Immutability

Immutability is a core concept in Redux. It means that the state object cannot be changed directly. Instead, you must generate a new object with the changes. This practice helps prevent unintended side effects and makes state changes predictable.

## Using React-Redux Hooks

React-Redux hooks such as useSelector and useDispatch make it easier to interact with the Redux store in functional components.

```
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './store';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    dispatch(addTodo('New Todo'));
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Best Practices for State Management

1. Keep your state shape flat: This makes it easier to write reducers and avoid deep nesting.
2. Use Redux Toolkit: It simplifies Redux development and reduces boilerplate.
3. Normalize state shape: Helps in managing relationships and ensures consistency.
4. Immutable updates: Always return new state objects instead of mutating the existing ones.
