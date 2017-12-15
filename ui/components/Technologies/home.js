import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderTechPage} from "../../actions/render_page";
import _ from 'lodash';
class TechHome extends Component {
    componentDidMount(){
        this.props.renderTechPage();
    }

    renderBoxes(){
        return _.map(this.props.tech, data=> {
            return (
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <img src="{data.image}" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                            <h3>{data.name}</h3>
                            <h5 className="text-muted">{data.subtitle}</h5>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>

            );
        })
    }
    render() {
        return (
            <div className="container">
                <ul>

                </ul>
                <br/><br/>
                <section id="authors" className="my-5 text-center">
                    <div className="row">
                        {this.renderBoxes()}
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {tech : state.techReducer}
}

export default connect(mapStateToProps, {renderTechPage})(TechHome)