import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import getData from './data/getData.js';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer.js';

const data = getData();


const store = createStore(
    rootReducer,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

const myComponent =(

    <Provider store={store}>
        <App data={data}/>
    </Provider>
);
ReactDOM.render(myComponent, document.getElementById('root'));
