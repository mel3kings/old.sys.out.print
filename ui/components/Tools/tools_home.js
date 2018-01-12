import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from "react-google-maps";
import {addMarker, removeMarker} from '../../actions/action_tools_page';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class Tools extends React.Component {

    render() {
        return <div>
            <MyMapComponent
                isMarkerShown={this.props.marker}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}

            />
            <button onClick={this.props.addMarker}>Add Marker</button>
            <button onClick={this.props.removeMarker}>Remove Marker</button>
        </div>
    }

    componentWillMount() {

    }

    componentDidMount() {

    }
}

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}
        >
            {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
            {props.directions && <DirectionsRenderer directions={props.directions}/>}
        </GoogleMap>
    )
)

function mapStateToProps(state) {
    console.log(state.toolsReducer.marker);
    return {
        tools: state.toolsReducer,
        marker: state.toolsReducer.marker
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addMarker,
        removeMarker
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Tools)