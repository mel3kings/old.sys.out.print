import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Showcase extends Component{
    render() {
        return (
            <section id="showcase" className="py-5">
                <div className="primary-overlay text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center">
                                <h1 className="display-2 mt-5 pt-5">
                                   Sleep. Code. Repeat.
                                </h1>
                                <p className="lead">Ramblings/Notes of a programmer</p>
                                <a href="https://www.linkedin.com/in/melchor-tatlonghari-b111986a/" className="btn btn-outline-secondary btn-lg text-white">
                                    <i className="fa fa-arrow-right"></i> Read More</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}