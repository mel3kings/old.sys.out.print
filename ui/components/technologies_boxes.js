import React, {Component} from 'react';

export default class TechnologiesBoxes extends React.Component{

    render(){
       return <section id="home-heading" class="p-5">
            <div class="dark-overlay">
                <div class="row">
                    <div class="col">
                        <div class="container pt-5">
                            <h1>New Updates: Feb 25, 2018</h1>
                            <p class="d-none d-md-block">
                                <ul class="list-group">
                                    <li class="list-group-item">Implemented Continuous Integration/Deployment: Upcoming Jenkins Tutorial</li>
                                </ul>
                            </p>
                        </div>
                        <div class="container pt-5">
                            <h1>New Updates: Feb 24, 2018</h1>
                            <p class="d-none d-md-block">
                                <ul class="list-group">
                                    <li class="list-group-item">Updated NO-SQL to Big-Data</li>
                                    <li class="list-group-item">Apache Kafka (Big-Data)</li>
                                    <li class="list-group-item">How to Install Docker on EC2 (Docker)</li>
                                    <li class="list-group-item">Tools Page</li>
                                    <li class="list-group-item">Using NGROK (Tools) </li>
                                </ul>

                            </p>
                        </div>
                        <div class="container pt-5">
                            <h1>New Updates: Feb 18, 2018</h1>
                            <p class="d-none d-md-block">
                                <ul class="list-group">
                                    <li class="list-group-item">Kubernetes Basics</li>
                                    <li class="list-group-item">Throttling + Java Atomic Library</li>
                                    <li class="list-group-item">Grails (Groovy on Grails)</li>
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

