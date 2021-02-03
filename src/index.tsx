import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/ReduxStore'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

export function RerenderEntireTree() {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')

  );

}
RerenderEntireTree()

// store.subscribe(() => {
//   let state = store.getState()
//   RerenderEntireTree(state)
// })
