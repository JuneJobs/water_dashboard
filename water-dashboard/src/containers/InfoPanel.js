/* global am4core, am4themes_animated, am4charts */
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const styles ={
    
}

export default class InfoPanel extends Component {
    componentDidMount() {
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("chartdiv", am4charts.XYChart3D);
        chart.data = [{
            "year": 'PH',
            "income": 6.8,
            "color": chart.colors.next()
        }, {
            "year": 'Alkalinity',
            "income": 100,
            "color": chart.colors.next()
        }, {
            "year": 'Hardness',
            "income": 70,
            "color": chart.colors.next()
        }, {
            "year": 'Iron',
            "income": 0,
            "color": chart.colors.next()
        }, {
            "year": 'Copper',
            "income": 0,
            "color": chart.colors.next()
        }, {
            "year": 'Nitrate',
            "income": 5,
            "color": chart.colors.next()
        }, {
            "year": 'Nitrite',
            "income": 0.1,
            "color": chart.colors.next()
        }, {
            "year": 'TotalChlorine',
            "income": 0,
            "color": chart.colors.next()
        }];

        // Create axes
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.numberFormatter.numberFormat = "#";
        categoryAxis.renderer.inversed = true;

        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.valueX = "income";
        series.dataFields.categoryY = "year";
        series.name = "Income";
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.tooltipText = "{valueX}";
        series.columns.template.column3D.stroke = am4core.color("#fff");
        series.columns.template.column3D.strokeOpacity = 0.2;
    }
    render() {
        return (
            < Paper style = {
                {
                    height: '100%',
                    margin: '0px 10px 0px 0px'
                }
            } >
                <br/> Sunday, February 10, 2019 6: 12: 54 PM GMT + 09: 00
                <h3>1095, Dalgubeol-daero, Dalseo-gu, Daegu, Republic of Korea (Tap Water, 'ECO' Test Kit)</h3>
                <div id="chartdiv" style={{height: 'calc(90% - 30px)'}}></div>
            </Paper>
        );
    }
}