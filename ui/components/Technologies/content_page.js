import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderTechPage, renderTechListPage, renderContentPage, performAnalytics} from "../../actions/action_render_page";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import DocumentMeta from 'react-document-meta';
class ContentPage extends React.Component {
    componentWillMount() {
        this.props.renderContentPage(this.props.match.params.type, this.props.match.params.id);
        this.props.performAnalytics(window.location.pathname + window.location.search);
    }

    render() {
        const meta = {
            title: `${this.props.tech.header}`,
            description:`how to ${this.props.tech.header} tutorial basic`,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: `${this.props.match.params.type}, ${this.props.tech.header}, tutorial, how to, java, aws, docker, basics, basic, how, to`
                }
            }
        };
        return <div className="container">
            <DocumentMeta {...meta} />
            <h2>{this.props.tech.header}</h2>
             {ReactHtmlParser(this.props.tech.data)}
        </div>
    }
    componentDidMount(){
        document.title=this.props.tech.header;
    }

}

function mapStateToProps(state) {
    return {tech: state.techReducer}
}

export default connect(mapStateToProps, {renderTechPage, renderTechListPage,renderContentPage,performAnalytics})(ContentPage)