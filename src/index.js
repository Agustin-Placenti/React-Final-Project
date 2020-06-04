import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import getRoutes from './routes/';
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        {getRoutes()}
    </Provider>,
    document.getElementById('root')
);
