import React from 'react';
import {connect} from "react-redux";

class Architectures extends React.Component {

    render() {
        return <div className="m-5">
            <h1> Architectures</h1>
            <small className="text-muted">Different possible types of System architecture with varying Technology stack</small>
            <section id="authors" className="my-5 text-center m-5">
                <div className="row">
                    <div className="card col-lg-5">
                        <img className="card-img-top" src="../../src/img/architectures/Architecture.png"
                             alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Fully Scalable Email Service</h4>
                            <p className="card-text">
                                In this architecture we have an Akka Actor cluster behind a number of EC2 instances, this helps
                                manages any asynchronous transactions used in between nodes. Prevents any block and fully utilizes
                                all the nodes through Actor Model.
                                For more explanation visit my github page:</p>
                            <a href="https://github.com/mel3kings/scalable-email-service"
                               className="btn btn-primary">Github</a>
                            <br/>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    }
}


export default connect(null, null)(Architectures)