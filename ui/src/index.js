import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Technologies/home';
import Tools from '../components/Tools/tools_home';
import Architectures from '../components/Architectures/architectures_home';
import Showcase from '../components/showcase';
import TechnologyList from '../components/Technologies/technology_list';
import ContentPage from '../components/Technologies/content_page';
import TechnologiesBoxes from '../components/technologies_boxes';
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import Favicon from 'react-favicon';
import ReactGA from 'react-ga';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends React.Component {
    componentWillMount(){
        ReactGA.initialize('UA-93890669-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    render() {
        return (
            <div>
                <Showcase/>
                ASDASDAS
                <Link to="/technologies">Home</Link>

                <TechnologiesBoxes/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Favicon url="/src/img/favicon.ico"/>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Redirect from='/index.php/2017/03/28/comparable-vs-comparator' to='/technologies/java/3'/>
                        <Redirect from='/index.php/2017/03/28/comparable-vs-comparator/' to='/technologies/java/3'/>
                        <Route path="/technologies/:type/:id" component={ContentPage}/>
                        <Route path="/technologies/:type" component={TechnologyList}/>
                        <Route path="/technologies" component={Home}/>
                        <Route path="/tools/" component={Tools}/>
                        <Route path="/architectures" component={Architectures}/>
                        <Route path="/" component={App}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </div>

    , document.querySelector('.react'));