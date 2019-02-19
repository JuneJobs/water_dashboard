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
            "value": 7
        }], "chartdiv1", 
        14,
        6);
        graphMaker([{
            "name": "알칼리도",
            "value": 76.47
        }], "chartdiv2", 
        400,
        300);
        graphMaker([{
            "name": "경도",
            "value": 183
        }], "chartdiv3", 
        500,
        300);
        graphMaker([{
            "name": "철",
            "value": 0
        }], "chartdiv4",
        100,
        0.3);
        graphMaker([{
            "name": "구리",
            "value": 12
        }], "chartdiv5",
        100,
        0);
        graphMaker([{
            "name": "질산염",
            "value": 12
        }], "chartdiv6",
        100,
        10);
        graphMaker([{
            "name": "아질산염",
            "value": 5
        }], "chartdiv7",
        80,
        60);
        graphMaker([{
            "name": "총 염소",
            "value": 0
        }], "chartdiv8",
        500,
        250);
        graphMaker([{
            "name": "PH",
            "value": 5.5
        }], "chartdiv9", 
        14,
        7);
        graphMaker([{
            "name": "알칼리도",
            "value": 10
        }], "chartdiv10",
        400,
        300);
        graphMaker([{
            "name": "경도",
            "value": 120
        }], "chartdiv11", 
        500,
        300);
        graphMaker([{
            "name": "철",
            "value": 0
        }], "chartdiv12",
        100,
        0.3);
        graphMaker([{
            "name": "구리",
            "value": 5.5
        }], "chartdiv13",
        100,
        0);
        graphMaker([{
            "name": "질산염",
            "value": 14
        }], "chartdiv14",
        100,
        10);
        graphMaker([{
            "name": "아질산염",
            "value": 5
        }], "chartdiv15",
        80,
        60);
        graphMaker([{
            "name": "총 염소",
            "value": 0
        }], "chartdiv16",
        500,
        250);
        graphMaker([{
            "name": "PH",
            "value": 7
        }], "chartdiv17",
        14,
        7);
        graphMaker([{
            "name": "알칼리도",
            "value": 156
        }], "chartdiv18",
        400,
        300);
        graphMaker([{
            "name": "경도",
            "value": 144
        }], "chartdiv19", 
        500,
        300);
        graphMaker([{
            "name": "철",
            "value": 0
        }], "chartdiv20",
        100,
        0.3);
        graphMaker([{
            "name": "구리",
            "value": 0.1
        }], "chartdiv21",
        100,
        0);
        graphMaker([{
            "name": "질산염",
            "value": 0.3
        }], "chartdiv22",
        100,
        10);
        graphMaker([{
            "name": "아질산염",
            "value": 0.15
        }], "chartdiv23",
        80,
        60);
        graphMaker([{
            "name": "총 염소",
            "value": 0.3
        }], "chartdiv24",
        500,
        250);
        graphMaker([{
            "name": "PH",
            "value": 6
        }], "chartdiv25",
        14,
        7);
        graphMaker([{
            "name": "알칼리도",
            "value": 0
        }], "chartdiv26",
        400,
        300);
        graphMaker([{
            "name": "경도",
            "value": 0
        }], "chartdiv27",
        500,
        300);
        graphMaker([{
            "name": "철",
            "value": 0
        }], "chartdiv28",
        100,
        0.3);
        graphMaker([{
            "name": "구리",
            "value": 0
        }], "chartdiv29",
        100,
        0);
        graphMaker([{
            "name": "질산염",
            "value": 0
        }], "chartdiv30",
        100,
        10);
        graphMaker([{
            "name": "아질산염",
            "value": 0.15
        }], "chartdiv31",
        80,
        60);
        graphMaker([{
            "name": "총 염소",
            "value": 0.14
        }], "chartdiv32",
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
                <h3 style={{margin: '0px 0px 0px 10px'}}>AtkinsonHall 4th floor (Tap Water, 'ECO' Test Kit)</h3>
                <div style={{margin: '0px 0px 0px 10px'}}> Sunday, February 10, 2019 6: 12: 54 PM GMT + 09: 00</div>
                <pre>     <b><font color='#ff0000'>━━━</font> 한계선</b></pre>
                <table>
                    <th id="chartdiv1" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv2" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv3" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv4" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv5" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv6" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv7" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv8" style={{height: 'calc(90% - 30px)'}}></th>
                </table>
                <h3 style={{margin: '0px 0px 0px 10px'}}>AtkinsonHall 4th floor (Purified Water, 'ECO' Test Kit)</h3>
                <div style={{margin: '0px 0px 0px 10px'}}> Sunday, February 10, 2019 6: 12: 54 PM GMT + 09: 00</div>
                <pre>     <b><font color='#ff0000'>━━━</font> 한계선</b></pre>
                <table>
                    <th id="chartdiv9" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv10" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv11" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv12" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv13" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv14" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv15" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv16" style={{height: 'calc(90% - 30px)'}}></th>
                </table>
                <h3 style={{margin: '0px 0px 0px 10px'}}>AtkinsonHall 4th floor (Tap Water, 'Water Works' Test Kit)</h3>
                <div style={{margin: '0px 0px 0px 10px'}}> Sunday, February 10, 2019 6: 12: 54 PM GMT + 09: 00</div>
                <pre>     <b><font color='#ff0000'>━━━</font> 한계선</b></pre>
                <table>
                    <th id="chartdiv17" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv18" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv19" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv20" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv21" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv22" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv23" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv24" style={{height: 'calc(90% - 30px)'}}></th>
                </table>
                <h3>AtkinsonHall 4th floor (Purified Water, 'Water Works' Test Kit)</h3>
                <div style={{margin: '0px 0px 0px 10px'}}> Sunday, February 10, 2019 6: 12: 54 PM GMT + 09: 00</div>
                <pre>     <b><font color='#ff0000'>━━━</font> 한계선</b></pre>
                <table>
                    <th id="chartdiv25" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv26" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv27" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv28" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv29" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv30" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv31" style={{height: 'calc(90% - 30px)'}}></th>
                    <th id="chartdiv32" style={{height: 'calc(90% - 30px)'}}></th>
                </table>
            </Paper>
        );
    }
}