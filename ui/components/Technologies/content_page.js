import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderTechPage, renderTechListPage, renderContentPage} from "../../actions/action_render_page";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import DocumentMeta from 'react-document-meta';
class ContentPage extends React.Component {
    componentWillMount() {
        this.props.renderContentPage(this.props.match.params.type, this.props.match.params.id);
    }

    render() {
        const meta = {
            title: `${this.props.tech.header}`,
            description:`how to ${this.props.tech.header} tutorial`,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: `${this.props.match.params.type}, ${this.props.tech.header}, tutorial, how to, java, aws, docker`
                }
            }
        };
        return <div className="container">
            <DocumentMeta {...meta} />
            <h2>{this.props.tech.header} ASD</h2>
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

export default connect(mapStateToProps, {renderTechPage, renderTechListPage,renderContentPage})(ContentPage)