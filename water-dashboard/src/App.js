// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from './containers/AppBar'; 
import Map from './containers/Map';
import InfoPanel from './containers/InfoPanel';
import InfoPanel2 from './containers/InfoPanel2';
import InfoPanel3 from './containers/InfoPanel3';
import Grid from '@material-ui/core/Grid';
import './App.css';

const TOKEN = "pk.eyJ1Ijoic2txbDEzMSIsImEiOiJjam1yN2s3MjkwMDAwM3Fucml5enMwYmNoIn0.qI7zb7L6ufxpBi6Z1BvuHg";
const LONG = 128.491519;
const LAT = 35.855229;
const ZOOM = 14.26;
const STYLE_ID = 'mapbox://styles/mapbox/streets-v9';


export default class App extends Component {
    
    constructor() {
        super();
        this.state = {
            value: 1,
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (event, value) => {
        if (value === 1) {
            this.setState({ value: 1 });
            console.log('ee');
        }
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
        <div>
            {/* <AppBar/> */}
             {/* <h1 style = {{margin: '10px 0px 0px 10px'}}>
                Water Quality Map.
            </h1>
            <div style={{margin: '10px 10px 10px 10px', fontSize: '18px'}}>
                Your health is important to us.These strips are specially formulated
                for multi - use which may not be sensitive enough
                for testing certain elements in drinking water.<br/>Currently there is no such home test
                for testing trace amounts of lead, copper, iron, and fluoride.If you need an in -depth analysis of your drinking water, please seek lab testing.
            </div>
            <div style={{margin: '10px 10px 10px 10px'}}>
                Important Information
                <br/>● Keep cap tightly closed between each use.
                <br/>● Store at room temperature.
            </div> */}
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    {/* <MapBox
                        token= { TOKEN }
                        longitude= { LONG }
                        latitude= { LAT }
                        zoom= { ZOOM }
                        showPopUp= { true }
                        style = { STYLE_ID }
                    /> */}
                    <Map handleChange = {this.handleChange}/>
                </Grid>
                <Grid item xs={6}>
                    {
                    this.state.value == 1 ? (<InfoPanel/>):(<div></div>)
                    } {
                    this.state.value == 2 ? (<InfoPanel3/>):(<div></div>)
                    }
                </Grid>
            </Grid>
    
        </div>
        );
    }
}