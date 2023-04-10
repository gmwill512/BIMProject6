import { useState, useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const ErrorLineChart = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    // Set theme
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.logo.disabled = true;

    // Add data
    chart.data = [
      { xValue: 0, yValue1: 2678.5, yValue2: 2698.6, SD: 199.04 },
      { xValue: 3, yValue1: 2674.4, yValue2: 2669.8, SD: 227.32 },
      { xValue: 6, yValue1: 2651, yValue2:  2639.7, SD: 222.14},
      { xValue: 9, yValue1: 2638.8, yValue2: 2633.5, SD: 227.25},
      { xValue: 12, yValue1: 2648.4, yValue2:  2617.0, SD: 199.04},
      { xValue: 18, yValue1: 2649.2, yValue2: 2604.4, SD: 199.04 },
      { xValue: 24, yValue1: 2651.6, yValue2: 2607.0, SD: 199.04},

    ]

    ;

    // Create axes
    const xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.renderer.minGridDistance = 50;

    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());

    const series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueX = 'xValue';
    series1.dataFields.valueY = 'yValue1';
    series1.name = 'Series 1';
    
    // Create error bullets for series 1
    const errorBullet1 = series1.bullets.push(new am4charts.ErrorBullet());
    errorBullet1.tooltipText = 'Error: {errorValue}';
    
    // Create circle bullets for series 1
    const circleBullet1 = series1.bullets.push(new am4charts.CircleBullet());
    circleBullet1.tooltipText = '{name}: [bold]{valueY}[/]';
    circleBullet1.circle.fill = am4core.color('green');
    circleBullet1.circle.strokeWidth = 2;
    circleBullet1.circle.radius = 4;
    circleBullet1.stroke = am4core.color('green');

    const series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueX = 'xValue';
    series2.dataFields.valueY = 'yValue2';
    series2.name = 'Series 2';

    // Create error bullets for series 2
    const errorBullet2 = series2.bullets.push(new am4charts.ErrorBullet());
    errorBullet2.tooltipText = 'Error: {errorValue}';
    
    // Create circle bullets for series 2
    const circleBullet2 = series2.bullets.push(new am4charts.CircleBullet());
    circleBullet2.tooltipText = '{name}: [bold]{valueY}[/]';
    circleBullet2.circle.fill = am4core.color('blue');
    circleBullet2.circle.strokeWidth = 2;
    circleBullet2.circle.radius = 4;
    circleBullet2.stroke = am4core.color('blue');

    // Set error values for series 1
    series1.dataItems.each((dataItem) => {
      dataItem.errorValueY = 5;
    });

    // Set error values for series 2
    series2.dataItems.each((dataItem) => {
      dataItem.errorValueY = 3;
    });

    // Set chart instance to the state
    setChart(chart);

    // Clean up the chart when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: '1500px', height: '500px' }} />;
};

export default ErrorLineChart;
