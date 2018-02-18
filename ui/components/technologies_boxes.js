import React, {Component} from 'react';

export default class TechnologiesBoxes extends React.Component{

    render(){
       return <section id="home-heading" class="p-5">
            <div class="dark-overlay">
                <div class="row">
                    <div class="col">
                        <div class="container pt-5">
                            <h1>New Updates Feb 17, 2018</h1>
                            <p class="d-none d-md-block">
                                <ul class="list-group">
                                    <li class="list-group-item">Kubernetes Basics</li>
                                    <li class="list-group-item">Throttling + Java Atomic Library</li>
                                </ul>

                            </p>
                        </div>
                        <div class="container pt-5">
                            <h1>New Updates: Feb 7, 2018</h1>
                            <p class="d-none d-md-block">
                                <ul class="list-group">
                                    <li class="list-group-item">Architectures Tab</li>
                                    <li class="list-group-item">Eulers Challenges under Algorithm</li>
                                    <li class="list-group-item">LightSail > GoDaddy/Route 53 Setup</li>
                                    <li class="list-group-item">Running a React app on Docker</li>
                                </ul>

                            </p>
                        </div>
                        <div class="container pt-5">
                            <h1>Feel free to browse to the Technologies page.</h1>
                            <p class="d-none d-md-block">I try to cover all new technologies I can get my hands on, this just me playing with new tech coming from a
                                Java developer point of view, and notes I collect. Click About Me to know more about my history in the industry</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    };
}

