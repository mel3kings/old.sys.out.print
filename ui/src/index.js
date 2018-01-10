import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Technologies/home';
import Showcase from '../components/showcase';
import TechnologyList from '../components/Technologies/technology_list';
import ContentPage from '../components/Technologies/content_page';
import TechnologiesBoxes from '../components/technologies_boxes';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import Favicon from 'react-favicon';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends React.Component {
    render() {
        return (
            <div>
                <Showcase/>
                <TechnologiesBoxes/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Favicon url="favicon.ico"/>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/technologies/:type/:id" component={ContentPage}/>
                        <Route path="/technologies/:type" component={TechnologyList}/>
                        <Route path="/technologies" component={Home}/>
                        <Route path="/" component={App}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </div>
    , document.querySelector('.react'));