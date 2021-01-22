import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/ReduxStore'

export function RerenderEntireTree() {
  ReactDOM.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );

}
RerenderEntireTree()

store.subscribe(RerenderEntireTree)
