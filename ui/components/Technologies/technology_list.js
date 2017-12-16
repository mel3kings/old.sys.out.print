import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderTechPage, renderTechListPage} from "../../actions/render_page";
import _ from 'lodash';
class TechnologyList extends React.Component{
   componentWillMount(){
       this.props.renderTechListPage(this.props.match.params.id);
   }

   renderList(){
     return _.map(this.props.tech, values =>{
         return (<a href="#" className="site-link list-group-item" key={values.id}> {values.link}</a>);
     })
   }

    render(){
        return <div>
            <h1>hello { this.props.match.params.id}</h1>
            <div className="list-group">
                {this.renderList()}
            </div>
        </div>
    }
}

function mapStateToProps(state){
    return {tech : state.techReducer}
}

export default connect(mapStateToProps, {renderTechPage, renderTechListPage})(TechnologyList)