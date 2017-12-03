import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/navbar';
import Home from '../components/Java/home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from '../reducers';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends React.Component {
    render() {
        return (
            <div><NavBar/></div>
        );
    }
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/test" component={Home} />
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.react'));