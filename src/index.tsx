import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/ReduxStore'

export function RerenderEntireTree(state: any) {
  ReactDOM.render(
    <App
      state={state}
      store={store}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
    
  );

}
RerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  RerenderEntireTree(state)
})
