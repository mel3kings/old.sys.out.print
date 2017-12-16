import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderTechPage, renderTechListPage, renderContentPage} from "../../actions/action_render_page";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class ContentPage extends React.Component {
    componentWillMount() {
        this.props.renderContentPage(this.props.match.params.type, this.props.match.params.id);
    }



    render() {
        return <div className="container">
             {ReactHtmlParser(this.props.tech.data)}
        </div>
    }
}

function mapStateToProps(state) {
    return {tech: state.techReducer}
}

export default connect(mapStateToProps, {renderTechPage, renderTechListPage,renderContentPage})(ContentPage)