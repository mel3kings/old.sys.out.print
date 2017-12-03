import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NavBar extends Component{
    render() {
        return (
            <div class="card bg-dark text-white">
                <img class="card-img" src="http://lorempixel.com/900/200/sports/"></img>
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
        );
    }
}

