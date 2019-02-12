/* global mapboxgl */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Map extends Component {
    componentDidMount(){
        //Mapbox API access information
        const { token, longitude, latitude, zoom, minZoom, style } = this.props;
        const mapConfig = {
            container: 'map',
            style: style,
            center: [longitude, latitude],
            zoom: zoom,
        };
        mapboxgl.accessToken = token;
        
        this.map = new mapboxgl.Map(mapConfig);
        this.map.on('load', () => { 

        });
    };

    render() {
        return (
            <div id="map-container">
                <div id='map'></div>
            </div>
        );
    }   
}