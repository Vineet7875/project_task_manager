import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Routes/dashboard";
import { Provider } from 'react-redux';
import store from './Redux/store';
ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>,
    document.getElementById('root')
);
