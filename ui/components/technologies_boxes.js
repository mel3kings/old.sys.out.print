import React, {Component} from 'react';
import AdSense from 'react-adsense';
import {renderHomePage} from "../actions/action_render_page";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
class TechnologiesBoxes extends React.Component{
    componentWillMount() {
        this.props.renderHomePage();}

    renderMonths(){
        return _.map(this.props.home, data=>{
            console.log('inside ');
            console.log(data);
            return (
                <li className="list-group-item"><a href={'/technologies/' + data.deep_link}>
                    <img src={'../../src/img/logos/'+data.image_source} type="image/png" height={25} width={25}/>
                    {data.title}
                    </a></li>
            );
        })
    }

    render(){
       return <section id="home-heading" className="p-5">
            <div className="dark-overlay">

                <div className="row">
                    <div className="col-7">
                        <div className="container pt-5">
                            <b>New Topics:</b>
                                <ul className="list-group">
                                    {this.renderMonths()}
                                </ul>
                        </div>
                        <div className="container pt-5">
                            <h1>Feel free to browse to the Technologies page.</h1>
                            <p className="d-none d-md-block">I try to cover all new technologies I can get my hands on, this just me playing with new tech coming from a
                                Java developer point of view, and notes I collect. Click About Me to know more about my history in the industry</p>
                        </div>
                    </div>
                    <div className="col-3" id="insert">
                        <AdSense.Google
                            client='ca-pub-9837645739197927'
                            slot='9279171029'
                            style={{ width: 300, height: 500, float: 'left' }}
                        />
                        <AdSense.Google
                            client='ca-pub-9837645739197927'
                            slot='5092747452'
                            style={{ width: 300, height: 500, float: 'left' }}
                        />
                        <AdSense.Google
                            client='ca-pub-9837645739197927'
                            slot='7685322363'
                            style={{ width: 300, height: 300, float: 'left' }}/>
                    </div>
                </div>
            </div>
        </section>
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        renderHomePage,
    }, dispatch);
}

function mapStateToProps(state) {
    return {home: state.techReducer}
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologiesBoxes)