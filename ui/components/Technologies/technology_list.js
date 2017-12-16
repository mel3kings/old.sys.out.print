import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderTechPage, renderTechListPage} from "../../actions/action_render_page";
import _ from 'lodash';

class TechnologyList extends React.Component {
    componentWillMount() {
        this.props.renderTechListPage(this.props.match.params.type);
    }

    renderList() {
        return _.map(this.props.tech, values => {
            return (<a href={"/technologies/" + values.type + "/" + values.id} className="site-link-inverse list-group-item"
                       key={values.id}> {values.title}</a>);
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-8 col-lg-9 col-xl-10">
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <h1 className="display-2 mt-5 pt-5 text-uppercase">
                                {this.props.match.params.type}
                            </h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quas.</p>
                            <a href="#" className="btn site-link-inverse">
                                <i className="site-link-inverse">Read More</i> </a>
                        </div>

                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                       {this.renderList()}
                </div>
            </div>

        </div>
    }
}

function mapStateToProps(state) {
    return {tech: state.techReducer}
}

export default connect(mapStateToProps, {renderTechPage, renderTechListPage})(TechnologyList)