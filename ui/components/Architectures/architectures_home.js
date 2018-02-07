import React from 'react';
import {connect} from "react-redux";

class Architectures extends React.Component {

    render() {
        return <div className="m-5">
            <section className="h_content">
                <div className="container">
                    <h1> Architectures</h1>
                    <small className="text-muted">Different possible types of System architecture with varying
                        Technology
                        stack
                    </small>
                    <div className="row">
                        <div className="col-md-5 col-sm-5 col-lg-5">
                            <div className="h_boxes">
                                <img className="card-img-top" src="../../src/img/architectures/Architecture.png"
                                     alt="Card image cap"/>
                                <div className="h_details">
                                    <h4 className="card-title"><b>Fully Scalable Email Service</b></h4>
                                    <p className="text-justify">In this architecture we have an Akka Actor cluster
                                        behind a number of EC2 instances,
                                        this helps
                                        manages any asynchronous transactions used in between nodes. Prevents any block
                                        and
                                        fully utilizes
                                        all the nodes through Actor Model.
                                        For more explanation visit my github page:</p>
                                    <a href="https://github.com/mel3kings/scalable-email-service"
                                       className="btn btn-primary">Github</a>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5 col-lg-5">
                            <div className="h_boxes">
                                <img className="card-img-top"
                                     src="../../src/img/architectures/sysoutprint_architecture.PNG"
                                     alt="Card image cap"/>
                                <div className="h_details">
                                    <h4 className="card-title"><b>sys.out.print Architecture</b></h4>
                                    <p className="text-justify">
                                        How this site is currently designed, we have React + Boostrap running on
                                        Docker/AWS LightSail,
                                        backed by a NodeJS server that holds Contents API which serves the HTML pages to
                                        render each article </p>
                                    <a href="https://github.com/mel3kings/sys.out.print"
                                       className="btn btn-primary">Github</a>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    }
}


export default connect(null, null)(Architectures)