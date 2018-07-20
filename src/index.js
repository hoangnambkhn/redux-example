import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import {store} from './redux/store/store';


const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <ReduxApp />,
    document.getElementById('root')
);