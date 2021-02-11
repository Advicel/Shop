import ReactDOM from 'react-dom';
import React from 'react';
import getData from './data/getData.js';
import ShopContent from './components/ShopContent.js';
import Filters from './components/Filters/Filters.js';
import {Provider} from 'react-redux';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer.js';

const data = getData();

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const myComponent = (
  <Provider store={store}>
    <div>
      <Filters data={data} />
      <ShopContent data={data} />
    </div>
  </Provider>
);

ReactDOM.render(myComponent, document.getElementById('root'));
