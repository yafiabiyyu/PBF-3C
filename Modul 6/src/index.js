import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer'
import App from './App';
import Table from './container/Table';
import CreateTodo from './container/CreateTodo';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>
f)(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
    
    <Table />
    <CreateTodo />
</Provider>,document.getElementById('root'));
serviceWorker.unregister();
