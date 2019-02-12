/* global google, e, value */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Map extends Component {
	handleChange(e, value) {
		this.props.handleChange(e, value);
	}

    componentDidMount(){
		//Google Map API access information
		var handleChange = this.props.handleChange;
		var map;
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 47.286093,
				lng: -174.568089
			},
			zoom: 3
		});
		var marker = new google.maps.Marker({
			position: {
				lat: 35.855229,
				lng: 128.491519
			},
			map: map,
			title: 'Hello World!'
		});
		//Marker event
		marker.addListener('click', function () {
			//var handleChange = this.props.handleChange;
			handleChange(null, 1);
		});

		var marker2 = new google.maps.Marker({
			position: {
				lat: 32.882524,
				lng: -117.234699
			},
			map: map,
			title: 'Hello World!'
		});
		marker2.addListener('click', function () {
			//var handleChange = this.props.handleChange;
			handleChange(null, 2);
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