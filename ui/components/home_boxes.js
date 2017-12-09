import React, {Component} from 'react';

export default class HomeBoxes extends Component{
    render(){
        return <section id="boxes" class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card text-center border-primary">
                            <div class="card-body">
                                <h3 class="text-primary">Be Better</h3>
                                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quibusdam.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-center bg-primary text-white">
                            <div class="card-body">
                                <h3>Be Smarter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quibusdam.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-center border-primary">
                            <div class="card-body">
                                <h3 class="text-primary">Be Faster</h3>
                                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quibusdam.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-center bg-primary text-white">
                            <div class="card-body">
                                <h3>Be Stronger</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quibusdam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    };
}