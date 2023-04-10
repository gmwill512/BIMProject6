import { useState, useEffect,useContext } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Store } from './Context';

const ErrorLineChart = () => {
  const { Button1, setButton1, Button2, setButton2} = useContext(Store)
 const [chart, setChart] = useState()
  useEffect(() => {
    // Set theme
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.logo.disabled = true;

 
    chart.data = [
      { xValue: 0, yValue1: 2678.5, yValue2: 2698.6, y1ValueSD: 199.04, y2ValueSD: 196.68, zero: 0 },
      { xValue: 3, yValue1: 2674.4, yValue2: 2669.8, y1ValueSD: 227.32, y2ValueSD: 223.97, zero: 0},
      { xValue: 6, yValue1: 2651, yValue2:  2639.7, y1ValueSD: 222.14, y2ValueSD: 206.37, zero: 0},
      { xValue: 9, yValue1: 2638.8, yValue2: 2633.5, y1ValueSD: 227.25, y2ValueSD: 209.99, zero: 0},
      { xValue: 12, yValue1: 2648.4, yValue2:  2617.0, y1ValueSD: 202.37, y2ValueSD: 212.53, zero: 0},
      { xValue: 18, yValue1: 2649.2, yValue2: 2604.4, y1ValueSD: 204.25, y2ValueSD: 223.04, zero: 0},
      { xValue: 24, yValue1: 2651.6, yValue2: 2607.0, y1ValueSD: 196.68, y2ValueSD: 202.97, zero: 0},
    ]

    // Create axes
    const xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.renderer.minGridDistance = 50;
    xAxis.min = -1;
    xAxis.max = 26;
    xAxis.title.text = 'Time';
    xAxis.renderer.grid.template.opacity = .2;
    xAxis.renderer.labels.template.adapter.add("text", function (text) {
      if (text === "0") {
        return "BL";
      } else if (text === "1") {
        return "W4";
      } else if (text === "3") {
        return "W12";
      } else if (text === "6") {
        return "M6";
      } else if (text === "12") {
        return "M12";
      } else if (text === "18") {
        return "M18";
      } else if (text === "24") {
        return "M24";
      }
      return "|";
    });

    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 2550;
    yAxis.max = 2800;

    const series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueX = Button1 ? 'xValue' : "zero";
    series1.dataFields.valueY = Button1 ? 'yValue1' : "zero";
    series1.name = 'Topical Bimatoprost';
    series1.stroke = am4core.color("black")
    
    // Create error bullets for series 1
    const errorBullet1 = series1.bullets.push(new am4charts.ErrorBullet());
    errorBullet1.tooltipText = '{name}: {valueY} \nError: {y1ValueSD}';
    errorBullet1.width = am4core.percent(100);
    errorBullet1.height = am4core.percent(100);
    errorBullet1.fillOpacity = 0.5;
    errorBullet1.strokeOpacity = 0.5;
    errorBullet1.strokeWidth = 2;
    errorBullet1.adapter.add('pixelHeight', (pixelHeight, target) => {
      return target.dataItem.dataContext.y1ValueSD / 5; // scale the height based on SD value
    });
    errorBullet1.adapter.add('pixelWidth', (pixelWidth, target) => {
      return target.dataItem.dataContext.y1ValueSD / 5; // scale the width based on SD value
    });

    // Create circle bullets for series 1
    const circleBullet1 = series1.bullets.push(new am4charts.CircleBullet());
    circleBullet1.tooltipText = '{name}: {valueY} \nError: {y1ValueSD}';
    circleBullet1.circle.fill = am4core.color('black');
    circleBullet1.circle.strokeWidth = 2;
    circleBullet1.circle.radius = 4;
    circleBullet1.stroke = am4core.color('black');

    const series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueX = Button2 ? 'xValue' : "zero";
    series2.dataFields.valueY = Button2 ? 'yValue2' : "zero";
    series2.name = 'Bimatoprost Implant';

    // Create error bullets for series 2
    const errorBullet2 = series2.bullets.push(new am4charts.ErrorBullet());
    errorBullet2.tooltipText = '{name}: {valueY} \nError: {y2ValueSD}';
    errorBullet2.width = am4core.percent(100);
    errorBullet2.height = am4core.percent(100);
    errorBullet2.fillOpacity = 0.5;
    errorBullet2.strokeOpacity = 0.5;
    errorBullet2.strokeWidth = 2;
    errorBullet2.adapter.add('pixelHeight', (pixelHeight, target) => {
      return target.dataItem.dataContext.y2ValueSD / 5; // scale the height based on SD value
    });
    errorBullet2.adapter.add('pixelWidth', (pixelWidth, target) => {
      return target.dataItem.dataContext.y2ValueSD / 5; // scale the width based on SD value
    });
    
    // Create circle bullets for series 2
    const circleBullet2 = series2.bullets.push(new am4charts.CircleBullet());
    circleBullet2.tooltipText = '{name}: {valueY} \nError: {y2ValueSD}';
    circleBullet2.circle.fill = am4core.color('blue');
    circleBullet2.circle.strokeWidth = 2;
    circleBullet2.circle.radius = 4;
    circleBullet2.stroke = am4core.color('blue');

    // Set error values for series 1
    series1.dataItems.each((dataItem) => {
      dataItem.errorValueY = dataItem.dataContext.y1ValueSD
    });
  

  // Set error values for series 2
  series2.dataItems.each((dataItem) => {
    dataItem.errorValueY = dataItem.dataContext.y2ValueSD;
  });

 // Create legend
// chart.legend = new am4charts.Legend();
// chart.legend.position = 'right';
// chart.legend.labels.template.marker = new am4core.Circle();
// chart.legend.labels.template.marker.strokeWidth = 2;
// chart.legend.labels.template.marker.radius = 5;

  
  // Set chart instance to the state
  setChart(chart);
  
  // Clean up the chart when the component unmounts
  return () => {
    chart.dispose();
  };

}, [Button1 ,Button2]);

return <div id="chartdiv" style={{ width: '1500px', height: '500px' }} />;
};

export default ErrorLineChart;
