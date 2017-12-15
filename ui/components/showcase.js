import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Showcase extends Component{
    render() {
        return (
            <section id="showcase" class="py-5">
                <div class="primary-overlay text-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 text-center">
                                <h1 class="display-2 mt-5 pt-5">
                                   Sleep. Code. Repeat.
                                </h1>
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quas.</p>
                                <a href="#" class="btn btn-outline-secondary btn-lg text-white">
                                    <i class="fa fa-arrow-right"></i> Read More</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}