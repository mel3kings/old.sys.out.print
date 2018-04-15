import React from 'react';
import {connect} from 'react-redux';
import AdSense from 'react-adsense';
import {bindActionCreators} from 'redux';
import {
    renderTechPage,
    renderTechListPage,
    renderContentPage,
    performAnalytics
} from "../../actions/action_render_page";
import ReactHtmlParser from 'react-html-parser';
import DocumentMeta from 'react-document-meta';

class ContentPage extends React.Component {
    componentWillMount() {
        this.props.renderContentPage(this.props.match.params.type, this.props.match.params.id);
        this.props.performAnalytics(window.location.pathname + window.location.search);
    }

    render() {
        const meta = {
            title: `${this.props.tech.header}`,
            description: `how to ${this.props.tech.header} tutorial basic`,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: `${this.props.match.params.type}, ${this.props.tech.header}, tutorial, how to, java, aws, docker, basics, basic, how, to`
                }
            }
        };
        return <section id="home-heading" className="p-5">
            <div className="row">
                <div className="container">
                    <DocumentMeta {...meta} />
                    <h2>{this.props.tech.header}</h2>
                    {ReactHtmlParser(this.props.tech.data)}
                </div>
                <div className="col-2">
                    <AdSense.Google
                        client='ca-pub-9837645739197927'
                        slot='7685322363'
                        style={{width: 300, height: 150, float: 'right'}}/>
                    <AdSense.Google
                        client='ca-pub-9837645739197927'
                        slot='7685322363'
                        style={{width: 300, height: 300, float: 'right'}}/>
                </div>
            </div>
        </section>
    }

    componentDidMount() {
        document.title = this.props.tech.header;
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        renderTechPage,
        renderTechListPage, renderContentPage, performAnalytics
    }, dispatch);
}

function mapStateToProps(state) {
    return {tech: state.techReducer}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage)