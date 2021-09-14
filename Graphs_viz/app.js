// select the user input field
// var idSelect = d3.select("#selDataset");

// // select the demographic info div's ul list group
// var demographicsTable = d3.select("#sample-metadata");

// // select the bar chart div
// var barChart = d3.select("#bar");

// // select the bubble chart div
// var bubbleChart = d3.select("bubble");

// // select the gauge chart div
// var gaugeChart = d3.select("gauge");
// var data = 0;
// // create initiate function to initially populate dropdown menu with IDs and draw charts by default (using the first ID)
function init() 
{
    // // reset any previous data
    // resetData();

    // // read in samples from JSON file
    
    // d3.json("data/samples.json", function (d) {
    //     data = d
    //   //console.log(data);

    //     // ----------------------------------
       
    //     //  use a forEach to loop over each name in the array data.names to populate dropdowns with IDs
    //     data["names"].forEach((name => {
    //         var option = idSelect.append("option");
    //         option.text(name);
    //     })); // close forEach

    //     // get the first ID from the list for initial charts as a default
    //     var initId = idSelect.property("value")

    //     // plot charts with initial ID
    //     plotCharts(initId);
    // }); 
    
    }; // close .then()

 // close init() function

// create a function to reset divs in preparation for new data
function resetData() {

    // ----------------------------------

    chart.html("");
    race.html("");
    race.html("");

}; // close resetData()

// create a function to read JSON and plot charts
function plotCharts(id) {

    // // read in the JSON data
    // d3.json("data/samples.json", function (data) {

    //     // ----------------------------------

    //     // filter the metadata for the ID chosen
    //     var individualMetadata = data.metadata.filter(participant => participant.id == id)[0];

    //     // get the wash frequency for gauge chart later
    //     var wfreq = individualMetadata.wfreq;

    //     // Iterate through each key and value in the metadata
    //     Object.entries(individualMetadata).forEach(([key, value]) => {

    //         var newList = demographicsTable.append("ul");
    //         newList.attr("class", "list-group list-group-flush");

    //         var listItem = newList.append("li");

    //         // define class attributes styling
    //         listItem.attr("class", "list-group-item p-1 demo-text bg-transparent");

    //         // add the key value pair from the metadata to the demographics list
    //         listItem.text(`${key}: ${value}`);

    //     }); // close forEach

        // --------------------------------------------------

        // // filter the samples for the ID chosen
        // var individualSample = data.samples.filter(sample => sample.id == id)[0];

        // // create empty arrays to store sample data
        // var otuIds = [];
        // var otuLabels = [];
        // var sampleValues = [];

        // // Iterate through each key and value 
        // Object.entries(individualSample).forEach(([key, value]) => {

        //     switch (key) {
        //         case "otu_ids":
        //             otuIds.push(value);
        //             break;
        //         case "sample_values":
        //             sampleValues.push(value);
        //             break;
        //         case "otu_labels":
        //             otuLabels.push(value);
        //             break;
        //             // case
        //         default:
        //             break;
        //     } // close switch statement

//         }); // close forEach

//         // slice and reverse the arrays toobtain the top 10 values, labels and IDs
//         var topOtuIds = otuIds[0].slice(0, 10).reverse();
//         var topOtuLabels = otuLabels[0].slice(0, 10).reverse();
//         var topSampleValues = sampleValues[0].slice(0, 10).reverse();

//         // map function for IDs with "OTU" 
//         var topOtuIdsFormatted = topOtuIds.map(otuID => "OTU " + otuID);

//         // ----------------------------------

//         // create a trace
//         var traceBar = {
//             x: topSampleValues,
//             y: topOtuIdsFormatted,
//             text: topOtuLabels,
//             type: 'bar',
//             orientation: 'h',
//             marker: {
//                 color: 'rgb(29,145,192)'
//             }
//         };

//         // create trace
//         var dataBar = [traceBar];

//         // define the plot layout
//         var layoutBar = {
//             height: 500,
//             width: 600,
//             font: {
//                 family: 'Quicksand'
//             },
//             hoverlabel: {
//                 font: {
//                     family: 'Quicksand'
//                 }
//             },            
//             title: {
//                 text: `<b>Top 10 Bacteria Cultures Found </b>`,
//                 font: {
//                     size: 18,
//                     color: 'rgb(34,94,168)'
//                 }
//             },
//             xaxis: {
//                 title: "<b>Sample Values<b>",
//                 color: 'rgb(34,94,168)'
//             },
//             yaxis: {
//                 tickfont: { size: 14 }
//             }
//         }
//         // plot the bar chart 
//         Plotly.newPlot("bar", dataBar, layoutBar);

//         //-----------------------------------
//         // Plot Bubble Chart
//         //create trace
//         var traceBub = {
//             x: otuIds[0],
//             y: sampleValues[0],
//             text: otuLabels[0],
//             mode: 'markers',
//             marker: {
//                 size: sampleValues[0],
//                 color: otuIds[0],
//                 colorscale: 'Portland'
//             }
//         };

//         // create the data array 
//         var dataBub = [traceBub];

//         // define the plot layout
//         var layoutBub = {
//             font: {
//                 family: 'Quicksand'
//             },
//             hoverlabel: {
//                 font: {
//                     family: 'Quicksand'
//                 }
//             },
//             title: {
//                 text: `<b>Belly Button Bubble Chart</b>`,
//                 font: {
//                     size: 18,
//                     color: 'rgb(34,94,168)'
//                 }
//             },
//             xaxis: {
//                 title: "<b>OTU ID</b>",
//                 color: 'rgb(34,94,168)'
//             },
//             yaxis: {
//                 title: "<b>Sample Values</b>",
//                 color: 'rgb(34,94,168)'
//             },
//             showlegend: false,
//         };

//         // plot the bubble chat 
//         Plotly.newPlot('bubble', dataBub, layoutBub);
       
//         // if wfreq has a null value, set wfreq to zero 
//         if (wfreq == null) {
//             wfreq = 0;
//         }

//         // create an indicator trace 
//         var traceGauge = {
//             domain: { x: [0, 1], y: [0, 1] },
//             value: wfreq,
//             type: "indicator",
//             mode: "gauge",
//             gauge: {
//                 axis: {
//                     range: [0, 9],
//                     tickmode: 'linear',
//                     tickfont: {
//                         size: 15
//                     }
//                 },
//                 bar: { color: 'rgba(8,29,88,0)' }, // to accommodate a pointer
//                 steps: [
//                     { range: [0, 1], color: 'rgb(255,255,217)' },
//                     { range: [1, 2], color: 'rgb(237,248,217)' },
//                     { range: [2, 3], color: 'rgb(199,233,180)' },
//                     { range: [3, 4], color: 'rgb(127,205,187)' },
//                     { range: [4, 5], color: 'rgb(65,182,196)' },
//                     { range: [5, 6], color: 'rgb(29,145,192)' },
//                     { range: [6, 7], color: 'rgb(34,94,168)' },
//                     { range: [7, 8], color: 'rgb(37,52,148)' },
//                     { range: [8, 9], color: 'rgb(8,29,88)' }
//                 ]
//             }
//         };

//         // determine angle for each wfreq segment on the chart
//         var angle = (wfreq / 9) * 180;

//         // calculate end points for triangle pointer path
//         var degrees = 180 - angle,
//             radius = .8;
//         var radians = degrees * Math.PI / 180;
//         var x = radius * Math.cos(radians);
//         var y = radius * Math.sin(radians);

//         // define pathe to create needle shape 
//         // M aX aY L bX bY L cX cY Z
//         var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
//             cX = String(x),
//             cY = String(y),
//             pathEnd = ' Z';
//         var path = mainPath + cX + " " + cY + pathEnd;

//         gaugeColors = ['rgb(8,29,88)', 'rgb(37,52,148)', 'rgb(34,94,168)', 'rgb(29,145,192)', 'rgb(65,182,196)', 'rgb(127,205,187)', 'rgb(199,233,180)', 'rgb(237,248,217)', 'rgb(255,255,217)', 'white']

//         // create a trace to centre the needle 
//         var traceNeedleCenter = {
//             type: 'scatter',
//             showlegend: false,
//             x: [0],
//             y: [0],
//             marker: { size: 35, color: 'rgb(235,177,77)' },
//             name: wfreq,
//             hoverinfo: 'name'
//         };

//         // create a data array
//         var dataGauge = [traceGauge, traceNeedleCenter];

//         // define a layout for the chart
//         var layoutGauge = {

//             // draw the needle pointer shape using path defined above
//             shapes: [{
//                 type: 'path',
//                 path: path,
//                 fillcolor: 'rgb(235,177,77)',
//                 line: {
//                     color: 'rgb(235,177,77)'
//                 }
//             }],
//             font: {
//                 family: 'Quicksand'
//             },
//             hoverlabel: {
//                 font: {
//                     family: 'Quicksand',
//                     size: 16
//                 }
//             },
//             title: {
//                 text: `<b>Belly Button Washing Frequency</b>`,
//                 font: {
//                     size: 18,
//                     color: 'rgb(34,94,168)'
//                 },
//             },
//             height: 500,
//             width: 500,
//             xaxis: {
//                 zeroline: false,
//                 showticklabels: false,
//                 showgrid: false,
//                 range: [-1, 1],
//                 fixedrange: true // disable zoom
//             },
//             yaxis: {
//                 zeroline: false,
//                 showticklabels: false,
//                 showgrid: false,
//                 range: [-0.5, 1.5],
//                 fixedrange: true // disable zoom
//             }
//         };

//         // plot the gauge chart
//         Plotly.newPlot('gauge', dataGauge, layoutGauge);

//     }); // close .then function

// }; // close plotCharts() function

// // create function to be called with the ID as a parameter when change occures in the drop down menu
// function optionChanged(id) {

//     // reset the data
//     resetData();

    // plot the id charts
    plotCharts(id);


} // close optionChanged function

// call the init() function for default data
init();

