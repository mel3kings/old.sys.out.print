import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderTechPage} from "../../actions/render_page";

class TechHome extends Component {
    componentDidMount(){
        console.log("COMPONENT MOUNTED");
        console.log("component mount");
        this.props.renderTechPage();
    }
    render() {
        return (
            <div className="container">
                <br/><br/>
                <section id="authors" className="my-5 text-center">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="../../src/img/java.png" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                    <h3>Java</h3>
                                    <h5 className="text-muted">Sun Oracle</h5>
                                    <p>Core Java Concepts, Lambda, Streams, Futures, Memory allocation, etc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="../../src/img/aws.png" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                    <h3>AWS</h3>
                                    <h5 className="text-muted">Amazon Web Services</h5>
                                    <p>Core Java Concepts, Lambda, Streams, Futures, Memory allocation, etc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="../../src/img/aws.png" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                    <h3>Docker</h3>
                                    <h5 className="text-muted">Amazon Web Services</h5>
                                    <p>Core Java Concepts, Lambda, Streams, Futures, Memory allocation, etc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src="../../src/img/aws.png" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                                    <h3>Cassandra</h3>
                                    <h5 className="text-muted">Amazon Web Services</h5>
                                    <p>Core Java Concepts, Lambda, Streams, Futures, Memory allocation, etc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {techRenderer : state.techReducer}
}

export default connect(mapStateToProps, {renderTechPage})(TechHome)