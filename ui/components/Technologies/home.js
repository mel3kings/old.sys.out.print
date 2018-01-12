import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    renderTechPage, performAnalytics
} from "../../actions/action_render_page";
import _ from 'lodash';

class TechHome extends React.Component {
    componentDidMount() {
        this.props.renderTechPage();
        this.props.performAnalytics(window.location.pathname + window.location.search);
    }

    renderBoxes() {
        return _.map(this.props.tech, data => {
            return (
                <a href={data.link} className="pb-3 site-link col-lg-3 col-md-6" key={data.id}>
                    <div className="card">
                        <div className="card-body">
                            <img src="{data.image}" alt="" className="img-fluid rounded-circle w-50 mb-3"/>
                            <h3>{data.name}</h3>
                            <h5 className="text-muted">{data.subtitle}</h5>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </a>
            );
        })
    }

    render() {
        return (
            <div className="container">
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

function mapStateToProps(state) {
    return {tech: state.techReducer}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        renderTechPage, performAnalytics
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TechHome)