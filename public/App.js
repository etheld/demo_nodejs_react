import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import dataHandler from './dataHandler/restapi.js'
import todoApp from './reducers'
// import App from './components/App'
import TodoList from './components/TodoList'

let store = createStore(todoApp,{}, applyMiddleware(dataHandler))

render( <Provider store={store}></Provider>, document.getElementById('myApp'));

store.dispatch({type: 'GET_TODO_DATA'})
