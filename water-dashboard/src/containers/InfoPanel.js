/* global am4core, am4themes_animated, am4charts */
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

// Themes end


// Create chart instance
export default class InfoPanel3 extends Component {
    componentDidMount() {
        var graphMaker = (data, tag, maxValue, normal) => {
            am4core.useTheme(am4themes_animated);

            var chart = am4core.create(tag, am4charts.XYChart);

            // Add data
            chart.data = data;

            // Create axes

            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "name";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 100;
            
            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());


            valueAxis.renderer.gridContainer.zIndex = 1;
            valueAxis.calculateTotals = true;
            valueAxis.min = 0;
            valueAxis.max = maxValue;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.strictMinMax = true;

            var axisRange = valueAxis.axisRanges.create();
            axisRange.value = normal;
            axisRange.grid.strokeOpacity = 0.9;
            axisRange.grid.stroke = am4core.color("#FF0000");
            //axisRange.label.text = "한계션";
            //axisRange.label.fill = axisRange.grid.stroke;
            //axisRange.label.color = am4core.color("#A96478");
            axisRange.label.align = "right";
            axisRange.label.verticalCenter = "bottom";
            axisRange.label.fillOpacity = 0.7;

            // Create series
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "value";
            series.dataFields.categoryX = "name";
            series.name = "value";
            if (data[0].name === 'PH') {
                series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            } else {
                series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/] mg/L";
            }
            series.columns.template.fillOpacity = .8;

            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;

        }
        // Themes begin
        graphMaker([{
            "name": "PH",
            "value": 6.8
        }], "chartdiv33",
        14,
        7);
        graphMaker([{
            "name": "알칼리도",
            "value": 100
        }], "chartdiv34",
        400,
        300);
        graphMaker([{
            "name": "경도",
            "value": 70
        }], "chartdiv35",
        500,
        300);
        graphMaker([{
            "name": "철",
            "value": 0
        }], "chartdiv36",
        100,
        0.3);
        graphMaker([{
            "name": "구리",
            "value": 0
        }], "chartdiv37",
        100,
        0);
        graphMaker([{
            "name": "질산염",
            "value": 5
        }], "chartdiv38",
        100,
        10);
        graphMaker([{
            "name": "아질산염",
            "value": 0.1
        }], "chartdiv39",
        80,
        60);
        graphMaker([{
            "name": "총 염소",
            "value": 0
        }], "chartdiv40",
        500,
        250);
        graphMaker([{
            "name": "PH",
            "value": 6
        }], "chartdiv41",
        14,
        7);
        graphMaker([{
            "name": "알칼리도",
            "value": 10
        }], "chartdiv42",
        400,
        300);
        graphMaker([{
            "name": "경도",
            "value": 120
        }], "chartdiv43",
        500,
        300);
        graphMaker([{
            "name": "철",
            "value": 0
        }], "chartdiv44",
        100,
        0.3);
        graphMaker([{
            "name": "구리",
            "value": 10
        }], "chartdiv45",
        100,
        0);
        graphMaker([{
            "name": "질산염",
            "value": 10
        }], "chartdiv46",
        100,
        10);
        graphMaker([{
            "name": "아질산염",
            "value": 5
        }], "chartdiv47",
        80,
        60);
        graphMaker([{
            "name": "총 염소",
            "value": 0
        }], "chartdiv48",
        500,
        250);
    }
    render() {
        return (
            < Paper style = {
                {
                    height: '100%',
                    margin: '0px 10px 0px 0px'
                }
            } >
                {/* <h3>1095, Dalgubeol-daero, Dalseo-gu, Daegu, Republic of Korea (Tap Water, 'ECO' Test Kit)</h3> */}
                <h3 style={{margin: '0px 0px 0px 10px'}}>계명대학교 산학협력관 1F 화장실 (Tap Water, 'ECO' Test Kit)</h3>
                <div style={{margin: '0px 0px 0px 10px'}}> Sunday, February 10, 2019 6: 12: 54 PM GMT + 09: 00</div>
                <pre>     <b><font color='#ff0000'>━━━</font> 한계선</b></pre>
                <table>
                    <th id="chartdiv33" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv34" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv35" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv36" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv37" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv38" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv39" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv40" style={{height: 'calc(90% - 30px)'}}></th>
                </table>
                <h3 style={{margin: '0px 0px 0px 10px'}}>계명대학교 세븐일레븐 편의점 ICIS 샘물 (Purified Water, 'ECO' Test Kit)</h3>
                <div style={{margin: '0px 0px 0px 10px'}}> Sunday, February 10, 2019 6: 12: 54 PM GMT + 09: 00</div>
                <pre>     <b><font color='#ff0000'>━━━</font> 한계선</b></pre>
                <table>
                    <th id="chartdiv41" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv42" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv43" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv44" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv45" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv46" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv47" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv48" style={{height: 'calc(90% - 30px)'}}></th>
                </table>
            </Paper>
        );
    }
}