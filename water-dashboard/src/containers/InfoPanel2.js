/* global am4core, am4themes_animated, am4charts */
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const styles ={
    
}

export default class InfoPanel2 extends Component {
    componentDidMount() {
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("chartdiv", am4charts.XYChart3D);
        chart.data = [{
            "year": 'Chlorine',
            "income": 0.8,
            "color": chart.colors.next()
        }, {
            "year": 'PH',
            "income": 6,
            "color": chart.colors.next()
        }, {
            "year": '알칼리도',
            "income": 76.47,
            "color": chart.colors.next()
        }, {
            "year": 'Hardness',
            "income": 183,
            "color": chart.colors.next()
        }, {
            "year": 'Iron',
            "income": 0,
            "color": chart.colors.next()
        }, {
            "year": 'Copper',
            "income": 12,
            "color": chart.colors.next()
        }, {
            "year": 'Lead',
            "income": 12,
            "color": chart.colors.next()
        }, {
            "year": 'Nitrate',
            "income": 12,
            "color": chart.colors.next()
        }, {
            "year": 'Nitrite',
            "income": 5,
            "color": chart.colors.next()
        }, {
            "year": 'Bromine',
            "income": 1,
            "color": chart.colors.next()
        }, {
            "year": 'TotalChlorine',
            "income": 0,
            "color": chart.colors.next()
        }, {
            "year": 'Cyanuric Acid',
            "income": 186,
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
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.tooltipText = "{valueX}";
        series.columns.template.column3D.stroke = am4core.color("#fff");
        series.columns.template.column3D.strokeOpacity = 0.2;

        // chart 2
        var chart2 = am4core.create("chartdiv2", am4charts.XYChart3D);
        chart2.data = [{
            "year": 'Chlorine',
            "income": 0.8,
            "color": chart2.colors.next()
        }, {
            "year": 'PH',
            "income": 6,
            "color": chart2.colors.next()
        }, {
            "year": '알칼리도',
            "income": 76.47,
            "color": chart2.colors.next()
        }, {
            "year": 'Hardness',
            "income": 183,
            "color": chart2.colors.next()
        }, {
            "year": 'Iron',
            "income": 0,
            "color": chart2.colors.next()
        }, {
            "year": 'Copper',
            "income": 12,
            "color": chart2.colors.next()
        }, {
            "year": 'Lead',
            "income": 12,
            "color": chart2.colors.next()
        }, {
            "year": 'Nitrate',
            "income": 12,
            "color": chart2.colors.next()
        }, {
            "year": 'Nitrite',
            "income": 5,
            "color": chart2.colors.next()
        }, {
            "year": 'Bromine',
            "income": 1,
            "color": chart2.colors.next()
        }, {
            "year": 'TotalChlorine',
            "income": 0,
            "color": chart2.colors.next()
        }, {
            "year": 'Cyanuric Acid',
            "income": 186,
            "color": chart2.colors.next()
        }];

        // Create axes
        var categoryAxis2 = chart2.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis2.dataFields.category = "year";
        categoryAxis2.numberFormatter.numberFormat = "#";
        categoryAxis2.renderer.inversed = true;

        var valueAxis2 = chart2.xAxes.push(new am4charts.ValueAxis());

        // Create series
        var series2 = chart2.series.push(new am4charts.ColumnSeries3D());
        series2.dataFields.valueX = "income";
        series2.dataFields.categoryY = "year";
        series2.name = "Income";
        series2.columns.template.propertyFields.fill = "color";
        series2.columns.template.tooltipText = "{valueX}";
        series2.columns.template.column3D.stroke = am4core.color("#fff");
        series2.columns.template.column3D.strokeOpacity = 0.2;

        // chart 3
        var chart3 = am4core.create("chartdiv3", am4charts.XYChart3D);
        chart3.data = [{
            "year": 'PH',
            "income": 7,
            "color": chart3.colors.next()
        }, {
            "year": '알칼리도',
            "income": 156,
            "color": chart3.colors.next()
        }, {
            "year": 'Hardness',
            "income": 144,
            "color": chart3.colors.next()
        }, {
            "year": 'Iron',
            "income": 0,
            "color": chart3.colors.next()
        }, {
            "year": 'Copper',
            "income": 0.1,
            "color": chart3.colors.next()
        }, {
            "year": 'Nitrate',
            "income": 0.3,
            "color": chart3.colors.next()
        }, {
            "year": 'Nitrite',
            "income": 0.15,
            "color": chart3.colors.next()
        }, {
            "year": 'Total<br/>Chlorine',
            "income": 0.3,
            "color": chart3.colors.next()
        }];

        // Create axes
        var categoryAxis3 = chart3.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis3.dataFields.category = "year";
        categoryAxis3.numberFormatter.numberFormat = "#";
        categoryAxis3.renderer.inversed = true;

        var valueAxis3 = chart3.xAxes.push(new am4charts.ValueAxis());

        // Create series
        var series3 = chart3.series.push(new am4charts.ColumnSeries3D());
        series3.dataFields.valueX = "income";
        series3.dataFields.categoryY = "year";
        series3.name = "Income";
        series3.columns.template.propertyFields.fill = "color";
        series3.columns.template.tooltipText = "{valueX}";
        series3.columns.template.column3D.stroke = am4core.color("#fff");
        series3.columns.template.column3D.strokeOpacity = 0.2;

        // chart 4
        var chart4 = am4core.create("chartdiv4", am4charts.XYChart3D);
        chart4.data = [{
            "year": 'PH',
            "income": 7,
            "color": chart4.colors.next()
        }, {
            "year": '알칼리도',
            "income": 156,
            "color": chart4.colors.next()
        }, {
            "year": 'Hardness',
            "income": 144,
            "color": chart4.colors.next()
        }, {
            "year": 'Iron',
            "income": 0,
            "color": chart4.colors.next()
        }, {
            "year": 'Copper',
            "income": 0.1,
            "color": chart4.colors.next()
        }, {
            "year": 'Nitrate',
            "income": 0.3,
            "color": chart4.colors.next()
        }, {
            "year": 'Nitrite',
            "income": 0.15,
            "color": chart4.colors.next()
        }, {
            "year": 'TotalChlorine',
            "income": 0.3,
            "color": chart4.colors.next()
        }];

        // Create axes
        var categoryAxis4 = chart4.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis4.dataFields.category = "year";
        categoryAxis4.numberFormatter.numberFormat = "#";
        categoryAxis4.renderer.inversed = true;

        var valueAxis4 = chart4.xAxes.push(new am4charts.ValueAxis());

        // Create series
        var series4 = chart4.series.push(new am4charts.ColumnSeries3D());
        series4.dataFields.valueX = "income";
        series4.dataFields.categoryY = "year";
        series4.name = "Income";
        series4.columns.template.propertyFields.fill = "color";
        series4.columns.template.tooltipText = "{valueX}";
        series4.columns.template.column3D.stroke = am4core.color("#fff");
        series4.columns.template.column3D.strokeOpacity = 0.2;
    }
    render() {
        return (
            < Paper style = {
                {
                    height: '110%',
                    margin: '0px 10px 0px 0px'
                }
            } >
                <br/> Sunday, February 10, 2019 6: 12: 54 PM GMT + 09: 00
                <h3>AtkinsonHall 4th floor (Tap Water, 'ECO' Test Kit)</h3>
                <div id="chartdiv" style={{height: 'calc(23% - 30px)'}}></div>
                <h3>AtkinsonHall 4th floor (Purified Water, 'ECO' Test Kit)</h3>
                <div id="chartdiv2" style={{height: 'calc(23% - 30px)'}}></div>
                <h3>AtkinsonHall 4th floor (Tap Water, 'Water Works' Test Kit)</h3>
                <div id="chartdiv3" style={{height: 'calc(23% - 30px)'}}></div>
                <h3>AtkinsonHall 4th floor (Purified Water, 'Water Works' Test Kit)</h3>
                <div id="chartdiv4" style={{height: 'calc(23% - 30px)'}}></div>
            </Paper>
        );
    }
}