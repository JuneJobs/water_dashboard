import React, { Component } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

export default class Mapbox extends Component {
	constructor(props) {
		super(props)
		this.map={}
	        
	}
	componentDidMount() {
		// token from https://www.mapbox.com/mapbox-gl-js/examples/
		mapboxgl.accessToken = "pk.eyJ1Ijoic2txbDEzMSIsImEiOiJjam1yN2s3MjkwMDAwM3Fucml5enMwYmNoIn0.qI7zb7L6ufxpBi6Z1BvuHg";

        this.map = new mapboxgl.Map({
            container: 'map', // container id
    		style: "mapbox://styles/mapbox/streets-v9", //stylesheet location
    		center: [-35.856233, 128.486997], // starting position
    		zoom: 11 // starting zoom
        });

        var innerThis = this;
        

        innerThis.map.on('load', function () {

           console.log('map loaded')
        }) 
	}

	componentDidUpdate() {
		
	}

	render() {
		return (
		 	<div />
		);
	}
}
