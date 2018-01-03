import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderTechPage, renderTechListPage, renderTechPageDetails} from "../../actions/action_render_page";
import _ from 'lodash';

class TechnologyList extends React.Component {
    state = {
        loading: true
    };

    componentWillMount() {
        this.props.renderTechListPage(this.props.match.params.type);
        this.props.renderTechPageDetails(this.props.match.params.type)
    }

    componentDidMount(){
        this.setState({ loading: false }, this.forceUpdate());
    }

    renderList() {
        return _.map(this.props.tech, values => {
            const title = values.title;
            if(title){
                return (<a href={"/technologies/" + values.type + "/" + values.id} className="site-link-inverse list-group-item"
                           key={values.id}> {values.title}</a>);
            }

        })
    }

    renderExternalLink() {
        const externalLink = this.props.pageDetails.external_link;
        if (externalLink) {
            return <a href={externalLink} className="btn site-link-inverse">
                <i className="site-link-inverse">Read More</i>
            </a>
        }
    }

    render() {
        const loading = this.props.pageDetails;
        if(!loading){ // to prevent 'null pointer' on initial load
            return <div className="container"><div> Loading...</div></div>
        }
        return <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-8 col-lg-9 col-xl-10">
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <h1 className="display-2 mt-5 pt-5 text-uppercase">
                                {this.props.match.params.type}
                            </h1>
                            <p className="lead">{this.props.pageDetails.description}</p>
                            {this.renderExternalLink()}
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

function mapStateToProps(state ,ownProps) {
    console.log(state.techReducer[ownProps.match.params.type]);
    return Object.assign({}, state, {
        tech: state.techReducer,
        pageDetails: state.techReducer[ownProps.match.params.type]
    });
}

export default connect(mapStateToProps, {renderTechPage, renderTechListPage, renderTechPageDetails})(TechnologyList)