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
                <div className="col-md-3 col-sm-3 col-xs-12" key={data.id}>

                    <div className="h_boxes">
                        <a href={data.link}>
                            {data.image &&
                            <img src={data.image} className="img-responsive" width="100%" alt="img"/>
                            }
                            <div className="h_details">
                                <h3>{data.name}</h3>
                                <h4>{data.subtitle}</h4>
                                <p>{data.description}</p>
                            </div>
                        </a>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <section className="h_content">
                <div className="container">
                    <div className="row">
                        {this.renderBoxes()}
                    </div>
                </div>
            </section>

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