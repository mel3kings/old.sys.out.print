import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="card bg-dark text-white">
                    <img class="card-img" src="http://lorempixel.com/900/200/city/"/>
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img class="card-img" src="http://lorempixel.com/900/200/abstract/1/TEST"/>
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img class="card-img" src="http://lorempixel.com/900/200/city/2"/>
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img class="card-img" src="http://lorempixel.com/900/200/abstract/3"/>
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

